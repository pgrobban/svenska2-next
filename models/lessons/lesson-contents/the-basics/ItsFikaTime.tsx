import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@material-ui/core";
import WordList from "../../../../components/WordList";
import {
  itsFikaTimeWords,
  itsFikaTimeAdditionalWords
} from "../../word-lists/ItsFikaTime";
import AudioButton from "../../../../components/AudioButton";

const lessonChunks = [
  <div className="lesson-chunk">
    <div className="blackboard lesson-blackboard">
      <h2>Lesson 11</h2>
      <h3>It's fika time</h3>
    </div>

    <div className="lesson-goals">
      <h3 className="theme-swe-blue w3-margin-top">Lesson goals</h3>
      <p>In this lesson you will learn how to:</p>

      <ul>
        <li>...tell the time.</li>
      </ul>
    </div>
  </div>,
  <div className="lesson-chunk">
    <h4 className="theme-swe-blue">Text</h4>
    <p>Håkan pratar med en kollega, Nils.</p>

    <Table>
      <TableBody>
        <TableRow>
          <TableCell className="smallcaps">Håkan:</TableCell>
          <TableCell>Ursäkta, vad är klockan?</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="smallcaps">Nils:</TableCell>
          <TableCell>Har du inte mobilen med dig?</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="smallcaps">Håkan:</TableCell>
          <TableCell>Nej, jag glömde den hemma.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="smallcaps">Nils:</TableCell>
          <TableCell>Jaha, vad synd. Hon är kvart över två.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="smallcaps">Håkan:</TableCell>
          <TableCell>
            Tack. Förresten... fyller Ingvar år idag? När är fikat?
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="smallcaps">Nils:</TableCell>
          <TableCell>Halv tre, så det är snart dags.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="smallcaps">Håkan:</TableCell>
          <TableCell>Hoppas det blir chokladtårta.</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>,
  <div className="lesson-chunk">
    <h4 className="theme-swe-blue">New words</h4>
    <WordList words={itsFikaTimeWords} />
  </div>,
  <div className="lesson-chunk">
    <h4 className="theme-swe-blue">Additional words</h4>
    <WordList words={itsFikaTimeAdditionalWords} />
  </div>,
  <div className="lesson-chunk">
    <h4 className="theme-swe-blue">Grammar points</h4>
    <h5>GP1: Asking or telling the time</h5>
    <p>
      In Sweden, our digital clocks show the time in the 24 hour system, but we
      still talk about time in the 12 hour clock.
      <br />
      Thus, the way we tell the time in Swedish is mostly the same as in
      English, but there are some caveats.
    </p>
    <p>
      Let's start with the question "What's the time?". In Swedish we ask it as
    </p>
    <p className="w3-margin-left">Vad är klockan?</p>
    <p>which literally means "What's the clock?"</p>

    <p>
      You could reply directly with numbers. Suppose the answer is 12:05 - then
      you could simply say <i>tolv noll fem</i> and it would be a perfectly
      valid answer.
    </p>
  </div>,
  <div className="lesson-chunk">
    <p>
      But, if we wanted to say "five past twelve" we could say it like this:
    </p>

    <p className="w3-margin-left">fem över tolv</p>

    <p>
      The word <i>över</i> means "past" in the context of time. Likewise, the
      word
      <i>i</i> means "to" when talking about the time before an hour. Thus,
      11:55 would be
    </p>

    <p className="w3-margin-left">fem i tolv</p>

    <p>
      If you want to make a full sentence, in English you would say "
      <strong>It's</strong>
      five to twelve. You might think that in Swedish, the "it" would be{" "}
      <i>den</i> here because <i>klocka</i> is an en-word.
      <br />
      But <i>klocka</i> wasn't always an en-word. In the past, Swedish used to
      have three genders for nouns. Much like the German system today, we had
      masculine, feminine and neuter nouns. <i>Klocka</i> was a feminine word,
      and referring to it we used the word
      <i>hon</i>. Thus, the full reply would be
    </p>

    <p className="w3-margin-left">Hon är fem i tolv.</p>

    <p>
      This is one of the few usages of <i>hon</i> meaning "it" that is still in
      use today that is not <i>den</i> or <i>det</i>.
    </p>
  </div>,
  <div className="lesson-chunk">
    <p>
      Like in English, we use the word <i>kvart</i> (quarter) for times ending
      with :15 and :45. As you can guess, they take on the prepositions{" "}
      <i>över</i> and <i>i</i>, respectively.
    </p>

    <p>
      However, when we say <i>halv</i>+number, this refers to the coming hour
      and not the past hour. Thus, "halv tre" means <strong>2:30</strong> and
      not 3:30!
    </p>

    <p>
      Finally, let's look at how we say 25 minutes past and to an hour. While
      you could say <i>tjugofem över</i> or <i>tjugofem i</i> respectively, a
      more common way in Swedish is to point to the half hour, which makes it a
      bit confusing for beginner learners:
    </p>

    <p className="w3-margin-left">
      Hon är fem i halv två (1:25).
      <br />
      Hon är fem över halv två (1:35).
    </p>
  </div>,
  <div className="lesson-chunk">
    <p>
      As I mentioned in the beginning of this GP, our digital watches show time
      in 24 hours even though we use 12 hours when we talk. Usually the context
      is enough to determine if the action takes place in the morning or
      afternoon.
    </p>
    <p>
      But if we really want to clarify or emphasize that an action takes places
      during a certain time of day, we do so by using <i>på</i> + time of day,
      e.g.
    </p>
    <p className="w3-margin-left">
      på morgonen
      <br />
      på förmiddagen
      <br />
      på dagen
      <br />
      på eftermiddagen
      <br />
      på kvällen
      <br />
      på natten
    </p>

    <p className="w3-margin-left">
      Flyget avgår klockan sex på morgonen.
      <br />
      (= The flight departs at 6 am.)
    </p>
    <p>
      There are no exact hours when these time intervals start. Furthermore, in
      some parts of Sweden the sun never rises for several months in winter, and
      doesn't set for several months in summer, so what you say here might not
      reflect the conditions outside.
    </p>
  </div>,
  <div className="lesson-chunk">
    <h5>GP2: Some notes on adverbs</h5>

    <p>
      Starting with <i>inte</i> in lesson 4, you have learned several adverbs
      such as <i>bara</i>, <i>tyvärr</i>, <i>förresten</i> and so on.
      <br />
      These types of adverbs that are not related to time and not modifying
      verbs can be stacked one after another in the same place as <i>inte</i>,
      that is, before an object.
    </p>

    <p>
      This means that when you see one or more adverbs in a row, it can be
      tricky to translate the sentence into English as the word order can be
      completely different:
    </p>

    <p className="w3-margin-left">
      Jag har <strong>inte</strong> fem dollar.
      <br />
      (= I <strong>don't</strong> have five dollars.)
    </p>

    <p className="w3-margin-left">
      Jag har <strong>snart</strong> fem dollar.
      <br />
      (= I will have 5 dollars <strong>soon</strong>.)
    </p>

    <p className="w3-margin-left">
      Jag har <strong>tyvärr bara</strong> fem dollar.
      <br />
      (= <strong>Unfortunately</strong>, I <strong>only</strong> have 5
      dollars.)
    </p>

    <p className="w3-margin-left">
      Jag har <strong>förresten inte bara</strong> fem dollar (, men...).
      <br />
      (= <strong>By the way</strong>, I <strong>don't just</strong> have 5
      dollars/I <strong>not only</strong> have 5 dollars (but....))
    </p>

    <p>
      There are a whole bunch of rules in which order adverbs need to go in but
      unfortunately it's out of scope for this lesson. Sometimes multiple orders
      could be correct, but it changes the meaning or nuance of the sentence.
    </p>
  </div>,
  <div className="lesson-chunk">
    <div className="culture-note">
      <h4 className="theme-swe-blue">Culture note: Fika</h4>
      <p>
        <i>Fika</i> is often a word that gets translated to "coffee break" but
        for us Swedes, it is so much more than that. It is a social phenomenon,
        a reason to spend some quality time.
      </p>
      <p>
        You can fika at home, by yourself or with your family. You can fika at
        work with your coworkers or boss. You can fika outside with a date or
        with friends.
      </p>
      <p>
        Fika involves not only coffee but any drink of your choice. It is also
        accompanied by sweets or pastries such as cake, cinnamon buns, Danish
        pastries, sandwiches or cookies.
        <br />
        In some workplaces it is common that workers buy fika for their team on
        their birthdays, in some it's the other way around - the company buys
        the employee fika!
      </p>
      <p>
        The word <i>fika</i> is both a noun and verb in Swedish. If you use it
        as a verb, you can use it as it is or the phrase <i>ta en fika</i>.
        Thus, both
        <i>Vill du fika med mig?</i> and <i>Vill du ta en fika med mig?</i> are
        valid ways to ask someone (and a good way to start a date 😀).
      </p>
      <p>
        It is said that the word fika comes from a rewrite of the word{" "}
        <i>kaffi</i>. Although the word itself has a history of hundreds of
        years, it has only taken the modern meaning in the second half of the
        20th century.
      </p>
    </div>
  </div>
];

export default lessonChunks;
