import React from "react";
import AudioButton from "../../../components/AudioButton";
import { Word, WordClass } from "../../../models/types";

export const bigNumbersWords: Word[] = [
  {
    swedish: "betalar",
    dictionaryForm: "betala",
    english: "pay",
    audioFileName: "betalar.mp3",
    wordClass: WordClass.Verb
  },
  {
    swedish: "(en) nota",
    english: "bill/check at a restaurant, cafe etc.",
    audioFileName: "betalar.mp3",
    wordClass: WordClass.Verb
  },
  {
    swedish: "(ett) café",
    english: "cafe",
    audioFileName: "café.mp3",
    wordClass: WordClass.Noun
  },
  {
    swedish: "(en) kassörska",
    english: "female cashier",
    audioFileName: "kassörska.mp3",
    wordClass: WordClass.Noun
  },
  {
    swedish: "(en) chokladboll",
    english: "chocolate ball",
    audioFileName: "chokladboll.mp3",
    wordClass: WordClass.Noun,
    subWords: [
      {
        swedish: "choklad",
        english: "chocolate",
        audioFileName: "choklad.mp3",
        wordClass: WordClass.Noun
      },
      {
        swedish: "(en) boll",
        english: "ball",
        audioFileName: "boll.mp3",
        wordClass: WordClass.Noun
      }
    ]
  },
  {
    swedish: "dubbel",
    english: "double",
    audioFileName: "dubbel.mp3",
    wordClass: WordClass.Adjective
  },
  {
    swedish: "espresso",
    english: "espresso (coffee)",
    audioFileName: "espresso.mp3",
    wordClass: WordClass.Noun
  },
  {
    swedish: "någon",
    english: "any",
    audioFileName: "någon.mp3",
    wordClass: WordClass.Pronoun,
    moreInfoComponent: (
      <>
        In casual speech, this is pronounced <i>nån</i>{" "}
        <AudioButton fileName="nån.mp3" /> and it is acceptable to use this form
        in chat speak.
      </>
    )
  },
  {
    swedish: "(en) hundralapp",
    english: "100 kr note/bill",
    audioFileName: "hundralapp.mp3",
    wordClass: WordClass.Noun,
    moreInfoComponent: (
      <>
        The words <i>hundring</i> and <i>hundralapp</i> are both casual forms of
        the word <i>hundrakronorssedel</i>.
      </>
    ),
    subWords: [
      {
        swedish: "(ett) hundra",
        english: "hundred",
        audioFileName: "hundra.mp3",
        wordClass: WordClass.Numeral
      },
      {
        swedish: "(en) lapp",
        english: "paper with something written on it",
        audioFileName: "lapp.mp3",
        wordClass: WordClass.Noun
      }
    ]
  },
  {
    swedish: "(en) femhundring = femhundralapp",
    english: "500 kr bill/note",
    audioFileName: "femhundring.mp3",
    wordClass: WordClass.Noun
  },
  {
    swedish: "annars",
    english: "otherwise; if not",
    audioFileName: "annars.mp3",
    wordClass: WordClass.Adverb,
    moreInfoComponent: (
      <>
        What Håkan says here can be interpreted as: <br />
        "If it's not okay (that I pay with a 500 kr bill), I can pay by card
        instead."
      </>
    )
  },
  {
    swedish: "kassörskan",
    dictionaryForm: "(en) kassörska",
    english: "the female cashier",
    audioFileName: "kassörskan.mp3",
    wordClass: WordClass.Noun,
    moreInfoComponent: (
      <>
        This is the definite form of <i>kassörska</i>.
      </>
    )
  },
  {
    swedish: "växel",
    english: "change (money)",
    audioFileName: "växel.mp3",
    wordClass: WordClass.Noun
  },
  {
    swedish: "tillbaka",
    english: "back, in return",
    audioFileName: "tillbaka.mp3",
    wordClass: WordClass.Adverb
  },
  {
    swedish: "kvittot",
    dictionaryForm: "(ett) kvitto",
    english: "the receipt",
    audioFileName: "kvittot.mp3",
    wordClass: WordClass.Noun,
    moreInfoComponent: (
      <>
        This is the definite form of <i>kvitto</i>.
      </>
    )
  },
  {
    swedish: "behålla",
    english: "keep",
    audioFileName: "behålla.mp3",
    wordClass: WordClass.Verb
  },
  {
    swedish: "detsamma",
    english: "the same (to you); ditto",
    audioFileName: "detsamma.mp3",
    wordClass: WordClass.Pronoun,
    moreInfoComponent: (
      <>
        <i>Tack, detsamma</i> is a commonly used phrase for expressing wishes
        that someone has said to you back to them. <br />
        The <i>tack</i> is optional but adding it is more polite.
      </>
    )
  }
];

export const bigNumbersAdditionalWords: Word[] = [
  {
    swedish: "(ett) tusen",
    english: "thousand",
    audioFileName: "tusen.mp3",
    wordClass: WordClass.Numeral
  },
  {
    swedish: "(en) miljon",
    english: "million",
    audioFileName: "million.mp3",
    wordClass: WordClass.Numeral
  },
  {
    swedish: "(en) miljard",
    english: "billion (thousand million)",
    audioFileName: "miljard.mp3",
    wordClass: WordClass.Numeral
  },
  {
    swedish: "(en) biljon",
    english: "trillion (million million)",
    audioFileName: "biljon.mp3",
    wordClass: WordClass.Numeral
  },
  {
    swedish: "(en) biljard",
    english: "quadrillion",
    audioFileName: "biljon.mp3",
    wordClass: WordClass.Numeral
  },
  {
    swedish: "komma",
    english: "comma (,)",
    audioFileName: "komma.mp3",
    wordClass: WordClass.Noun
  }
];
