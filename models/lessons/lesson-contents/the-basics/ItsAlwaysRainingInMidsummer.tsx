import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@material-ui/core";
import WordList from "../../../../components/WordList";
import {
  itsAlwaysRainingInMidsummerWords,
  itsAlwaysRainingInMidsummerAdditionalWords
} from "../../word-lists/ItsAlwaysRainingInMidsummer";
import AudioButton from "../../../../components/AudioButton";
import Image from 'next/image';

const lessonChunks = [
  <div className="lesson-chunk">
    <div className="blackboard lesson-blackboard">
      <h2>Lesson 7</h2>
      <h3>It's always raining in midsummer</h3>
    </div>

    <div className="lesson-goals">
      <h3 className="theme-swe-blue w3-margin-top">Lesson goals</h3>
      <p>In this lesson you will learn how to:</p>

      <ul>
        <li>...describe weather.</li>
        <li>...read the weather map.</li>
      </ul>
    </div>
  </div>,
  <div className="lesson-chunk">
    <p>Look at the pictures below and listen to the sound recordings.</p>

    <Table>
      <TableBody>
        <TableRow>
          <TableCell>
            <Image height={200} width={200} alt="play" src="/images/sunny.jpg" />
            <p>
              Det är soligt.
              <br />= Vädret är fint.
              <br />= Solen skiner.
            </p>
          </TableCell>
          <TableCell>
            <AudioButton fileName="" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Image
              height={200} width={200}
              alt="play"
              src="/images/halvklart.jpg"
            />
            <p>
              Det är molnigt.
              <br />
              Det är halvklart.
            </p>
          </TableCell>
          <TableCell>
            <AudioButton fileName="" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Image
              height={200} width={200}
              alt="play"
              src="/images/overcast.jpg"
            />
            <p>Det är mulet.</p>
          </TableCell>
          <TableCell>
            <AudioButton fileName="" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Image height={200} width={200} alt="play" src="/images/rain.jpg" />
            <p>
              Det regnar.
              <br />
              Det är tråkigt väder.
            </p>
          </TableCell>
          <TableCell>
            <AudioButton fileName="" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Image
              height={200} width={200}
              alt="play"
              src="/images/lightning.jpg"
            />
            <p>Det åskar och blixtrar.</p>
          </TableCell>
          <TableCell>
            <AudioButton fileName="" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Image height={200} width={200} alt="play" src="/images/snow.jpg" />
            <p>Det snöar.</p>
          </TableCell>
          <TableCell>
            <AudioButton fileName="" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Image height={200} width={200} alt="play" src="/images/hail.jpg" />
            <p>Det haglar.</p>
          </TableCell>
          <TableCell>
            <AudioButton fileName="" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Image height={200} width={200} alt="fog" src="/images/fog.jpg" />
            <p>Det är dimmigt.</p>
          </TableCell>
          <TableCell>
            <AudioButton fileName="" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Image height={200} width={200} alt="fog" src="/images/fog.jpg" />
            <p>Det blåser.<br />
            = Det är blåsigt.</p>
          </TableCell>
          <TableCell>
            <AudioButton fileName="" />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>,
  <div className="lesson-chunk">
    <p>Look at the weather map below and read the text.</p>
    <Image height={200} width={300} alt="weather" src="/images/weather.png" />

    <p>
      Det är midsommar.
      <br />
      Solen skiner i Italien.
      <br />
      Det blir halvklart till mulet i Tyskland.
      <br />
      Det regnar i Danmark och södra Sverige. <br />
      Det är tjugoåtta grader varmt i Rom och femton grader varmt i Stockholm.
    </p>
  </div>,
  <div className={"lesson-chunk"}>
    <h4 className="theme-swe-blue">New words</h4>
    <WordList words={itsAlwaysRainingInMidsummerWords} />
  </div>,
  <div className={"lesson-chunk"}>
    <h4 className="theme-swe-blue">Additional words</h4>
    <WordList words={itsAlwaysRainingInMidsummerAdditionalWords} />
  </div>,
  <div className="lesson-chunk">
    <h4 className="theme-swe-blue">Grammar points</h4>
    <h5>
      GP1: <i>det</i> as dummy subject
    </h5>

    <p>
      I mentioned in a previous grammar point that just like in English,
      sentences in Swedish require a subject and a verb (with some exceptions
      like exclamations).
    </p>
    <p>
      When we want to express weather conditions, we have to insert the pronoun
      "it" as a dummy subject to fulfill this requirement. Thus, "it" here
      doesn't represent a person or thing, it is simply there because our
      grammatical rules say we can't just say "Raining." or "Is hot." as valid
      sentences.
    </p>
    <p>
      This dummy subject use of "it" is represented in Swedish by the word{" "}
      <i>det</i>:
    </p>
    <p className="w3-margin-left">
      Det regnar.
      <br />
      Det snöar inte.
    </p>

    <p>
      Grammatically, this use of <i>det</i> is the same as we have seen before
      when learned it to describe specific things or people. Thus, we need to
      change any adjectives that follow <i>det</i> to be in <i>-t</i>
      -form:
    </p>

    <p className="w3-margin-left">
      Det är varm<strong>t</strong>.
      <br />
      Det är inte kall<strong>t</strong>.
    </p>
  </div>
];

export default lessonChunks;
