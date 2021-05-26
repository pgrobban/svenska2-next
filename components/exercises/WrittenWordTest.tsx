import React, { ReactElement, useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableRow
} from "@material-ui/core";
import { CorrectIncorrectMark, ExerciseProps } from "../types";
import {
  generateRandomWords,
  getBorderColorByMark,
  getEmptyStringsArray,
  getNullArray,
  sortByCaseInsensitiveSwedishLocale
} from "../../helpers/utils";

export const swedishToEnglishDefaultInstructions = (
  <>
    <p>
      Below you will see a list of words in Swedish from the text in random
      order. What do the words mean? For each word, select the corresponding
      meaning in English from the dropdowns to the right.
      <br />
      Press the "Check answers" button below the table when you're done.
    </p>
  </>
);

export const englishToSwedishDefaultInstructions = (
  <>
    <p>
      Now we go the other way from the last exercise, from English to Swedish.
      <br />
      Select the correct translations in the dropdown menus.
      <br />
      Press the "Check answers" button below the table when you're done.
    </p>
  </>
);

interface WrittenWordTestProps extends ExerciseProps {
  words: string[];
  meanings: string[];
  numberOfWordsToSample: number;
  requiredCorrectAnswers: number;
  instructions: ReactElement;
}

const WrittenWordTest: React.FunctionComponent<WrittenWordTestProps> = (
  props: WrittenWordTestProps
) => {
  const {
    words,
    meanings,
    numberOfWordsToSample,
    requiredCorrectAnswers,
    onMarkAsCompleted,
    instructions
  } = props;
  const randomWords = generateRandomWords(words, numberOfWordsToSample);
  const sortedMeanings = sortByCaseInsensitiveSwedishLocale(meanings);

  const [sampledWords, setSampledWords] = useState(randomWords);
  const [answers, setAnswers] = useState<string[]>(
    getEmptyStringsArray(numberOfWordsToSample)
  );

  const [answerMarks, setAnswerMarks] = useState<
    CorrectIncorrectMark[] | null[]
  >(getNullArray(numberOfWordsToSample));
  const [answersChecked, setAnswersChecked] = useState(false);

  const onSubmitGuesses = () => {
    const marks: CorrectIncorrectMark[] = [];
    let correctAnswers = 0;
    sampledWords.forEach((word, answerIndex) => {
      const meaningIndex = words.indexOf(word);
      const isCorrectAnswer = answers[answerIndex] === meanings[meaningIndex];
      if (isCorrectAnswer) {
        correctAnswers++;
        marks.push("correct");
      } else {
        marks.push("incorrect");
      }
    });
    setAnswersChecked(true);
    setAnswerMarks(marks);

    if (correctAnswers >= requiredCorrectAnswers) {
      onMarkAsCompleted();
    }
  };

  const onReset = () => {
    const randomWords = generateRandomWords(words, numberOfWordsToSample);
    setSampledWords(randomWords);
    setAnswers(getEmptyStringsArray(numberOfWordsToSample));
    setAnswerMarks(getNullArray(numberOfWordsToSample));
    setAnswersChecked(false);
  };

  const updateAnswers = (index: number, newValue: string) => {
    answers.splice(index, 1, newValue);
    setAnswers([...answers]);
  };

  return (
    <>
      <h5>Instructions &amp; passing criteria</h5>
      {instructions}
      <p>
        You need {requiredCorrectAnswers} correct answers to mark the exercise
        as completed.
      </p>

      <form onSubmit={(e) => e.preventDefault()}>
        <Table>
          <TableBody>
            {sampledWords.map((word, index) => (
              <TableRow key={word}>
                <TableCell>{word}</TableCell>
                <TableCell>
                  <FormControl style={{ minWidth: 200 }} required>
                    <InputLabel id={`written-word-test-${index}-label`}>
                      Select an answer
                    </InputLabel>
                    <Select
                      disabled={answersChecked}
                      id={`written-word-test-${index}`}
                      labelId={`written-word-test-${index}-label`}
                      value={answers[index]}
                      onChange={(evt) =>
                        updateAnswers(index, evt.target.value as string)
                      }
                      style={
                        answerMarks[index]
                          ? {
                              borderStyle: "solid",
                              borderWidth: 1,
                              borderColor: getBorderColorByMark(
                                answerMarks[index]
                              )
                            }
                          : {}
                      }
                    >
                      <MenuItem disabled value={""}>
                        <em>Select an answer</em>
                      </MenuItem>
                      {sortedMeanings.map((meaning, index) => (
                        <MenuItem key={index} value={meaning}>
                          {meaning}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="centered">
          <Button
            variant="contained"
            color="primary"
            className="theme-swe w3-margin-right"
            onClick={() => onSubmitGuesses()}
            disabled={answersChecked}
            type="submit"
          >
            Check answers
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => onReset()}
            disabled={!answersChecked}
          >
            Reset
          </Button>
        </div>
      </form>
    </>
  );
};

export default WrittenWordTest;
