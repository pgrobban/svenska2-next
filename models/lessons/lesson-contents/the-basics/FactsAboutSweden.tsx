import React from "react";
import WordList from "../../../../components/WordList";
import {
  factsAboutSwedenWords,
  factsAboutSwedenAdditionalWords
} from "../../word-lists/FactsAboutSweden";

const lessonChunks = [
  <div className="lesson-chunk">
    <div className="blackboard lesson-blackboard">
      <h2>Lesson 13</h2>
      <h3>Facts about Sweden I</h3>
    </div>

    <div className="lesson-goals">
      <h3 className="theme-swe-blue w3-margin-top">Lesson goals</h3>
      <p>In this lesson you will learn:</p>

      <ul>
        <li>...how to talk about your country in Swedish.</li>
      </ul>
    </div>
  </div>,
  <div className="lesson-chunk">
    <h4 className="theme-swe-blue">Text</h4>

    <p>
      Sverige är ett land i norra Europa och gränsar till Norge och Finland.
      <br />
      Det är ett stort land, med en yta på 450 000 km<sup>2</sup>. Cirka 60% av
      landet är skog, och 10% är vatten.
      <br />
      Det är 160 mil från norr till söder och 50 mil från väster till öster.
    </p>

    <p>
      Sverige har en vacker natur med många sjöar och skogar. Det finns många
      berg i norr och gott om odlingsbar mark i söder.
    </p>

    <p>
      Landet har fler än 10 miljoner invånare. De flesta bor i huvudstaden,
      Stockholm.
      <br />
      Många talar svenska, men en del talar också minoritetsspråk som samiska,
      finska, romani och jiddish.
    </p>

    <p>
      Sverige har en kungafamilj, men landet styrs av en statsminister.
      Parlamentet heter riksdagen och finns i Stockholm.
    </p>

    <small>
      km<sup>2</sup> = kvadratkilometer
      <br />
      % = procent
      <br />
      en mil = 10 kilometer
    </small>
  </div>,
  <div className={"lesson-chunk"}>
    <h4 className="theme-swe-blue">New words</h4>
    <WordList words={factsAboutSwedenWords} />
  </div>,
  <div className={"lesson-chunk"}>
    <h4 className="theme-swe-blue">Additional words</h4>
    <WordList words={factsAboutSwedenAdditionalWords} />
  </div>,
  <div className="lesson-chunk">
    <h5>GP1: Describing existence of something</h5>

    <p>
      In English, the verb <i>be</i> and its conjugations (is, are etc.) can be
      used in many situations:
    </p>

    <p className="w3-margin-left">
      (preceding an adjective) Jimmy <i>is</i> hungry. <br />
      (preceding a verb) I <i>am</i> studying. <br />
      (describing existence) There <i>are</i> many people at the mall.
    </p>

    <p>
      The first two situations would be translated using the word <i>är</i>
      in Swedish. However, <i>är</i> is typically not used for contexts
      describing existence of something.
      <br />
      This is where the verb <i>finns</i> comes into play. It is preceded by a
      noun or the word <i>det</i>. In the latter case, <i>det</i> is usually
      translated to "there" in English.
    </p>
  </div>,
  <div className="lesson-chunk">
    <p className="w3-margin-left">
      Det <strong>finns</strong> många berg i norr.
      <br />
      (=There are many mountains in the north.)
    </p>
    <p className="w3-margin-left">
      Mona Lisa <strong>finns</strong> i Louvren.
      <br />
      (= Mona Lisa is in the Louvre.)
    </p>

    <p>
      However, this rule can be tricky. While it's normal for a company to write
      on their website
    </p>

    <p className="w3-margin-left">Vi finns i Stockholm och Göteborg.</p>

    <p>
      you typically would not use <i>finns</i> when talking about where a person
      is:
    </p>

    <p className="w3-margin-left">
      Alfred <span className="red-strikethrough">finns</span> är i Göteborg.
    </p>
  </div>,
  <div className="lesson-chunk">
    <h5>GP2: Cardinal directions</h5>

    <p>
      The four cardinal directions in Swedish are <i>norr</i>, <i>öster</i>,{" "}
      <i>söder</i> and <i>väster</i>.
    </p>

    <p>
      When combining two directions, we use the words <i>nord</i>, <i>ost</i>,{" "}
      <i>syd</i> and <i>väst</i>: <i>nordost</i>, <i>sydost</i>, <i>sydväst</i>{" "}
      and <i>nordväst</i>.
    </p>

    <p>
      When preceding a noun we must change them into adjectival forms:{" "}
      <i>norra</i>,<i>östra</i>, <i>södra</i>, <i>västra</i>, e.g.{" "}
      <i>västra Sverige</i>, <i>norra delarna.</i>
      <br />
      Combine them with <i>nord-</i> and <i>syd-</i>, e.g.{" "}
      <i>sydöstra England</i>.
    </p>
  </div>
];

export default lessonChunks;
