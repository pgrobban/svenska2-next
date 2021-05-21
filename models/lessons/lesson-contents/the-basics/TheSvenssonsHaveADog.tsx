import React from "react";
import AudioButton from "../../../../components/AudioButton";
import {
  mainWords as theSvenssonsHaveADogWords,
  additionalWords as theSvenssonsHaveADogAdditionalWords
} from "../../word-lists/TheSvenssonsHaveADog";
import { Table, TableBody, TableCell, TableRow } from "@material-ui/core";
import WordList from "../../../../components/WordList";

const lessonChunks = [
  <div className="lesson-chunk">
    <div className="blackboard lesson-blackboard">
      <h2>Lesson 3</h2>
      <h3>The Svenssons have a dog</h3>
    </div>

    <div className="lesson-goals">
      <h3 className="theme-swe-blue w3-margin-top">Lesson goals</h3>
      <p>In this lesson you will learn:</p>

      <ul>
        <li>...how to say express that someone has something.</li>
        <li>...how to describe an object using adjectives.</li>
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
            <img className="table-image" alt="play" src="/images/dog.jpg" />
            <p>
              Familjen Svensson har en hund.
              <br />
              Den heter Ludde.
              <br />
              Den är stor.
            </p>
          </TableCell>
          <TableCell>
            <AudioButton fileName="" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <img className="table-image" alt="play" src="/images/puppy.jpg" />
            <p>
              Familjen Karlsson har också en hund.
              <br />
              Den heter Doris.
              <br />
              Den är liten.
            </p>
          </TableCell>
          <TableCell>
            <AudioButton fileName="" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <img className="table-image" alt="game" src="/images/game.jpg" />
            <p>
              Alfred spelar ett datorspel.
              <br />
              Det heter Sekiro.
              <br />
              Det är svårt.
            </p>
          </TableCell>
          <TableCell>
            <AudioButton fileName="" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <img className="table-image" alt="kids" src="/images/kids.jpg" />
            <p>
              Saga har två vänner.
              <br />
              De heter Lisa och Klara.
              <br />
              De är snälla.
            </p>
          </TableCell>
          <TableCell>
            <AudioButton fileName="" />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>,
  <div className={"lesson-chunk"}>
    <h4 className="theme-swe-blue">New words</h4>
    <WordList words={theSvenssonsHaveADogWords} />
  </div>,
  <div className={"lesson-chunk"}>
    <h4 className="theme-swe-blue">Additional words</h4>
    <WordList words={theSvenssonsHaveADogAdditionalWords} hideLegend />
  </div>,
  <div className={"lesson-chunk"}>
    <h4 className="theme-swe-blue">Grammar points</h4>
    <h5>GP1: Expressing "it"</h5>
    <p>
      There are two words for "it" when referring to nouns in Swedish,{" "}
      <i>den</i> and <i>det</i>. The rule for when to use which is simple:
    </p>
    <p>
      If it's an <i>en</i>-word, "it" becomes <i>den</i>. If it's an <i>ett</i>
      -word "it" becomes <i>det</i>.
    </p>

    <p className="w3-margin-left">
      En hund heter Ludde. &rarr; <strong>Den</strong> heter Ludde.
    </p>
    <p className="w3-margin-left">
      Ett datorspel är svårt. &rarr; <strong>Det</strong> är svårt.
    </p>

    <p>
      Note 1: The text for the last picture had the word <i>de</i> in it, which
      means "they". We can't use "it" (<i>den</i> or <i>det</i>) here since it's
      talking about more than one thing or person.
    </p>
    <p>
      Note 2: The words <i>den</i> and <i>det</i> occur in many other
      grammatical constructs, so we will not always translate them to "it".
    </p>
  </div>,
  <div className="lesson-chunk">
    <h5>GP2: Adjective inflections</h5>
    <p>
      Swedish adjectives are declined (changed) according to a couple of
      factors. In this lesson we focus on who or what the adjectives relate to
      and the number (singular and plural) of people or things involved.
      <br />I can provide some basic rules but{" "}
      <strong>watch out for exceptions</strong>! You can find these declensions
      in SAOL as long as you know the base (dictionary) form of the adjective.
    </p>
    <p>
      Suppose we take the adjective <i>stor</i>, meaning "big".
      <br />
      For <i>en</i>-words, we simply take the dictionary form of the adjective
      as it is:
    </p>
    <p className="w3-margin-left">
      Familjen Svensson har en <strong>stor</strong> hund.
      <br />
      Den är <strong>stor</strong>.
    </p>
    <p>
      For <i>ett</i>-words, we add -t to the dictionary form:
    </p>
    <p className="w3-margin-left">
      Lena bakar ett <strong>stort</strong> bröd.
      <br />
      Det är <strong>stort</strong>.
    </p>
    <p>
      For plural, no matter if the word is en or ett, we add -a to the
      dictionary form.
    </p>
    <p className="w3-margin-left">
      Familjen Karlsson har två <strong>stora</strong> bilar (cars).
      <br />
      De är <strong>stora</strong>.
    </p>
    <p>
      <strong>Special case!</strong> <i>liten</i> becomes <i>små</i> in plural.
    </p>

    <p className="w3-margin-left">
      De har två <strong>små</strong> hundar (dogs).
    </p>
  </div>,
  <div className="lesson-chunk">
    <h5>GP3: Expressing "too"/"also"</h5>
    <p>
      The word for "too" or "also" in Swedish is <i>också</i>. The meaning of
      the sentence changes depending on where you put this <i>också</i>.
    </p>

    <p>Compare the following groups of sentences:</p>

    <p className="w3-margin-left">
      Familjen Svensson har en hund.
      <br />
      Familjen Karlsson har <strong>också</strong> en hund.
    </p>

    <p className="w3-margin-left">
      Familjen Svensson har en hund.
      <br />
      Familjen Svensson har en katt <strong>också</strong>.
    </p>

    <p>
      In the first group of sentences we state that the two families have
      something in common: The Svensson family <strong>also</strong> has a dog.
      <br />
      But in the second sentence, we talk about the same family having two pets:
      <br />
      The Svensson family has a cat, too.
    </p>

    <p>
      Note the spelling difference between the words <i>och</i> and <i>också</i>
      .
    </p>
  </div>
];

export default lessonChunks;
