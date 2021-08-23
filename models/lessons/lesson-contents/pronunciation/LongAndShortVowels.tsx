import { Table, TableBody, TableCell, TableRow } from "@material-ui/core";
import React from "react";
import AudioButton from "../../../../components/AudioButton";
import { IfMobile, IfDesktop } from "../../../../helpers/showBasedOnScreen";
import Image from 'next/image';

const lessonChunks = [
  <div className="lesson-chunk">
    <div className="blackboard lesson-blackboard">
      <h2>Lesson 4</h2>
      <h3>Long and short vowels</h3>
    </div>

    <div className="lesson-goals">
      <h3 className="theme-swe-blue w3-margin-top">Lesson goals</h3>
      <p>In this lesson you will learn how to:</p>

      <ul>
        <li>
          ...identify the differences between long and short vowel sounds and
          how they occur in the spelling of words.
        </li>
      </ul>
    </div>
  </div>,
  <div className="lesson-chunk">
    <h4 className="theme-swe-blue">Long and short vowels</h4>
    <p>
      I already talked about the differences between long and short vowel sounds
      in the first lesson. If you noticed the spelling of words in the other
      lessons, you might see a pattern similar to English when it comes to
      spelling and the pronunciation of vowels.
    </p>
    <p>
      As we have seen before, there's not an easy way to tell how a word is
      pronounced just by looking at its spelling. Even a small thing such as
      which vowel version should be used is very difficult to grasp for
      beginners.
    </p>
    <p>
      I have tried to compile a list of handy rules, but the more I thought
      about it, the longer it got - but many of these rules apply in English as
      well so it shouldn't come as a surprise. You can see it{" "}
      <IfMobile>in the next section.</IfMobile> <IfDesktop>below.</IfDesktop>
    </p>
    <p>
      Since this is not a complete set of rules, it might be better for you in
      the short term to simply learn the pronunciation of each word as you
      encounter them in the lessons in the next course. The list can instead be
      more useful when you encounter new words "in the wild".
    </p>
  </div>,
  <div className="lesson-chunk">
    <ul>
      <li>
        If a vowel is followed by a single consonant, it is pronounced in the{" "}
        <strong>long</strong> version.
        <p>
          <AudioButton fileName="" label="mat" />
        </p>
      </li>
      <li>
        If a <i>stressed</i> vowel is followed by the letter R and another
        consonant, it is pronounced in the <strong>long</strong> version.
        <p>
          <AudioButton fileName="" label="rört" />
        </p>
      </li>
      <li>
        If an <i>unstressed</i> vowel is followed by the letter R and another
        consonant, it is pronounced in the <strong>short</strong> version.
        <p>
          <AudioButton fileName="" label="svart" />
        </p>
      </li>
      <li>
        If a vowel is followed by a another vowel that is not the same as the
        first one, the first vowel is pronounced in the <strong>long</strong>{" "}
        version and the second in the <strong>short</strong> version.
        <p>
          <AudioButton fileName="" label="klia" />
        </p>
      </li>
    </ul>
  </div>,
  <div className="lesson-chunk">
    <ul>
      <li>
        Two of the same vowel can appear in loan words. In these cases we retain
        the original pronunciation.{" "}
        <p>
          <AudioButton fileName="" label="cool" />
        </p>
      </li>
      <li>
        The following are one letter words consisting of only vowels:
        <ul>
          <li>
            à (=to the price of) &rarr; <strong>short</strong>
            <br />
            <AudioButton fileName="" label="à" small />
          </li>
          <li>
            i (=in) &rarr; <strong>short</strong>
            <br />
            <AudioButton fileName="" label="i" small />
          </li>
          <li>
            å (=small river) &rarr; <strong>long</strong>
            <br />
            <AudioButton fileName="" label="å" small />
          </li>
          <li>
            <p>
              ö (=island) &rarr; <strong>long</strong>
              <br />
              <AudioButton fileName="" label="ö" small />
            </p>
          </li>
        </ul>
      </li>
    </ul>
    <p>
      <Image className="w3-image" src={"/images/ö.jpg"} alt="ö meme" height="534" width="424" />
    </p>
  </div>,
  <div className="lesson-chunk">
    <ul>
      <li>
        If a vowel is followed by two or more consonants, it is pronounced in
        the <strong>short</strong> version.
        <p>
          <AudioButton fileName="" label="tips" />
        </p>
        <p>
          <AudioButton fileName="" label="sträng" />
        </p>
      </li>
      <li>
        If a vowel is not followed by any letters (i.e. it is the end of a
        word), it is pronounced in the <strong>short</strong> version...
        <p>
          <AudioButton fileName="" label="strumpa" />
        </p>
      </li>
      <li>
        ...unless of course, it's a loan word.
        <p>
          <AudioButton fileName="" label="filé" />
        </p>
      </li>
    </ul>
  </div>,
  <div className="lesson-chunk">
    <p>
      There are many words in Swedish which have similar spelling but differ in
      their vowel sound lengths. Mispronouncing these can lead to confusion or
      hilarious results, so be careful :)
    </p>

    <Table>
      <TableBody>
        <TableRow>
          <TableCell>
            <AudioButton fileName="" label="kisa" small /> (to squint)
          </TableCell>
          <TableCell> &harr;</TableCell>
          <TableCell>
            <AudioButton fileName="" label="kissa" small /> (to pee)
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <AudioButton fileName="" label="pruta" small /> (to haggle)
          </TableCell>
          <TableCell> &harr;</TableCell>
          <TableCell>
            <AudioButton fileName="" label="prutta" small /> (to fart)
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <AudioButton fileName="" label="vägen" small /> (the road)
          </TableCell>
          <TableCell> &harr;</TableCell>
          <TableCell>
            <AudioButton fileName="" label="väggen" small /> (the wall)
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <AudioButton fileName="" label="lila" small /> (purple)
          </TableCell>
          <TableCell> &harr;</TableCell>
          <TableCell>
            <AudioButton fileName="" label="lilla" small /> (small)
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>,
  <div className="lesson-chunk">
    <h4 className="theme-swe-blue">Spoken Swedish</h4>
    <p>
      Swedes living close to the border of our neighboring countries,
      particularly Denmark and Norway will have accents that are similar to the
      languages spoken in those countries respectively. This is because our
      written languages are very similar and we can mutually understand each
      other to a large degree.
      <br />
      Thus, you could argue that Swedish, Danish and Norwegian are variants of
      the same language that exist in a dialect continuum.
    </p>
    <p>
      Sweden has about as many dialects as there are provinces, and in each
      province there might be subdialects which have their own set of words that
      don't exist in dictionaries, or accents that change the vowel sounds.
    </p>
    <p>
      I myself grew up in a town called Halmstad on the southwest coast, and
      later I moved north to Gothenburg, which is the second biggest city.
      Although it's only 150 kilometers (less than 100 miles) between the two
      cities, there are many words that exist in either dialect that is not in
      the other, and the provinces where both cities are located in have their
      own distinct accents.
    </p>
    <p>
      A complete list of words or dialectal features would thus be impossible to
      write here, but when you listen to the recordings in the lessons, pay
      attention to the stress and and tone of the vowels in particular.
    </p>
  </div>,
  <div className="lesson-chunk">
    <p>
      Another typical feature for spoken Swedish is the slurring of words so
      that many consonants get dropped and vowels become shorter. Compare the
      following two recordings below. The first one is spoken at a slow speed in
      the national Swedish dialect, while the bottom is in a more natural speed
      and with an accent.
    </p>
    <p>
      <AudioButton fileName="" label="Slow" />
      <AudioButton fileName="" label="Fast" />
    </p>
    <p>
      The recorded phrase is <i>Ska du ha en bärs, eller?</i>&nbsp; which is a
      casual way of asking if someone wants a beer. When you listen to the fast,
      more natural recording it sounds like "Skarrua en bäss ellä?"
    </p>
    <p>
      If your goal is to understand spoken Swedish, you will have to talk to
      people from different parts of the country to get a good feel of the
      distinguishing features of their accents. <br />A good place to start is
      to watch some TV shows or movies on Netflix with subtitles on. You can
      also find channels on Youtube with subtitles in Swedish, but the quality
      may vary.
    </p>
  </div>
];

export default lessonChunks;
