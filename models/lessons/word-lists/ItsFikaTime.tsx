import React from "react";
import AudioButton from "../../../components/AudioButton";
import { Word, WordClass } from "../../../models/types";

export const itsFikaTimeWords: Word[] = [
  {
    swedish: "ursäkta",
    audioFileName: "ursäkta.mp3",
    english: "excuse",
    wordClass: WordClass.Verb,
    moreInfoComponent: (
      <>
        The <i>mig</i> is implied if there's no object, so Håkan is actually
        saying "Excuse me".
      </>
    )
  },
  {
    swedish: "klockan",
    dictionaryForm: "(en) klocka",
    audioFileName: "klockan.mp3",
    english: "excuse",
    wordClass: WordClass.Noun,
    moreInfoComponent: (
      <>
        The expression <i>Vad är klockan?</i> literally means "What's the
        clock?" but this is how we ask what's the time.
      </>
    )
  },
  {
    swedish: "mobilen (= mobiltelefonen)",
    dictionaryForm: "(en) mobil (= en mobiltelefon)",
    audioFileName: "mobilen.mp3",
    english: "cell phone",
    wordClass: WordClass.Noun,
    moreInfoComponent: (
      <>
        This is the definite form of <i>mobil</i>.
      </>
    ),
    subWords: [{
      swedish: 'telefonen',
      dictionaryForm: "(en) telefon",
      audioFileName: "telefonen.mp3",
      english: "phone",
      wordClass: WordClass.Noun
    }]
  },
  {
    swedish: "glömde",
    dictionaryForm: "glömma",
    audioFileName: "glömde.mp3",
    english: "forgot",
    wordClass: WordClass.Noun,
    moreInfoComponent: (
      <>
        This is the past tense of <i>glömma</i>.
      </>
    )
  },
  {
    swedish: "hemma",
    audioFileName: "hemma.mp3",
    english: "at home",
    wordClass: WordClass.Adverb,
    moreInfoComponent: (
      <>
        <p>
          This is an adverb and not a preposition. You can for example simply
          say .
        </p>
        <p className="w3-margin-left">Jag är hemma.</p>
        <p>
          In some cases, <i>hemma</i> can also refer to one's home country.
        </p>
      </>
    )
  },
  {
    swedish: "vad synd",
    audioFileName: "vad synd.mp3",
    english: "(when telling time) it",
    wordClass: WordClass.Phrase,
    moreInfoComponent: (
      <>
        Literally this phrase means "What a sin!" but the actual meaning is "too
        bad", as in "too bad something happened".
      </>
    ),
    subWords: [
      {
        swedish: "(en) synd",
        audioFileName: "synd.mp3",
        english: "sin",
        wordClass: WordClass.Noun
      }
    ]
  },
  {
    swedish: "hon",
    audioFileName: "hon.mp3",
    english: "(when telling time) it",
    wordClass: WordClass.Pronoun,
    moreInfoComponent: "See GP"
  },
  {
    swedish: "(en) kvart",
    audioFileName: "kvart.mp3",
    english: "quarter",
    wordClass: WordClass.Noun
  },
  {
    swedish: "över",
    audioFileName: "över.mp3",
    english: "over; past (time)",
    wordClass: WordClass.Preposition,
    moreInfoComponent: (
      <>
        The preposition <i>över</i> normally translates to "over", but in the
        context of time it's more correctly translated as "past".
      </>
    )
  },
  {
    swedish: "förresten",
    audioFileName: "förresten.mp3",
    english: "by the way",
    wordClass: WordClass.Adverb
  },
  {
    swedish: "fyller år",
    audioFileName: "fyller år.mp3",
    wordClass: WordClass.Verb,
    english: "to have one's birthday; to turn a certain age",
    dictionaryForm: "fylla år",
    moreInfoComponent: (
      <>
        <p>
          On its own, the verb <i>fylla</i> means "to fill". It can also take on
          meanings related to fill in English, such as <i>fylla i</i> (= fill
          in) and <i>fylla upp</i> (=fill up).
        </p>

        <p>
          In the context of people, <i>fylla</i> is followed by a number or the
          word
          <i>år</i> (year(s)) and takes on the meaning of "having one's
          birthday" or "to turn a X years old":
        </p>

        <p className="w3-margin-left">
          Jag fyller år idag. (= It's my birthday).
          <br />
          Hon fyller 20 (år) idag. (= She turns 20 today).
        </p>
      </>
    ),
    subWords: [
      {
        swedish: "fyller",
        audioFileName: "fyller.mp3",
        wordClass: WordClass.Verb,
        english: "fill"
      },
      {
        swedish: "(ett) år",
        audioFileName: "år.mp3",
        wordClass: WordClass.Noun,
        english: "year"
      }
    ]
  },
  {
    swedish: "Ingvar",
    audioFileName: "ingvar.mp3",
    english: "(a male name)",
    wordClass: WordClass.Noun
  },
  {
    swedish: "idag, i dag",
    audioFileName: "idag.mp3",
    english: "today",
    wordClass: WordClass.Adverb
  },
  {
    swedish: "när",
    audioFileName: "när.mp3",
    english: "when",
    wordClass: WordClass.Adverb
  },
  {
    swedish: "fikat",
    dictionaryForm: "(ett) fika",
    audioFileName: "fikat.mp3",
    english: "fika",
    wordClass: WordClass.Noun,
    moreInfoComponent: "See CN"
  },
  {
    swedish: "halv",
    dictionaryForm: "(en) halva",
    audioFileName: "halv.mp3",
    english: "half; half past",
    wordClass: WordClass.Noun,
    moreInfoComponent: (
      <>
        <p>
          In the context of time, we say <i>halv</i>. Notice that we say the
          hour that comes next, e.g. halv tre means 2:30 and not 3:30.
        </p>
        <p>
          Halv can also be said in context with other en-numbers, such as
          <i>en och en halv miljon</i>.
        </p>
        <p>
          In other cases or when used as an adjective, use <i>halva</i>.
        </p>
      </>
    )
  },
  {
    swedish: "så",
    audioFileName: "så.mp3",
    english: "so",
    wordClass: WordClass.Conjunction
  },
  {
    swedish: "snart",
    audioFileName: "snart.mp3",
    english: "soon",
    wordClass: WordClass.Adverb
  },
  {
    swedish: "dags",
    audioFileName: "dags.mp3",
    english: "time (for something to happen)",
    wordClass: WordClass.Adverb,
    moreInfoComponent: (
      <>
        This is an abstract meaning of time is used in expressions like "it's
        time for you to grow up" or "it's time to take out the trash".
      </>
    )
  },
  {
    swedish: "hoppas",
    audioFileName: "hoppas.mp3",
    english: "hope",
    wordClass: WordClass.Verb,
    moreInfoComponent: (<>The sentence in the text omits the subject, <i>jag</i>.</>)
  },
  {
    swedish: "blir",
    dictionaryForm: "bli",
    audioFileName: "blir.mp3",
    english: "will be, become",
    wordClass: WordClass.Verb,
  },
  {
    swedish: "choklad",
    audioFileName: "choklad.mp3",
    english: "chocolate",
    wordClass: WordClass.Noun
  }
];

export const itsFikaTimeAdditionalWords: Word[] = [
  {
    swedish: "i",
    audioFileName: "i.mp3",
    english: "(in context of time:) to",
    wordClass: WordClass.Preposition
  },
  {
    swedish: "på",
    audioFileName: "på.mp3",
    english: "(in context of time:) in the",
    wordClass: WordClass.Preposition,
    moreInfoComponent: "See GP"
  },
  {
    swedish: "morgonen",
    dictionaryForm: "(en) morgon",
    audioFileName: "morgonen.mp3",
    english: "the morning",
    wordClass: WordClass.Noun
  },
  {
    swedish: "förmiddagen",
    dictionaryForm: "(en) morgon",
    audioFileName: "förmiddagen.mp3",
    english: "the time after morning but before noon (usually 10-12)",
    wordClass: WordClass.Noun
  },
  {
    swedish: "dagen",
    dictionaryForm: "(en) dag",
    audioFileName: "dagen.mp3",
    english: "the day",
    wordClass: WordClass.Noun,
    moreInfoComponent: (
      <p>
        In casual speech this is pronounced [da:n]:{" "}
        <AudioButton fileName="dan.mp3" />
      </p>
    )
  },
  {
    swedish: "eftermiddagen",
    dictionaryForm: "(en) eftermiddag",
    audioFileName: "eftermiddagen.mp3",
    english: "the afternoon",
    wordClass: WordClass.Noun
  },
  {
    swedish: "kvällen",
    dictionaryForm: "(en) kväll",
    audioFileName: "kvällen.mp3",
    english: "the evening",
    wordClass: WordClass.Noun
  },
  {
    swedish: "natten",
    dictionaryForm: "(en) natt",
    audioFileName: "natten.mp3",
    english: "the night",
    wordClass: WordClass.Noun
  },
  {
    swedish: "flyget",
    dictionaryForm: "(ett) flyg",
    audioFileName: "flyget.mp3",
    english: "the flight",
    wordClass: WordClass.Noun
  },
  {
    swedish: "avgår",
    dictionaryForm: "avgå",
    audioFileName: "avgår.mp3",
    english: "depart",
    wordClass: WordClass.Verb
  }
];
