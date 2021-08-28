import React from "react";
import { IfDesktop, IfMobile } from "../../../helpers/showBasedOnScreen";
import Image from "next/image";

const chunks = [
  <div key={0} className="lesson-chunk">
    <div className="blackboard lesson-blackboard">
      <h2>Language Bites</h2>
      <h3>
        The true meaning of <i>mena</i>
        <br />
        (and why it doesn't mean what you think it means)
      </h3>
    </div>

    <p>
      If I asked you how to translate the sentence{" "}
      <i>What does this word mean?</i> into Swedish, what would you say? If you
      said
    </p>

    <p className="w3-margin-left">Vad menar det här ordet?</p>

    <p>
      you'd be <strong>wrong.</strong> Keep on reading to find out why!
    </p>

    <Image
      src="/images/montoya.jpeg"
      className="w3-image theme-swe-center"
      alt=""
      height="300"
      width="400"
    />
  </div>,
  <div key={1} className="lesson-chunk">
    <h3 className="theme-swe-blue">
      So what does <i>mena</i> mean, then?
    </h3>
    <p>
      There's nothing wrong grammatically with the sentence{" "}
      <IfDesktop inline>above</IfDesktop>
      <IfMobile inline>in the previous slide</IfMobile>. The problem is that the
      verb "mean" often does not translate into <i>mena</i> in Swedish.
      <br />
      <i>Mena</i> has a couple of meanings in Swedish that are related to, but
      not equivalent to the English 'mean'.
    </p>
    <p>
      Where it shares the same meaning is when referring to what a person said,
      often used for clarification:
    </p>
    <p className="w3-margin-left">
      Vad <strong>menar</strong> du? Jag förstår inte (vad du menar).
      <br />
      Du vet vad jag <strong>menar</strong>.
      <br />
      Jag förstod inte vad hon <strong>menade</strong>.
    </p>
  </div>,
  <div key={2} className="lesson-chunk">
    <p>
      We can also use <i>mena</i> to refer to a person. Note that reflexive
      pronouns are used in these cases:
    </p>
    <p className="w3-margin-left">
      <strong>Menar</strong> du mig? <br />
      (= Are you referring to me?/Are you talking about me?)
    </p>
    <p className="w3-margin-left">
      Jag <strong>menar</strong> inte just dig, jag <strong>menar</strong> alla
      i laget. <br />
      I'm not talking about you (in particular), I mean everyone in the team.
    </p>

    <p>
      However, <i>mena</i> cannot be used in situations when no person is
      involved, such as asking for definitions or translations. For these
      situations, we use another verb.
    </p>
  </div>,
  <div key={3} className="lesson-chunk">
    <h3 className="theme-swe-blue">
      In comes <i>betyda</i>
    </h3>

    <p>
      And that verb is <i>betyda</i>. So to fix the sentence from the start of
      this lesson, we would say:
    </p>

    <p className="w3-margin-left">
      Vad <strong>betyder</strong> det här ordet?
    </p>

    <p>
      So to repeat, because we are asking for a{" "}
      <strong>definition or translation</strong> rather than an explanation of
      what someone means, or what someone is referring to or talking about, we
      cannot use <i>menar</i> in this sentence.
    </p>

    <p className="w3-margin-left">
      A: Vad <strong>betyder</strong> ordet ornitologi? (Asking for definition)
      <br />
      B: Ornitologi <strong>betyder</strong> att man studerar fåglar.
    </p>

    <p className="w3-margin-left">
      A: Vad <strong>betyder</strong> <i>huge</i> på engelska? (Asking for
      translation)
      <br />
      B: <i>Huge</i> <strong>betyder</strong> jättestor.
    </p>
  </div>,
  <div key={4} className="lesson-chunk">
    <p>
      The word <i>betyda</i> is more flexible than <i>mena</i> as it can be used
      not just for the meaning of words, phrases and things but also actions and
      abstract events. Thus it is a lot closer to the word 'mean' in English:
    </p>

    <p className="w3-margin-left">
      Du <strong>betyder</strong> mycket för mig.
      <br />
      You mean a lot to me. (= You are very important to me.)
    </p>

    <p className="w3-margin-left">
      Jag håller inte med dig, men det <strong>betyder</strong> inte att jag är
      arg på dig.
      <br />I disagree with you, but that doesn't mean I'm mad at you.
    </p>
  </div>,
  <div key={5} className="lesson-chunk">
    <p>
      The noun form of <i>betyda</i> is <i>betydelse</i>. Note that this word
      means "significance" or "importance":
    </p>

    <p className="w3-margin-left">
      Kvaliteten på luften har stor betydelse för vår hälsa.
      <br />
      (= The quality of the air is of great importance for our health.)
    </p>

    <p className="w3-margin-left">
      Storleken har betydelse!
      <br />
      (= Size matters!)
    </p>
  </div>,
  <div key={6} className="lesson-chunk">
    <h3 className="theme-swe-blue">
      Other meanings of <i>mena</i>
    </h3>

    <p>
      The verb <i>mena</i> can also have a few other meanings that have to be
      translated to other words in English than "mean". This makes it even more
      clear that we can't use the word for directly translating the word "mean"
      from English.
    </p>

    <p>
      One relatively common meaning is a synonym for <i>tycka</i> or <i>anse</i>
      , i.e. think (as in express an opinion of something):
    </p>

    <p className="w3-margin-left">
      Jag <strong>menar</strong>/tycker/anser att det är en bra idé.
      <br />
      (= I think it's a good idea.)
    </p>

    <p>
      Note that the this usage is almost always in the positive, as the negative
      falls back to the first meaning of <i>mena</i> we saw earlier. This is
      perhaps to avoid ambiguity.
    </p>

    <div key={7} className="lesson-chunk">
      <p>
        There are some special cases where <i>mena</i> that should be used
        instead of <i>betyda</i> despite the latter being closer to the English
        "mean". In particular, it has to be used for expressing the{" "}
        <strong>purpose or intention</strong> of someone's actions:
      </p>

      <p className="w3-margin-left">
        Han menade inget illa.
        <br />
        (= He didn't mean anything bad.)
      </p>
      <p className="w3-margin-left">
        Jag menade inte att det skulle bli så här.
        <br />
        (= I didn't mean/intend for this to happen.)
      </p>
    </div>
  </div>
];

export default chunks;
