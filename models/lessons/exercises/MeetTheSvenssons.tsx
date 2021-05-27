import React from "react";
import Exercise from "../../../components/Exercise";
import ChooseTheCorrectOption from "../../../components/exercises/ChooseTheCorrectOption";
import CompleteTheSelfIntroduction from "../../../components/exercises/CompleteTheSelfIntroduction";
import WhoAreThey from "../../../components/exercises/WhoAreThey";
import WrittenWordTest, { englishToSwedishDefaultInstructions, swedishToEnglishDefaultInstructions } from "../../../components/exercises/WrittenWordTest";
import { ExerciseProps } from "../../types";

const exercises = [
  <Exercise
    key={1}
    id={"who-are-they"}
    numberInLesson={1}
    title={"Who are they?"}
    ExerciseComponent={WhoAreThey}
  />,
  <Exercise
    key={2}
    id="written-word-test-meet-the-svenssons-1"
    numberInLesson={2}
    title="What do the words mean?"
    ExerciseComponent={WrittenWordTest}
    exerciseComponentProps={{
      words: [
        "hej",
        "jag",
        "heter",
        "och",
        "min",
        "fru",
        "vi",
        "har",
        "två",
        "barn",
        "en",
        "son",
        "dotter",
        "är",
        "bor",
        "i"
      ],
      meanings: [
        "hi",
        "I",
        "be called/named",
        "and",
        "my",
        "wife",
        "we",
        "have",
        "two",
        "child",
        "a, an, one",
        "son",
        "daughter",
        "is",
        "live",
        "in"
      ],
      numberOfWordsToSample: 15,
      requiredCorrectAnswers: 12,
      instructions: swedishToEnglishDefaultInstructions
    }}
  />,
  <Exercise
    key={3}
    id="written-word-test-meet-the-svenssons-2"
    numberInLesson={3}
    title="How do you say it in Swedish?"
    ExerciseComponent={WrittenWordTest}
    exerciseComponentProps={{
      words: [
        "hi",
        "I",
        "be called/named",
        "and",
        "my",
        "wife",
        "we",
        "have",
        "two",
        "child",
        "a, an, one",
        "son",
        "daughter",
        "is",
        "live",
        "in"
      ],
      meanings: [
        "hej",
        "jag",
        "heter",
        "och",
        "min",
        "fru",
        "vi",
        "har",
        "två",
        "barn",
        "en",
        "son",
        "dotter",
        "är",
        "bor",
        "i"
      ],
      numberOfWordsToSample: 15,
      requiredCorrectAnswers: 12,
      instructions: englishToSwedishDefaultInstructions
    }}
  />,
  <Exercise
    key={4}
    id="choose-correct-option-meet-the-svenssons"
    numberInLesson={4}
    title="Choose the correct option"
    ExerciseComponent={ChooseTheCorrectOption}
    exerciseComponentProps={{
      sentences: [
        "Jenny __ i London.",
        "Niklas och Gustav __ Karlsson i efternamn.",
        "Familjen Svensson har __ barn.",
        "Sofia __ min fru.",
        "Jag __ Robert.",
        "Min fru __ i Berlin.",
        "Min son __ Andreas."
      ],
      choices: [
        ['bor', 'heter'],
        ['heter', 'bor', 'är'],
        ['två', 'fru'],
        ['är', 'bor'],
        ['heter', 'är'],
        ['är', 'heter'],
        ['heter', 'är', 'bor']
      ]
    }}
  />,
  <Exercise
    key={5}
    id="complete-the-self-introduction"
    numberInLesson={5}
    title="Complete the self introduction"
    ExerciseComponent={CompleteTheSelfIntroduction}
  />
];

export default exercises;
