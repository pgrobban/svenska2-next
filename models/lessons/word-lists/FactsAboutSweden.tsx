import React from "react";
import { Word, WordClass } from "../../../models/types";

export const factsAboutSwedenWords: Word[] = [
  {
    swedish: "(ett) land",
    english: "country",
    audioFileName: "land.mp3",
    wordClass: WordClass.Noun
  },
  {
    swedish: "gränsar (till)",
    dictionaryForm: "gränsa (till)",
    english: "border",
    audioFileName: "gränsa.mp3",
    wordClass: WordClass.Verb,
    moreInfoComponent: (
      <>
        This is a verb and not a noun. The <i>till</i> is optional.
      </>
    )
  },
  {
    swedish: "Norge",
    english: "Norway",
    audioFileName: "norge.mp3",
    wordClass: WordClass.Noun
  },
  {
    swedish: "Finland",
    english: "Finland",
    audioFileName: "Finland.mp3",
    wordClass: WordClass.Noun
  },
  {
    swedish: "(en) yta",
    english: "area, surface",
    audioFileName: "yta.mp3",
    wordClass: WordClass.Noun
  },
  {
    swedish: "landet",
    dictionaryForm: "(ett) land",
    english: "the country",
    audioFileName: "landet.mp3",
    wordClass: WordClass.Noun,
    moreInfoComponent: (
      <>
        This is the definite form of <i>land</i>.
      </>
    )
  },
  {
    swedish: "av (I)",
    english: "here: of",
    audioFileName: "av.mp3",
    wordClass: WordClass.Preposition
  },
  {
    swedish: "(en) skog",
    english: "country",
    audioFileName: "land.mp3",
    wordClass: WordClass.Noun
  },
  {
    swedish: "vatten",
    english: "water",
    audioFileName: "vatten.mp3",
    wordClass: WordClass.Noun
  },
  {
    swedish: "(en) mil",
    english: "Swedish mile = 10 km",
    audioFileName: "mil.mp3",
    wordClass: WordClass.Noun
  },
  {
    swedish: "från",
    english: "from",
    audioFileName: "från.mp3",
    wordClass: WordClass.Preposition
  },
  {
    swedish: "norr",
    english: "north",
    audioFileName: "norr.mp3",
    wordClass: WordClass.Adverb
  },
  {
    swedish: "söder, syd",
    english: "south",
    audioFileName: "söder.mp3",
    wordClass: WordClass.Adverb
  },
  {
    swedish: "väster, väst",
    english: "west",
    audioFileName: "väster.mp3",
    wordClass: WordClass.Adverb
  },
  {
    swedish: "öster, öst",
    english: "east",
    audioFileName: "öster.mp3",
    wordClass: WordClass.Adverb
  },
  {
    swedish: "vacker",
    english: "beautiful",
    audioFileName: "vacker.mp3",
    wordClass: WordClass.Adjective
  },
  {
    swedish: "(en) natur",
    english: "nature",
    audioFileName: "natur.mp3",
    wordClass: WordClass.Noun
  },
  {
    swedish: "sjöar",
    dictionaryForm: "(en) sjö",
    english: "lake",
    audioFileName: "sjöar.mp3",
    wordClass: WordClass.Noun
  },
  {
    swedish: "finns",
    dictionaryForm: "finnas",
    english: "exists, is",
    audioFileName: "finns.mp3",
    wordClass: WordClass.Verb,
    moreInfoComponent: "See GP"
  },
  {
    swedish: "berg",
    dictionaryForm: "(ett) berg",
    english: "mountain(s)",
    audioFileName: "berg.mp3",
    wordClass: WordClass.Noun,
    moreInfoComponent: (
      <>
        The word is <i>berg</i> in both singular and plural.
      </>
    )
  },
  {
    swedish: "gott om",
    english: "plenty of",
    audioFileName: "fler än.mp3",
    wordClass: WordClass.Phrase
  },
  {
    swedish: "odlingsbar",
    english: "arable",
    audioFileName: "odlingsbar.mp3",
    wordClass: WordClass.Adjective,
    moreInfoComponent: <>This means land used or suitable for growing crops.</>
  },
  {
    swedish: "(en) mark",
    english: "ground, soil, land",
    audioFileName: "mark.mp3",
    wordClass: WordClass.Noun
  },
  {
    swedish: "fler än",
    english: "more than",
    audioFileName: "fler än.mp3",
    wordClass: WordClass.Phrase
  },
  {
    swedish: "(en) invånare",
    english: "inhabitant",
    audioFileName: "invånare.mp3",
    wordClass: WordClass.Noun,
    moreInfoComponent: (
      <>
        This word is <i>invånare</i> in both singular and plural.
      </>
    )
  },
  {
    swedish: "de flesta",
    english: "most (of something)",
    audioFileName: "de flesta.mp3",
    wordClass: WordClass.Phrase
  },
  {
    swedish: "(en) huvudstad",
    english: "capital city",
    audioFileName: "huvudstad.mp3",
    wordClass: WordClass.Noun,
    dictionaryForm: "(en) stad",
    moreInfoComponent: (
      <>
        This word is formed by the words <i>huvud</i>, which means "head", and{" "}
        <i>stad</i>, which means city.
        <br />
        When used as a prefix, <i>huvud</i> means "main".
      </>
    )
  },
  {
    swedish: "talar",
    english: "speak",
    audioFileName: "talar.mp3",
    wordClass: WordClass.Verb,
    dictionaryForm: "tala",
    moreInfoComponent: (
      <>
        This is a more formal version of the verb <i>prata</i>.
      </>
    )
  },
  {
    swedish: "en del",
    english: "some (literally: one part)",
    audioFileName: "en del.mp3",
    wordClass: WordClass.Phrase,
    dictionaryForm: "tala"
  },
  {
    swedish: "(ett) minoritetsspråk",
    english: "minority language",
    audioFileName: "en del.mp3",
    wordClass: WordClass.Noun,
    subWords: [
      {
        swedish: "(en) minoritet",
        english: "minority",
        audioFileName: "minoritet.mp3",
        wordClass: WordClass.Noun
      },
      {
        swedish: "(ett) språk",
        english: "language",
        audioFileName: "språk.mp3",
        wordClass: WordClass.Noun
      }
    ]
  },
  {
    swedish: "som",
    english: "here: such as",
    audioFileName: "som.mp3",
    wordClass: WordClass.Conjunction
  },
  {
    swedish: "samiska",
    english: "Sami language(s)",
    audioFileName: "samiska.mp3",
    wordClass: WordClass.Noun
  },
  {
    swedish: "finska",
    english: "Finnish language",
    audioFileName: "finska.mp3",
    wordClass: WordClass.Noun
  },
  {
    swedish: "romani",
    english: "Romani language(s)",
    audioFileName: "romani.mp3",
    wordClass: WordClass.Noun
  },
  {
    swedish: "jiddish",
    english: "Yiddish",
    audioFileName: "jiddish.mp3",
    wordClass: WordClass.Noun
  },
  {
    swedish: "(en) kungafamilj",
    english: "royal family",
    audioFileName: "kungafamilj.mp3",
    wordClass: WordClass.Noun,
    subWords: [
      {
        swedish: "(en) kung",
        audioFileName: "kung.mp3",
        english: "king",
        wordClass: WordClass.Noun
      }
    ]
  },
  {
    swedish: "styrs",
    dictionaryForm: "styra",
    english: "govern, control",
    audioFileName: "styrs.mp3",
    wordClass: WordClass.Verb
  },
  {
    swedish: "av (II)",
    english: "here: by",
    audioFileName: "av.mp3",
    wordClass: WordClass.Preposition
  },
  {
    swedish: "(en) statsminister",
    english: "prime minister",
    audioFileName: "statsminister.mp3",
    wordClass: WordClass.Noun,
    subWords: [
      {
        swedish: "(en) stat",
        audioFileName: "stat.mp3",
        english: "state",
        wordClass: WordClass.Noun
      },
      {
        swedish: "(en) minister",
        audioFileName: "minister.mp3",
        english: "minister",
        wordClass: WordClass.Noun
      }
    ]
  },
  {
    swedish: "parlamentet",
    dictionaryForm: "(ett) parlament",
    english: "parliament",
    audioFileName: "parlamentet.mp3",
    wordClass: WordClass.Noun,
    moreInfoComponent: (
      <>
        This is the definitive form of <i>parlament</i>.
      </>
    )
  },
  {
    swedish: "riksdagen",
    dictionaryForm: "(en) riksdag",
    english: "(see more info)",
    audioFileName: "parlamentet.mp3",
    wordClass: WordClass.Noun,
    moreInfoComponent: (
      <>
        <p>
          The Swedish <i>riksdag</i> is the national legislature and supreme
          decision-making body of Sweden. We will get back to talking about how
          Sweden is ruled in a future lesson.
        </p>
        <p>
          The word riksdag is also used for the parliament of several other
          countries, compare for instance the German <i>Reichstag</i>.
        </p>
      </>
    )
  }
];

export const factsAboutSwedenAdditionalWords: Word[] = [];
