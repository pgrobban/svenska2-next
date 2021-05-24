import React from "react";
import { Word, WordClass } from "../../../models/types";

export const sevenDaysWithoutASwedishLessonMakesOneWeekWords: Word[] = [
  {
    swedish: "se",
    audioFileName: "se.mp3",
    english: "see, here: watch",
    wordClass: WordClass.Verb
  },
  {
    swedish: "(en) film",
    audioFileName: "film.mp3",
    english: "film, movie",
    wordClass: WordClass.Noun
  },
  {
    swedish: "(en) måndag",
    audioFileName: "måndag.mp3",
    english: "Monday",
    wordClass: WordClass.Noun
  },
  {
    swedish: "tyvärr",
    audioFileName: "tyvärr.mp3",
    english: "sadly, unfortunately",
    wordClass: WordClass.Adverb
  },
  {
    swedish: "då (I)",
    audioFileName: "då.mp3",
    english: "how about...?",
    wordClass: WordClass.Adverb,
    moreInfoComponent: "See GP"
  },
  {
    swedish: "(ett) matteprov",
    audioFileName: "matteprov.mp3",
    english: "math exam",
    wordClass: WordClass.Noun,
    subWords: [
      {
        swedish: "matte",
        audioFileName: "matte.mp3",
        english: "maths",
        wordClass: WordClass.Noun,
        moreInfoComponent: (
          <>
            This is a slong short form of <i>matematik</i>.
          </>
        )
      },
      {
        swedish: "(ett) prov",
        audioFileName: "prov.mp3",
        english: "test",
        wordClass: WordClass.Noun
      }
    ]
  },
  {
    swedish: "(en) tisdag",
    audioFileName: "tisdag.mp3",
    english: "Tuesday",
    wordClass: WordClass.Noun
  },
  {
    swedish: "men",
    audioFileName: "men.mp3",
    english: "but",
    wordClass: WordClass.Conjunction
  },
  {
    swedish: "(en) onsdag",
    audioFileName: "onsdag.mp3",
    english: "Wednesday",
    wordClass: WordClass.Noun
  },
  {
    swedish: "går bra",
    audioFileName: "går bra.mp3",
    english: "to be okay/fine",
    wordClass: WordClass.Verb,
    moreInfoComponent: "See GP"
  },
  {
    swedish: "pianolektioner",
    audioFileName: "pianolektioner.mp3",
    english: "piano lessons",
    dictionaryForm: "(en) pianolektion",
    wordClass: WordClass.Noun,
    subWords: [
      {
        swedish: "(ett) piano",
        audioFileName: "piano.mp3",
        english: "piano",
        wordClass: WordClass.Noun
      },
      {
        swedish: "(en) lektion",
        audioFileName: "lektion.mp3",
        payAttentionToPronunciation: "[leksjon]",
        english: "lesson",
        wordClass: WordClass.Noun
      }
    ]
  },
  {
    swedish: "onsdagar",
    audioFileName: "onsdagar.mp3",
    english: "Wednesdays",
    wordClass: WordClass.Noun,
    moreInfoComponent: (
      <>
        This is the plural form of <i>onsdag</i>.
      </>
    )
  },
  {
    swedish: "(en) torsdag",
    audioFileName: "torsdag.mp3",
    english: "Thursday",
    wordClass: WordClass.Noun
  },
  {
    swedish: "eller",
    audioFileName: "eller.mp3",
    english: "or",
    wordClass: WordClass.Conjunction
  },
  {
    swedish: "(en) fredag",
    audioFileName: "fredag.mp3",
    english: "Friday",
    wordClass: WordClass.Noun
  },
  {
    swedish: "(en) suck",
    audioFileName: "suck.mp3",
    english: "Wednesday",
    wordClass: WordClass.Noun
  },
  {
    swedish: "helgen",
    payAttentionToPronunciation: "[heljen]",
    audioFileName: "helgen.mp3",
    dictionaryForm: "(en) helg",
    english: "weekend",
    wordClass: WordClass.Noun
  },
  {
    swedish: "funkar",
    dictionaryForm: "funka",
    audioFileName: "funkar.mp3",
    english: "work/be ok",
    wordClass: WordClass.Verb,
    moreInfoComponent: (
      <>
        <p>
          This is a casual word and should not be used in formal situations.
          <br />
          Saying that something <i>funkar</i> means that it works properly; this
          could either be a physical object or something abstract like
          relationships, ideas etc.
        </p>
        <p>
          In the text Alfred is saying that the weekend is better for him, as in
          "it works better in his schedule".
        </p>
      </>
    )
  },
  {
    swedish: "för",
    audioFileName: "för.mp3",
    english: "weekend",
    wordClass: WordClass.Adverb
  },
  {
    swedish: "bättre",
    audioFileName: "bättre.mp3",
    english: "better",
    dictionaryForm: "bra",
    wordClass: WordClass.Adjective
  },
  {
    swedish: "ska",
    audioFileName: "ska.mp3",
    english: "shall, will",
    wordClass: WordClass.Verb,
    moreInfoComponent: (
      <>
        The auxiliary verb <i>ska</i> expresses future tense, but it can also be
        interpreted as "let's" in English.
      </>
    )
  },
  {
    swedish: "säga",
    payAttentionToPronunciation: "[säja]",
    audioFileName: "säga.mp3",
    english: "say",
    wordClass: WordClass.Verb
  },
  {
    swedish: "(en) lördag",
    audioFileName: "lördag.mp3",
    english: "Saturday",
    wordClass: WordClass.Noun
  },
  {
    swedish: "(en) söndag",
    audioFileName: "torsdag.mp3",
    english: "Thursday",
    wordClass: WordClass.Noun
  },
  {
    swedish: "ses",
    payAttentionToPronunciation: "sees",
    audioFileName: "ses.mp3",
    english: "see each other",
    wordClass: WordClass.Verb,
    moreInfoComponent: "See GP"
  },
  {
    swedish: "då (II)",
    audioFileName: "då.mp3",
    english: "then",
    wordClass: WordClass.Adverb
  }
];

export const SevenDaysWithoutASwedishLessonMakesOneWeekAdditionalWords: Word[] = [];
