import React from "react";
import { Word, WordClass } from "../../../models/types";

export const meMyselfAndIPart1Words: Word[] = [
  {
    swedish: "lär mig",
    audioFileName: "lär mig.mp3",
    payAttentionToPronunciation: "[lär mej]",
    dictionaryForm: "lära sig",
    english: "learn, teach",
    wordClass: WordClass.Verb,
    moreInfoComponent: (
      <>
        <p>
          There is a lot going on in just this simple phrase - we will get to
          that <i>sig</i>
          part in the GP.
        </p>
        <p>
          This is a compound verb, where <i>lära</i> is the "real" verb and mig
          is a particle. Together with <i>jag</i>, they mean I'm learning and it
          is the meaning of learning that we will use in this lesson.
        </p>
        <p>
          However, in the next lesson we shall see how changing the particle
          will change the meaning to "teaching".
        </p>

        <p>Please note the pronunciation of mig.</p>
      </>
    )
  },
  {
    swedish: "mig",
    audioFileName: "mig.mp3",
    payAttentionToPronunciation: "[mej]",
    english: "me, myself",
    wordClass: WordClass.Pronoun,
    moreInfoComponent: "See GP"
  },
  {
    swedish: "dig",
    audioFileName: "dig.mp3",
    payAttentionToPronunciation: "[dej]",
    english: "you (objective form), yourself",
    wordClass: WordClass.Pronoun,
    moreInfoComponent: "See GP"
  },
  {
    swedish: "frisören",
    audioFileName: "frisören.mp3",
    dictionaryForm: "frisör",
    english: "the (male) hairdresser/barber",
    wordClass: WordClass.Noun
  },
  {
    swedish: "rakar",
    audioFileName: "rakar.mp3",
    dictionaryForm: "raka",
    english: "shave",
    wordClass: WordClass.Verb
  },
  {
    swedish: "honom",
    audioFileName: "honom.mp3",
    english: "him",
    wordClass: WordClass.Pronoun
  },
  {
    swedish: "han",
    audioFileName: "han.mp3",
    english: "he",
    wordClass: WordClass.Pronoun
  },
  {
    swedish: "frisörskan",
    audioFileName: "frisörskan.mp3",
    dictionaryForm: "frisörska",
    english: "the (female) hairdresser/barber",
    wordClass: WordClass.Noun
  },
  {
    swedish: "klipper",
    audioFileName: "klipper.mp3",
    dictionaryForm: "klippa",
    english: "cut (with scissors)",
    wordClass: WordClass.Noun
  },
  {
    swedish: "henne",
    audioFileName: "henne.mp3",
    english: "her",
    wordClass: WordClass.Pronoun
  },
  {
    swedish: "hon",
    audioFileName: "hon.mp3",
    english: "she",
    wordClass: WordClass.Pronoun
  },
  {
    swedish: "kramar",
    dictionaryForm: "krama",
    audioFileName: "kramar.mp3",
    english: "hug",
    wordClass: WordClass.Verb
  },
  {
    swedish: "varandra",
    audioFileName: "varandra.mp3",
    english: "each other",
    wordClass: WordClass.Pronoun
  },
  {
    swedish: "tårta",
    audioFileName: "tårta.mp3",
    english: "cake",
    wordClass: WordClass.Noun,
    moreInfoComponent:
      "Pronunciation can be slurred to [tå:ta] in some dialects."
  },
  {
    swedish: "ger",
    audioFileName: "ger.mp3",
    dictionaryForm: "ge",
    english: "give",
    wordClass: WordClass.Verb
  },
  {
    swedish: "present",
    audioFileName: "present.mp3",
    english: "present, gift",
    wordClass: WordClass.Noun
  },
  {
    swedish: "känner",
    audioFileName: "känner.mp3",
    dictionaryForm: "känna",
    english: "to know someone",
    wordClass: WordClass.Verb,
    moreInfoComponent: (
      <>
        <span>känna</span> is another verb which changes meaning depending on
        what follows. More in the next lesson.
      </>
    )
  }
];

export const meMyselfAndIPart1AdditionalWords: Word[] = [];
