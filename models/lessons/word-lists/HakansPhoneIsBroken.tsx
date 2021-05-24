import React from "react";
import { Word, WordClass } from "../../../models/types";

export const hakansPhoneIsBrokenWords: Word[] = [
  {
    swedish: "sönder",
    english: "broken",
    wordClass: WordClass.Adjective,
    audioFileName: "sönder.mp3"
  },
  {
    swedish: "tråkigt",
    dictionaryForm: "tråkig",
    english: "boring",
    wordClass: WordClass.Adverb,
    audioFileName: "tråkigt.mp3",
    moreInfoComponent: (
      <>
        The word <i>tråkigt</i> is the adverb version of the adjective
        <i>tråkig</i>. We will get back to adverb constructions in a later
        lesson.
      </>
    )
  },
  {
    swedish: "gå",
    english: "go, walk",
    wordClass: WordClass.Verb,
    audioFileName: "gå.mp3",
    moreInfoComponent: (
      <>
        <p>
          The verb <i>gå</i> can mean either go to some place in a general sense
          or walk on foot.
        </p>
        <p>
          The expression <i>gå i skolan</i> means going to school as in being in
          school and attending classes.
        </p>
      </>
    )
  },
  {
    swedish: "tavlan",
    dictionaryForm: "(en) tavla",
    english: "painting",
    wordClass: WordClass.Noun,
    audioFileName: "tavlan.mp3"
  },
  {
    swedish: "dyr",
    english: "expensive",
    wordClass: WordClass.Adjective,
    audioFileName: "dyr.mp3"
  }
];

export const hakansPhoneIsBrokenAdditionalWords: Word[] = [
  {
    swedish: "(en) framruta",
    english: "front window",
    wordClass: WordClass.Noun,
    audioFileName: "framruta.mp3"
  }
];
