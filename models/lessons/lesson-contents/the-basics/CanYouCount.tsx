import React from "react";
import {
  canYouCountWords,
  canYouCountAdditionalWords
} from "../../word-lists/CanYouCount";
import {
  Table,
  TableBody,
  TableCell,
  TableRow
} from "@material-ui/core";
import WordList from "../../../../components/WordList";

const lessonChunks = [
  <div className="lesson-chunk">
    <div className="blackboard lesson-blackboard">
      <h2>Lesson 5</h2>
      <h3>Can you count?</h3>
    </div>

    <div className="lesson-goals">
      <h3 className="theme-swe-blue w3-margin-top">Lesson goals</h3>
      <p>In this lesson you will learn:</p>

      <ul>
        <li>...how to say the numbers 0-20 in Swedish.</li>
      </ul>
    </div>
  </div>,
  <div className="lesson-chunk">
    <h4 className="theme-swe-blue">Text</h4>

    <p>Lena är med Saga på zoo.</p>

    <Table>
      <TableBody>
        <TableRow>
          <TableCell className="smallcaps">Lena:</TableCell>
          <TableCell>Titta! En apa.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="smallcaps">Saga:</TableCell>
          <TableCell>Här är en till. Och där är en till!</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="smallcaps">Lena:</TableCell>
          <TableCell>Hur många är de tillsammans?</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="smallcaps">Saga:</TableCell>
          <TableCell>En... två... tre!</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="smallcaps">Lena:</TableCell>
          <TableCell>Och där borta, hur många pingviner?</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="smallcaps">Saga:</TableCell>
          <TableCell>
            En, två, tre, fyra, fem, sex, sju, åtta, nio, tio!
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="smallcaps">Lena:</TableCell>
          <TableCell>Vad duktig du är på att räkna!</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>,
  <div className={"lesson-chunk"}>
    <h4 className="theme-swe-blue">New words</h4>
    <WordList words={canYouCountWords} />
  </div>,
  <div className={"lesson-chunk"}>
    <h4 className="theme-swe-blue">Additional words</h4>
    <WordList words={canYouCountAdditionalWords} />
  </div>,
  <div className="lesson-chunk">
    <h6>Pronunciation notes</h6>
    <p>
      In the text you heard Saga pronounce <i>nio</i> and <i>tio</i> as [nie]
      and [tie], respectively. This is not only because she's a child, but also
      because this is the common way to pronounce these words in a casual
      setting, even for adults.
    </p>

    <p>
      In the audio samples I have included both ways to say it. No matter how
      you choose to pronounce these words, the spelling must be <i>nio</i> and{" "}
      <i>tio</i> when you write them.
    </p>
    <p>
      The words for 20, and higher multiples of 10 (which we will see in a later
      lesson) also have multiple pronunciations depending on the dialect of the
      speaker. For instance, some dialects pronounce <i>tjugo</i> as [shuge] or
      [shugi]. In Finland Swedish it's also common to change the initial [sh]
      sound to a [ch] so it becomes [chugo].
    </p>
  </div>,
  <div className={"lesson-chunk"}>
    <h4 className="theme-swe-blue">Grammar points</h4>
    <h5>GP1: Counting</h5>
    <p>
      The only grammar point for this lesson is an easy one - counting in
      Swedish works mostly the same as in English. The only thing to watch out
      for is when to use <i>en</i> and <i>ett</i> for "one".
      <br />
      In most cases though, you'd be fine using either of them.
    </p>
    <ul>
      <li>
        When simply counting numbers, we use <i>ett</i>.
      </li>
      <li>
        When counting concrete things, use <i>en</i> or <i>ett</i> depending on
        the noun that you are counting. For example, for houses you would use
        <i>ett</i> and for cars <i>en</i>. If you're not saying the noun after
        the number, it doesn't matter which one you pick.
      </li>
      <li>
        If you're a musician counting in a beat, <i>en</i> seems to be
        preferable <i>(en, två, tre, fyr*)</i>
      </li>
    </ul>
    <p>
      * The a in <i>fyra</i> gets cut off to keep the word one syllable.
    </p>
  </div>
];

export default lessonChunks;
