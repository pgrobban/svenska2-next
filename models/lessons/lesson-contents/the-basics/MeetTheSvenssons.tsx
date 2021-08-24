import React from "react";
import AudioButton from "../../../../components/AudioButton";
import WordList from "../../../../components/WordList";
import { IfMobile, IfDesktop } from "../../../../helpers/showBasedOnScreen";
import meetTheSvenssonsWords from "../../word-lists/MeetTheSvenssons";
import Image from 'next/image';
  
const lessonChunks = [
  <div className="lesson-chunk">
    <div className="blackboard lesson-blackboard">
      <h2>Lesson 1</h2>
      <h3>Meet the Svenssons</h3>
    </div>

    <div className="lesson-goals">
      <h3 className="theme-swe-blue w3-margin-top">Lesson goals</h3>
      <p>In this lesson you will learn:</p>

      <ul>
        <li>...how to introduce yourself and your family.</li>
        <li>...basic word order in Swedish.</li>
      </ul>
    </div>
  </div>,
  <div className="lesson-chunk">
    <h4 className="theme-swe-blue">Text</h4>
    <p>
      Read the text in the speech bubble below, then press the sound button to
      listen to the recording.
    </p>

    <Image
      width={400}
      height={300}
      className="w3-image w3-margin-bottom"
      src={'/images/svenssons.png'}
      alt="Familjen Svensson"
    />

    <div style={{ display: "flex", alignItems: "center" }}>
      <div className="bubble">
        <p>
          Hej!
          <br />
          Jag heter Håkan och min fru heter Lena.
          <br />
          Vi har två barn, en son och en dotter.
          <br />
          Vår son heter Alfred och vår dotter heter Saga.
          <br />
          Vi är familjen Svensson och vi bor i Göteborg.
        </p>
      </div>
      <div>
        <AudioButton fileName="" />
      </div>
    </div>

    <p>
      Without looking at the word list in the list{" "}
      <IfMobile> in the next section</IfMobile>
      <IfDesktop>below</IfDesktop>, how much did you understand?
    </p>
  </div>,
  <div className="lesson-chunk">
    <h4 className="theme-swe-blue">New words</h4>

    <WordList words={meetTheSvenssonsWords} />
  </div>,
  <div className="lesson-chunk">
    <h4 className="theme-swe-blue">Grammar points</h4>
    <h5>GP1: Basic word order</h5>
    <p>
      The basic word order in Swedish is the same as in English - SVO: Subject,
      Verb, Object.
      <br />
      In case you need a refresher:
    </p>
    <ul>
      <li>
        The <strong>subject</strong> is who is doing something. It can be a noun
        (remember that names are nouns too) or a noun phrase (e.g. The Svensson
        family).
      </li>
      <li>
        The <strong>verb</strong> is what action the subject is doing.
      </li>
      <li>
        There can be zero, one or more <strong>objects</strong> that describe
        the things or people who are involved in a sentence and are not
        subjects.
      </li>
    </ul>

    <p>
      This applies for declarative sentences, i.e. sentences that declare that
      someone is doing something or that something is happening. However, we
      will see other types of sentences in later lessons where this rule
      changes.
    </p>

    <p>
      <span data-bracket="subject">Jag</span>&nbsp; &nbsp;
      <span data-bracket="verb">heter</span>&nbsp; &nbsp;
      <span data-bracket="object">Robert</span>.
    </p>
    <p>
      <span data-bracket="subject">Vi</span>&nbsp; &nbsp; &nbsp; &nbsp;
      <span data-bracket="verb">har</span>&nbsp; &nbsp;
      <span data-bracket="object">två barn</span>.
    </p>

    <p>
      Note that not all sentences need an object. An example of a sentence
      without an object is "Lena is sleeping".
    </p>

    <p>
      Also note that parts of the sentence that describe place, time, way of
      doing something etc are not objects.
    </p>

    <p>
      <span data-bracket="subject">Jag</span>&nbsp; &nbsp; &nbsp; &nbsp;
      <span data-bracket="verb">bor</span>&nbsp; &nbsp;
      <span data-bracket-red="not object">i Stockholm</span>.
    </p>
  </div>,
  <div className="lesson-chunk">
    <h5>
      GP2: The verb <i>heter</i>
    </h5>
    <p>
      The verb <i>heter</i> does not have a direct equivalent in English but if
      you have studied other languages such as German, you might recognize its
      meaning.
    </p>
    <p>
      The word means that something or someone is called something. In other
      words, the sentence
    </p>
    <p className="w3-margin-left">Jag heter Robert.</p>
    <p>could also be written as</p>
    <p className="w3-margin-left">Mitt namn är Robert.</p>
    <p>
      to match the English way of saying "My name is Robert", but the former is
      more natural Swedish.
    </p>

    <p>
      This verb can be used for objects and other things, which makes it quite
      flexible:
    </p>

    <p className="w3-margin-left">
      Huvudstaden i Sverige heter Stockholm.
      <br />
      (= The capital of Sweden is (called) Stockholm.)
    </p>

    <p className="w3-margin-left">
      Vi heter Svensson i efternamn.
      <br />
      (= Our surname is Svensson.)
    </p>
  </div>,
  <div className="lesson-chunk">
    <h5>GP3: Subject-verb agreement</h5>

    <p>
      Unlike English, Swedish does not change verb forms depending on who is the
      subject:
    </p>

    <p className="w3-margin-left">
      Jag <strong>bor</strong> i Stockholm. (= I <i>live</i> in Stockholm.)
    </p>
    <p className="w3-margin-left">
      Du <strong>bor</strong> i Göteborg. (= You <i>live</i> in Gothenburg.)
    </p>
    <p className="w3-margin-left">
      Han <strong>bor</strong> i Malmö. (= He <i>lives</i> in Malmö.)
    </p>

    <p>
      By the same logic, the verb <i>är</i> gets translated to is, am or are,
      depending on who or what the subject is.
    </p>

    <p className="w3-margin-left">
      Jag <strong>är</strong> hungrig. (= I <i>am</i> hungry.)
    </p>
    <p className="w3-margin-left">
      Du <strong>är</strong> hungrig. (= You <i>are</i> hungry.)
    </p>
    <p className="w3-margin-left">
      Han <strong>är</strong> hungrig. (= He <i>is</i> hungry.)
    </p>

    <p>
      However, in Swedish, we do change the verb forms depending on tense or
      aspect, just like in English. But we'll get to that later.
    </p>

    <p>
      The dictionary form of <i>är</i> is <i>vara</i> (to be).
    </p>
  </div>
];

export default lessonChunks;
