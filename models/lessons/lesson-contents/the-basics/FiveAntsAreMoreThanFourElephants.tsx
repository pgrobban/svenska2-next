import React from "react";
import {
  fiveAntsAreMoreThanFourElephantsWords,
  fiveAntsAreMoreThanFourElephantsAdditionalWords
} from "../../word-lists/FiveAntsAreMoreThanFourElephants";
import WordList from "../../../../components/WordList";

const lessonChunks = [
  <div className="lesson-chunk">
    <div className="blackboard lesson-blackboard">
      <h2>Lesson 17</h2>
      <h3>Five ants are more than four elephants</h3>
    </div>

    <div className="lesson-goals">
      <h3 className="theme-swe-blue w3-margin-top">Lesson goals</h3>
      <p>In this lesson you will learn:</p>

      <ul>
        <li>...how to talk create plural forms of nouns.</li>
      </ul>
    </div>
  </div>,
  <div className="lesson-chunk">
    <h4 className="theme-swe-blue">Text</h4>
    <p>
      Håkan och Lena vill bjuda några vänner på middag i helgen. Lena behöver
      därför handla mat.
      <br />
      Hon går till ICA först, därför att de har extrapris på frukter, grönsaker
      och ost. Hon lägger två äpplen, tre tomater, två gurkor och två ostar i
      korgen. Hon måste vänta tio minuter i kön.
    </p>

    <p>
      Lena går sedan till Lidl. Det är 50 meter från ICA till Lidl, så det tar
      inte lång tid att gå dit. På Lidl hittar Lena ett kilo räkor och två kilo
      kött. Hon köper också två burkar Coca-Cola och två flaskor Fanta. Hon
      betalar 127 kronor.
    </p>
  </div>,
  <div className={"lesson-chunk"}>
    <h4 className="theme-swe-blue">New words</h4>
    <WordList words={fiveAntsAreMoreThanFourElephantsWords} />
  </div>,
  <div className={"lesson-chunk"}>
    <h4 className="theme-swe-blue">Additional words</h4>
    <WordList words={fiveAntsAreMoreThanFourElephantsAdditionalWords} />
  </div>,
  <div className="lesson-chunk">
    <h4 className="theme-swe-blue">Grammar points</h4>
    <h5>GP1: Plural nouns</h5>

    <p>
      Just as we saw with the definite forms, plural nouns are created by
      changing the endings of the singular form.
      <br />
      In this lesson we are only looking at indefinite forms. You can refer to
      the table below for some rules of thumb, but once again, it might not
      cover all the words, so double-check with SAOL if you're unsure.
    </p>

    <ul>
      <li>
        en-words ending in -a:
        <br />
        drop -a and add -or
        <br />
        en flaska &rarr; flera flask<strong>or</strong>
      </li>
      <li>
        en-words ending in -e:
        <br />
        drop -e and add -ar
        <br />
        en pojke &rarr; flera pojk<strong>ar</strong>
      </li>
      <li>
        en-words with a stressed last vowel:
        <br />
        add -er
        <br />
        tomat &rarr; flera tomat<strong>er</strong>
      </li>
      <li>
        ett-word ending in a vowel:
        <br />
        add -n
        <br />
        ett äpple &rarr; flera äpple<strong>n</strong>
      </li>
      <li>
        ett-words ending in a consonant:
        <br />
        no change
      </li>
      <li>ett rum &rarr; flera rum</li>
    </ul>
  </div>,
  <div className="lesson-chunk">
    <p>
      There are a couple of things to note here. First of all, you might look at
      the last rule and think: "So if the plural of some nouns is the same as
      the singular, how do we know if we're talking about one room or many
      rooms?"
      <br />
      Well, usually the context is clear. But there is also another rule that
      Swedish has that doesn't exist in English. And that is - we also change
      adjectives based on plural and definite forms! We will get back to this in
      an intermediate level lesson.
    </p>

    <p>
      Another thing to note is, as we saw in the definite forms, the rules
      change depending on if we're using an en-word or an ett-word. Since{" "}
      <i>en plan</i> (a plan) is different from <i>ett plan</i> (a plane), these
      words get modified in different ways according to the rules for plural.
      The former would be <i>planer</i> and the latter would remain <i>plan</i>.
    </p>

    <p>
      Finally, you can't always look at a noun in the definite or plural form
      and say if it's an en-word or ett-word. Many learners would look att a
      word like <i>träden</i> and then think that <i>träd</i> is an en-word, but
      this is actually a <strong>definite plural</strong> form of an ett-word.
      <br />I know, the rules are complicated and don't make sense sometimes,
      but that's just how it is, so deal with it.
    </p>
  </div>,
  <div className="lesson-chunk">
    <div className="culture-note">
      <h4 className="theme-swe-blue">
        Culture note: <i>Fem myror är fler än fyra elefanter</i>
      </h4>

      <p>
        This was the name of a Swedish TV show for kids that aired in the 1970s.
        Several famous comedians starred in it, including Magnus Härenstam (who
        later went on hosting the Swedish version of <i>Jeopardy!</i>), Brasse
        Brännström and Eva Remeaeus.
        <br />
        The show was modeled after <i>Sesame Street</i>, which did have its own
        version later in Swedish. However, <i>Sesame Street</i> didn't achieve
        the same level of cult status as <i>Fem myror</i> in Sweden.
      </p>

      <p>
        Fem myror featured sketches and songs teaching children how to count,
        read letters and other things. Each episode had a letter and number as a
        theme. Preliminary evaluations showed that children didn't learn much
        from the show, so the focus shifted to invoke curiosity instead and
        having fun instead.
        <br />
        An example of this is the recurring sketch "Brasses lattjo-lajban-låda"
        (Brasses's fun box), in which he presents four animals, and one has to
        be eliminated. Magnus and Eva would then have to make guesses based on
        logic, but Brasse tells them their guesses are both wrong, and he comes
        up with his own answer, teaching kids that one thing can have multiple
        properties. Fantasy and curiosity are more important than pure
        knowledge.
      </p>

      <p>
        The episodes of <i>Fem myror är fler än fyra elefanter</i> can be found
        on DVD and online on SVT Play (which you can watch for free if you live
        in Sweden). Reruns of the show frequently air on TV.
      </p>
    </div>
  </div>
];

export default lessonChunks;
