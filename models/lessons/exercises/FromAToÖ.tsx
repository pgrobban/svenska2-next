import React from "react";
import Exercise from "../../../components/Exercise";
import { VOWELS, CONSONANTS } from "../../../helpers/utils";
import TypingTheAlphabet from "../../../components/exercises/TypingTheAlphabet";
import WhichLetter from "../../../components/exercises/WhichLetter";
import WriteWhatYouHear from "../../../components/exercises/WriteWhatYouHear";
import { ExerciseProps } from "../../types";

const whichLetterVowelInstructions = (
  <>
    <p>
      You will be given a sound recording of a vowel to listen to. Below it you
      will see three buttons with vowels written on them, but only one matches
      the vowel of the recording.
    </p>
    <p>
      Your task is to click on the button that matches the sound of the
      recording.
    </p>
  </>
);

const whichLetterConsonantInstructions = (
  <>
    <p>
      Same as the last exercise, except now you have to choose from consonants.
    </p>
  </>
);

const exercises = [
  <Exercise
    key={1}
    id={"typing-the-alphabet"}
    numberInLesson={1}
    title={"Typing the alphabet"}
    ExerciseComponent={TypingTheAlphabet}
  />,
  <Exercise
    key={2}
    id={"which-letter-vowels"}
    numberInLesson={2}
    title={"Which letter? - Vowels"}
    ExerciseComponent={WhichLetter}
    exerciseComponentProps={{
      requiredCorrectAnswersInARow: 10,
      letterChoices: VOWELS.split(""),
      instructions: whichLetterVowelInstructions
    }}
  />,
  <Exercise
    key={3}
    id={"which-letter-consonants"}
    numberInLesson={3}
    title={"Which letter? - Consonants"}
    ExerciseComponent={WhichLetter}
    exerciseComponentProps={{
      requiredCorrectAnswersInARow: 15,
      letterChoices: CONSONANTS.split(""),
      instructions: whichLetterConsonantInstructions
    }}
  />,
  <Exercise
    key={4}
    id={"write-what-you-hear-names"}
    numberInLesson={4}
    title={"Write what you hear"}
    ExerciseComponent={WriteWhatYouHear}
    exerciseComponentProps={{
      words: [
        "Gustav",
        "Henrik",
        "Åsa",
        "Thomas",
        "Robert",
        "Fredrik",
        "Peter",
        "Jenny",
        "Malin",
        "Kristina",
        "Ingmar",
        "Anders",
        "Göran",
        "Märta"
      ],
      numberOfWordsToSample: 8
    }}
  />
];

export default exercises;
