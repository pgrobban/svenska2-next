import React from "react";
import WarningBlock from "../../../components/WarningBlock";

export default [
  <div className="lesson-chunk">
    <div className="blackboard lesson-blackboard">
      <h2>Language Bites</h2>
      <h3>Understanding "ju"</h3>
    </div>

    <p>
      The word <i>ju</i> can be confusing for Swedish learners as it has a few
      usages, none of which are directly translatable to English. In this
      Language Bite, I will try to explain the different ways to use it along
      with some example sentences.
    </p>
  </div>,
  <div className="lesson-chunk">
    <h3 className="theme-swe-blue">Usage 1: ju... desto...</h3>

    <p>
      When <i>ju</i> is paired with a <i>desto</i> in a sentence, the <i>ju</i>{" "}
      part indicates that there is an action or a precondition, and the{" "}
      <i>desto</i> indicates a consequence or result of the action. Normally you
      can think of translating this as "the more X, the more Y".
    </p>

    <p>Let's look at some examples.</p>

    <p>Ex 1:</p>
    <p className="w3-margin-left">
      <strong>Ju</strong> mer jag jobbar, <strong>desto</strong> tröttare blir
      jag.
      <br />
      <u>The more</u> I work, <u>the more</u> tired I become.
    </p>

    <p>Ex 2:</p>
    <p className="w3-margin-left">
      <strong>Ju</strong> längre bandet spelade, <strong>desto</strong> gladare
      blev vi.
      <br />
      <u>The more</u> the band played, <u>the happier</u> we became.
    </p>

    <p>Ex 3:</p>
    <p className="w3-margin-left">
      <strong>Ju</strong> fler munkar du äter, <strong>desto</strong> tjockare
      kommer du att bli.
      <br />
      <u>The more</u> donuts you eat, <u>the fatter/more fat</u> you will be.
    </p>

    <p>Ex 4:</p>
    <p className="w3-margin-left">
      <strong>Ju</strong> mer du pluggar, <strong>desto</strong> bättre.
      <br />
      <u>The more</u> you study, <u>the better</u>.
    </p>
  </div>,
  <div className="lesson-chunk">
    <p>There are a couple of things to note here:</p>
    <ul>
      <li>
        Both the <i>ju</i> part and the <i>desto</i> parts are subclauses (see
        Textbook for grammar explanation).
      </li>
      <li>
        What follows the <i>ju</i> is an adjective in the comparative form
        followed by a noun or pronoun, or the word <i>mer</i>
        followed by a verb phrase.
        <br />
        In the latter case, it means "the more someone does something", where
        the someone is the subject of the subclause.
      </li>
      <li>
        The subjects of the two subclauses don't have to be the same (Ex. 2).
      </li>
      <li>
        The word <i>bättre</i> on its own in Ex 4 is technically not a subclause
        as it lacks a subject and verb, but its interpretation can be left to
        the reader depending on the context. In this example, the action of
        studying more will produce the consequence of better results on a test,
        more knowledge etc.
      </li>
    </ul>

    <WarningBlock>
      <p>
        Some people have started saying ju...ju or even desto...desto in oral
        speech. This is incorrect.
      </p>

      <p>
        I suspect that this comes from the translated version of the children's
        song lyrics "The more we are together, the happier we'll be", which in
        Swedish is sung as <i>Ju mer vi är tillsammans, ju gladare vi bli</i>.
        The second <i>ju</i> here should be a <i>desto</i>, but because <i>desto</i> has two
        syllables, it doesn't fit the melody quite right. Furthermore, the {" "}
        <i>vi bli</i> part is outdated grammar so in modern Swedish it should be{" "}
        <i>blir vi</i>.
      </p>
    </WarningBlock>
  </div>,
  <div className="lesson-chunk">
    <h3 className="theme-swe-blue">Usage 2: Main clause + ju</h3>

    <p>
      This has a similar meaning to the first usage of <i>ju</i>, that is,
      expressing the result or consequence of an action or precondition.
      However, in this sentence structure, the result comes before the action,
      which might seem a bit odd in English.
    </p>

    <p>
      When using this sentence structure, the first part is a main clause, which
      means you probably don't have to worry about word order, and there is no
      <i>desto</i> to be found in either part of the sentence.
    </p>

    <p>
      We can rewrite the first three example sentences from the previous section
      like the following. Ex 4 cannot be written like this as the word{" "}
      <i>bättre</i> on its own is not a clause.
    </p>

    <p>Ex 1:</p>
    <p className="w3-margin-left">
      Jag blir tröttare <strong>ju</strong> mer jag jobbar.
    </p>

    <p>Ex 2:</p>
    <p className="w3-margin-left">
      Vi blev gladare <strong>ju</strong> längre bandet spelade.
    </p>

    <p>Ex 3:</p>
    <p className="w3-margin-left">
      Du kommer att bli tjockare <strong>ju</strong> fler munkar du äter.
    </p>
  </div>,
  <div className="lesson-chunk">
    <h3 className="theme-swe-blue">Usage 3: ju as an adverb</h3>

    <p>
      This is a tricky one but if you can use this version of <i>ju</i>{" "}
      correctly, your level of Swedish will increase by a lot.
    </p>
    <p>
      When <i>ju</i> is used as an adverb, it usually adds emphasis or emotion
      to a statement. For instance, it can be used to add joy to a statement, or
      it can be used to refute statements in a defensive manner.
    </p>

    <p>Ex 1 (Adding joy):</p>
    <p className="w3-margin-left">
      Du fyller <strong>ju</strong> 60! Hur känns det?
      <br />
      You're turning 60! How does it feel?
    </p>

    <p>Ex 2 (Adding defensiveness to refutal):</p>
    <p className="w3-margin-left">
      A: Du är inte tillräckligt gammal för att se filmen.
      <br />
      B: (Men) jag är <strong>ju</strong> äldre än dig!
      <br />
      A: You are not old enough to watch that movie.
      <br />
      B: But I am older than you!
    </p>

    <p>
      Similarly it can be added to express that the speaker believes something
      is true or obvious:
    </p>

    <p>Ex 3 (Expressing opinion):</p>
    <p className="w3-margin-left">
      Provet var <i>ju</i> jättelätt! Hur kunde du bara få ett C?
      <br />
      The exam was so easy! How come you only got a C?
    </p>

    <p>Ex 4 (Expressing something obvious):</p>
    <p className="w3-margin-left">
      Det var så mycket trafik, så det var <strong>ju</strong> inte konstigt att
      jag blev sen.
      <br />
      There was a lot of traffic, no wonder I got late.
    </p>

    <p>
      In all of these sentences, the meaning is same with <strong>ju</strong> as
      without it, and we can't express the differences easily in English.
      However, adding the <i>ju</i>
      gives the sentences that extra emotional "kick".
    </p>
  </div>
];
