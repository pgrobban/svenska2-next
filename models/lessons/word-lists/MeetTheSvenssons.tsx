import React from "react";
import { Word, WordClass } from "../../../models/types";

const words: Word[] = [
  {
    swedish: "hej",
    audioFileName: "hej.mp3",
    english: "hi, hello",
    wordClass: WordClass.Interjection,
    moreInfoComponent: (
      <>
        <p>
          This is the typical greeting in Swedish. It can be used among friends
          as well as most semi-formal situations.
        </p>
        <p>
          The word <i>hallå</i> which sounds like it's a direct translation of
          the word hello in English, but it is only used as a greeting in some
          dialects.
          <br />
          The two main uses for hallå in Swedish are:
          <br />
          - when answering the phone, and then it gets a rising tone like a
          question: hallå?
          <br />- when being upset about something or you want to bring
          attention to a situation, e.g. someone dropped their wallet.{" "}
          <i>Hallå!</i> in this sutation is more like "Hey, you there!"
        </p>
      </>
    )
  },
  {
    swedish: "jag",
    audioFileName: "jag.mp3",
    english: "I",
    wordClass: WordClass.Pronoun
  },
  {
    swedish: "heter",
    dictionaryForm: 'heta',
    audioFileName: "heter.mp3",
    english: "to be named/called",
    wordClass: WordClass.Verb,
    moreInfoComponent: "See GP"
  },
  {
    swedish: "Håkan",
    audioFileName: "håkan.mp3",
    english: "(a male name)",
    wordClass: WordClass.Noun
  },
  {
    swedish: "och",
    audioFileName: "och.mp3",
    payAttentionToPronunciation: "[ock]",
    english: "and",
    wordClass: WordClass.Conjunction
  },
  {
    swedish: "min",
    audioFileName: "min.mp3",
    payAttentionToPronunciation: "[minn]",
    english: "my, mine",
    wordClass: WordClass.Noun,
    moreInfoComponent: (
      <p>
        There are two words for personal pronouns in Swedish, depending on whether
        the noun tha follows is an en-word, ett-word (see note on word <i>en</i>{" "}
        below) or plural. We will take a closer look at this in another lesson.
      </p>
    )
  },
  {
    swedish: "fru",
    audioFileName: "fru.mp3",
    english: "wife",
    wordClass: WordClass.Noun,
    moreInfoComponent: (
      <>
        <p>
          If you're German-speaking you might recognize this as the word{" "}
          <i>Frau</i>.
        </p>
        <p>
          Just like in German, fru could be used as a title to mean "Mrs.", but
          titles were dropped in Swedish in the latter half of the 20th century,
          and now we refer to almost everyone by their first name or "you".
        </p>
        <p>
          You can still see the usage of <i>herr</i> and <i>fru</i> in subtitles
          of foreign movies or in movies that take place in Sweden many years
          ago.
        </p>
      </>
    )
  },
  {
    swedish: "Lena",
    audioFileName: "lena.mp3",
    english: "(a female name)",
    wordClass: WordClass.Noun
  },
  {
    swedish: "vi",
    audioFileName: "vi.mp3",
    english: "we",
    wordClass: WordClass.Pronoun
  },
  {
    swedish: "har",
    dictionaryForm: 'ha',
    audioFileName: "har.mp3",
    english: "have",
    wordClass: WordClass.Verb
  },
  {
    swedish: "två",
    audioFileName: "två.mp3",
    english: "two",
    wordClass: WordClass.Numeral
  },
  {
    swedish: "(ett) barn",
    audioFileName: "barn.mp3",
    english: "child, children",
    wordClass: WordClass.Noun,
    moreInfoComponent: (
      <>
        <p>
          In Swedish, nouns have singular and plural forms. Some nouns, like{" "}
          <i>barn</i> are the same in both singular and plural.
        </p>
        <p>
          Barn is an ett-word, meaning that one child is <i>ett barn</i> instead
          of <i>en</i>.
        </p>
      </>
    )
  },
  {
    swedish: "en",
    audioFileName: "en.mp3",
    payAttentionToPronunciation: "[enn]",
    english: "a, an, one",
    wordClass: WordClass.Numeral,
    moreInfoComponent: (
      <>
        <p>
          There are two kinds of nouns in Swedish: en-nouns and ett-nouns. This
          means that in order to say you have one of something, you have to use
          either <i>en</i> or
          <i>ett</i> depending on the noun.
        </p>
        <p>
          For instance, it's <i>en son</i> and <i>en dotter</i> but{" "}
          <i>ett barn</i>.
        </p>
        <p>
          Sadly, there are no easy rules to remember which nouns are en and
          which ones are ett-nouns (They are not equivalent to a and an in
          English).
          <br />
          In some cases, both en and ett could be valid but have different
          meanings! For example,
          <i>en plan</i> means a plan but <i>ett plan</i> means a(n) (air)plane.
        </p>
        <p>
          I will repeat all of this as a grammar point in the next lesson so
          don't think too much about this for now.
        </p>
      </>
    )
  },
  {
    swedish: "(en) son",
    audioFileName: "son.mp3",
    payAttentionToPronunciation: "[sån]",
    english: "son",
    wordClass: WordClass.Noun
  },
  {
    swedish: "Alfred",
    audioFileName: "alfred.mp3",
    english: "(a male name)",
    wordClass: WordClass.Noun
  },
  {
    swedish: "(en) dotter",
    audioFileName: "dotter.mp3",
    english: "daughter",
    wordClass: WordClass.Noun
  },
  {
    swedish: "Saga",
    audioFileName: "saga.mp3",
    english: "(a female name)",
    wordClass: WordClass.Noun,
    moreInfoComponent: (
      <p>As a noun, (en) saga can also mean "story", "fairy tale".</p>
    )
  },
  {
    swedish: "är",
    dictionaryForm: 'vara',
    audioFileName: "är.mp3",
    english: "is/are/am",
    wordClass: WordClass.Verb,
    moreInfoComponent: "See GP"
  },
  {
    swedish: "familjen",
    audioFileName: "familjen.mp3",
    english: "the family",
    wordClass: WordClass.Noun,
    moreInfoComponent: (
      <>
        <p>
          <i>familjen</i> is definitive form of the noun <i>familj</i>, which is
          why the translation in the English column is "the" family.
        </p>
        <p>
          When talking about a family name, we put the name after familjen. Thus
          it's incorrect to say "Svensson familjen".
        </p>
      </>
    )
  },
  {
    swedish: "Svensson",
    audioFileName: "svensson.mp3",
    english: "(a surname)",
    wordClass: WordClass.Noun
  },
  {
    swedish: "bor",
    dictionaryForm: "bo",
    audioFileName: "bor.mp3",
    english: "living (somewhere)",
    wordClass: WordClass.Verb
  },
  {
    swedish: "i",
    audioFileName: "i.mp3",
    english: "in",
    wordClass: WordClass.Preposition
  },
  {
    swedish: "Göteborg",
    audioFileName: "Göteborg.mp3",
    english: "Gothenburg (a city name)",
    wordClass: WordClass.Noun,
    moreInfoComponent: (
      <>
        <p>
          Göteborg is Sweden's second largest city and is located on the west
          coast.
          <br />
          The city has chosen the spelling of Gothenburg in international
          contexts.
        </p>
      </>
    )
  }
];

export default words;
