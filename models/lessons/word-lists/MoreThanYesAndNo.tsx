import React from "react";
import { Word, WordClass } from "../../../models/types";

const words: Word[] = [
  {
    swedish: "gör",
    dictionaryForm: "göra",
    audioFileName: "gör.mp3",
    english: "do, make",
    wordClass: WordClass.Verb,
    moreInfoComponent: "See GP"
  },
  {
    swedish: "inte",
    audioFileName: "inte.mp3",
    english: "not",
    wordClass: WordClass.Adverb,
    moreInfoComponent: "See GP"
  },
  {
    swedish: "bilen",
    dictionaryForm: "(en) bil",
    audioFileName: "bilen.mp3",
    english: "the car",
    wordClass: WordClass.Adverb,
    moreInfoComponent: (
      <>
        <p>
          <i>bilen</i>b is the definite form of <i>bil</i>, so the translation
          here becomes <strong>the</strong> car. We will learn more about
          definite forms in a later lesson.
        </p>
      </>
    )
  },
  {
    swedish: "spelet",
    dictionaryForm: "(ett) spel",
    audioFileName: "spelet.mp3",
    english: "the game",
    wordClass: WordClass.Adverb,
    moreInfoComponent: (
      <>
        <p>
          <i>spelet</i> is the definite form of <i>spel</i>, so the translation
          here becomes <strong>the</strong> game. We will learn more about
          definite forms in a later lesson.
        </p>
      </>
    )
  },
  {
    swedish: "pizzor",
    dictionaryForm: "(en) pizza",
    audioFileName: "pizzor.mp3",
    english: "pizzas",
    wordClass: WordClass.Noun,
    moreInfoComponent: (
      <p>
        <i>pizzor</i> is the plural form of <i>pizza</i>. We will learn more
        about plural forms in a later lesson.
      </p>
    )
  },
  {
    swedish: "pluggar",
    dictionaryForm: "plugga",
    audioFileName: "pluggar.mp3",
    english: "study",
    wordClass: WordClass.Verb,
    moreInfoComponent: (
      <p>
        This is a general word relating to studies. It can mean anything from
        studying in a school or university to doing homework or exercises in a
        particular course, like the website you are using now.
      </p>
    )
  },
  {
    swedish: "du",
    audioFileName: "du.mp3",
    english: "you (singular)",
    wordClass: WordClass.Pronoun
  },
  {
    swedish: "svenska",
    dictionaryForm: "svenska",
    audioFileName: "svenska.mp3",
    english: "Swedish (language)",
    wordClass: WordClass.Noun,
    moreInfoComponent: (
      <p>
        Notice that names of languages in Swedish are not capitalized like they are in English.
      </p>
    )
  },
  {
    swedish: "pratar",
    dictionaryForm: "prata",
    audioFileName: "pratar.mp3",
    english: "speak",
    wordClass: WordClass.Verb
  },
  {
    swedish: "ni",
    audioFileName: "ni.mp3",
    english: "you (plural)",
    wordClass: WordClass.Pronoun
  },
  {
    swedish: "engelska",
    audioFileName: "engelska.mp3",
    english: "English (language)",
    wordClass: WordClass.Noun,
    moreInfoComponent: (
      <p>
        Notice that names of languages in Swedish are not capitalized like they are in English.
      </p>
    )
  },
  {
    swedish: "vi",
    audioFileName: "vi.mp3",
    english: "we",
    wordClass: WordClass.Pronoun
  },
];

export default words;
