import React from "react";
import { Word, WordClass } from "../../../models/types";

const words: Word[] = [
  {
    swedish: "leker",
    dictionaryForm: "leka",
    audioFileName: "leker.mp3",
    english: "play",
    wordClass: WordClass.Verb,
    moreInfoComponent: (
      <>
        <p>
          This word is used to mean play as in a child is playing in a
          playground, toys, etc.
        </p>
        <p>
          To express playing games, use <i>spelar</i> (see below).
        </p>
      </>
    )
  },
  {
    swedish: "sover",
    dictionaryForm: "sova",
    audioFileName: "sover.mp3",
    payAttentionToPronunciation: "[såver]",
    english: "sleep",
    wordClass: WordClass.Verb
  },
  {
    swedish: "simmar",
    dictionaryForm: "simma",
    audioFileName: "simmar.mp3",
    english: "swim",
    wordClass: WordClass.Verb
  },
  {
    swedish: "skriver",
    dictionaryForm: "skriva",
    audioFileName: "skriver.mp3",
    english: "write",
    wordClass: WordClass.Verb
  },
  {
    swedish: "en",
    audioFileName: "en.mp3",
    english: "one",
    wordClass: WordClass.Numeral,
    moreInfoComponent: "See GP"
  },
  {
    swedish: "(en) tidning",
    audioFileName: "tidning.mp3",
    english: "newspaper",
    wordClass: WordClass.Noun
  },
  {
    swedish: "kör",
    dictionaryForm: "köra",
    audioFileName: "kör.mp3",
    english: "drive",
    wordClass: WordClass.Verb
  },
  {
    swedish: "(en) bil",
    audioFileName: "bil.mp3",
    english: "car",
    wordClass: WordClass.Noun
  },
  {
    swedish: "åker",
    dictionaryForm: "åka",
    audioFileName: "åker.mp3",
    english: "ride/travel (with a vehicle)",
    wordClass: WordClass.Verb
  },
  {
    swedish: "(ett) tåg",
    audioFileName: "tåg.mp3",
    english: "(a) train",
    wordClass: WordClass.Noun
  },
  {
    swedish: "baka",
    audioFileName: "baka.mp3",
    english: "bake",
    wordClass: WordClass.Verb
  },
  {
    swedish: "(ett) bröd",
    audioFileName: "bröd.mp3",
    english: "bread",
    wordClass: WordClass.Noun
  },
  {
    swedish: "äter",
    dictionaryForm: "äter",
    audioFileName: "äta.mp3",
    english: "eat",
    wordClass: WordClass.Verb
  },
  {
    swedish: "dricker",
    dictionaryForm: "dricka",
    audioFileName: "dricker.mp3",
    english: "(to) drink",
    wordClass: WordClass.Verb
  },
  {
    swedish: "spelar",
    dictionaryForm: "spela",
    audioFileName: "spela.mp3",
    english: "to play (a game)",
    wordClass: WordClass.Verb,
    moreInfoComponent: (
      <>
        <p>
          The verb <i>spela</i> has many meanings. The basic meaning is to play
          or perform something.
        </p>
        <p>
          You can use particles in form of prepositions to change the meaning to
          a more specific one, e.g.
          <ul>
            <li>
              <i>spela in</i> (= to record something)
            </li>
            <li>
              <i>spela upp</i> (= to play back, e.g. a recorded tape)
            </li>
            <li>
              <i>spela över</i> (= to emote, overact)
            </li>
          </ul>
        </p>
      </>
    )
  },
  {
    swedish: "(ett) datorspel",
    audioFileName: "datorspel.mp3",
    english: "computer game",
    wordClass: WordClass.Noun,
    subWords: [
      {
        swedish: "(en) dator",
        audioFileName: "dator.mp3",
        english: "computer",
        wordClass: WordClass.Noun
      },
      {
        swedish: "(ett) spel",
        audioFileName: "spel.mp3",
        english: "game",
        wordClass: WordClass.Noun
      }
    ]
  },
  {
    swedish: "tittar",
    dictionaryForm: "titta",
    audioFileName: "tittar.mp3",
    english: "(to) watch",
    wordClass: WordClass.Verb
  },
  {
    swedish: "på",
    audioFileName: "på.mp3",
    english: "at, on",
    wordClass: WordClass.Preposition
  },
  {
    swedish: "(en) TV",
    audioFileName: "tv.mp3",
    english: "TV",
    wordClass: WordClass.Noun
  },
  {
    swedish: "tränar",
    dictionaryForm: "träna",
    audioFileName: "tränar.mp3",
    english: "work out, exercise",
    wordClass: WordClass.Verb
  }
];
export default words;
