import React from "react";
import { Word, WordClass } from "../../../models/types";

export const itsAlwaysRainingInMidsummerWords: Word[] = [
  {
    swedish: "soligt",
    dictionaryForm: "solig",
    audioFileName: "solig.mp3",
    english: "sunny",
    wordClass: WordClass.Adjective
  },
  {
    swedish: "vädret",
    dictionaryForm: "(ett) väder",
    audioFileName: "vädret.mp3",
    english: "the weather",
    wordClass: WordClass.Noun
  },
  {
    swedish: "fint",
    dictionaryForm: "fin",
    audioFileName: "fint.mp3",
    english: "nice, lovely, pretty",
    wordClass: WordClass.Adjective,
    moreInfoComponent: <>blah</>
  },
  {
    swedish: "solen",
    dictionaryForm: "(en) sol",
    audioFileName: "solen.mp3",
    english: "the sun",
    wordClass: WordClass.Noun
  },
  {
    swedish: "skiner",
    dictionaryForm: "skina",
    audioFileName: "skiner.mp3",
    english: "shine",
    wordClass: WordClass.Verb
  },
  {
    swedish: "molnigt",
    dictionaryForm: "molnig",
    audioFileName: "molnigt.mp3",
    english: "cloudy",
    wordClass: WordClass.Adjective,
    moreInfoComponent: (
      <>
        If the sky is filled with white clouds, we say <i>molnigt</i>. If it's
        gray or dark clouds which make you think it's going to rain, use
        <i>mulet</i> instead.
      </>
    )
  },
  {
    swedish: "halvklart",
    audioFileName: "halvklart.mp3",
    english: "semi-clear cloudy",
    wordClass: WordClass.Adjective,
    moreInfoComponent: (
      <>
        This is a meteorological term. You will hear it in news forecasts but
        rarely in daily speech.
      </>
    ),
    subWords: [
      {
        swedish: "halv",
        audioFileName: "halv.mp3",
        english: "half",
        wordClass: WordClass.Adjective
      },
      {
        swedish: "klart",
        dictionaryForm: "klar",
        audioFileName: "klar.mp3",
        english: "clear",
        wordClass: WordClass.Adjective
      }
    ]
  },
  {
    swedish: "mulet",
    dictionaryForm: "mulen",
    audioFileName: "mulet.mp3",
    english: "overcast, murky",
    wordClass: WordClass.Adjective,
    moreInfoComponent: <p>This word is rarely used in its dictionary form.</p>
  },
  {
    swedish: "regnar",
    dictionaryForm: "regna",
    audioFileName: "regnar.mp3",
    english: "rain",
    wordClass: WordClass.Verb
  },
  {
    swedish: "åskar",
    dictionaryForm: "åska",
    audioFileName: "åskar.mp3",
    english: "thunder",
    wordClass: WordClass.Verb
  },
  {
    swedish: "blixtrar",
    dictionaryForm: "blixtra",
    audioFileName: "blixtrar.mp3",
    english: "flash (of lightning)",
    wordClass: WordClass.Verb
  },
  {
    swedish: "snöar",
    dictionaryForm: "snöa",
    audioFileName: "snöar.mp3",
    english: "snow",
    wordClass: WordClass.Verb
  },
  {
    swedish: "haglar",
    dictionaryForm: "hagla",
    audioFileName: "haglar.mp3",
    english: "hail",
    wordClass: WordClass.Verb
  },
  {
    swedish: "dimmigt",
    dictionaryForm: "dimmig",
    audioFileName: "dimmigt.mp3",
    english: "foggy, misty",
    wordClass: WordClass.Adjective
  },
  {
    swedish: "blåser",
    dictionaryForm: "blåsa",
    audioFileName: "blåser.mp3",
    english: "blow (see explanation)",
    wordClass: WordClass.Verb,
    moreInfoComponent: (
      <>
        <p>
          When talking about weather, the phrase <i>Det blåser</i> means "It's
          windy." However, <i>blåser</i> is a verb in Swedish and "windy" is an
          adjective in English, so a more literal translation would be "(the
          wind) is blowing".
        </p>
        <p>
          The word "windy" can also be translated to <i>blåsig</i> and the
          phrase <i>Det är blåsigt</i> carries the same meaning as{" "}
          <i>Det blåser</i>.
        </p>
      </>
    )
  },
  {
    swedish: "midsommar",
    audioFileName: "midsommar.mp3",
    english:
      "midsummer (a festive holiday that occurs in late June every year)",
    wordClass: WordClass.Adjective
  },
  {
    swedish: "midsommar",
    audioFileName: "midsommar.mp3",
    english:
      "midsummer (a festive holiday that occurs in late June every year)",
    wordClass: WordClass.Noun
  },
  {
    swedish: "Italien",
    audioFileName: "italien.mp3",
    english: "Italy",
    wordClass: WordClass.Noun
  },
  {
    swedish: "blir",
    dictionaryForm: "bli",
    audioFileName: "blir.mp3",
    english: "will be, become",
    wordClass: WordClass.Verb
  },
  {
    swedish: "till",
    audioFileName: "till.mp3",
    english: "to",
    wordClass: WordClass.Preposition,
    moreInfoComponent: (
      <>
        <i>till</i> in the expression <i>halvklart till mulet</i> expresses a
        change over time.
      </>
    )
  },
  {
    swedish: "Tyskland",
    audioFileName: "tyskland.mp3",
    english: "Germany",
    wordClass: WordClass.Noun
  },
  {
    swedish: "Danmark",
    audioFileName: "danmark.mp3",
    english: "Denmark",
    wordClass: WordClass.Noun
  },
  {
    swedish: "södra",
    audioFileName: "söder.mp3",
    english: "southern",
    wordClass: WordClass.Adjective,
    moreInfoComponent: (
      <>
        <p>
          This is the adjectival form of the noun <i>söder</i> and must be
          succeeded by a noun.
          <br />
          If what follows is not a noun, use <i>söder</i> instead.
        </p>
        <p>We will get back to this rule later.</p>
      </>
    )
  },
  {
    swedish: "Sverige",
    payAttentionToPronunciation: "[svärje]",
    audioFileName: "sverige.mp3",
    english: "Sweden",
    wordClass: WordClass.Noun
  },
  {
    swedish: "grader",
    dictionaryForm: "(en) grad",
    audioFileName: "grader.mp3",
    english: "degree (temperature or angle)",
    wordClass: WordClass.Noun,
    moreInfoComponent: (
      <>
        Temperatures are always assumed to be in degrees celsius unless
        otherwise specified.
      </>
    )
  },
  {
    swedish: "varmt",
    dictionaryForm: "varm",
    audioFileName: "varmt.mp3",
    english: "warm",
    wordClass: WordClass.Noun,
    moreInfoComponent: (
      <>
        In the context of temperatures, <i>varm</i> can also mean any
        temperature above 0 degrees C, even though 1 degree C isn't warm at all!
      </>
    )
  },
  {
    swedish: "Rom",
    audioFileName: "rom.mp3",
    english: "Rome",
    wordClass: WordClass.Noun
  }
];

export const itsAlwaysRainingInMidsummerAdditionalWords: Word[] = [
  {
    swedish: "kallt",
    dictionaryForm: "kall",
    audioFileName: "kallt.mp3",
    english: "cold",
    wordClass: WordClass.Noun
  },
  {
    swedish: "minus",
    audioFileName: "minus.mp3",
    english: "minus",
    wordClass: WordClass.Adverb
  },
  {
    swedish: "Norge",
    audioFileName: "norge.mp3",
    english: "Norway",
    wordClass: WordClass.Noun
  },
  {
    swedish: "Finland",
    audioFileName: "finland.mp3",
    english: "Finland",
    wordClass: WordClass.Noun
  },
  {
    swedish: "Spanien",
    payAttentionToPronunciation: "[spannien]",
    audioFileName: "spanien.mp3",
    english: "Spain",
    wordClass: WordClass.Noun
  },
  {
    swedish: "Frankrike",
    audioFileName: "frankrike.mp3",
    english: "France",
    wordClass: WordClass.Noun
  },
  {
    swedish: "England",
    audioFileName: "england.mp3",
    english: "England",
    wordClass: WordClass.Noun
  }
];
