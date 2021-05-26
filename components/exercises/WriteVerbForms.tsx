import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import {
  getEmptyStringsArrayWithFirstValueSet,
  getNullArray,
  getBorderColorByMark,
  normalizeInputs
} from "../../helpers/utils";
import { CorrectIncorrectMark, ExerciseProps } from "../types";

interface WriteVerbFormsProps extends ExerciseProps {
  wordsInDictionaryFormWithMeaning: string[];
  wordsInPresentTense: string[];
}

const WriteVerbForms: React.FunctionComponent<WriteVerbFormsProps> = (
  props: WriteVerbFormsProps
) => {
  const {
    wordsInDictionaryFormWithMeaning,
    wordsInPresentTense,
    onMarkAsCompleted
  } = props;
  const [inputs, setInputs] = useState(
    getEmptyStringsArrayWithFirstValueSet(
      wordsInDictionaryFormWithMeaning.length,
      wordsInPresentTense[0]
    )
  );

  const [answerMarks, setAnswerMarks] = useState<
    CorrectIncorrectMark[] | null[]
  >(getNullArray(wordsInDictionaryFormWithMeaning.length));
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
        answer === wordsInPresentTense[index].toUpperCase()
          ? "correct"
          : "incorrect"
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
    setInputs(
      getEmptyStringsArrayWithFirstValueSet(
        wordsInDictionaryFormWithMeaning.length,
        wordsInPresentTense[0]
      )
    );
    setAnswerMarks(getNullArray(wordsInDictionaryFormWithMeaning.length));
    setAnswersChecked(false);
  };

  return (
    <>
      <p>
        For this exercise you will need the free app SAOL (Svenska Akademiens
        Ordlista).
      </p>
      <p>
        When you have installed it, simply search for the dictionary forms of
        words and look under the definitions to find the different forms, such
        as conjugations for verbs and singular and plural forms for nouns.
      </p>
      <p>
        Suppose we have the dictionary form of a verb like <i>leka</i> and I
        want to find out what it is in the present tense. In this case I search
        for <i>leka</i> in SAOL and look in the conjugations table at the entry
        for "presens" (= present tense).
      </p>

      <h5>Instructions &amp; passing criteria</h5>

      <p>
        Below you will find a list of verbs in their base forms. Write the verbs in the
        present tense in the corresponding input boxes. You need all correct
        answers to mark the exercise as passed.
      </p>

      <div className="w3-panel">
        {wordsInDictionaryFormWithMeaning.map(
          (wordInDictionaryFormWithMeaning, index) => (
            <>
              <div className="w3-half">{wordInDictionaryFormWithMeaning}</div>
              <div className="w3-half">
                <TextField
                  className="w3-padding-small"
                  value={inputs[index]}
                  onChange={(evt) => updateInputs(index, evt.target.value)}
                  disabled={answersChecked || index === 0}
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
            </>
          )
        )}
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

export default WriteVerbForms;
