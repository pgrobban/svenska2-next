import React from "react";
import { Word, WordClass } from "../../../models/types";

export const canYouCountWords: Word[] = [
  {
    swedish: "med",
    audioFileName: "med.mp3",
    english: "(together) with",
    wordClass: WordClass.Conjunction,
    moreInfoComponent: (
      <p>
        Pronounced [mäd] in some dialects, and in fast speech it can be slurred
        to [mä].
      </p>
    )
  },
  {
    swedish: "(ett) zoo",
    audioFileName: "zoo.mp3",
    english: "zoo",
    wordClass: WordClass.Noun
  },
  {
    swedish: "titta",
    audioFileName: "titta.mp3",
    english: "look",
    wordClass: WordClass.Verb,
    moreInfoComponent: (
      <p>
        The usage of <i>titta</i> here is the imperative (command) form, which
        happens to be the same as the dictionary form for this verb.
        <br />
        We will look at imperative forms in a later lesson.
      </p>
    )
  },
  {
    swedish: "här",
    audioFileName: "här.mp3",
    english: "here",
    wordClass: WordClass.Preposition
  },
  {
    swedish: "en till/ett till",
    audioFileName: "en till ett till.mp3",
    english: "one more; another one",
    wordClass: WordClass.Phrase
  },
  {
    swedish: "där",
    audioFileName: "där.mp3",
    english: "there",
    wordClass: WordClass.Preposition
  },
  {
    swedish: "hur",
    audioFileName: "hur.mp3",
    english: "how",
    wordClass: WordClass.Adverb
  },
  {
    swedish: "många",
    audioFileName: "många.mp3",
    english: "many",
    wordClass: WordClass.Pronoun
  },
  {
    swedish: "tillsammans",
    audioFileName: "tillsammans.mp3",
    english: "together",
    wordClass: WordClass.Pronoun
  },
  {
    swedish: "tre",
    audioFileName: "tre.mp3",
    english: "three",
    wordClass: WordClass.Numeral
  },
  {
    swedish: "där borta",
    audioFileName: "där borta.mp3",
    english: "over there",
    wordClass: WordClass.Phrase
  },
  {
    swedish: "pingviner",
    dictionaryForm: "(en) pingvin",
    audioFileName: "pingviner.mp3",
    english: "penguin",
    wordClass: WordClass.Noun
  },
  {
    swedish: "fyra",
    audioFileName: "fyra.mp3",
    english: "fyra",
    wordClass: WordClass.Numeral
  },
  {
    swedish: "fem",
    audioFileName: "fem.mp3",
    english: "fem",
    wordClass: WordClass.Numeral
  },
  {
    swedish: "sex",
    audioFileName: "sex.mp3",
    english: "sex",
    wordClass: WordClass.Numeral
  },
  {
    swedish: "sju",
    audioFileName: "sju.mp3",
    english: "seven",
    wordClass: WordClass.Numeral
  },
  {
    swedish: "åtta",
    audioFileName: "åtta.mp3",
    english: "eight",
    wordClass: WordClass.Numeral
  },
  {
    swedish: "nio",
    audioFileName: "nio.mp3",
    payAttentionToPronunciation: "can also be [nie]",
    english: "nio",
    wordClass: WordClass.Numeral
  },
  {
    swedish: "tio",
    audioFileName: "tio.mp3",
    payAttentionToPronunciation: "can also be [tie]",
    english: "tio",
    wordClass: WordClass.Numeral
  },
  {
    swedish: "vad",
    audioFileName: "vad.mp3",
    english: "what/how",
    wordClass: WordClass.Adverb,
    moreInfoComponent: (
      <>
        <p>
          When used in questions, <i>vad</i> means "what".
          <br />
          In exclamatory utterances, it can be translated to "how":
        </p>

        <p className="w3-margin-left">Vad duktig du är på att räkna!</p>
        <p className="w3-margin-left">= (My,) how good you are at counting!</p>
      </>
    )
  },
  {
    swedish: "räkna",
    audioFileName: "räkna.mp3",
    english: "count",
    wordClass: WordClass.Verb
  }
];

export const canYouCountAdditionalWords: Word[] = [
  {
    swedish: "noll",
    audioFileName: "noll.mp3",
    english: "zero",
    wordClass: WordClass.Numeral
  },
  {
    swedish: "elva",
    audioFileName: "elva.mp3",
    english: "eleven",
    wordClass: WordClass.Numeral
  },
  {
    swedish: "tolv",
    audioFileName: "tolv.mp3",
    english: "twelve",
    wordClass: WordClass.Numeral
  },
  {
    swedish: "tretton",
    audioFileName: "tretton.mp3",
    english: "thirteen",
    wordClass: WordClass.Numeral
  },
  {
    swedish: "fjorton",
    audioFileName: "fjorton.mp3",
    english: "fourteen",
    wordClass: WordClass.Numeral
  },
  {
    swedish: "femton",
    audioFileName: "femton.mp3",
    english: "fifteen",
    wordClass: WordClass.Numeral
  },
  {
    swedish: "sexton",
    audioFileName: "sexton.mp3",
    english: "sixteen",
    wordClass: WordClass.Numeral
  },
  {
    swedish: "sjutton",
    audioFileName: "sjutton.mp3",
    english: "seventeen",
    wordClass: WordClass.Numeral
  },
  {
    swedish: "arton",
    audioFileName: "arton.mp3",
    english: "eighteen",
    wordClass: WordClass.Numeral
  },
  {
    swedish: "nitton",
    audioFileName: "nitton.mp3",
    english: "nineteen",
    wordClass: WordClass.Numeral
  },
  {
    swedish: "tjugo",
    audioFileName: "tjugo.mp3",
    english: "twenty",
    wordClass: WordClass.Numeral
  }
];
