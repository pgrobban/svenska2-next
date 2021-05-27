import React, { useState, ReactElement } from "react";
import AudioButton from "../AudioButton";
import { sample, map } from "lodash";
import { Button } from "@material-ui/core";
import { ExerciseProps } from "../../models/types";

export interface WhichLetterProps extends ExerciseProps {
  requiredCorrectAnswersInARow: number;
  letterChoices: string[];
  instructions: ReactElement;
}

const WhichLetter: React.FunctionComponent<WhichLetterProps> = (
  props: WhichLetterProps
) => {
  const {
    requiredCorrectAnswersInARow,
    letterChoices,
    instructions,
    onMarkAsCompleted
  } = props;

  const [correctAnswersInARow, setCorrectAnswersInARow] = useState(0);
  const randomLetter = sample(letterChoices);
  const [currentLetter, setCurrentLetter] = useState(randomLetter as string);

  const evaluateGuess = (guessedLetter: string) => {
    const guessedCorrectly = currentLetter === guessedLetter;
    if (guessedCorrectly) {
      const newNumberOfCorrectAnswersInARow = correctAnswersInARow + 1;
      setCorrectAnswersInARow(newNumberOfCorrectAnswersInARow);
      if (newNumberOfCorrectAnswersInARow === requiredCorrectAnswersInARow) {
        onMarkAsCompleted();
      }
    } else {
      setCorrectAnswersInARow(0);
    }
    setCurrentLetter(randomLetter as string);
  };

  return (
    <>
      <h5>Instructions &amp; passing criteria</h5>

      {instructions}
      <p>
        Get {requiredCorrectAnswersInARow} correct answers in a row to pass.
      </p>

      <div className="centered w3-padding">
        Which letter is this:{" "}
        <AudioButton fileName={`the-alphabet/${currentLetter}.mp3`} />
      </div>
      <div className="centered">
        {map(letterChoices, (letter: string) => (
          <div className="w3-show-inline-block w3-padding-small" key={letter}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => evaluateGuess(letter)}
            >
              {letter}
            </Button>
          </div>
        ))}
      </div>

      <p>
        Correct answers in a row:{" "}
        <strong className="w3-large">{correctAnswersInARow}</strong>/
        {requiredCorrectAnswersInARow}
      </p>
    </>
  );
};

WhichLetter.defaultProps = {
  requiredCorrectAnswersInARow: 10
};

export default WhichLetter;
