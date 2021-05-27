import React from "react";
import Exercise from "../../../components/Exercise";
import GuessCorrectPronunciation from "../../../components/exercises/GuessCorrectPronunciation";
import { ExerciseProps } from "../../types";

const guessCorrectPronunciationGInstructions = (
  <p>
    You will be given the spelling of a word containing the letter G at the
    start, middle or end, and two possible pronunciations. Your task is to
    identify the correct pronunciation based on the rules you have learned in
    this lesson.
  </p>
);

const guessCorrectPronunciationKInstructions = (
  <p>Same as the previous exercise, but with the letter K instead of G.</p>
);

const guessCorrectPronunciationGWordChoices = [
  "gapa",
  "ge",
  "glad",
  "gilla",
  "god",
  "grym",
  "gåta",
  "göra",
  "morgon",
  "någon",
  "arg",
  "helg",
  "torg"
];
const guessCorrectPronunciationGAnswers = [
  1,
  2,
  1,
  2,
  1,
  1,
  1,
  2,
  1,
  1,
  2,
  2,
  2
];

const guessCorrectPronunciationKWordChoices = [
  "kamera",
  "kela",
  "kille",
  "koala",
  "kyla",
  "kär",
  "köpa",
  "stryka",
  "slicka",
  "lika",
  "ask",
  "väska",
  "risk"
];
const guessCorrectPronunciationKAnswers = [
  1,
  2,
  1,
  1,
  2,
  2,
  2,
  1,
  1,
  1,
  1,
  1,
  1
];

const exercises = [
  <Exercise
    key={1}
    id={"guess-correct-pronunciation-g"}
    numberInLesson={1}
    title={"Guess correct pronunciation - G"}
    ExerciseComponent={GuessCorrectPronunciation}
    exerciseComponentProps={{
      instructions: guessCorrectPronunciationGInstructions,
      wordChoices: guessCorrectPronunciationGWordChoices,
      correctAnswers: guessCorrectPronunciationGAnswers,
      requiredCorrectAnswersInARow: 10
    }}
  />,
  <Exercise
    key={2}
    id={"guess-correct-pronunciation-k"}
    numberInLesson={2}
    title={"Guess correct pronunciation - K"}
    ExerciseComponent={GuessCorrectPronunciation}
    exerciseComponentProps={{
      instructions: guessCorrectPronunciationKInstructions,
      wordChoices: guessCorrectPronunciationKWordChoices,
      correctAnswers: guessCorrectPronunciationKAnswers,
      requiredCorrectAnswersInARow: 10
    }}
  />
];

export default exercises;
