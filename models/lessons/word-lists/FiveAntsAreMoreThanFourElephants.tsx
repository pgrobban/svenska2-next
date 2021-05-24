import React from "react";
import AudioButton from "../../../components/AudioButton";
import { Word, WordClass } from "../../../models/types";

export const fiveAntsAreMoreThanFourElephantsWords: Word[] = [
  {
    swedish: "bjuda (på)",
    english: "invite, treat sb. for sth.",
    audioFileName: "land.mp3",
    wordClass: WordClass.Verb
  },
  {
    swedish: "(en) middag",
    english: "dinner",
    audioFileName: "middag.mp3",
    wordClass: WordClass.Noun,
    moreInfoComponent: (
      <>
        I would forgive you for thinking <i>middag</i> means lunch as it is
        eaten in the middle of the day, but sadly that is not the case...
      </>
    )
  },
  {
    swedish: "helgen",
    dictionaryForm: "(en) helg",
    english: "the weekend",
    audioFileName: "helgen.mp3",
    wordClass: WordClass.Noun
  },
  {
    swedish: "behöver",
    dictionaryForm: "behöva",
    english: "need to",
    audioFileName: "behöver.mp3",
    wordClass: WordClass.Verb
  },
  {
    swedish: "därför",
    english: "for that reason, therefore",
    audioFileName: "därför.mp3",
    wordClass: WordClass.Adverb
  },
  {
    swedish: "handla",
    english: "buy, shop",
    audioFileName: "handla.mp3",
    wordClass: WordClass.Verb,
    moreInfoComponent: (
      <>
        <p>
          A synonym to <i>handla</i> is <i>köpa</i>, which you learned in lesson
          2. Both <i>handla</i> and <i>köpa</i> are commonly used.
          <br />
          However, <i>handla</i> is more specific for talking about small
          purchases as an individual person, in particular when it comes to
          daily items such as groceries or clothes. You can of course still say{" "}
          <i>köpa mat</i>.
        </p>

        <p>
          Somewhat confusingly, <i>handla</i> can in some contexts mean "buying
          and selling". For example, the noun <i>bilhandlare</i> means car
          dealer.
        </p>
      </>
    )
  },
  {
    swedish: "mat",
    english: "food",
    audioFileName: "mat.mp3",
    wordClass: WordClass.Noun
  },
  {
    swedish: "ICA",
    english: "(a supermarket chain)",
    audioFileName: "ICA.mp3",
    wordClass: WordClass.Noun
  },
  {
    swedish: "därför att",
    english: "because",
    audioFileName: "därför.mp3",
    wordClass: WordClass.Noun
  },
  {
    swedish: "(ett) extrapris",
    english: "special offer",
    audioFileName: "extrapris.mp3",
    wordClass: WordClass.Noun,
    subWords: [
      {
        swedish: "extra",
        english: "extra",
        audioFileName: "extra.mp3",
        wordClass: WordClass.Adjective
      },
      {
        swedish: "(ett) pris",
        english: "price",
        audioFileName: "pris.mp3",
        wordClass: WordClass.Noun
      }
    ]
  },
  {
    swedish: "frukter",
    dictionaryForm: "(en) frukt",
    english: "fruits",
    audioFileName: "frukter.mp3",
    wordClass: WordClass.Noun
  },
  {
    swedish: "grönsaker",
    dictionaryForm: "(en) grönsak",
    english: "vegetables",
    audioFileName: "grönsaker.mp3",
    wordClass: WordClass.Noun,
    subWords: [
      {
        swedish: "(en) sak",
        english: "thing",
        audioFileName: "sak.mp3",
        wordClass: WordClass.Noun
      }
    ]
  },
  {
    swedish: "lägger",
    dictionaryForm: "lägga",
    english: "put, place",
    audioFileName: "frukter.mp3",
    wordClass: WordClass.Verb
  },
  {
    swedish: "äpplen",
    dictionaryForm: "(ett) äpple",
    english: "apples",
    audioFileName: "äpplen.mp3",
    wordClass: WordClass.Noun
  },
  {
    swedish: "gurkor",
    dictionaryForm: "(en) gurka",
    english: "cucumbers",
    audioFileName: "gurkor.mp3",
    wordClass: WordClass.Noun
  },
  {
    swedish: "ostar",
    dictionaryForm: "(en) ost",
    english: "cheeses",
    audioFileName: "ostar.mp3",
    wordClass: WordClass.Noun
  },
  {
    swedish: "korgen",
    dictionaryForm: "(en) korg",
    english: "the basket",
    audioFileName: "korgen.mp3",
    wordClass: WordClass.Noun
  },
  {
    swedish: "måste",
    english: "have to",
    audioFileName: "måste.mp3",
    wordClass: WordClass.Verb,
    moreInfoComponent: "See GP"
  },
  {
    swedish: "vänta",
    english: "wait",
    audioFileName: "vänta.mp3",
    wordClass: WordClass.Verb
  },
  {
    swedish: "kön",
    dictionaryForm: "(en) kö",
    payAttentionToPronunciation: "[kön]",
    english: "the queue",
    audioFileName: "kön.mp3",
    wordClass: WordClass.Noun,
    moreInfoComponent: (
      <>
        According to the rules we learned in the pronunciation lessons, this
        should be pronounced with a "sh" sound in the beginning. However, the
        word pronounced "shön" is an ett-noun meaning "gender". The word for
        queue is pronounced with a normal k sound.
      </>
    )
  },
  {
    swedish: "sedan",
    english: "after that",
    audioFileName: "sedan.mp3",
    wordClass: WordClass.Adverb,
    moreInfoComponent: (
      <>
        Can be slurred to <i>sen</i> <AudioButton fileName="sen-short.mp3" />,
        which has a short vowel sound. The word <i>sen</i>{" "}
        <AudioButton fileName="sen-long.mp3" /> with a long vowel sound means
        "late".
      </>
    )
  },
  {
    swedish: "Lidl",
    english: "(a supermarket chain)",
    audioFileName: "Lidl.mp3",
    wordClass: WordClass.Verb
  },
  {
    swedish: "(en) meter",
    english: "meter",
    audioFileName: "meter.mp3",
    wordClass: WordClass.Noun
  },
  {
    swedish: "(en) meter",
    english: "meter",
    audioFileName: "meter.mp3",
    wordClass: WordClass.Noun,
    moreInfoComponent: (
      <>
        The noun <i>meter</i> can be both singular and plural. In casual speech,
        some people also say <i>metrar</i> in plural.
      </>
    )
  },
  {
    swedish: "tar",
    dictionaryForm: "ta",
    english: "take",
    audioFileName: "tar.mp3",
    wordClass: WordClass.Verb
  },
  {
    swedish: "lång",
    english: "long, tall",
    audioFileName: "lång.mp3",
    wordClass: WordClass.Adverb
  },
  {
    swedish: "(en) tid",
    english: "time",
    audioFileName: "tid.mp3",
    wordClass: WordClass.Noun
  },
  {
    swedish: "dit",
    english: "there",
    audioFileName: "dit.mp3",
    wordClass: WordClass.Adverb
  },
  {
    swedish: "hittar",
    dictionaryForm: "hitta",
    english: "find",
    audioFileName: "hittar.mp3",
    wordClass: WordClass.Verb
  },
  {
    swedish: "(ett) kilo",
    english: "kilo",
    audioFileName: "kilo.mp3",
    wordClass: WordClass.Noun,
    moreInfoComponent: (
      <>
        <i>kilo</i> can be both singular and plural.
      </>
    )
  },
  {
    swedish: "räkor",
    dictionaryForm: "(en) räka",
    english: "shrimps",
    audioFileName: "räkor.mp3",
    wordClass: WordClass.Noun
  },
  {
    swedish: "(ett) kött",
    english: "meat",
    audioFileName: "kött.mp3",
    wordClass: WordClass.Noun
  },
  {
    swedish: "burkar",
    dictionaryForm: "(en) burk",
    english: "can",
    audioFileName: "burkar.mp3",
    wordClass: WordClass.Noun
  },
  {
    swedish: "flaskor",
    dictionaryForm: "(en) flaska",
    english: "can",
    audioFileName: "burkar.mp3",
    wordClass: WordClass.Noun
  },
  {
    swedish: "kronor",
    dictionaryForm: "(en) krona",
    english: "crown, Swedish krona (currency)",
    audioFileName: "kronor.mp3",
    wordClass: WordClass.Noun
  }
];

export const fiveAntsAreMoreThanFourElephantsAdditionalWords: Word[] = [
  {
    swedish: "myror",
    dictionaryForm: "(en) myra",
    english: "ants",
    audioFileName: "myror.mp3",
    wordClass: WordClass.Noun
  },
  {
    swedish: "elefanter",
    dictionaryForm: "(en) elefant",
    english: "elephants",
    audioFileName: "elefant.mp3",
    wordClass: WordClass.Noun
  }
];
