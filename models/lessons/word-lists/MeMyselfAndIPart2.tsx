import React from "react";
import { Word, WordClass } from "../../../models/types";

export const meMyselfAndIPart2Words: Word[] = [
  {
    swedish: "känner sig",
    audioFileName: "känner sig.mp3",
    dictionaryForm: "känna sig",
    english: "to feel (happy, sad, etc.)",
    wordClass: WordClass.Verb,
  },
  {
    swedish: "sig",
    audioFileName: "sig.mp3",
    payAttentionToPronunciation: "[sej]",
    english: "-self, -selves",
    wordClass: WordClass.Pronoun,
    moreInfoComponent: "See GP"
  },
  {
    swedish: "trött",
    audioFileName: "trött.mp3",
    english: "tired",
    wordClass: WordClass.Adjective,
  },
  {
    swedish: "har",
    audioFileName: "har.mp3",
    dictionaryForm: "ha",
    english: "have",
    wordClass: WordClass.Verb,
  },
  {
    swedish: "(en) kostym",
    audioFileName: "kostym.mp3",
    english: "suit",
    wordClass: WordClass.Noun
  },
  {
    swedish: "har på sig",
    audioFileName: "har på sig.mp3",
    dictionaryForm: "ha på sig",
    english: "wear",
    wordClass: WordClass.Verb
  }
];

export const meMyselfAndIPart2AdditionalWords: Word[] = [];
