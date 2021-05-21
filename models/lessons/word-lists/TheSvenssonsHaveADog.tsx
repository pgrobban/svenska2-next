import React from "react";
import { Word, WordClass } from "../../../models/types";

export const mainWords: Word[] = [
  {
    swedish: "(en) hund",
    audioFileName: "hund.mp3",
    english: "dog",
    wordClass: WordClass.Noun
  },
  {
    swedish: "Ludde",
    audioFileName: "ludde.mp3",
    english: "(a name)",
    wordClass: WordClass.Noun,
    moreInfoComponent: (
      <p>
        Ludde can be a nickname for people named Ludvig. In this case the dog
        name comes from the noun <i>ludd</i>, which means fluff or fuzz.
      </p>
    )
  },
  {
    swedish: "den",
    audioFileName: "den.mp3",
    payAttentionToPronunciation: "[denn]",
    english: "it",
    wordClass: WordClass.Pronoun,
    moreInfoComponent: "See GP"
  },
  {
    swedish: "stor",
    audioFileName: "stor.mp3",
    english: "big",
    wordClass: WordClass.Adjective
  },
  {
    swedish: "också",
    audioFileName: "också.mp3",
    english: "also, too",
    wordClass: WordClass.Adverb,
    moreInfoComponent: "See GP"
  },
  {
    swedish: "det",
    audioFileName: "det.mp3",
    english: "it",
    wordClass: WordClass.Pronoun,
    moreInfoComponent: "See GP"
  },
  {
    swedish: "svår",
    audioFileName: "svår.mp3",
    english: "difficult",
    wordClass: WordClass.Adjective
  },
  {
    swedish: "vänner",
    dictionaryForm: "(en) vän",
    audioFileName: "vänner.mp3",
    english: "friends",
    wordClass: WordClass.Noun,
    moreInfoComponent: (
      <>
        This is the plural form of the noun <i>vän</i>.
      </>
    )
  },
  {
    swedish: "de",
    audioFileName: "de.mp3",
    payAttentionToPronunciation: "[domm]",
    english: "they",
    wordClass: WordClass.Pronoun
  },
  {
    swedish: "snälla",
    dictionaryForm: "snäll",
    audioFileName: "vänner.mp3",
    english: "kind, friendly",
    wordClass: WordClass.Adjective
  }
];

export const additionalWords = [
  {
    swedish: "(en) katt",
    audioFileName: "katt.mp3",
    english: "cat",
    wordClass: WordClass.Noun
  },
  {
    swedish: "(ett) hus",
    audioFileName: "hus.mp3",
    english: "house",
    wordClass: WordClass.Noun
  },
  {
    swedish: "röd",
    audioFileName: "röd.mp3",
    english: "red",
    wordClass: WordClass.Adjective
  },
  {
    swedish: "blå",
    audioFileName: "blå.mp3",
    english: "blue",
    wordClass: WordClass.Adjective
  },
  {
    swedish: "grön",
    audioFileName: "grön.mp3",
    english: "green",
    wordClass: WordClass.Adjective
  },
  {
    swedish: "gul",
    audioFileName: "gul.mp3",
    english: "yellow",
    wordClass: WordClass.Adjective
  },
  {
    swedish: "liten",
    audioFileName: "liten.mp3",
    english: "small",
    wordClass: WordClass.Adjective,
    moreInfoComponent: (
      <>Note that this means "small size" and not "a small amount".</>
    )
  },
  {
    swedish: "söt",
    audioFileName: "söt.mp3",
    english: "cute; sweet",
    wordClass: WordClass.Adjective,
    moreInfoComponent: (
      <>
        When describing food, söt means sweet.
        <br />
        When describing people and animals, söt means cute.
      </>
    )
  },
  {
    swedish: "bra",
    audioFileName: "bra.mp3",
    english: "good",
    wordClass: WordClass.Adjective
  },
  {
    swedish: "dålig",
    audioFileName: "dålig.mp3",
    english: "bad",
    wordClass: WordClass.Adjective,
    moreInfoComponent: (
      <>
        This means that someone or something is not good at something. If you
        want to describe a person who does bad things, you can use <i>elak</i>{" "}
        instead.
      </>
    )
  },
  {
    swedish: "elak",
    audioFileName: "elak.mp3",
    english: "mean",
    wordClass: WordClass.Adjective
  },
  {
    swedish: "tom",
    audioFileName: "tom.mp3",
    english: "empty",
    wordClass: WordClass.Adjective
  },
  {
    swedish: "full",
    audioFileName: "full.mp3",
    english: "full",
    wordClass: WordClass.Adjective,
    moreInfoComponent: (
      <>
        Don't use this to say you're full after eating a lot.
        <br />
        The word <i>full</i>, when used on people, means drunk!
      </>
    )
  },
  {
    swedish: "smart",
    audioFileName: "smart.mp3",
    english: "smart",
    wordClass: WordClass.Adjective
  }
];
