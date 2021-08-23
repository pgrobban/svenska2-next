import React from "react";
import AudioButton from "../../../../components/AudioButton";
import { IfMobile, IfDesktop } from "../../../../helpers/showBasedOnScreen";
import { LETTERS_OF_ALPHABET, VOWELS } from "../../../../helpers/utils";
import Image from 'next/image';

const lessonChunks = [
  <div className="lesson-chunk">
    <div className="blackboard lesson-blackboard">
      <h2>Lesson 1</h2>
      <h3>From A to Ö</h3>
    </div>

    <div className="lesson-goals">
      <h3 className="theme-swe-blue w3-margin-top">Lesson goals</h3>
      <p>In this lesson you will learn how to:</p>

      <ul>
        <li>
          ...identify the letters in the Swedish alphabet and the order they
          appear in.
        </li>
        <li>...pronounce the letters.</li>
        <li>...write the letters on your keyboard (in the first exercise).</li>
      </ul>
    </div>
  </div>,
  <div className="lesson-chunk">
    <p>
      We will start things off with the basics, and it doesn't get much more
      basic than the alphabet. The Swedish alphabet is the same as the English
      one, but we have added three extra letters tacked on the end.
    </p>
    <p>
      These three letters are Å (A with a ring on it), Ä (A with two dots on
      it), and Ö (O with two dots on it). Despite looking like A and O, they are
      not the same letters.
      <br />I repeat,{" "}
      <u>
        <em>
          <strong>they are not the same letters!</strong>
        </em>
      </u>
    </p>
    <Image className="w3-image" src={"/images/åäömeme.jpg"} alt="åäö meme" height="433" width="577" />

    <p>
      This means they are pronounced differently from A and O. We will see more
      about them soon.
    </p>
  </div>,
  <div className="lesson-chunk">
    <h4 className="theme-swe-blue">The alphabet</h4>
    <p>Let's look at the alphabet in its entirety.</p>
    <div style={{ textAlign: "center" }}>
      {LETTERS_OF_ALPHABET.split("").map((letter) => (
        <span
          className="w3-show-inline-block w3-padding-small"
          key={letter}
          style={{
            color: VOWELS.includes(letter) ? "red" : "black"
          }}
        >
          {letter}&nbsp;
        </span>
      ))}
    </div>
    You can listen to all of the letters in the recording here{" "}
    <AudioButton fileName="lessons/the-alphabet/alphabet.mp3" />, or on
    individual letters in the following sections.
    <p>
      I have marked the vowels in red for clarity. Notice that unlike English,{" "}
      <strong>Y is always a vowel in Swedish</strong>.
    </p>
    <p>
      The vowels are also special because they can be pronounced in two ways,
      i.e. a long and a short version. When you spell out a word or name, you
      will use the long versions.
    </p>
    <p>
      When listening to the recordings <IfMobile>in the next section</IfMobile>
      <IfDesktop>in the section below</IfDesktop>, pay attention to how the long
      and short versions differ.
      <br />
      Also, please note that this is how the pronunciations here follow the
      Standard Swedish ("rikssvenska") dialect, and there are tons of local
      dialects which may differ.
    </p>
    <p>
      Additionally, there are many words where the spelling does not match the
      pronunciation. I will get back to that in the next lesson.
    </p>
    <p>
      I will teach you how to pronounce the vowels first, as we use them to
      build the sounds of the consonants later.
    </p>
  </div>,
  <div className="lesson-chunk">
    <h4 className="theme-swe-blue">Vowels</h4>
    <p>Letters in brackets [] indicate IPA notation.</p>
    <h5>A [ɑː]</h5>
    <p>
      <AudioButton
        fileName="lessons/the-alphabet/a-long.mp3"
        label="A (long)"
      />
    </p>
    <p>
      The long version of A is a low back vowel and similar to the British
      pronunciation of <i>father</i>.
    </p>

    <p>
      <AudioButton
        fileName="lessons/the-alphabet/a-short.mp3"
        label="A (short)"
      />
    </p>
    <p>
      Think of the word <i>hut</i> or <i>must</i> in English.
    </p>

    <h5>E [eː]</h5>
    <p>
      <AudioButton
        fileName="lessons/the-alphabet/e-long.mp3"
        label="E (long)"
      />
    </p>
    <p>Sounds like the French é without the glide.</p>

    <p>
      <AudioButton
        fileName="lessons/the-alphabet/e-short.mp3"
        label="E (short)"
      />
    </p>
    <p>
      Like e in many words in English such as <i>let</i>, <i>elephant</i> or{" "}
      <i>bread</i>. In some words, it's similar to the short Ä (see below).
    </p>

    <h5>I [iː]</h5>
    <p>
      <AudioButton
        fileName="lessons/the-alphabet/i-long.mp3"
        label="I (long)"
      />
    </p>
    <p>
      A high ee sound in English, like in <i>see</i> and <i>meet</i>.
    </p>

    <p>
      <AudioButton
        fileName="lessons/the-alphabet/i-short.mp3"
        label="I (short)"
      />
    </p>
    <p>
      Like the short I in English, found in words like <i>hit</i> and{" "}
      <i>ship</i>.
    </p>

    <h5>O [uː]</h5>
    <p>
      <AudioButton
        fileName="lessons/the-alphabet/o-long.mp3"
        label="O (long)"
      />
    </p>
    <p>
      Think of the oo in words like <i>food</i> and <i>cool</i>.
    </p>

    <p>
      <AudioButton
        fileName="lessons/the-alphabet/o-short.mp3"
        label="O (short Å)"
      />
    </p>
    <p>
      In the vast majority of words the short O is pronounced like Å (see
      below), and the recording reflects this. However, you may encounter some
      rare words where it is pronounced like a short version of O.
    </p>
  </div>,
  <div className="lesson-chunk">
    <h5>U [ʉː]</h5>
    <p>
      <AudioButton
        fileName="lessons/the-alphabet/u-long.mp3"
        label="U (long)"
      />
    </p>
    <p>
      This one is tricky. Try to say <i>you</i> in English without the "y"
      sound, and move your upper lips around like you're about to kiss.
      <br />
      Make sure you don't drop the tone or it will sound like an O.
    </p>

    <p>
      <AudioButton
        fileName="lessons/the-alphabet/u-short.mp3"
        label="U (short)"
      />
    </p>
    <p>The short U sounds like a loose and less round sound of the long U.</p>

    <h5>Y [yː]</h5>
    <p>
      <AudioButton
        fileName="lessons/the-alphabet/y-long.mp3"
        label="Y (long)"
      />
    </p>
    <p>
      This is like the German Ü. Try to round your lips like you're about to say
      o but with an ee sound.
    </p>

    <p>
      <AudioButton
        fileName="lessons/the-alphabet/y-short.mp3"
        label="Y (short)"
      />
    </p>
    <p>
      A short, clipped version of the long Y. Remember that Y is always a vowel
      in Swedish.
    </p>

    <h5>Å [oː]</h5>
    <p>
      <AudioButton
        fileName="lessons/the-alphabet/å-long.mp3"
        label="Å (long)"
      />
    </p>
    <p>
      Whatever you do, do not pronounce this as an A as it is more closer to O.
      Try to say the o in <i>home</i> without the glide.
    </p>

    <p>
      <AudioButton
        fileName="lessons/the-alphabet/å-short.mp3"
        label="Å (short)"
      />
    </p>
    <p>A short, clipped version of the long Å.</p>

    <h5>Ä [ɛː]</h5>
    <p>
      <AudioButton
        fileName="lessons/the-alphabet/ä-long.mp3"
        label="Ä (long)"
      />
    </p>
    <p>
      Whatever you do, do not pronounce this as an A. It is more similar to E,
      but a better way to describe it is the sound of a in words like <i>air</i>{" "}
      or the American pronunciation of <i>fast</i>.<br />Ä is not as long as E
      and has no glide.
    </p>

    <p>
      <AudioButton
        fileName="lessons/the-alphabet/å-short.mp3"
        label="Å (short E)"
      />
    </p>
    <p>
      You can pronounce this as a short E, like in <i>let</i>.
    </p>

    <h5>Ö [øː]</h5>
    <p>
      <AudioButton
        fileName="lessons/the-alphabet/ö-long.mp3"
        label="Ö (long)"
      />
    </p>
    <p>
      Same as German Ö. Whatever you do, do not pronounce this as an O.
      <br />
      Try to think of the vowel sounds in words like <i>earth</i> or{" "}
      <i>myrrh</i>.
    </p>
    <p>
      Note that although Ö has the IPA symbol ø for its pronunciation, the
      Swedish language
      <i>does not</i> have this as a letter - Danish and Norwegian does,
      however. In those languages, it represents the same sound as the Swedish
      Ö.
    </p>

    <p>
      <AudioButton
        fileName="lessons/the-alphabet/ö-short.mp3"
        label="Ö (short)"
      />
    </p>
    <p>
      You can pronounce this as French e in <i>le</i>.
    </p>
  </div>,
  <div className="lesson-chunk">
    <h4 className="theme-swe-blue">Consonants</h4>
    <p>
      Most of the consonants differ in pronunciation to English when read as
      letters alone. However, you can think of them as having an initial sound
      and a vowel sound. The initial sound will be similar to English in most
      cases, and the vowel sound will be same as the long version one of the
      vowels you just saw.
    </p>
    <p>
      The letters in brackets [] is an IPA pronunciation guide. If you listen to
      the recordings, you will see that the sounds coincide with the vowels you
      saw in the previous sections. Thus, if you find the consonants difficult,
      you may want to go back to review the vowels a couple of times.
    </p>

    <p>
      <AudioButton fileName="lessons/the-alphabet/b.mp3" label="B [beː]" />
    </p>

    <p>
      <AudioButton fileName="lessons/the-alphabet/c.mp3" label="C [seː]" />
    </p>

    <p>
      <AudioButton fileName="lessons/the-alphabet/d.mp3" label="D [deː]" />
    </p>

    <p>
      <AudioButton fileName="lessons/the-alphabet/f.mp3" label="F [ɛfː]" />
    </p>

    <p>
      <AudioButton fileName="lessons/the-alphabet/g.mp3" label="G [ɡeː]" />
    </p>
    <p>
      Can be pronounced as J (see below) in some words. I will talk about this
      more in the next lesson.
    </p>

    <p>
      <AudioButton fileName="lessons/the-alphabet/h.mp3" label="H [hoː]" />
    </p>

    <p>
      <AudioButton fileName="lessons/the-alphabet/j.mp3" label="J [jiː]" />
    </p>
    <p>
      Note that the J sound in swedish is a soft Y sound in English, like in{" "}
      <i>you</i>.
    </p>

    <p>
      <AudioButton fileName="lessons/the-alphabet/k.mp3" label="K [koː]" />
    </p>

    <p>
      <AudioButton fileName="lessons/the-alphabet/l.mp3" label="L [ɛlː]" />
    </p>
  </div>,
  <div className="lesson-chunk">
    <p>
      <AudioButton fileName="lessons/the-alphabet/m.mp3" label="M [ɛmː]" />
    </p>

    <p>
      <AudioButton fileName="lessons/the-alphabet/n.mp3" label="N [ɛnː]" />
    </p>

    <p>
      <AudioButton fileName="lessons/the-alphabet/p.mp3" label="P [peː]" />
    </p>

    <p>
      <AudioButton fileName="lessons/the-alphabet/q.mp3" label="Q [kʉː]" />
    </p>
    <p>Only used in names and loan words.</p>

    <p>
      <AudioButton fileName="lessons/the-alphabet/r.mp3" label="R [ærː]" />
    </p>
    <p>
      Probably the most difficult consonant to pronounce. Try to put your tongue
      in your upper mouth after you say the initial [æ] sound and move the
      tongue towards your front teeth. If done correctly, you should feel the
      tongue vibrating (so called alveolar trill).
    </p>

    <p>
      <AudioButton fileName="lessons/the-alphabet/s.mp3" label="S [ɛsː]" />
    </p>

    <p>
      <AudioButton fileName="lessons/the-alphabet/t.mp3" label="T [teː]" />
    </p>

    <p>
      <AudioButton fileName="lessons/the-alphabet/v.mp3" label="V [veː]" />
    </p>

    <p>
      <AudioButton
        fileName="lessons/the-alphabet/w.mp3"
        label="W [ˈdɵ̂bːɛlˌveː]"
      />
    </p>
    <p>
      Pronounced like "dubbel-v" where <i>dubbel</i> means "double", and note
      that it's not "double-u" like in English.
      <br />
      Only used in names and loan words, although you can hear a slight w sound
      in some words which are spelled with v when people are speaking with
      northern Swedish accents.
    </p>

    <p>
      <AudioButton fileName="lessons/the-alphabet/x.mp3" label="X [ɛks]" />
    </p>
    <p>Only used in names and loan words.</p>

    <p>
      <AudioButton fileName="lessons/the-alphabet/z.mp3" label="Z [ˈsɛ̂ːta]" />
    </p>
    <p>
      The initial sound of this is an S sound in English.
      <br />
      Only used in names and loan words.
    </p>
  </div>,
  <div className="lesson-chunks">
    <p>
      Did you catch all that? Congrats, you have just finished the first lesson!
      <br />I will try to keep the lessons shorter from now on.
    </p>
    <p>
      We will repeat the letters and practice pronunciation more in the coming
      lessons and exercises to really bring it in. And don't worry that you
      won't get everything perfect on the first try, because pronunciation is
      something that can take months or years to get right.
    </p>
    <p>
      When you feel that you are ready, head on over to the exercises for this
      lesson.
    </p>
  </div>
];

export default lessonChunks;
