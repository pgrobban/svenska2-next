import React from "react";
import AudioButton from "../../../../components/AudioButton";
import moreThanYesAndNoWords from "../../word-lists/MoreThanYesAndNo";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";
import WordList from "../../../../components/WordList";

const lessonChunks = [
  <div className="lesson-chunk">
    <div className="blackboard lesson-blackboard">
      <h2>Lesson 4</h2>
      <h3>More than yes and no</h3>
    </div>

    <div className="lesson-goals">
      <h3 className="theme-swe-blue w3-margin-top">Lesson goals</h3>
      <p>In this lesson you will learn:</p>

      <ul>
        <li>...how to ask and answer yes/no-questions in natural Swedish.</li>
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
            <img className="table-image" alt="play" src="/images/Håkan.jpg" />
            <p>Han heter Håkan.</p>
            <p>
              <strong>Heter</strong> han Håkan?
              <br />
              Ja, det <strong>heter</strong> han.
              <br />= Ja, det <strong>gör</strong> han.
            </p>
          </TableCell>
          <TableCell>
            <AudioButton fileName="" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <img className="table-image" alt="play" src="/images/Lena.jpg" />
            <p>Hon heter inte Lisa.</p>

            <p>
              <strong>Heter</strong> hon Lisa?
              <br />
              Nej, hon <strong>heter</strong> Lena.
              <br />= Nej, hon <strong>heter</strong> inte Lisa. Hon{" "}
              <strong>heter</strong> Lena.
              <br />= Nej, det <strong>heter</strong> hon inte. Hon{" "}
              <strong>heter</strong> Lena.
              <br />= Nej, det <strong>gör</strong> hon inte. Hon{" "}
              <strong>heter</strong> Lena.
            </p>
          </TableCell>
          <TableCell>
            <AudioButton fileName="" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <img className="table-image" alt="play" src="/images/limo.jpg" />
            <p>Bilen är stor.</p>

            <p>
              <strong>Är</strong> bilen stor?
              <br />
              Ja, bilen <strong>är</strong> stor.
              <br />= Ja, det <strong>är</strong> den.
            </p>
          </TableCell>
          <TableCell>
            <AudioButton fileName="" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <img className="table-image" alt="play" src="/images/game.jpg" />
            <p>Spelet är svårt.</p>

            <p>
              <strong>Är</strong> spelet svårt?
              <br />
              Ja, spelet <strong>är</strong> svårt.
              <br />= Ja, det <strong>är</strong> svårt.
            </p>
          </TableCell>
          <TableCell>
            <AudioButton fileName="" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <img className="table-image" alt="play" src="/images/Saga.jpg" />
            <p>Saga är inte stor.</p>

            <p>
              <strong>Är</strong> Saga stor?
              <br />
              Nej, hon <strong>är</strong> liten.
              <br />= Nej, det <strong>är</strong> hon inte. Hon{" "}
              <strong>är</strong> liten.
            </p>
          </TableCell>
          <TableCell>
            <AudioButton fileName="" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <img
              className="table-image"
              alt="pizza chefs"
              src="/images/pizza-chefs.jpg"
            />
            <p>De bakar inte bröd.</p>
            <p>
              <strong>Bakar</strong> de bröd?
              <br />
              Nej, de <strong>bakar</strong> pizzor.
              <br />= Nej, det <strong>gör</strong> de inte. De{" "}
              <strong>bakar</strong> pizzor.
            </p>
          </TableCell>
          <TableCell>
            <AudioButton fileName="" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <img className="table-image" alt="study" src="/images/study.jpg" />
            <p>Du pluggar svenska.</p>
            <p>
              <strong>Pluggar</strong> du svenska?
              <br />
              Ja, det <strong>gör</strong> jag.
            </p>
          </TableCell>
          <TableCell>
            <AudioButton fileName="" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <img className="table-image" alt="study" src="/images/speak.jpg" />
            <p>De pratar inte engelska.</p>
            <p>
              - <strong>Pratar</strong> ni engelska?
              <br />- Nej, det <strong>gör</strong> vi inte.
            </p>
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
    <WordList words={moreThanYesAndNoWords} />
  </div>,
  <div className="lesson-chunk">
    <h4 className="theme-swe-blue">Grammar points</h4>
    <h5>GP1: Personal pronouns</h5>
    <p>
      Personal pronouns are words we use as a substitute for the proper name of
      a person or thing, or when we don't know the name of said person or thing.
    </p>
    <p>Below is a list of personal pronouns in Swedish:</p>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Swedish</TableCell>
          <TableCell>English</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>jag</TableCell>
          <TableCell>I</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>du</TableCell>
          <TableCell>you (singular)</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>han</TableCell>
          <TableCell>he</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>hon</TableCell>
          <TableCell>she</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>hen</TableCell>
          <TableCell>
            (gender-neutral third person pronoun instead of he or she when the
            gender is not known or not relevant)<sup>1</sup>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>man</TableCell>
          <TableCell>
            (any person, but not a particular person)<sup>2</sup>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>vi</TableCell>
          <TableCell>we</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>ni</TableCell>
          <TableCell>
            you (plural)<sup>3</sup>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>de</TableCell>
          <TableCell>they</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <small>
      1) As this is a relatively new word, older people might not use it.
      <br />
      2) We will get back to this <i>man</i> in a later lesson.
      <br />
      3) There is a second meaning of <i>ni</i>, which is a polite form of the
      singular you. When using this meaning, it is sometimes capitalized (
      <i>Ni</i>).
      <br />
      Even though it's polite speech, <i>Ni</i> is not something you should use
      (but of course you can still use the ni meaning plural you). There are
      other ways to construct formal/polite sentences, but we won't cover those
      in this course. Stick to <i>du</i> for most cases.
      <br />
      You can see this meaning of <i>Ni</i> appear in subtitles for foreign
      movies or in older Swedish movies, without the capitalization.
    </small>
  </div>,
  <div className="lesson-chunk">
    <h5>GP2: Negative sentences</h5>
    <p>
      In the first lesson, we saw that the word order for declarative sentences
      is subject-verb-object:
    </p>
    <p className="w3-margin-left">
      <span data-bracket="subject">Jessica</span>&nbsp; &nbsp;
      <span data-bracket="verb">spelar</span>&nbsp; &nbsp;
      <span data-bracket="object">datorspel</span>.
    </p>
    <p className="w3-margin-left">
      <span data-bracket="subject">Min bil</span>&nbsp; &nbsp;
      <span data-bracket="verb">är</span>&nbsp; &nbsp;
      <span data-bracket="object">stor</span>.
    </p>

    <p>
      Negative sentences are also declarative sentences but they declare
      statements that are untrue. In English you express this by adding "not" to
      helping verbs such as do, does, is, wasn't and so on.
      <br />
      This is the role of the word <i>inte</i> in Swedish.
    </p>

    <p>
      <i>inte</i> is an adverb and rule for declarative sentences is that
      adverbs get placed after the main verb and before the object. Thus, our
      sentences above become
    </p>

    <p className="w3-margin-left">
      Jessica spelar <span data-bracket="adverb">inte</span>&nbsp; datorspel.
      <br />
      (=Jessica <strong>does not</strong> play computer games.)
    </p>
    <p className="w3-margin-left">
      Min bil är<span data-bracket="adverb">inte</span>&nbsp; stor.
      <br />
      (=My car <strong>is not</strong> big.)
    </p>
  </div>,
  <div className="lesson-chunk">
    <h5>GP3: Negative sentences</h5>
    <p>
      To turn declarative sentences into a question, we simply swap the order of
      the subject and the verb and add a question mark:
    </p>

    <p>
      <span data-bracket="verb">Spelar</span>&nbsp; &nbsp;
      <span data-bracket="subject">Jessica</span>&nbsp; &nbsp;
      <span data-bracket="object">datorspel</span>?
    </p>

    <p>
      <span data-bracket="verb">Är</span>&nbsp; &nbsp;
      <span data-bracket="subject">din (your) bil</span>&nbsp; &nbsp;
      <span data-bracket="object">stor</span>?
    </p>
  </div>,
  <div className="lesson-chunk">
    <h5>GP4: Answering questions</h5>
    <p>
      While you can answer any yes/no question by simply replying <i>ja</i> or
      <i>nej</i>, this will make you sound very stiff and sometimes even
      impolite.
    </p>
    <p>
      What we do in Swedish is similar to English, by adding a declarative part
      such as "I am", "he does", "she is" or, when the answer is negative, "I'm
      not", "he doesn't" or "she isn't".
    </p>
    <p>
      There are multiple ways you can express this in Swedish. Let's start with
      answering affirmatively. The sentence formula is as follows:
    </p>

    <p className="centered">Ja, det &lt;verb&gt; &lt;personal pronoun&gt;.</p>
  </div>,
  <div className="lesson-chunk">
    <p>Let's break it down:</p>

    <p className="w3-margin-left">
      The <i>det</i> here doesn't mean "it" as we saw in the previous lesson.
      Rather, it acts as a expletive subject to make the sentence conform to
      grammatical rules.
      <br />
      You can think of this <i>det</i> like the "it" in sentences like "It's
      raining." The "it" is simply there because English grammar dictates that a
      subject is always present in a sentence, rather than referring to an
      object.
    </p>

    <p className="w3-margin-left">
      The verb in the answer can be the same as in the question. However, for
      most questions, we answer with the verb <i>gör</i> (do) instead. This is
      analogous to "Yes, X does" in English.
    </p>

    <p className="w3-margin-left">
      And finally, a personal pronoun is one of the words we saw in GP1.
    </p>
  </div>,
  <div className="lesson-chunk">
    <p>Now let's look at how to answer in the negative:</p>
    <p className="centered">
      Nej, det &lt;verb&gt; &lt;personal pronoun&gt; inte.
    </p>
    <p>
      This is the same structure as in the affirmative case, but we have added
      the <i>inte</i> at the end. Remember that the <i>inte</i> here negates the
      verb and not the personal pronoun, so this is the equivalent of saying
      someone is not or does not do something in English.
    </p>
    <p>
      Before you do the exercises, I suggest that you go back to the text and
      compare the sentences to see how they fit our formulas.
    </p>
  </div>
];

export default lessonChunks;
