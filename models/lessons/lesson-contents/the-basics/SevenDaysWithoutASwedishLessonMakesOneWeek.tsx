import React from "react";
import AudioButton from "../../../../components/AudioButton";
import {
  sevenDaysWithoutASwedishLessonMakesOneWeekWords,
  SevenDaysWithoutASwedishLessonMakesOneWeekAdditionalWords
} from "../../word-lists/SevenDaysWithoutASwedishLessonMakesOneWeek";
import WordList from "../../../../components/WordList";
import { Table, TableBody, TableCell, TableRow } from "@material-ui/core";

const lessonChunks = [
  <div className="lesson-chunk">
    <div className="blackboard lesson-blackboard">
      <h2>Lesson 10</h2>
      <h3>7 days without a Swedish lesson makes one week</h3>
    </div>

    <div className="lesson-goals">
      <h3 className="theme-swe-blue w3-margin-top">Lesson goals</h3>
      <p>In this lesson you will learn:</p>

      <ul>
        <li>...how to say the names of the weekdays in Swedish.</li>
        <li>...how to say if an appointment works for you or not.</li>
      </ul>
    </div>
  </div>,
  <div className="lesson-chunk">
    <h4 className="theme-swe-blue">Text</h4>
    <p>Alfred pratar med en vän, Hanna.</p>

    <Table>
      <TableBody>
        <TableRow>
          <TableCell className="smallcaps">Alfred:</TableCell>
          <TableCell>Vill du se en film med mig på måndag?</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="smallcaps">Hanna:</TableCell>
          <TableCell>Jag kan tyvärr inte då. Tisdag då?</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="smallcaps">Alfred:</TableCell>
          <TableCell>Vi har matteprov på tisdag, men onsdag går bra.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="smallcaps">Hanna:</TableCell>
          <TableCell>
            Jag har pianolektioner på onsdagar. Kan du torsdag eller fredag?
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="smallcaps">Alfred:</TableCell>
          <TableCell>
            Suck... Helgen funkar nog bättre för mig. Ska vi säga lördag eller
            söndag?
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="smallcaps">Hanna:</TableCell>
          <TableCell>Både lördag och söndag funkar för mig.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="smallcaps">Alfred:</TableCell>
          <TableCell>Vad bra, vi ses på lördag då.</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>,
  <div className="lesson-chunk">
    <h4 className="theme-swe-blue">New words</h4>
    <WordList words={sevenDaysWithoutASwedishLessonMakesOneWeekWords} />
  </div>,
  <div className="lesson-chunk">
    <h4 className="theme-swe-blue">Grammar points</h4>
    <h5>GP1: Weekdays</h5>
    <p>
      The Swedish week starts on a Monday and ends on a Sunday. The names of the
      days of the week in Swedish are
      <br />
      <i>måndag, tisdag, onsdag, torsdag, fredag, lördag, söndag</i>
    </p>
    <p>
      Notice that the names of the weekdays are not capitalized in Swedish
      (unless, of course, they appear in the start of a sentence).
    </p>
    <p>
      If you want to say something happens on a certain day, use the preposition
      <i>på</i>, e.g. <i>på måndag</i>. However, there are a couple of things to
      watch out for.
    </p>
    <p>
      For starters, this cannot be used in the past tense (e.g. if you want to
      say last Tuesday).
      <br />
      Another problem is that while you can put the day at the start of the
      sentence like in English, (e.g. "On Monday, I will go to Disneyland"
      instead of saying "I will go to Disneyland on Monday"), you cannot say
    </p>
    <p className="w3-margin-left red-strikethrough">
      På måndag jag ska till Disneyland.
    </p>

    <p>We will address both these issues in later lessons.</p>
  </div>,
  <div className="lesson-chunk">
    <h5>
      GP2: Then how about <i>då</i>...?
    </h5>

    <p>
      In this text you learned two meanings of the word <i>då</i>. In the last
      sentence of the text, Albert says <i>Vi ses på lördag då.</i>, and the{" "}
      <i>då</i> here simply means "then" either as a confirmation of the
      date/time or meaning "under those circumstances".
    </p>

    <p>
      Another meaning of <i>då</i> is "how about...?", which we could see in the
      sentence <i>Tisdag då?</i> = "How about Tuesday?"
    </p>
    <p>
      This meaning <i>då</i> is very flexible, as it can be preceded by almost
      anything: nouns, pronouns, verbs, adjectives or even whole phrases. You
      have to pay attention to the context, as the meaning could be one or even
      both of the above!
      <br />
      Here are some examples:
    </p>
    <p className="w3-margin-left">
      Du då? (= How about you?)
      <br />
      Sushi då? (= (Then) how about sushi?)
      <br />
      Vad gör han sedan då? (= Then what does he do/What does he do after that?)
    </p>
  </div>,
  <div className="lesson-chunk">
    <h5>GP3: Is that okay for you?</h5>

    <p>
      In the text you can see two ways of saying if something works or is okay
      for you.
      <br />
      <i>Funkar</i> is the casual form, and <i>går bra</i> is the more polite or
      formal form.
    </p>

    <p>
      Both are usually said without the topic pronoun in the question, i.e. you
      don't have to say "is it okay <strong>for you</strong>?". <i>Det</i> can
      be added as a subject for <i>funkar</i>, and has to be added when using{" "}
      <i>går bra</i> if there is no other subject.
    </p>
    <p className="w3-margin-left">
      Funkar (det på) måndag? (= Is Monday okay?)
      <br />
      Går det bra på måndag?
    </p>

    <p>
      When answering casually, simply <i>ja/nej</i> is enough, but if you want
      to answer with the full form for <i>går bra</i>, you have to add{" "}
      <i>det</i> as subject.
    </p>

    <p className="w3-margin-left">
      Ja, det funkar./Ja, det går bra./Ja, det gör det.
      <br />
      Nej (, det funkar inte)./Nej, det går inte bra./Nej, det gör det inte.
    </p>
    <p>
      Notice the double use of <i>det</i> in the last sentence.
    </p>
  </div>,
  <div className="lesson-chunk">
    <h5>GP4: Reciprocal verbs</h5>

    <p>
      There are a handful of verbs in Swedish that, when adding an <i>s</i>, it
      changes the meaning "to do something to/with each other". Their dictionary
      forms are the same as the present tense forms.
    </p>
    <p>Let's look at some examples:</p>
    <p className="w3-margin-left">
      ser (= see)
      <br />
      ses (reciprocal form, = see each other)
    </p>
    <p className="w3-margin-left">
      kramar (= hug)
      <br />
      kramas (reciprocal form, = hug each other)
    </p>
    <p className="w3-margin-left">
      träffa (= meet)
      <br />
      träffas (reciprocal form, = meet each other)
    </p>

    <p>
      Thus, saying <i>De kramar varandra.</i> is equivalent to saying{" "}
      <i>De kramas.</i>
    </p>

    <p>
      You will also find these reciprocal forms in some set expressions, e.g.
    </p>

    <p className="w3-margin-left">
      Vi ses! (= See you! (Literally: We [will] see each other.))
      <br />
      Vi hörs! (= Let's keep in touch [with each other]!)
    </p>

    <p>
      Do note that reciprocal forms only work on some verbs. There are
      definitely verbs that end with -s in their base forms or other forms such
      as passive voicing. You can always check with SAOL if you are unsure.
    </p>
  </div>
];

export default lessonChunks;
