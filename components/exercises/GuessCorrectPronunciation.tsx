import React, { ReactElement, useState } from "react";
import AudioButton from "../AudioButton";
import { sample, without } from "lodash";
import { Button } from "@material-ui/core";
import { ExerciseProps } from "../../models/types";

export interface GuessCorrectPronunciationProps extends ExerciseProps {
  requiredCorrectAnswersInARow: number;
  wordChoices: string[];
  correctAnswers: (1 | 2)[];
  instructions: ReactElement;
}

const GuessCorrectPronunciation: React.FunctionComponent<GuessCorrectPronunciationProps> = (
  props: GuessCorrectPronunciationProps
) => {
  const {
    onMarkAsCompleted,
    requiredCorrectAnswersInARow,
    wordChoices,
    correctAnswers,
    instructions
  } = props;

  const [correctAnswersInRow, setCorrectAnswersInRow] = useState(0);
  const randomWord = sample(wordChoices);
  const [currentWord, setCurrentWord] = useState(randomWord);

  const makeGuess = (guess: 1 | 2) => {
    const currentWordIndex = wordChoices.indexOf(currentWord || '');
    if (correctAnswers[currentWordIndex] === guess) {
      const newCorrectAnswersInRow = correctAnswersInRow + 1;
      setCorrectAnswersInRow(newCorrectAnswersInRow);
      if (newCorrectAnswersInRow === requiredCorrectAnswersInARow) {
        onMarkAsCompleted();
      }
    } else {
      setCorrectAnswersInRow(0);
    }
    const wordChoicesWithoutCurrentWord = without(wordChoices, currentWord);
    setCurrentWord(sample(wordChoicesWithoutCurrentWord));
  };

  return (
    <>
      <h5>Instructions &amp; passing criteria</h5>

      {instructions}
      <p className="w3-padding-bottom">
        Get {requiredCorrectAnswersInARow} correct answers in a row to pass.
      </p>

      <p>
        <strong>
          What is the correct pronunciation of the following word?
        </strong>
      </p>
      <div className="centered">
        <p>{currentWord}</p>
        <p>
          <AudioButton
            className="w3-margin-right"
            fileName={`g-and-k/${currentWord}-1.mp3`}
            label={"1"}
            small
          />
          <AudioButton
            fileName={`g-and-k/${currentWord}-2.mp3`}
            label={"2"}
            small
          />
        </p>
        <p>
          <Button
            className="w3-margin-right"
            variant="contained"
            color="primary"
            onClick={() => makeGuess(1)}
          >
            Guess
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => makeGuess(2)}
          >
            Guess
          </Button>
        </p>
      </div>

      <p>
        Correct answers in a row:{" "}
        <strong className="w3-large">{correctAnswersInRow}</strong>/
        {requiredCorrectAnswersInARow}
      </p>
    </>
  );
};

export default GuessCorrectPronunciation;
