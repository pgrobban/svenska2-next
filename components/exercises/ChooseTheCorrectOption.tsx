import { FormControl, Select, MenuItem, Button } from "@material-ui/core";
import { cloneDeep, isEmpty, shuffle } from "lodash";
import React, { ReactElement, useState } from "react";
import {
  generateRandomWords,
  getBorderColorByMark,
  getEmptyStringsArray,
  getNullArray
} from "../../helpers/utils";
import { CorrectIncorrectMark, ExerciseProps } from "../types";

const defaultInstructions = (
  <>
    <p>
      Complete the sentences by selecting a word from each box.
      <br />
      When you're done, press the "Check Answers" button.
    </p>
    <p>You need all answers correct to mark the exercise as passed.</p>
  </>
);

interface ChooseTheCorrectOptionProps extends ExerciseProps {
  sentences: string[]; // of the form A__B where __ will mark where to split the string.
  choices: string[][]; // choice [x][0] will be correct
  instructions?: ReactElement;
}

const ChooseTheCorrectOption: React.FC<ChooseTheCorrectOptionProps> = (
  props: ChooseTheCorrectOptionProps
) => {
  const { onMarkAsCompleted, sentences, choices, instructions } = props;

  const randomSentences = generateRandomWords(sentences, sentences.length);
  const [sentencesInRandomOrder, setSentencesInRandomOrder] = useState(
    randomSentences
  );

  const getChoicesInRandomOrder = (randomSentences: string[]) => {
    const choicesInRandomOrderInit = [] as string[][];
    randomSentences.forEach((randomSentence) => {
      const originalSentenceIndex = sentences.indexOf(randomSentence);
      choicesInRandomOrderInit.push(
        shuffle(cloneDeep(choices[originalSentenceIndex]))
      );
    });
    return choicesInRandomOrderInit;
  };

  const [choicesInRandomOrder, setChoicesInRandomOrder] = useState<string[][]>(
    getChoicesInRandomOrder(sentencesInRandomOrder)
  );

  const [answerMarks, setAnswerMarks] = useState<
    CorrectIncorrectMark[] | null[]
  >(getNullArray(sentences.length));

  const [answers, setAnswers] = useState(
    getEmptyStringsArray(sentences.length)
  );
  const [answersChecked, setAnswersChecked] = useState(false);

  const updateAnswers = (index: number, newValue: string) => {
    answers.splice(index, 1, newValue);
    setAnswers([...answers]);
  };

  const checkAnswers = () => {
    let correctAnswers = 0;
    const marks = [] as CorrectIncorrectMark[];
    sentencesInRandomOrder.forEach(
      (sentenceInRandomOrder, sentenceInRandomOrderIndex) => {
        const originalSentenceIndex = sentences.indexOf(sentenceInRandomOrder);
        if (
          answers[sentenceInRandomOrderIndex] ===
          choices[originalSentenceIndex][0]
        ) {
          marks.push("correct");
          correctAnswers++;
        } else {
          marks.push("incorrect");
        }
      }
    );
    if (correctAnswers === sentences.length) {
      onMarkAsCompleted();
    }

    setAnswersChecked(true);
    setAnswerMarks(marks);
  };

  const onReset = () => {
    const randomSentences = generateRandomWords(sentences, sentences.length);
    setSentencesInRandomOrder(randomSentences);
    setAnswers(getEmptyStringsArray(sentences.length));
    setAnswersChecked(false);
    setAnswerMarks(getNullArray(sentences.length));
    setChoicesInRandomOrder(getChoicesInRandomOrder(randomSentences));
  };

  if (isEmpty(choicesInRandomOrder)) {
    return null;
  }

  return (
    <>
      <h5>Instructions &amp; passing criteria</h5>
      {instructions || defaultInstructions}

      <div className="w3-margin-bottom">
        {sentencesInRandomOrder.map((sentence, index) => {
          const splitSentence = sentence.split("__");
          return (
            <div key={sentence}>
              {splitSentence[0]}
              <FormControl className="p-input">
                <Select
                  required
                  placeholder="(number of children)"
                  value={answers[index]}
                  type="number"
                  onChange={(e) =>
                    updateAnswers(index, e.target.value as string)
                  }
                  style={
                    answerMarks[index]
                      ? {
                          borderStyle: "solid",
                          borderWidth: 1,
                          borderColor: getBorderColorByMark(answerMarks[index])
                        }
                      : {}
                  }
                >
                  <MenuItem disabled value={""}>
                    <em>Select an answer</em>
                  </MenuItem>
                  {choicesInRandomOrder[index].map((choice) => (
                    <MenuItem key={choice} value={choice}>
                      {choice}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>{" "}
              {splitSentence[1]}
            </div>
          );
        })}
      </div>

      <div className="centered">
        <Button
          className="theme-swe w3-margin-right-big"
          disabled={answersChecked || answers.some((answer) => !answer)}
          onClick={(e) => {
            e.preventDefault();
            checkAnswers();
          }}
          type="submit"
        >
          Submit
        </Button>
        <Button
          disabled={!answersChecked}
          variant="contained"
          color="secondary"
          onClick={() => onReset()}
        >
          Reset
        </Button>
      </div>
    </>
  );
};

export default ChooseTheCorrectOption;
