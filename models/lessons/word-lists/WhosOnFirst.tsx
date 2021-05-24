import React from "react";
import { Word, WordClass } from "../../../models/types";

export const whosOnFirstWords: Word[] = [
  {
    swedish: "(en) kommentator",
    english: "sports commentator/ announcer",
    audioFileName: "kommentator.mp3",
    wordClass: WordClass.Interjection
  },
  {
    swedish: "oj",
    english: "(expression of surprise)",
    audioFileName: "oj.mp3",
    wordClass: WordClass.Interjection
  },
  {
    swedish: "vilket...",
    english: "what a...",
    audioFileName: "vilket.mp3",
    wordClass: WordClass.Interjection,
    moreInfoComponent: "See GP"
  },
  {
    swedish: "spännande",
    english: "exciting, thrilling",
    audioFileName: "spännande.mp3",
    wordClass: WordClass.Adjective
  },
  {
    swedish: "(ett) lopp",
    english: "race (running)",
    audioFileName: "vilket.mp3",
    wordClass: WordClass.Interjection
  },
  {
    swedish: "mål",
    english: "goal/finish",
    audioFileName: "mål.mp3",
    wordClass: WordClass.Noun,
    moreInfoComponent: (
      <>
        Here the phrase <i>är i mål</i> means "to have finished" or to have
        "reached the goal".
      </>
    )
  },
  {
    swedish: "första",
    english: "first",
    audioFileName: "första.mp3",
    wordClass: WordClass.Numeral,
    moreInfoComponent: "See GP"
  },
  {
    swedish: "(en) plats",
    english: "place, position",
    audioFileName: "plats.mp3",
    wordClass: WordClass.Noun
  },
  {
    swedish: "tvåa = andra plats",
    english: "second place",
    audioFileName: "tvåa.mp3",
    wordClass: WordClass.Numeral,
    moreInfoComponent: "See GP"
  },
  {
    swedish: "trea = tredje plats",
    english: "third place",
    audioFileName: "trea.mp3",
    wordClass: WordClass.Numeral,
    moreInfoComponent: "See GP"
  },
  {
    swedish: "det här",
    english: "this",
    audioFileName: "det här.mp3",
    wordClass: WordClass.Pronoun
  },
  {
    swedish: "sjunde",
    english: "seventh",
    audioFileName: "sjunde.mp3",
    wordClass: WordClass.Pronoun,
    moreInfoComponent: "See GP"
  },
  {
    swedish: "raka",
    dictionaryForm: "rak",
    audioFileName: "raka",
    english: "straight, in a row",
    wordClass: WordClass.Adjective,
    moreInfoComponent: (
      <>
        <p>
          This is the definite form of the adjective <i>rak</i>.
        </p>
        <p>
          The word usually means straight (as in a straight line), but in the
          context of sports it means "in a row": <i>två raka matcher</i>,{" "}
          <i>tre raka set</i> etc.
        </p>
      </>
    )
  },
  {
    swedish: "(en) seger",
    english: "win, victory",
    audioFileName: "seger.mp3",
    wordClass: WordClass.Noun
  }
];

export const whosOnFirstAdditionalWords: Word[] = [];
