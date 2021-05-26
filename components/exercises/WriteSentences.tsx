import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import {
  getEmptyStringsArrayWithFirstValueSet,
  getNullArray,
  getBorderColorByMark,
  trimInputs
} from "../../helpers/utils";
import { CorrectIncorrectMark, ExerciseProps } from "../../models/types";

interface WriteSentencesProps extends ExerciseProps {
  sentences: string[];
  answers: string[];
}

const WriteSentences: React.FunctionComponent<WriteSentencesProps> = (
  props: WriteSentencesProps
) => {
  const { sentences, answers, onMarkAsCompleted } = props;
  const [inputs, setInputs] = useState(
    getEmptyStringsArrayWithFirstValueSet(sentences.length, answers[0])
  );

  const [answerMarks, setAnswerMarks] = useState<
    CorrectIncorrectMark[] | null[]
  >(getNullArray(sentences.length));
  const [answersChecked, setAnswersChecked] = useState(false);

  const updateInputs = (index: number, newValue: string) => {
    inputs.splice(index, 1, newValue);
    setInputs([...inputs]);
  };

  const onSubmitGuesses = () => {
    const trimmedInputs = trimInputs(inputs);

    const marks: CorrectIncorrectMark[] = [];
    trimmedInputs.forEach((input, index) => {
      marks.push(input === answers[index] ? "correct" : "incorrect");
    });
    setAnswerMarks(marks);
    setAnswersChecked(true);

    const allAnswersCorrect = marks.every((mark) => mark === "correct");
    if (allAnswersCorrect) {
      onMarkAsCompleted();
    }
  };

  const onReset = () => {
    setInputs(
      getEmptyStringsArrayWithFirstValueSet(sentences.length, answers[0])
    );
    setAnswerMarks(getNullArray(sentences.length));
    setAnswersChecked(false);
  };

  return (
    <>
      <h5>Instructions &amp; passing criteria</h5>

      <p>
        Translate the sentences below into Swedish. Pay attention to spelling,
        grammar forms, punctuation and capitalization.
      </p>
      <p>Get all answers correct to mark the exercise as completed.</p>

      <div className="w3-panel">
        {sentences.map((sentence, index) => (
          <>
            <p>{sentence}</p>
            <TextField
              className="w3-padding-small"
              value={inputs[index]}
              onChange={(evt) => updateInputs(index, evt.target.value)}
              disabled={answersChecked || index === 0}
              fullWidth
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
          </>
        ))}
      </div>

      <div className="centered">
        <Button
          variant="contained"
          color="primary"
          className="w3-margin-right"
          onClick={() => onSubmitGuesses()}
          disabled={answersChecked}
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
    </>
  );
};

export default WriteSentences;
