import React from "react";
import { Word, WordClass } from "../../../models/types";

export const atThePizzeriaWords: Word[] = [
  {
    swedish: "menyn",
    dictionaryForm: "(en) meny",
    audioFileName: "meny.mp3",
    english: "meny",
    wordClass: WordClass.Noun,
    moreInfoComponent: (
      <>
        This is the definitive form of the word <i>meny</i>.
      </>
    )
  },
  {
    swedish: "kan",
    audioFileName: "kan.mp3",
    english: "can, may",
    wordClass: WordClass.Verb,
    moreInfoComponent: "See GP"
  },
  {
    swedish: "få",
    audioFileName: "få.mp3",
    english: "get, obtain",
    wordClass: WordClass.Verb,
    moreInfoComponent: (
      <>
        <p>
          When requesting something, <i>få</i> is better translated as "have".
        </p>
        <p className="w3-margin-left">
          Kan jag få...?
          <br />= May I have...?
        </p>
      </>
    )
  },
  {
    swedish: "Hawaii",
    audioFileName: "hawaii.mp3",
    english: "Hawaii",
    wordClass: WordClass.Noun,
    moreInfoComponent:
      "Name of a US state as well as a pizza with pineapple topping."
  },
  {
    swedish: "utan",
    audioFileName: "utan.mp3",
    english: "without",
    wordClass: WordClass.Preposition
  },
  {
    swedish: "skinka",
    audioFileName: "skinka.mp3",
    english: "ham",
    wordClass: WordClass.Noun
  },
  {
    swedish: "med",
    audioFileName: "med.mp3",
    english: "with",
    wordClass: WordClass.Preposition,
    moreInfoComponent: "Can be slurred to [me] or [mä]."
  },
  {
    swedish: "extra",
    audioFileName: "extra.mp3",
    english: "extra, additional",
    wordClass: WordClass.Adverb
  },
  {
    swedish: "ost",
    audioFileName: "ost.mp3",
    english: "cheese",
    wordClass: WordClass.Noun
  },
  {
    swedish: "tack",
    audioFileName: "tack.mp3",
    english: "thanks; please",
    wordClass: WordClass.Interjection,
    moreInfoComponent: (
      <>
        <p>
          When expressing gratitude, <i>tack</i> simply means "thanks".
        </p>
        <p>
          When making a request, <i>tack</i> is a light version of "please".
        </p>
        <p>Look at the text and observe the different usages of this word.</p>
      </>
    )
  },
  {
    swedish: "javisst",
    audioFileName: "javisst.mp3",
    english: "sure, certainly, of course",
    wordClass: WordClass.Interjection,
    moreInfoComponent: (
      <>
        <p>This is used as "sure" or "certainly" for emphasis in English.</p>
        <p>
          Note that <i>javisst</i> in Swedish is always an interjection. It
          cannot be used as adverbs like "sure" or "certainly" in English.
        </p>
      </>
    )
  },
  {
    swedish: "vill",
    audioFileName: "vill.mp3",
    english: "want",
    wordClass: WordClass.Verb,
    moreInfoComponent: "See GP"
  },
  {
    swedish: "ha",
    audioFileName: "ha.mp3",
    english: "have",
    wordClass: WordClass.Verb
  },
  {
    swedish: "Cola Zero",
    audioFileName: "cola zero.mp3",
    english: "Coca-Cola Zero",
    wordClass: WordClass.Noun
  },
  {
    swedish: "(en) dricka",
    audioFileName: "dricka.mp3",
    english: "(a bottled or canned) drink",
    wordClass: WordClass.Noun
  },
  {
    swedish: "det blir...",
    audioFileName: "det blir.mp3",
    english: "that'll be",
    wordClass: WordClass.Phrase,
    moreInfoComponent: (
      <>
        <i>Det blir X kronor</i> is a phrase used by cashiers to announce the
        amount of money the customer has to pay. Sometimes, <i>det blir</i> is
        omitted and only the sum is announced.
      </>
    )
  },
  {
    swedish: "hundra",
    audioFileName: "hundra.mp3",
    english: "hundred",
    wordClass: WordClass.Numeral
  },
  {
    swedish: "blippar",
    dictionaryForm: "blippa",
    audioFileName: "blippar.mp3",
    english: "(to pay with contactless card)",
    wordClass: WordClass.Verb
  },
  {
    swedish: "(ett) bankkort",
    audioFileName: "bankkort.mp3",
    english: "bank card, usually debit",
    wordClass: WordClass.Noun,
    subWords: [
      {
        swedish: "(en) bank",
        audioFileName: "bank.mp3",
        english: "bank",
        wordClass: WordClass.Noun
      },
      {
        swedish: "(ett) kort",
        audioFileName: "kort.mp3",
        english: "card",
        wordClass: WordClass.Noun
      }
    ]
  },
  {
    swedish: "kvittot",
    dictionaryForm: "(ett) kvitto",
    audioFileName: "kvittot.mp3",
    english: "a receipt",
    wordClass: WordClass.Verb
  },
  {
    swedish: "dröjer",
    dictionaryForm: "dröja",
    audioFileName: "dröjer.mp3",
    english: "take (time)",
    wordClass: WordClass.Verb
  },
  {
    swedish: "till",
    audioFileName: "till.mp3",
    english: "to",
    wordClass: WordClass.Preposition
  },
  {
    swedish: "minuter",
    dictionaryForm: "(en) minut",
    audioFileName: "minuter.mp3",
    english: "minute",
    wordClass: WordClass.Noun
  },
  {
    swedish: "sätta dig",
    payAttentionToPronunciation: "sätta dej",
    dictionaryForm: "sätta sig",
    audioFileName: "sätta dig.mp3",
    english: "sit",
    wordClass: WordClass.Verb,
    moreInfoComponent:
      "We will get back to the grammar of this verb phrase in a later lesson."
  },
  {
    swedish: "under tiden",
    audioFileName: "under tiden.mp3",
    english: "meanwhile",
    wordClass: WordClass.Phrase,
    moreInfoComponent: (
      <>
        In the text you can interpret it as "while you wait" as the "wait" is
        implicit.
      </>
    )
  },
  {
    swedish: "väntar",
    dictionaryForm: "vänta",
    audioFileName: "väntar.mp3",
    english: "wait",
    wordClass: WordClass.Verb
  }
];

