import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@material-ui/core";
import WordList from "../../../../components/WordList";
import {
  hakansPhoneIsBrokenWords,
  hakansPhoneIsBrokenAdditionalWords
} from "../../word-lists/HakansPhoneIsBroken";
import AudioButton from "../../../../components/AudioButton";
import { IfDesktop, IfMobile } from "../../../../helpers/showBasedOnScreen";
import Image from 'next/image';

const lessonChunks = [
  <div className="lesson-chunk">
    <div className="blackboard lesson-blackboard">
      <h2>Lesson 16</h2>
      <h3>Håkan's phone is broken</h3>
    </div>

    <div className="lesson-goals">
      <h3 className="theme-swe-blue w3-margin-top">Lesson goals</h3>
      <p>In this lesson you will learn how to:</p>

      <ul>
        <li>
          ...construct the genitive case (showing soneone's possession of
          something).
        </li>
        <li>...construct definite forms of some singular nouns.</li>
      </ul>
    </div>
  </div>,
  <div className="lesson-chunk">
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>
            <Image
              width={200}
              height={140}
              className="table-image"
              alt="broken phone"
              src="/images/broken-phone.jpg"
            />
            <p>
              Håkan<strong>s</strong> mobil är sönder. <br />
              &rarr; <strong>Mobilen</strong> är sönder.
            </p>
          </TableCell>
          <TableCell>
            <AudioButton fileName="" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Image
              className="table-image"
              alt="big dog"
              src="/images/dog.jpg"
              width={200}
              height={140}
            />
            <p>
              Familjen Svensson har en stor hund.
              <br />
              &rarr; Familjen Svensson<strong>s</strong> hund är stor. <br />
              &rarr; <strong>Hunden</strong> är stor.
            </p>
          </TableCell>
          <TableCell>
            <AudioButton fileName="" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Image
              width={200}
              height={140}
              className="table-image"
              alt="play"
              src="/images/painting.jpg"
            />
            <p>
              <strong>Tavlan</strong> är dyr.
            </p>
          </TableCell>
          <TableCell>
            <AudioButton fileName="" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Image
              width={200}
              height={140}
              className="table-image"
              alt="play"
              src="/images/school-boring.jpg"
            />
            <p>
              Det är tråkigt att gå i <strong>skolan</strong>.
            </p>
          </TableCell>
          <TableCell>
            <AudioButton fileName="" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Image
              width={200}
              height={140}
              className="table-image"
              alt="play"
              src="/images/old-house.jpg"
            />
            <p>
              Martin och Filip bor i ett gammalt hus.
              <br />
              &rarr; Martin och Filip<strong>s</strong> hus är gammalt. <br />
              &rarr; <strong>Huset</strong> är gammalt.
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
    <WordList words={hakansPhoneIsBrokenWords} />
  </div>,
  <div className={"lesson-chunk"}>
    <h4 className="theme-swe-blue">Additional words</h4>
    <WordList words={hakansPhoneIsBrokenAdditionalWords} />
  </div>,
  <div className="lesson-chunk">
    <h4 className="theme-swe-blue">Grammar points</h4>
    <h5>GP1: Expressing possession</h5>

    <p>
      Expressing someone's ownership of something in Swedish is simple; we
      simply add an <strong>s</strong> to a name or a noun in the definite form.
    </p>

    <p className="w3-margin-left">
      Robert<strong>s</strong> dator är ny.
      <br />
      Sverige<strong>s</strong> huvudstad heter Stockholm.
      <br />
      Bilens<strong>s</strong> framruta är sönder.
      <br />
      Huset<strong>s</strong> dörr är rött.
    </p>

    <p>
      This is called modifying the noun to be in the genitive case. You can find
      genitive forms in SAOL as well. Search for a word using the dictionary
      form and look at the declension table next to <i>genitiv</i>.
    </p>
  </div>,
  <div className="lesson-chunk">
    <h5>GP2: Definite forms</h5>

    <p>
      In some of the previous lessons I have sneaked in some definite forms of
      nouns, and I think now is a good time to talk about them.
      <br />
      We're all familiar with the rule of definite forms in English - you just
      add a "the" in front and call it a day. In Swedish, you have to modify the
      noun instead, so called declension. And how do we modify the nouns?
      Well...
    </p>

    <p>
      I have tried to come up with some rules, which you can see{" "}
      <IfDesktop>below</IfDesktop>
      <IfMobile>on the next slide</IfMobile>, but these don't cover 100% of all
      words, so if you're ever unsure what the definite form is of a word, look
      it up using the dictionary form in SAOL and look under <i>bestämd form</i>
      . And remember that this lesson only deals with singular nouns - plural
      ones are a whole different story.
    </p>
  </div>,
  <div className="lesson-chunk">
    <ul>
      <li>
        en-words ending with a vowel: add <i>-n</i>:<br />
        en penna &rarr; penna<strong>n</strong>, en kombi &rarr; kombi
        <strong>n</strong>, en silo &rarr; silo<strong>n</strong>
      </li>
      <li>
        en-words ending with <i>-el</i>: add <i>-n</i>:<br />
        en cykel &rarr; cykel<strong>n</strong>, en nyckel &rarr; nyckel
        <strong>n</strong>
      </li>
      <li>
        en-words ending with a stressed syllable: add <i>-en</i>:<br />
        en bil &rarr; bilen, en park &rarr; parken
      </li>
      <li>
        ett-words not ending with -e: add <i>-et</i>:<br />
        ett hus &rarr; hus<strong>et</strong>, ett träd &rarr; träd
        <strong>et</strong>
      </li>
      <li>
        ett-words ending with -e or -é: add <i>-t</i>:<br />
        ett område &rarr; område, ett kafé &rarr; kafé<strong>t</strong>
      </li>
    </ul>
  </div>
];

export default lessonChunks;
