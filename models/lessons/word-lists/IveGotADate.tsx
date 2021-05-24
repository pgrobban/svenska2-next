import React from "react";
import AudioButton from "../../../components/AudioButton";
import { Word, WordClass } from "../../../models/types";

export const iveGotADateWords: Word[] = [
  {
    swedish: "månader",
    english: "months",
    dictionaryForm: "(en) månad",
    wordClass: WordClass.Noun,
    audioFileName: "månader.mp3",
    moreInfoComponent: (
      <>
        This is the plural form of <i>månad</i>.
      </>
    )
  },
  {
    swedish: "januari",
    english: "January",
    wordClass: WordClass.Noun,
    audioFileName: "januari.mp3"
  },
  {
    swedish: "februari",
    english: "February",
    wordClass: WordClass.Noun,
    audioFileName: "februari.mp3"
  },
  {
    swedish: "mars",
    english: "Mars",
    wordClass: WordClass.Noun,
    audioFileName: "mars.mp3"
  },
  {
    swedish: "april",
    english: "April",
    wordClass: WordClass.Noun,
    audioFileName: "april.mp3"
  },
  {
    swedish: "maj",
    english: "May",
    wordClass: WordClass.Noun,
    audioFileName: "maj.mp3"
  },
  {
    swedish: "juni",
    english: "June",
    wordClass: WordClass.Noun,
    audioFileName: "juni.mp3"
  },
  {
    swedish: "juli",
    english: "July",
    wordClass: WordClass.Noun,
    audioFileName: "juli.mp3"
  },
  {
    swedish: "augusti",
    payAttentionToPronunciation: "[agusti]",
    english: "August",
    wordClass: WordClass.Noun,
    audioFileName: "augusti.mp3"
  },
  {
    swedish: "september",
    english: "September",
    wordClass: WordClass.Noun,
    audioFileName: "september.mp3"
  },
  {
    swedish: "oktober",
    english: "October",
    wordClass: WordClass.Noun,
    audioFileName: "oktober.mp3"
  },
  {
    swedish: "november",
    english: "November",
    wordClass: WordClass.Noun,
    audioFileName: "november.mp3"
  },
  {
    swedish: "december",
    english: "December",
    wordClass: WordClass.Noun,
    audioFileName: "december.mp3"
  },
  {
    swedish: "några",
    english: "a few",
    wordClass: WordClass.Pronoun,
    audioFileName: "några.mp3"
  },
  {
    swedish: "högtid",
    english: "religious feast/festival",
    wordClass: WordClass.Noun,
    audioFileName: "högtid.mp3",
    moreInfoComponent: "See CN"
  },
  {
    swedish: "nyårsdagen",
    english: "New Year's Day",
    wordClass: WordClass.Noun,
    audioFileName: "nyårsdagen.mp3",
    subWords: [
      {
        swedish: "ett nytt år",
        english: "a new year",
        wordClass: WordClass.Noun,
        audioFileName: "ett nytt år.mp3"
      }
    ]
  },
  {
    swedish: "trettondedag jul",
    english: "Epiphany (holiday)",
    wordClass: WordClass.Noun,
    audioFileName: "trettondedag jul.mp3",
    subWords: [
      {
        swedish: "(en) jul",
        english: "Christmas",
        wordClass: WordClass.Noun,
        audioFileName: "jul.mp3"
      }
    ]
  },
  {
    swedish: "påsk",
    english: "Easter",
    wordClass: WordClass.Noun,
    audioFileName: "påsk.mp3"
  },
  {
    swedish: "infaller",
    dictionaryForm: "infalla",
    english: "(of a holiday) to occur",
    wordClass: WordClass.Verb,
    audioFileName: "infaller.mp3"
  },
  {
    swedish: "någon gång",
    english: "some time",
    wordClass: WordClass.Phrase,
    audioFileName: "någon gång.mp3",
    moreInfoComponent: (
      <>
        Can be slurred to <i>nån gång</i> in casual speech.
      </>
    )
  },
  {
    swedish: "valborgsmässoafton",
    english: "Walpurgis Night",
    audioFileName: "valborgsmässoafton.mp3",
    wordClass: WordClass.Noun,
    moreInfoComponent: "See CN"
  },
  {
    swedish: "Kristi himmelfärds dag",
    english: "Ascension Day",
    wordClass: WordClass.Noun,
    audioFileName: "Kristi himmelfärds dag.mp3",
    moreInfoComponent: "See CN",
    subWords: [
      {
        swedish: "Kristi (Kristus)",
        english: "Christ",
        wordClass: WordClass.Noun,
        audioFileName: "kristi.mp3"
      },
      {
        swedish: "(en) himmelfärd",
        english: "ascension",
        wordClass: WordClass.Noun,
        audioFileName: "kristi.mp3"
      },
      {
        swedish: "(en) himmel",
        english: "sky, heaven",
        wordClass: WordClass.Noun,
        audioFileName: "himmel.mp3"
      },
      {
        swedish: "(en) färd",
        english: "trip, journey",
        wordClass: WordClass.Noun,
        audioFileName: "färd.mp3"
      }
    ]
  },
  {
    swedish: "midsommar",
    english: "MIdsummer (holiday)",
    audioFileName: "midsommar.mp3",
    wordClass: WordClass.Noun
  },
  {
    swedish: "slutet",
    dictionaryForm: "(ett) slut",
    english: "the end",
    audioFileName: "valborgsmässoafton.mp3",
    wordClass: WordClass.Noun,
    moreInfoComponent: (
      <>
        This is the definite form of <i>slut</i>.
      </>
    )
  },
  {
    swedish: "julafton",
    english: "Christmas Eve",
    audioFileName: "julafton.mp3",
    wordClass: WordClass.Noun,
    subWords: [
      {
        swedish: "(en) afton",
        english: "evening",
        wordClass: WordClass.Noun,
        audioFileName: "afton.mp3",
        moreInfoComponent: (
          <>
            This is an old word for eve or evening. In modern Swedish, the word
            for evening is <i>kväll</i>, as you learned in the lesson "It's Fika
            Time".
          </>
        )
      }
    ]
  }
];

export const iveGotADateAdditionalWords: Word[] = [
  {
    swedish: "dagens",
    dictionaryForm: "(en) dag",
    english: "of the day",
    audioFileName: "dagens.mp3",
    wordClass: WordClass.Noun,
    moreInfoComponent: (<>This is the definite genitive form of <i>dag</i>.</>)
  },
  {
    swedish: "(ett) datum",
    english: "date (time)",
    audioFileName: "datum.mp3",
    wordClass: WordClass.Noun
  }
];
