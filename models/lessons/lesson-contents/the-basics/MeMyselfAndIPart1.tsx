import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";
import WordList from "../../../../components/WordList";
import {
  meMyselfAndIPart1Words,
  meMyselfAndIPart1AdditionalWords
} from "../../word-lists/MeMyselfAndIPart1";
import AudioButton from "../../../../components/AudioButton";

const lessonChunks = [
  <div className="lesson-chunk">
    <div className="blackboard lesson-blackboard">
      <h2>Lesson 8</h2>
      <h3>Me, myself and I</h3>
    </div>

    <div className="lesson-goals">
      <h3 className="theme-swe-blue w3-margin-top">Lesson goals</h3>
      <p>
        In this two-part lesson, we're going to look at pronouns and how adding
        them to verbs change the meanings of them in some cases.
        <br />
        We will start off with using the objective forms of pronouns.
      </p>
    </div>
  </div>,
  <div className="lesson-chunk">
    <h4 className="theme-swe-blue">Text</h4>

    <Table>
      <TableBody>
        <TableRow>
          <TableCell>
            <img
              className="table-image"
              alt="student"
              src="/images/student.jpg"
            />
            <p>
              Jag lär <strong>mig</strong> svenska.
            </p>
            <p>
              Du lär <strong>dig</strong> svenska.
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
              alt="shave"
              src="/images/shave-2.jpg"
            />
            <p>
              Frisören rakar Håkan.
              <br />
              &rarr; Frisören rakar <strong>honom</strong>. <br />
              &rarr; <strong>Han</strong> rakar <strong>honom</strong>.
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
              alt="hairdresser"
              src="/images/hairdresser.jpg"
            />
            <p>
              Frisörskan klipper Lena.
              <br />
              &rarr; Frisören klipper <strong>henne</strong>.
              <br />
              &rarr; <strong>Hon</strong> klipper <strong>henne</strong>.
            </p>
          </TableCell>
          <TableCell>
            <AudioButton fileName="" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <img className="table-image" alt="hug" src="/images/hug.jpg" />
            <p>
              Håkan kramar Lena.
              <br />
              &rarr; Håkan kramar <strong>henne</strong>.
              <br />
              &rarr; <strong>Han</strong> kramar <strong>henne</strong>.
            </p>

            <p>
              Lena kramar Håkan.
              <br />
              &rarr; Lena kramar <strong>honom</strong>.
              <br />
              &rarr; <strong>Hon</strong> kramar <strong>honom</strong>.
            </p>

            <p>
              Håkan och Lena kramar <strong>varandra</strong>.
              <br />
              <strong>De</strong> kramar <strong>varandra</strong>.
            </p>
          </TableCell>
          <TableCell>
            <AudioButton fileName="" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <img className="table-image" alt="cake" src="/images/cake.jpg" />
            <p>
              Lena bakar en tårta till Saga och Alfred. <br />
              &rarr; Lena bakar en tårta till <strong>dem</strong>.<br />
              &rarr; <strong>Hon</strong> bakar en tårta till{" "}
              <strong>dem</strong>.
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
              alt="present"
              src="/images/present.jpg"
            />
            <p>
              Laila och Hassan ger en present till mig och Kalle.
              <br />
              &rarr; <strong>De</strong> ger en present till mig och Kalle.
              <br />
              &rarr; <strong>De</strong> ger en present till{" "}
              <strong>oss</strong>.
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
              alt="meeting"
              src="/images/meeting-2.jpg"
            />
            <p>
              Jag känner dig och Kalle.
              <br />
              &rarr; Jag känner <strong>er</strong>.
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
    <WordList words={meMyselfAndIPart1Words} />
  </div>,
  <div className="lesson-chunk">
    <h4 className="theme-swe-blue">Grammar points</h4>

    <h5>GP1: Pronouns in nominative and objective case</h5>

    <p>Compare the following sentences in English:</p>

    <p className="w3-margin-left">
      <strong>I</strong> gave the ball to <strong>him</strong>.<br />
      <strong>He</strong> gave the ball to <strong>me</strong>.
    </p>

    <p>
      In the first sentence, "I" is the subject and "him" is an object (the ball
      is also an object here but we will ignore it for now). In the second
      sentence, "he" is the subject and "me" is an object.
    </p>
    <p>
      Even though "I" and "me" refer to the same person, and "him" and "he"
      refer to the same person, we use different words depending on whether the
      person is the subject or object. The first case, when we use the pronoun
      as, or as part of the subject, is called the nominative form, and the
      second case is the objective form.
    </p>
  </div>,
  <div className="lesson-chunk">
    <p>
      Let's look at a table of the pronouns we have learned so far and make a
      table their objective forms:
    </p>

    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Nom. EN</TableCell>
          <TableCell>Nom. SV</TableCell>
          <TableCell>Obj. EN</TableCell>
          <TableCell>Obj. SV</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>I</TableCell>
          <TableCell>jag</TableCell>
          <TableCell>me</TableCell>
          <TableCell>mig [mej]</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <strong>you</strong>
          </TableCell>
          <TableCell>du</TableCell>
          <TableCell>
            <strong>you</strong>
          </TableCell>
          <TableCell>dig [dej]</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>he</TableCell>
          <TableCell>han</TableCell>
          <TableCell>him</TableCell>
          <TableCell>honom</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>she</TableCell>
          <TableCell>hon</TableCell>
          <TableCell>her</TableCell>
          <TableCell>henne</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>-</TableCell>
          <TableCell>hen</TableCell>
          <TableCell>-</TableCell>
          <TableCell>hen*</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>it</TableCell>
          <TableCell>den, det</TableCell>
          <TableCell>it</TableCell>
          <TableCell>den, det</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>we</TableCell>
          <TableCell>vi</TableCell>
          <TableCell>us</TableCell>
          <TableCell>oss</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <strong>you</strong> (pl.)
          </TableCell>
          <TableCell>ni</TableCell>
          <TableCell>
            <strong>you</strong> (pl.)
          </TableCell>
          <TableCell>er</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>they</TableCell>
          <TableCell>de [dom]</TableCell>
          <TableCell>them</TableCell>
          <TableCell>dem [dom]</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <small>
      *Not standardized as it is a fairly new word but the objective form{" "}
      <i>hen</i> has been recommended by the Swedish Language Council.
    </small>
  </div>,
  <div className="lesson-chunk">
    <p>
      Now, there are a couple of things to note here. In English, the word "you"
      can not only refer to a single person or a group of people but it is also
      both the nominative and objective forms:
    </p>

    <p className="w3-margin-left">
      <strong>You</strong> are playing with Saga.
      <br />
      Saga is playing with <strong>you</strong>.
    </p>

    <p>
      Although we can deduce if the case is nominative or objective from the
      sentences above, we need more context to determine if "you" here is
      singular or plural.
      <br />
      In Swedish, the subject needs to agree with the number of people or things
      involved, and we need to change the form in the objective cases:
    </p>

    <p className="w3-margin-left">
      <strong>Du</strong> (singular you) leker med Saga.
      <br />
      <strong>Ni</strong> (plural you) leker med Saga.
      <br />
      Saga leker med <strong>dig</strong> (singular you).
      <br />
      Saga leker med <strong>er</strong> (plural you).
      <br />
    </p>
  </div>
];

export default lessonChunks;
