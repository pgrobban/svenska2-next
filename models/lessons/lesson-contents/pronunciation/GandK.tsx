import React from "react";
import AudioButton from "../../../../components/AudioButton";

const lessonChunks = [
  <div className="lesson-chunk">
    <div className="blackboard lesson-blackboard">
      <h2>Lesson 2</h2>
      <h3>G and K</h3>
    </div>

    <div className="lesson-goals">
      <h3 className="theme-swe-blue w3-margin-top">Lesson goals</h3>
      <p>In this lesson you will learn about:</p>

      <ul>
        <li>...front and back vowels.</li>
        <li>...the rules for pronouncing G and K.</li>
      </ul>
    </div>
  </div>,
  <div className="lesson-chunk">
    <h4 className="theme-swe-blue">Front and back vowels</h4>
    <p>
      The vowels A, O, U and Å are considered "back" vowels, while the rest (E,
      I, Y, Ä and Ö) are considered "front".
    </p>
    <p>
      What this means is that front vowels are characterized by putting the
      highest point of your tongue relatively in the front of your mouth, making
      a brighter sound than the back vowels.
    </p>
    <p>
      This has an effect on how consonants are pronounced at the start of a
      word, so there will be a disparity between how some words are pronounced
      and how they are spelled.
    </p>
    <p>
      This is most noticeable in the pronunciation of the letters G and K, which
      we will focus on in the following sections.
    </p>
  </div>,
  <div className="lesson-chunk">
    <h5>G</h5>
    <p>
      If a word{" "}
      <strong>
        starts with a G followed by one of the back vowels or another consonant
      </strong>
      , it is pronounced like in English (words like great, game).
    </p>

    <p>G followed by back vowels or consonants</p>
    <p>
      <AudioButton fileName="" label="gata" />
    </p>
    <p>
      <AudioButton fileName="" label="god" />
    </p>
    <p>
      <AudioButton fileName="" label="gul" />
    </p>
    <p>
      <AudioButton fileName="" label="gå" />
    </p>
    <p>
      <AudioButton fileName="" label="glad" />
    </p>
    <p>
      <AudioButton fileName="" label="grym" />
    </p>
    <p>
      G is also pronounced like in English in the middle or ending of words (see
      exception in the next section).
    </p>

    <p>
      <AudioButton fileName="" label="blogg" />
    </p>
    <p>
      <AudioButton fileName="" label="någon" />
    </p>
    <p>
      <AudioButton fileName="" label="säng" />
    </p>
  </div>,
  <div className="lesson-chunk">
    <p>
      However, if G is <strong>followed by a front vowel</strong>, it is
      pronounced like the sound of J (a soft Y sound in English, such as words
      like "you").
    </p>

    <p>
      <AudioButton fileName="" label="get" />
    </p>
    <p>
      <AudioButton fileName="" label="gift" />
    </p>
    <p>
      <AudioButton fileName="" label="gym" />
    </p>
    <p>
      <AudioButton fileName="" label="gömma" />
    </p>
    <p>
      <AudioButton fileName="" label="gym" />
    </p>

    <p>
      G is also pronounced as J{" "}
      <strong>
        when it is the last sound in words ending with -lg and -rg
      </strong>
      :
    </p>

    <p>
      <AudioButton fileName="" label="arg" />
    </p>
    <p>
      <AudioButton fileName="" label="helg" />
    </p>
    <p>
      <AudioButton fileName="" label="torg" />
    </p>
  </div>,
  <div className="lesson-chunk">
    <h5>K</h5>

    <p>
      If a word{" "}
      <strong>
        starts with a K followed by one of the back vowels or another consonant
      </strong>
      , it is pronounced like K in English (words like "like") or some words
      starting with C (car, cut).
    </p>

    <p>
      <AudioButton fileName="" label="kam" />
    </p>
    <p>
      <AudioButton fileName="" label="korv" />
    </p>
    <p>
      <AudioButton fileName="" label="kul" />
    </p>
    <p>
      <AudioButton fileName="" label="kål" />
    </p>
    <p>
      <AudioButton fileName="" label="klok" />
    </p>
    <p>
      <AudioButton fileName="" label="kram" />
    </p>

    <p>
      It also has this pronunciation in the middle or end of words.
      <br />
      When the K sound appears after a short vowel, it is usually spelled CK,
      like in English.
    </p>

    <p>
      <AudioButton fileName="" label="bruka" />
    </p>
    <p>
      <AudioButton fileName="" label="nyckel" />
    </p>
    <p>
      <AudioButton fileName="" label="rak" />
    </p>
    <p>
      <AudioButton fileName="" label="trick" />
    </p>
  </div>,
  <div className="lesson-chunk">
    <p>
      However, if a word{" "}
      <strong>starts with a K followed by one of the front vowels</strong>, it
      is pronounced as a "sh" sound (like in "sharp").
    </p>

    <p>
      <AudioButton fileName="" label="kemi" />
    </p>
    <p>
      <AudioButton fileName="" label="kittla" />
    </p>
    <p>
      <AudioButton fileName="" label="kyl" />
    </p>
    <p>
      <AudioButton fileName="" label="käka" />
    </p>
    <p>
      <AudioButton fileName="" label="kök" />
    </p>
    <p>
      Notice the difference in pronunciation between the first and second K in
      the last two words above.
    </p>
    <p>
      <strong>Exception</strong>: Words spelled with{" "}
      <strong>SK followed by a front vowel</strong> have a special sound, which
      I will explain in the next lesson.
    </p>
  </div>,
  <div className="lesson-chunk">
    <p>
      That is all for this lesson. The main takeaway is when you see a word with
      G or K in it, try to follow the rules above when you try to pronounce it.
    </p>
  </div>
];

export default lessonChunks;