export const atThePizzeriaAdditionalWords: Word[] = [
  {
    swedish: "bara",
    audioFileName: "bara.mp3",
    english: "only, just",
    wordClass: WordClass.Adverb
  },
  {
    swedish: "vegetarisk",
    audioFileName: "vegetarisk.mp3",
    english: "vegetarian",
    wordClass: WordClass.Adjective
  },
  {
    swedish: "vegansk",
    audioFileName: "vegansk.mp3",
    english: "vegan",
    wordClass: WordClass.Adjective
  },
  {
    swedish: "mozzarella",
    audioFileName: "mozzarella.mp3",
    english: "mozzarella (cheese)",
    wordClass: WordClass.Noun
  },
  {
    swedish: "champinjoner",
    dictionaryForm: "(en) champinjon",
    audioFileName: "champinjon.mp3",
    english:
      "Agaricus bisporus (a kind of edible mushroom, common topping on pizzas)",
    wordClass: WordClass.Noun
  },
  {
    swedish: "inbakad",
    audioFileName: "inbakad.mp3",
    english: "oven-baked and folded",
    wordClass: WordClass.Adjective
  },
  {
    swedish: "(en) ananas",
    audioFileName: "ananas.mp3",
    english: "pineapple",
    wordClass: WordClass.Noun
  },
  {
    swedish: "räkor",
    dictionaryForm: "(en) räka",
    audioFileName: "räkor.mp3",
    english: "shrimps",
    wordClass: WordClass.Noun
  },
  {
    swedish: "salami",
    audioFileName: "salami.mp3",
    english: "salami",
    wordClass: WordClass.Noun
  },
  {
    swedish: "(en) bacon",
    audioFileName: "bacon.mp3",
    english: "bacon",
    wordClass: WordClass.Noun
  },
  {
    swedish: "(en) lök",
    audioFileName: "lök.mp3",
    english: "onion",
    wordClass: WordClass.Noun
  },
  {
    swedish: "(ett) ägg",
    audioFileName: "ägg.mp3",
    english: "egg",
    wordClass: WordClass.Noun
  },
  {
    swedish: "(en) tonfisk",
    audioFileName: "tonfisk.mp3",
    english: "tuna",
    wordClass: WordClass.Noun
  },
  {
    swedish: "musslor",
    dictionaryForm: "(en) mussla",
    audioFileName: "musslor.mp3",
    english: "mussles",
    wordClass: WordClass.Noun
  },
  {
    swedish: "gorgonzola",
    audioFileName: "gorgonzola.mp3",
    english: "gorgonzola (cheese)",
    wordClass: WordClass.Noun
  },
  {
    swedish: "kebab",
    audioFileName: "kebab.mp3",
    english: "kebab (thinly sliced, spiced and processed meat)",
    wordClass: WordClass.Noun
  },
  {
    swedish: "(en) sås",
    audioFileName: "sås.mp3",
    english: "sauce",
    wordClass: WordClass.Noun
  },
  {
    swedish: "(en) vitlök",
    audioFileName: "vitlök.mp3",
    english: "garlic",
    wordClass: WordClass.Noun
  },
  {
    swedish: "köttfärs",
    audioFileName: "köttfärs.mp3",
    english: "minced meat",
    wordClass: WordClass.Noun
  },
  {
    swedish: "(en) paprika",
    audioFileName: "paprika.mp3",
    english: "paprika",
    wordClass: WordClass.Noun
  }
];
