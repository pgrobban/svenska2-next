import { Table, TableBody, TableCell, TableRow } from "@material-ui/core";
import React from "react";
import AudioButton from "../../../../components/AudioButton";
import { IfMobile, IfDesktop } from "../../../../helpers/showBasedOnScreen";
import Image from 'next/image';

const lessonChunks = [
  <div className="lesson-chunk">
    <div className="blackboard lesson-blackboard">
      <h2>Lesson 5</h2>
      <h3>Stress and pitch accent</h3>
    </div>

    <div className="lesson-goals">
      <h3 className="theme-swe-blue w3-margin-top">Lesson goals</h3>
      <p>In this lesson you will learn:</p>

      <ul>
        <li>
          ...the basics of stressed and unstressed syllables and how this
          changes the meaning of some words.
        </li>
        <li>
          ...how to understand the pitch and rhythm for a more natural-sounding
          spoken Swedish.
        </li>
      </ul>
    </div>
  </div>,
  <div className="lesson-chunk">
    <h4 className="theme-swe-blue">Stress and pitch</h4>
    <p>
      In order to have a more natural accent when speaking Swedish, there are a
      few more things we need to look at apart from differentiating between long
      and short vowels. In spoken Swedish, there are other properties to
      consider such as stress (emphasis), pitch (tone) and melody.
    </p>

    <p>
      Stress in Swedish usually corresponds to longer vowels, and when you
      practice pronouncing words, don't be afraid to exaggerate the vowel sounds
      (although you shouldn't do that when talking to people, of course).
    </p>

    <p>
      However, in some words with two or more syllables where none of the vowel
      sounds are short, a clear stress pattern is not always obvious, so in
      cases like these, it's more important to have a correct pitch (tone) which
      then creates a natural stress pattern of the word.
    </p>
  </div>,
  <div className="lesson-chunk">
    <p>
      Compare the following pairs of words and pay close attention to the pitch:
    </p>

    <Table>
      <TableBody>
        <TableRow>
          <TableCell>
            <AudioButton fileName="" label="tomten (I)" small /> (the yard,
            plot)
          </TableCell>
          <TableCell> &harr;</TableCell>
          <TableCell>
            <AudioButton fileName="" label="tomten (II)" small /> (Santa Claus)
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <AudioButton fileName="" label="anden (I)" small /> (the duck)
          </TableCell>
          <TableCell> &harr;</TableCell>
          <TableCell>
            <AudioButton fileName="" label="anden (II)" small /> (the spirit)
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <AudioButton fileName="" label="formel" small /> (formula)
          </TableCell>
          <TableCell> &harr;</TableCell>
          <TableCell>
            <AudioButton fileName="" label="formell" small /> (formal)
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>

    <p>
      Notice the spelling of the first two pairs are the same, but the last pair
      differs. However, without the change in pitch, the pronunciation would
      still be the same according to the rules of long and short vowels that we
      have seen before.
    </p>
  </div>,
  <div className="lesson-chunk">
    <p>
      If you listened closely to the recordings, you probably noticed that the
      words in the first column have a falling tone, and words in the second
      column rise in the first syllable and fall on the second.
    </p>

    <p>We can describe the pitch of these word pairs with graphs as follows:</p>

    <Image
      className="w3-image"
      src={'/images/accents.png'}
      alt="Pitch accent"
      title="Pitch accent"
    />

    <p>
      While generally you will be understood even if you have the wrong pitch in
      most contexts, having correct pitch will not only make you sound more
      natural, but also give your voice more variation, which makes it more
      pleasant to listen to.
    </p>
  </div>,
  <div className="lesson-chunk">
    <h4 className="theme-swe-blue">Pitch and melody</h4>
    <p>
      The importance of pitch becomes more clear when we look at long words or
      sentences as a whole. Spoken Swedish tends to incorporate a kind of rhythm
      and pitch that makes it almost sound like singing! <br />
      Take a listen to the following word:
    </p>

    <p>
      <AudioButton fileName="" label="Drottninggatan" /> (Queen's street)
    </p>

    <p>
      We can visualize this again by showing that the first syllable has a
      rising tone, then falls to the second, rises again high for the third and
      falls back to where it started.
    </p>

    <Image
      className="w3-image blackboard"
      src={'/images/pitch.png'}
      alt="Pitch in the word Drottninggatan"
      title="Pitch in the word Drottninggatan"
    />
  </div>,
  <div className="lesson-chunk">
    <p>
      This same rise-fall-rise high-fall melody can be used across a whole
      sentence:
    </p>

    <p>
      <AudioButton fileName="" label="Jag bor i Stockholm." /> (I live in
      Stockholm.)
    </p>

    <Image
      className="w3-image blackboard"
      src={'/images/pitch2.png'}
      alt={`Pitch in the word sentence "Jag bor i Stockholm."`}
      title={`Pitch in the word sentence "Jag bor i Stockholm."`}
    />

    <p>
      However, for questions it is important to have a rising tone in the end,
      otherwise it could be misunderstood as an unfinished sentence.
    </p>

    <p>
      <AudioButton fileName="" label="Bor han i Stockholm?" /> (Does he live in
      Stockholm?)
    </p>

    <Image
      className="w3-image blackboard"
      src={'/images/pitch3.png'}
      alt={`Pitch in the word sentence "Bor han i Stockholm?"`}
      title={`Pitch in the word sentence "Bor han i Stockholm?"`}
    />
  </div>,
  <div className="lesson-chunk">
    <h5>(Extra credit) Dialects and sociolects</h5>
    <p>
      The graphs you saw <IfMobile>in the previous slides</IfMobile>
      <IfDesktop>above</IfDesktop> are a general reference for standard Swedish,
      but might not apply in the whole country.
    </p>
    <p>
      You see, the problem with Swedish from a learning perspective is that
      there are hundreds of dialects that not only come with their own unique
      words but also unique rhythm and pitches which make up the "melody" I
      talked about before.
    </p>
    <p>
      If you walk around in shops and talk to the people working there or listen
      to radio or TV broadcasts and pay attention, you will likely notice the
      unique aspects of the dialects.
    </p>
    <p>
      For instance, the southernmost province of Skåne (Scania) use a uvular
      thrill [ʀ] instead of the rolling R common to most other dialects in
      Sweden. It also uses diphthongs (gliding vowels) and words borrowed from
      Danish, which can make it harder for other Swedes or beginner speakers to
      understand.
    </p>
  </div>,
  <div className="lesson-chunk">
    <p>
      Another example is a region southwest of Stockholm, where it is common to
      hear a more extensive use of the schwa [ə] sound and drawn-out vowels.
      This gives the listeners an impression that speakers have a more annoyed,
      whining mood when they're not.
      <br />
      This is quite the opposite of dialects in northern Sweden, which thanks to
      a different melody and stress on certain vowels make it sound more
      pleasant to other Swedes.
    </p>
    <p>
      While it's easy to replace one word for another when speaking a different
      dialect, it is usually the melody that reveals where you come from. In the
      old days, people were not allowed to speak with dialects on TV and radio
      broadcasts, but as rules loosened up, the knowledge that different
      dialects even exist rapidly increased and now Swedes are generally good at
      guessing where someone is from just after hearing a few words or
      sentences.
    </p>
    <p>
      As many immigrants have come to Sweden in the last 50 years or so, they
      have started to take own their own dialect called "Rinkeby Swedish" (named
      after a suburb in Stockholm).
      <br />
      The interesting thing about Rinkeby Swedish that speakers exhibit the same
      features no matter where in the country they are or which country they
      originally came from. Because of this and the fact that the majority of
      the people living in these areas are considered to be lower social class,
      linguists consider Rinkeby Swedish to be more of a sociolect rather than a
      dialect.
    </p>
    <p>
      Stockholm also has a more "upper class" sociolect where the SJE sound is
      merged with the SH sound, a buzzing and long I and Y sounds.
    </p>
  </div>,
  <div className="lesson-chunk">
    <h5>Final words</h5>
    <p>
      Having a strong grasp of the basics of spoken Swedish will help you not
      only when it comes to speaking, but it will also enable you to internalize
      words that you have learned. It's okay if you don't master the melody or
      stress, but getting the basics of pronunciation will help you be
      understood without having to resort to English.
    </p>
    <p>
      In my years of teaching, I found that beginner learners have an easier
      time to guess word meanings if they learn the basics of pronunciation
      first, especially when it comes to loan words that differ in spelling.
      However, be aware of "false friends" -- there might be words in Swedish
      that are spelled the same as a word in English but pronounced differently
      or have a different meaning.
    </p>
    <br />

    <p>
      This concludes the first course, which is all I have to say about
      pronunciation for now. Of course, you don't have to remember everything I
      said here and most of it will come naturally as you move on to the next
      course and listen to more recordings in context.
    </p>

    <p>
      We will come back to pronunciation a bit in a later course for some
      repetition and drills where we incorporate everything that we have
      learned. If you're interested in learning more about spoken Swedish, I
      will put up some sections about different dialects in the Language Bites
      section.
    </p>
  </div>
];

export default lessonChunks;
