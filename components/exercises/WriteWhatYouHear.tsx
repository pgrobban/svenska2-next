import React, { useState } from "react";
import AudioButton from "../../components/AudioButton";
import { Button, TextField } from "@material-ui/core";
import {
  generateRandomWords,
  getEmptyStringsArray,
  getNullArray,
  getBorderColorByMark,
  normalizeInputs,
} from "../../helpers/utils";
import { CorrectIncorrectMark, ExerciseProps } from "../../models/types";

interface WriteWhatYouHearProps extends ExerciseProps {
  words: string[];
  numberOfWordsToSample: number;
}

const WriteWhatYouHear: React.FunctionComponent<WriteWhatYouHearProps> = (
  props: WriteWhatYouHearProps
) => {
  const { words, numberOfWordsToSample, onMarkAsCompleted } = props;
  const randomWords = generateRandomWords(words, numberOfWordsToSample);
  const [sampledWords, setSampledWords] = useState(randomWords);
  const [inputs, setInputs] = useState(getEmptyStringsArray(numberOfWordsToSample));
  const [answerMarks, setAnswerMarks] = useState<CorrectIncorrectMark[] | null[]>(getNullArray(numberOfWordsToSample));
  const [answersChecked, setAnswersChecked] = useState(false);

  const updateInputs = (index: number, newValue: string) => {
    inputs.splice(index, 1, newValue);
    setInputs([...inputs]);
  };

  const onSubmitGuesses = () => {
    const normalizedAnswers = normalizeInputs(inputs);

    const marks: CorrectIncorrectMark[] = [];
    normalizedAnswers.forEach((answer, index) => {
      marks.push(
        answer === sampledWords[index].toUpperCase() ? "correct" : "incorrect"
      );
    });
    setAnswerMarks(marks);
    setAnswersChecked(true);

    const allAnswersCorrect = marks.every((mark) => mark === "correct");
    if (allAnswersCorrect) {
      onMarkAsCompleted();
    }
  };

  const onReset = () => {
    const randomWords = generateRandomWords(words, numberOfWordsToSample);
    setSampledWords(randomWords);
    setInputs(getEmptyStringsArray(numberOfWordsToSample));
    setAnswerMarks(getNullArray(numberOfWordsToSample));
    setAnswersChecked(false);
  };

  return (
    <>
      <p>
        Imagine you are meeting someone for the first time at a party and you
        don't know their name. You ask for their name but didn't quite catch
        what they said, so you ask them to spell the name out for you.
      </p>

      <h5>Instructions &amp; passing criteria</h5>

      <p>
        You will be given {numberOfWordsToSample} random names in random order. Listen
        to the recordings and write the correct spelling of all the names in the
        respective text fields below.
        <br />
        You don't have to worry about letter casing.
        <br />
        Click the "Check answers" button when you are done.
      </p>
      <p>
        Correct answers will be marked with a green text field and incorrect
        answers with a red text field. Note that once you click the "Check
        answers" button, the text fields will be disabled. If you want to try
        again, you have to press the "Reset" button below to clear the form and
        generate {numberOfWordsToSample} new random names.
      </p>

      <div className="w3-margin-bottom" style={{ maxWidth: 300 }}>
        {sampledWords.map((word, index) => (
          <div
            key={index}
            className="w3-margin-bottom"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <AudioButton fileName={`${word}.mp3`} />
            <TextField
              className="w3-padding-small"
              value={inputs[index]}
              onChange={(evt) => updateInputs(index, evt.target.value)}
              disabled={answersChecked}
              style={
                answersChecked
                  ? {
                      borderStyle: "solid",
                      borderWidth: 1,
                      borderColor: getBorderColorByMark(answerMarks[index])
                    }
                  : {}
              }
            />
          </div>
        ))}
      </div>

      <div className="centered">
        <Button
          className="theme-swe w3-margin-right"
          onClick={() => onSubmitGuesses()}
          disabled={answersChecked}
        >
          Check answers
        </Button>
        <Button
          className="theme-swe"
          onClick={() => onReset()}
          disabled={!answersChecked}
        >
          Reset
        </Button>
      </div>
    </>
  );
};

export default WriteWhatYouHear;
