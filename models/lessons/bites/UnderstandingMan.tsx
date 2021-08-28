import React from "react";

const lessonChunks = [
  <div className="lesson-chunk">
    <div className="blackboard lesson-blackboard">
      <h2>Language Bites</h2>
      <h3>Understanding "man"</h3>
    </div>

    <p>
      In this Language Bite, we will take a look at the pronoun
      <i>man</i> as well as some unusual usages of the noun <i>man</i>.
    </p>
  </div>,
  <div className="lesson-chunk">
    <h3 className="theme-swe-blue">
      <i>man</i> as a personal pronoun
    </h3>

    <p>
      This is perhaps the most confusing pronoun to learn for beginners. In
      Swedish, the pronoun <i>man</i> refers to an indefinite person or people
      in general. It can be translated to "one" or "they", but sometimes it
      replaces the pronouns <i>du</i> or even <i>jag</i> to sound less direct.
    </p>

    <p>
      Consider the sentence "How do you pronounce your name?" in English. How
      would you translate it into Swedish? Most people would say
    </p>
    <p className="w3-margin-left">
      Hur uttalar <strong>du</strong> ditt namn?
    </p>

    <p>
      While this is a perfectly grammatically valid sentence, it might sound a
      bit odd to a native Swede. This is because the <i>du</i> emphasizes the
      person spoken to, even if you are not stressing it when you asked the
      question.
    </p>
  </div>,
  <div className="lesson-chunk">
    <p>Most native Swedes would instead say</p>

    <p className="w3-margin-left">
      Hur uttalar <strong>man</strong> ditt namn?
    </p>

    <p>
      as <i>man</i> here shifts the emphasis from the person being asked to
      people in general. So you can see it like this:
    </p>

    <p className="w3-margin-left">
      Hur uttalar <strong>man</strong> ditt namn?
      <br />
      = How do you pronounce your name? (No emphasis on you.)
      <br />
      meaning: How does <strong>one</strong> pronounce your name?
    </p>
    <p className="w3-margin-left">
      Hur uttalar <strong>du</strong> ditt namn?
      <br />= How do <strong>you</strong> pronounce your name? (Emphasis on
      you.)
    </p>
  </div>,
  <div className="lesson-chunk">
    <p>Another typical example is asking for directions:</p>

    <p className="w3-margin-left">
      Hur kommer <strong>man</strong> till stranden?
    </p>

    <p>
      In this example, <i>man</i> replaces <i>jag</i> to sound less direct and
      more polite.
    </p>

    <p>Here are some more examples:</p>

    <p className="w3-margin-left">
      I Sverige pratar <strong>man</strong> svenska.
      <br />= <strong>They</strong> speak Swedish in Sweden./People in Sweden
      speak Swedish.
    </p>

    <p>
      Notice how <i>man</i> can replace the whole noun phrase "people in
      Sweden"!
    </p>

    <p className="w3-margin-left">
      Som <strong>man</strong> kan se i grafen har antalet trafikolyckor minskat
      sedan 2000-talet.
      <br />= As <strong>you/one</strong> can see in the graph, the number of
      traffic accidents has decreased since the 2000s.
    </p>
  </div>,
  <div className="lesson-chunk">
    <h3 className="theme-swe-blue">
      Other uses of <i>man</i> as a noun
    </h3>

    <p>
      The noun <i>man</i> can be used as in English to mean "man". There are
      some additional meanings, however, as we shall see in the examples below:
    </p>

    <h4 className="theme-swe-blue">husband</h4>

    <p>
      In some cases like in English, <strong>man</strong> can mean husband:
    </p>

    <p className="w3-margin-left">
      Vi går på konsert med våra män.
      <br />= We're going on a concert with our husbands.
    </p>

    <h4 className="theme-swe-blue">adults as a measure of strength</h4>

    <p>
      This meaning typically gets translated to "people" and doesn't necessarily
      refer to only adult men.
      <br />
      Notice that the plural <i>män</i> not used here:
    </p>

    <p className="w3-margin-left">
      Med tre <strong>man</strong> kan vi lyfta bordet.
      <br />= We can lift the table with three people.
    </p>
  </div>,
  <div className="lesson-chunk">
    <h4 className="theme-swe-blue">a member of a crew or troop</h4>

    <p>Like in the previous usage, we don't use the plural form here.</p>

    <p className="w3-margin-left">
      Karl XII hade en armé på 100 000 <strong>man</strong> mot Ryssland.
      <br />= Charles XII had an army of 100 000 (people/men) against Russia.
    </p>

    <h4 className="theme-swe-blue">mane</h4>

    <p>
      The word <i>man</i> can also mean mane, i.e. the hair of a horse or lion.
      This word is pronounced with the long a, and it's conjugated differently:
      The definite form is <i>manen</i> , plural <i>manar</i> and definite
      plural <i>manarna</i>.
    </p>

    <p className="w3-margin-left">
      <strong>Manen</strong> från en häst kan till exempel användas till stråkar
      på fioler.
      <br />= Horse mane can be used to make violin strings, for instance.
    </p>
  </div>
];

export default lessonChunks;
