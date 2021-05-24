import { Table, TableBody, TableCell, TableRow } from "@material-ui/core";
import React from "react";
import AudioButton from "../../../../components/AudioButton";
import WordList from "../../../../components/WordList";
import whatAreTheyDoingWords from "../../word-lists/WhatAreTheyDoing";

const lessonChunks = [
  <div className="lesson-chunk">
    <div className="blackboard lesson-blackboard">
      <h2>Lesson 2</h2>
      <h3>What are they doing?</h3>
    </div>

    <div className="lesson-goals">
      <h3 className="theme-swe-blue w3-margin-top">Lesson goals</h3>
      <p>In this lesson you will learn:</p>

      <ul>
        <li>...how to say what someone is doing.</li>
        <li>
          ...the basics of nouns in Swedish and how to avoid common mistakes.
        </li>
      </ul>
    </div>
  </div>,
  <div className="lesson-chunk">
    <h4 className="theme-swe-blue">Text</h4>
    <p>Look at the pictures below and listen to the sound recordings.</p>

    <Table>
      <TableBody>
        <TableRow>
          <TableCell>
            <img className="table-image" alt="play" src="/images/play.jpg" />
            <p>Saga leker.</p>
          </TableCell>
          <TableCell>
            <AudioButton fileName="" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <img className="table-image" alt="play" src="/images/sleep.jpg" />
            <p>Saga sover.</p>
          </TableCell>
          <TableCell>
            <AudioButton fileName="" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <img className="table-image" alt="play" src="/images/swim.jpg" />
            <p>Håkan simmar.</p>
          </TableCell>
          <TableCell>
            <AudioButton fileName="" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <img
              className="table-image"
              alt="message"
              src="/images/message.jpg"
            />
            <p>Alfred skriver ett meddelande.</p>
          </TableCell>
          <TableCell>
            <AudioButton fileName="" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <img
              className="table-image"
              alt="read newspaper"
              src="/images/newspaper.jpg"
            />
            <p>Håkan läser en tidning.</p>
          </TableCell>
          <TableCell>
            <AudioButton fileName="" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <img
              className="table-image"
              alt="drive"
              src="/images/driving.jpg"
            />
            <p>Håkan kör bil.</p>
          </TableCell>
          <TableCell>
            <AudioButton fileName="" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <img
              className="table-image"
              alt="ride train"
              src="/images/riding-train.jpg"
            />
            <p>Lena åker tåg.</p>
          </TableCell>
          <TableCell>
            <AudioButton fileName="" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <img
              className="table-image"
              alt="bake bread"
              src="/images/bake-bread.jpg"
            />
            <p>Lena bakar bröd.</p>
          </TableCell>
          <TableCell>
            <AudioButton fileName="" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <img
              className="table-image"
              alt="eating and drinking"
              src="/images/eating-drinking.jpg"
            />
            <p>Håkan äter och dricker.</p>
          </TableCell>
          <TableCell>
            <AudioButton fileName="" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <img
              className="table-image"
              alt="play games"
              src="/images/games.jpg"
            />
            <p>Alfred spelar ett datorspel.</p>
          </TableCell>
          <TableCell>
            <AudioButton fileName="" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <img
              className="table-image"
              alt="watch tv"
              src="/images/watch-tv.jpg"
            />
            <p>Saga tittar på TV.</p>
          </TableCell>
          <TableCell>
            <AudioButton fileName="" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <img
              className="table-image"
              alt="exercise"
              src="/images/exercise.jpg"
            />
            <p>Lena tränar.</p>
          </TableCell>
          <TableCell>
            <AudioButton fileName="" />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>,
  <div className="lesson-chunk">
    <h4 className="theme-swe-blue">New words</h4>

    <WordList words={whatAreTheyDoingWords} />
  </div>,
  <div className="lesson-chunk">
    <h4 className="theme-swe-blue">Grammar points</h4>
    <h5>GP1: The basics of nouns</h5>

    <h6>Types of nouns</h6>
    <p>
      There are two types of nouns in Swedish; just like in English we have
      countable and uncountable ones.
      <br />
      The countable ones are further divided into two genders: common and
      neuter. However, most Swedes unfamiliar with linguistics won't know these
      terms so we can just call them
      <i>en</i>- or <i>ett</i>-words respectively.
    </p>
    <p className="w3-margin-left">
      <strong>en</strong> son = a son
      <br />
      <strong>ett</strong> barn = a child
    </p>

    <h6>
      <i>en</i> and <i>ett</i> is not "a" and "an"!
    </h6>
    <p>
      There is a clear rule for when to use "a" and "an" in English - if the
      word starts with a <strong>vowel sound</strong>, we use "an", and if not,
      we use "a".
    </p>

    <p>
      Sadly, there are no equivalent rules in Swedish to remember which words
      are <i>en</i>- and which words are <i>ett</i>-words. Some words can even
      be both, and depending on which one you choose, you change the meaning of
      the word!
    </p>

    <p className="w3-margin-left">
      <strong>en</strong> lag = a law
      <br />
      <strong>ett</strong> lag = a team
    </p>
    <p className="w3-margin-left">
      <strong>en</strong> plan = a plan
      <br />
      <strong>ett</strong> plan = a(n) (air)plane
    </p>

    <p>
      Not only the meaning changes, but there are also differences in how words
      change in different forms such as singular vs plural, or indefinite vs
      definite form.
    </p>
  </div>,
  <div className="lesson-chunk">
    <h6>Can we guess?</h6>
    <p>
      Since there are no easy ways to remember which words are en-words and
      which are ett-words, I will simply write them in brackets before nouns in
      the word lists of the lessons, and you will see them in SAOL as well.
    </p>
    <p>
      If you're stuck in a conversation and forget if a word is en or ett, try
      with <i>en</i> and you will be right about 3 times out of 4 as it is the
      most common form.
    </p>
    <h6>Can we just... not use them?</h6>
    <p>
      The answer is yes, but only in some cases, en and ett can be omitted
      altogether. When there is an action that only is only possible to be acted
      upon a single noun, such as the sentences <i>Håkan kör bil</i> or{" "}
      <i>Lena åker tåg</i>, it is clear that the noun is singular and thus we
      can omit <i>en</i> or <i>ett</i>.
    </p>
    <p>
      Technically, in these cases, you can see the words <i>kör bil</i> or{" "}
      <i>åker tåg</i> as verb phrases rather than a verb + object.
      <br />
      This only works for some phrases, and I tried to search for a rule for
      when it is applicable but I couldn't find anything. I will update this
      section if I find more information.
    </p>
  </div>,
  <div className="lesson-chunks">
    <h6>Watch out for plurals</h6>
    <p>
      Another thing that makes Swedish nouns difficult to learn that many
      ett-words have plural forms that are the same as the singular ones. We saw
      one example, <i>barn</i> from the previous lesson, and another,{" "}
      <i>bröd</i> in this lesson.
    </p>
    <p>
      However, we will see in later lessons how other grammatical constructs can
      differentiate between singular and plural nouns, so there is almost never
      any confusion if you mean one of something or many. <br />
      And of course, you can always put a numeral in front of the word if it
      makes sense.
    </p>

    <h6>en/ett for compound nouns</h6>
    <p>
      The general rule of thumb for compound nouns in Swedish is that they
      should be written <strong>together</strong> and not as separate words like
      in English. Many people do the mistake of writing them separately, which
      can cause hilarious misreadings.
    </p>
    <p>
      I will come back to this point in a future lesson, but the reason why I
      mention it here is that there is a rule regarding compound nouns and
      whether or not you use en or ett:
      <br />
      (en/ett) for the compound noun determined by the
      <strong>last</strong> word in the compound.
    </p>
    <p>
      The word <i>datorspel</i> in the word list in this lesson is a compound of
      two words, <i>dator</i> (computer) and <i>spel</i> (game). <i>dator</i> is
      an en-word, but <i>spel</i> is an ett-word, so the compound becomes an ett
      word according to the rule above.
    </p>

    <p>
      We will revisit nouns in many lessons as we will see how to build all the
      forms of nouns, such as singular vs plural, definite vs indefinite form
      and so on. For now, you can practice en/ett in most lessons starting from
      this one.
    </p>
  </div>,
  <div className="lesson-chunk">
    <h5>GP2: Dictionary form and present tense</h5>
    <p>
      The verbs you have learned in the texts so far have all been in the
      present tense. However, you will find that these words don't exist in
      dictionaries or the SAOL app.
      <br />
      Thus, I have included the dictionary forms in the word lists.
    </p>
    <p>
      There is no progressive ("-ing" form) in Swedish. Rather, the context
      tells us whether it's a habitual action or an action currently in
      progress.
      <br />
      Thus, a sentence like
    </p>

    <p className="w3-margin-left">Håkan kör bil.</p>

    <p>can be translated as</p>

    <p className="w3-margin-left">
      Håkan <strong>drives</strong> a car (habitual action, e.g. Håkan takes the
      car to work every morning).
    </p>

    <p>or</p>

    <p className="w3-margin-left">
      Håkan <strong>is driving</strong>. (action in progress, i.e. Håkan is
      driving right now).
    </p>

    <p>depending on the context.</p>

    <p>
      Many beginner learners try to express an action in progress by literally
      translating the am/are/is ~ing into <i>är</i> in Swedish, but this is
      wrong!
    </p>

    <p className="w3-margin-left">
      <span className="red-strikethrough">Håkan är kör bil.</span>
    </p>
  </div>
];

export default lessonChunks;
