import React from "react";
import AudioButton from "../../../../components/AudioButton";

const lessonChunks = [
  <div className="lesson-chunk">
    <div className="blackboard lesson-blackboard">
      <h2>Lesson 3</h2>
      <h3>Additional Sounds</h3>
    </div>

    <div className="lesson-goals">
      <h3 className="theme-swe-blue w3-margin-top">Lesson goals</h3>
      <p>In this lesson you will learn how to:</p>

      <ul>
        <li>
          ...identify a few additional letters that can appear in Swedish texts
          but are not in our alphabet.
        </li>
        <li>
          ...pronounce a few more common phonemes (combinations of letters).
        </li>
        <li>
          ...watch out for differences between similar Swedish and English words
          in pronunciation and meaning.
        </li>
      </ul>
    </div>
  </div>,
  <div className="lesson-chunk">
    <h4 className="theme-swe-blue">Additional letters</h4>
    <p>
      There are a couple of letters that can occur in Swedish words and names
      that are not in the Swedish alphabet.
    </p>
    <h5>É [eː]</h5>
    <AudioButton fileName="lessons/the-alphabet/e-long.mp3" label="E (long)" />

    <p>
      This is the most common one and its pronunciation is the same as the long
      version of the normal E. So why do we have two ways to write it?
    </p>
    <p>
      The short answer is that it was first used in loan words from French, and
      as there were already older words in Swedish spelled the same but without
      the accent, we used the accent to disambiguate between words that are
      pronounced with the long and short E sound. Thus, when you see an É it
      will always be pronounced as a long E sound.
    </p>
    <p>
      Listen to the following examples and notice the long E sound in the end:
    </p>
    <p>
      <AudioButton fileName="" label="idé" />
    </p>
    <p>
      <AudioButton fileName="" label="armé" />
    </p>
    <p>Now compare them to the words without the accent:</p>
    <p>
      <AudioButton fileName="" label="ide" />
    </p>
    <p>
      <AudioButton fileName="" label="arme" />
    </p>
    <p>
      If you don't pronounce these words correctly, it can lead to confusion.
      For instance, <i>idé</i> means idea whereas
      <i>ide</i> means hibernating den (e.g. for bears).
      <br />
      Armé means army, but arme is an old word meaning poor, pitiful.
    </p>

    <p>
      The é spelling occurs in many surnames, such as our Prime Minister Stefan
      Löfvén, although both he himself and the media has stopped writing his
      name with the accent (or "fly shit") as he called it.
    </p>
    <AudioButton fileName="" label="Stefan Löfven" />
  </div>,
  <div className="lesson-chunk">
    <h5>À [aː]</h5>
    <p>
      Pronounced the same as short a. This only occurs as a word on its own and
      does not occur in other words or names.
    </p>
    <p>The word à means to "to the price of", e.g.</p>
    <p>
      <i>tre biljetter à 50 kronor</i>
      <br />
      (= three tickets for the price of 50 kronor)
    </p>
    <p>
      However, this usage is becoming increasingly rare so it is not necessary
      for you to remember it.
    </p>
  </div>,
  <div className="lesson-chunk">
    <h5>Additional letters from European languages</h5>
    <p>
      Sweden has historically been influenced by many cultures from around the
      world, and while we don't have letters like the German Ü or Spanish Ñ in
      our alphabet, Swedes are quite good at recognizing them and can usually
      pronounce words that include them correctly.
    </p>
    <p>
      Also remember that Danish and Norwegian use the letters Æ and Ø for the
      same sounds as the Swedish Ä and Ö, respectively. These letters might pop
      up in news articles about Denmark or Norway when there is no official
      Swedish transliteration of places or names.
    </p>
  </div>,
  <div className="lesson-chunk">
    <h4 className="theme-swe-blue">Additional sounds</h4>

    <p>
      As we saw in the previous lesson, there can be many differences between
      how a word is spelled and how it is pronounced. What's more is that it
      goes the other way around too: the same sound can be pronounced in many
      ways in Swedish.
    </p>

    <p>
      The following sections are some examples. The important thing for you
      right now is not to remember the spelling of the words, but just try to
      identify the sounds that are in common.
    </p>

    <p>
      This is just a brief list of some sounds in Swedish that can occur with
      many different spellings. And as usual, there are exceptions to every
      rule, so just because you see a word with a similar spelling to a word you
      know doesn't mean it has a similar pronunciation.
    </p>
  </div>,
  <div className="lesson-chunk">
    <h5>The J sound</h5>
    <p>
      In the first lesson, we saw that J in Swedish is a soft sound equivalent
      of the consonant Y in English, in words such as "you" and "yes".
    </p>
    <p>
      <AudioButton fileName="" label="jag" />
    </p>

    <p>
      However, the same sound can be spelled with a number of different
      consonants in front of J. Thus, these letters become silent when in front
      of a J:
    </p>

    <p>With a D</p>
    <p>
      <AudioButton fileName="" label="djur" />
    </p>

    <p>With a G</p>
    <p>
      <AudioButton fileName="" label="gjuta" />
    </p>

    <p>With an H</p>
    <p>
      <AudioButton fileName="" label="hjälp" />
    </p>

    <p>With an L</p>
    <p>
      <AudioButton fileName="" label="ljus" />
    </p>

    <p>
      And as we saw in the previous lesson, words ending with -lg or -rg get a J
      sound.
    </p>

    <p>
      Other variants also exist in loan words. For example, New York is
      pronounced the same as in English: /njuː ˈjɔːk/
    </p>

    <p>
      Because J is soft in Swedish, and we have no equivalent to the English hard /dʒ/ in
      words like Jack, some Swedes resort to pronouncing loan words with a soft J instead.
    </p>
  </div>,
  <div className="lesson-chunk">
    <h5>The "SH" sound (IPA ɕ)</h5>

    <p>
      The sound equivalent to the English "SH" in words like "shell" can be
      spelled in many different ways in Swedish.
    </p>

    <p>
      Like we saw in the previous lesson, if a K is followed by a front vowel,
      it produces a SH sound:
    </p>
    <p>
      <AudioButton fileName="" label="köpa" />
    </p>

    <p>
      There is a notable exception to this. People seem to disagree on whether
      the word <i>kex</i> (=cracker) should be pronounced with a K sound or a SH
      sound:
    </p>
    <p>
      <AudioButton fileName="" label="kex (K)" />
      <AudioButton fileName="" label="kex (SH)" />
    </p>
    <p>
      According to the rule above, the second pronunciation should be correct.
      However, when it comes to languages, usage tends to break rules, so feel
      free to pick one or the other translation but be consistent.
    </p>

    <p>The "SH" sound can also be spelled with KJ:</p>
    <p>
      <AudioButton fileName="" label="kjol" />
    </p>

    <p>
      Words spelled with RS get pronounced as "SH" in some dialects. In fast
      speech, you can hear that the same rule gets applied if one word ends with
      R and another starts with S.
    </p>
    <p>
      <AudioButton fileName="" label="färsk" />
      <AudioButton fileName="" label="för sen" />
      <AudioButton fileName="" label="ett år sen" />
    </p>

    <p>With TJ</p>
    <p>
      <AudioButton fileName="" label="tjej" />
    </p>

    <p>Other variants also exist in loan words.</p>
  </div>,
  <div className="lesson-chunk">
    <h5>The "SJE" sound (IPA ɧ)</h5>
    <p>
      <AudioButton fileName="" label="sje sound" />
    </p>
    <p>
      This is a sound that is almost unique to Swedish and probably the hardest
      to master. In order to pronounce this sound, try to say an H but move your
      lips closer like you're almost about to kiss, and the tongue should be in
      the bottom back of your mouth.
    </p>
    <p>
      You will often hear foreigners resort to an SH sound or even H when they
      can't pronounce this sound. However, I urge you to try and master this
      sound as it will definitely make you sound more like a native speaker.
    </p>

    <p>With GI</p>
    <p>
      <AudioButton fileName="" label="religiös" />
    </p>
    <p>With SC</p>
    <p>
      <AudioButton fileName="" label="fascinera" />
    </p>
    <p>With SJ</p>
    <p>
      <AudioButton fileName="" label="sjunga" />
    </p>
    <p>With SK</p>
    <p>
      <AudioButton fileName="" label="sköta" />
    </p>
    <p>With SKJ</p>
    <p>
      <AudioButton fileName="" label="skjuta" />
    </p>
    <p>With STJ</p>
    <p>
      <AudioButton fileName="" label="stjärna" />
    </p>
    <p>With -TION, -SION, -SSION in words with Latin origin</p>
    <p>
      <AudioButton fileName="" label="nation" />
    </p>
    <p>
      <AudioButton fileName="" label="version" />
    </p>

    <p>With CH, GE, J in some French loan words</p>
    <p>
      <AudioButton fileName="" label="champagne" />
    </p>
    <p>
      <AudioButton fileName="" label="gelé" />
    </p>
    <p>
      <AudioButton fileName="" label="justera" />
    </p>

    <p>With SCH in some German loan words</p>
    <p>
      <AudioButton fileName="" label="schack" />
    </p>

    <p>Special case: XJ in the city name Växjö</p>
    <p>
      <AudioButton fileName="" label="Växjö" />
    </p>
  </div>,
  <div className="lesson-chunk">
    <h4 className="theme-swe-blue">Swedish-English disparities</h4>
    <p>
      There are a few sounds that exist in English phonology but not in Swedish.
      Most noticeable is the [dʒ] sound (like the J in the name Jack). In some
      dialects, particularly among older people, its common to pronounce it as a
      Swedish soft J (english consonant Y sound).
    </p>
    <p>
      <AudioButton fileName="" label="Jack" />
    </p>

    <p>
      Some loan words get transformed in their pronunciation in Swedish. One
      example is the word "show" which not only gets an initial SJE-sound but
      also a different ending in Swedish:
    </p>
    <p>
      <AudioButton fileName="" label="show" />
    </p>
    <p>
      Thus, when you're speaking Swedish, you should not try to copy the
      original pronunciation, but rather listen to the Swedish pronunciation in
      apps like Svensk ordbok. While Swedes will understand you if you use the
      original pronunciation, such a small thing will break the illusion that
      you're speaking fluent Swedish.
    </p>
  </div>,
  <div className="lesson-chunk">
    <p>
      While we're on the subject of disparities, be aware that there are many,
      MANY false friends - words that are spelled the same in Swedish as in
      English but mean totally different things!
    </p>

    <ul>
      <li>
        It's not taboo to talk about <i>sex</i> in Swedish. No, we're not horny
        all the time, it's because the word means six.
      </li>
      <li>
        <i>kock</i> in Swedish means chef. But <i>chef</i> in Swedish means
        boss/manager.
      </li>
      <li>
        Don't ask someone to <i>hugga</i> you. In Swedish it doesn't mean hug
        but stab.
      </li>
      <li>
        Don't ask someone for some <i>kiss</i>. In Swedish it doesn't mean a
        kiss but pee.
      </li>
      <li>
        The word <i>gift</i> in Swedish is both a blessing and a curse. If
        someone is gift, it means they are married. If something is gift, it
        means it's poison.
      </li>
    </ul>

    <p>
      We will get more into false friends as you will learn vocabulary in the
      following courses.
    </p>
  </div>
];

export default lessonChunks;