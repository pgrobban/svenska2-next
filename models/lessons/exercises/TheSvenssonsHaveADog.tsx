import React from "react";
import Exercise from "../../../components/Exercise";
import ChooseTheCorrectOption from "../../../components/exercises/ChooseTheCorrectOption";
import WriteSentences from "../../../components/exercises/WriteSentences";
import WrittenWordTest, {
  swedishToEnglishDefaultInstructions,
  englishToSwedishDefaultInstructions
} from "../../../components/exercises/WrittenWordTest";
import { ExerciseProps } from "../../types";

const exercises = [
  <Exercise
    key={1}
    id="written-word-test-the-svenssons-have-a-dog-1"
    numberInLesson={1}
    title="What do the words mean?"
    ExerciseComponent={WrittenWordTest}
    exerciseComponentProps={{
      words: [
        "hund",
        "den, det",
        "stor",
        "svår",
        "vän",
        "de",
        "snäll",
        "röd",
        "blå",
        "grön",
        "gul",
        "liten",
        "söt"
      ],
      meanings: [
        "dog",
        "it",
        "big",
        "difficult",
        "friend",
        "they",
        "friendly, kind",
        "red",
        "blue",
        "green",
        "yellow",
        "small",
        "cute, sweet"
      ],
      numberOfWordsToSample: 12,
      requiredCorrectAnswers: 10,
      instructions: swedishToEnglishDefaultInstructions
    }}
  />,
  <Exercise
    key={2}
    id="written-word-test-the-svenssons-have-a-dog-2"
    numberInLesson={2}
    title="How do you say it in Swedish?"
    ExerciseComponent={WrittenWordTest}
    exerciseComponentProps={{
      words: [
        "dog",
        "it",
        "big",
        "difficult",
        "friend",
        "they",
        "friendly, kind",
        "red",
        "blue",
        "green",
        "yellow",
        "small",
        "cute, sweet"
      ],
      meanings: [
        "hund",
        "den, det",
        "stor",
        "svår",
        "vän",
        "de",
        "snäll",
        "röd",
        "blå",
        "grön",
        "gul",
        "liten",
        "söt"
      ],
      numberOfWordsToSample: 12,
      requiredCorrectAnswers: 10,
      instructions: englishToSwedishDefaultInstructions
    }}
  />,
  <Exercise
    key={3}
    id="choose-correct-option-the-svenssons-have-a-dog"
    numberInLesson={3}
    title="Choose the correct option"
    ExerciseComponent={ChooseTheCorrectOption}
    exerciseComponentProps={{
      instructions: (
        <>
          <p>
            Complete the sentences by selecting a word from each box. If
            necessary, use the SAOL app to look up declensions.
          </p>
          <p>You need all answers correct to mark the exercise as completed.</p>
        </>
      ),
      sentences: [
        "Familjen Svensson har en __ hund.",
        "Albert har två __ hundar (dogs).",
        "Vi bor i ett __ hus (house).",
        "Saga är __.",
        "Saga har två vänner. De är __.",
        "George läser en __ bok (book).",
        "Hassan spelar ett __ spel.",
        "Japanska (Japanese) och kinesiska (Chinese) är __ språk (languages).",
        "Håkan kör en __ bil.",
        "De bor i ett __ hus.",
        "Ferrari tillverkar (manufactures) __ bilar (cars).",
        "De har en __ bil.",
        "De bor i ett __ hus.",
        "De har två __ barn."
      ],
      choices: [
        ["stor", "stort", "stora"],
        ["stora", "stor", "stort"],
        ["stort", "stor", "stora"],
        ["snäll", "snällt", "snälla"],
        ["snälla", "snäll", "snällt"],
        ["svår", "svårt", "svåra"],
        ["svårt", "svår", "svåra"],
        ["svåra", "svår", "svårt"],
        ["röd", "rött", "röda"],
        ["rött", "röd", "röda"],
        ["röda", "röd", "rött"],
        ["liten", "litet", "små"],
        ["litet", "liten", "små"],
        ["små", "liten", "litet"]
      ]
    }}
    saolRequired
  />,
  <Exercise
    key={4}
    id="write-sentences-the-svenssons-have-a-dog"
    numberInLesson={4}
    title="Write sentences"
    ExerciseComponent={WriteSentences}
    exerciseComponentProps={{
      sentences: [
        "Anna has a big dog.",
        "Albert has two big dogs (hundar).",
        "We live in a big house.",
        "Leonard is kind/friendly.",
        "Bearnice and Fredrik are kind/friendly.",
        "I have a small car.",
        "We have two small children.",
        "They have a blue car.",
        "We have two blue cars."
      ],
      answers: [
        "Anna har en stor hund.",
        "Albert har två stora hundar.",
        "Vi bor i ett stort hus. Det är rött.",
        "Leonard är snäll.",
        "Bearnice and Fredrik är snälla.",
        "Jag har en liten bil.",
        "Vi har två små barn.",
        "De har en blå bil.",
        "Vi har två blåa bilar."
      ]
    }}
  />
];

export default exercises;
