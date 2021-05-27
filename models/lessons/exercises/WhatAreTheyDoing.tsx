import React from "react";
import ChooseTheCorrectOption from "../../../components/exercises/ChooseTheCorrectOption";
import WrittenWordTest, {
  swedishToEnglishDefaultInstructions,
  englishToSwedishDefaultInstructions
} from "../../../components/exercises/WrittenWordTest";
import WriteVerbForms from "../../../components/exercises/WriteVerbForms";
import Exercise from "../../../components/Exercise";
import { ExerciseProps } from "../../types";

const exercises = [
  <Exercise
    key={1}
    id="written-word-test-what-are-they-doing-1"
    numberInLesson={1}
    title="What do the words mean?"
    ExerciseComponent={WrittenWordTest}
    exerciseComponentProps={{
      words: [
        "leker",
        "skriver",
        "simmar",
        "sover",
        "en",
        "tidning",
        "kör",
        "bil",
        "åker",
        "tåg",
        "äter",
        "dricker",
        "spelar",
        "datorspel",
        "tittar",
        "på",
        "tränar"
      ],
      meanings: [
        "(child's) play",
        "write",
        "swim",
        "sleep",
        "one",
        "newspaper",
        "drive",
        "car",
        "ride/travel (with a vehicle)",
        "(a) train",
        "eat",
        "drink",
        "play (games)",
        "computer game",
        "watch",
        "on/at",
        "exercise"
      ],
      numberOfWordsToSample: 14,
      requiredCorrectAnswers: 12,
      instructions: swedishToEnglishDefaultInstructions
    }}
  />,
  <Exercise
    key={2}
    id="written-word-test-what-are-they-doing-2"
    numberInLesson={2}
    title="How do you say it in Swedish?"
    ExerciseComponent={WrittenWordTest}
    exerciseComponentProps={{
      words: [
        "(child's) play",
        "write",
        "one",
        "newspaper",
        "drive",
        "car",
        "ride/travel (with a vehicle)",
        "(a) train",
        "eat",
        "drink",
        "play (games)",
        "computer game",
        "watch",
        "on/at",
        "swim",
        "sleep",
        "exercise"
      ],
      meanings: [
        "leker",
        "skriver",
        "en",
        "tidning",
        "kör",
        "bil",
        "åker",
        "tåg",
        "äter",
        "dricker",
        "spelar",
        "datorspel",
        "tittar",
        "på",
        "svimmar",
        "sover",
        "tränar"
      ],
      numberOfWordsToSample: 14,
      requiredCorrectAnswers: 12,
      instructions: englishToSwedishDefaultInstructions
    }}
  />,
  <Exercise
    key={3}
    id="choose-correct-option-what-are-they-doing"
    numberInLesson={3}
    title="Choose the correct option"
    ExerciseComponent={ChooseTheCorrectOption}
    exerciseComponentProps={{
      sentences: [
        "Frida __ ett mejl (an email).",
        "Saga och Tobias __ i skolgården (the school yard).",
        "Emil __ pizza.",
        "Anna __ cola.",
        "Min dotter __ Minecraft.",
        "Lovisa __ en tidning.",
        "Martin __ buss (a bus).",
        "Jag __ på Sopranos.",
        "Jack __ lastbil (a truck)."
      ],
      choices: [
        ["skriver", "spelar"],
        ["leker", "spelar"],
        ["äter", "dricker", "åker"],
        ["dricker", "äter"],
        ["spelar", "leker"],
        ["läser", "skriver"],
        ["åker", "äter"],
        ["tittar", "skriver", "läser"],
        ["kör", "bakar"]
      ]
    }}
  />,
  <Exercise
    key={4}
    id="write-verb-forms"
    numberInLesson={4}
    title="Dictionary form and present tense"
    ExerciseComponent={WriteVerbForms}
    exerciseComponentProps={{
      wordsInDictionaryFormWithMeaning: [
        "leka",
        "simma",
        "sova",
        "köpa (to buy)",
        "träna (to train or exercise)",
        "plugga (to study)",
        "sova (to sleep)",
        "springa (to run)",
        "bli (to become)",
        "göra (to do, make)"
      ],
      wordsInPresentTense: [
        "leker",
        "simmar",
        "sover",
        "köper",
        "tränar",
        "pluggar",
        "sover",
        "springer",
        "blir",
        "gör"
      ]
    }}
    saolRequired
  />
];

export default exercises;
