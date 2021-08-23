import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@material-ui/core";
import {
  atThePizzeriaWords,
  atThePizzeriaAdditionalWords
} from "../../word-lists/AtThePizzeria";
import WordList from "../../../../components/WordList";
import Image from 'next/image';

const lessonChunks = [
  <div className="lesson-chunk">
    <div className="blackboard lesson-blackboard">
      <h2>Lesson 6</h2>
      <h3>At the pizzeria</h3>
    </div>

    <div className="lesson-goals">
      <h3 className="theme-swe-blue w3-margin-top">Lesson goals</h3>
      <p>In this lesson you will learn:</p>

      <ul>
        <li>...how to order food in a pizzeria.</li>
        <li>...how to ask or express what you want or can do.</li>
      </ul>
    </div>
  </div>,
  <div className="lesson-chunk">
    <h4 className="theme-swe-blue">Text</h4>

    <p>Håkan är på Robbans Pizzeria. Han tittar på menyn.</p>

    <Image className="w3-image" alt="pizza-menu" src="/images/pizza-menu.png" />

    <Table>
      <TableBody>
        <TableRow>
          <TableCell className="smallcaps">Håkan:</TableCell>
          <TableCell>
            Kan jag få en Hawaii utan skinka och med extra ost, tack.
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="smallcaps">Hassan:</TableCell>
          <TableCell>Javisst. Vill du äta här eller ta med?</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="smallcaps">Håkan:</TableCell>
          <TableCell>Jag äter här.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="smallcaps">Hassan:</TableCell>
          <TableCell>Vill du ha en dricka?</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="smallcaps">Håkan:</TableCell>
          <TableCell>En Cola Zero, tack.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="smallcaps">Hassan:</TableCell>
          <TableCell>Det blir 100 kronor, tack.</TableCell>
        </TableRow>
      </TableBody>
    </Table>

    <p>Håkan blippar ett bankkort.</p>

    <Table>
      <TableBody>
        <TableRow>
          <TableCell className="smallcaps">Hassan:</TableCell>
          <TableCell>Vill du ha kvittot?</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="smallcaps">Håkan:</TableCell>
          <TableCell>Nej, tack.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="smallcaps">Hassan:</TableCell>
          <TableCell>
            Det dröjer 10-15 (tio till femton) minuter. Du kan sätta dig under
            tiden du väntar.
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="smallcaps">Håkan:</TableCell>
          <TableCell>Tack.</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>,
  <div className={"lesson-chunk"}>
    <h4 className="theme-swe-blue">New words</h4>
    <WordList words={atThePizzeriaWords} />
  </div>,
  <div className={"lesson-chunk"}>
    <h4 className="theme-swe-blue">Additional words</h4>
    <WordList words={atThePizzeriaAdditionalWords} />
  </div>,
  <div className={"lesson-chunk"}>
    <h4 className="theme-swe-blue">Grammar points</h4>
    <h5>GP1: Helping verbs and expressing what you want</h5>

    <p>
      There are a couple of ways you can express what you want in Swedish, and
      just like in English they vary in politeness and formality:
    </p>

    <p>
      The first way is to simply state what you want, and add a <i>tack</i>. The{" "}
      <i>tack</i> when making requests does not mean "thank you" but more like a
      softer version of "please". I say softer because there are multiple ways
      to translate "please" into Swedish but in the context of ordering food,
      they sound a bit excessive.
    </p>

    <p className="w3-margin-left">En Calzone, tack.</p>

    <p>
      This is a perfectly valid way to order food in Swedish, but it's not
      entirely grammatically correct as it lacks a subject and a verb. The full
      sentence would be
    </p>

    <p className="w3-margin-left">
      Jag vill ha en Calzone, tack.
      <br />
      =I want a Calzone, please.
    </p>
  </div>,
  <div className={"lesson-chunk"}>
    <p>
      Here's where things get a bit tricky. First of all, "want" in Swedish is{" "}
      <i>vill</i>, so don't think that it means "will", as in doing something in
      the future!
    </p>
    <p>
      The second problem is that <i>vill</i> acts as a helping verb and it
      cannot stand alone as the main verb in a sentence. Thus, we need to add
      the verb <i>ha</i> (= to have) whenever what follows is a noun.
    </p>
    <p>
      Whenever you have a helping verb, the main verb needs to be in the
      dictionary form, just like in English:
    </p>

    <p className="w3-margin-left">
      Hon vill <span className="red-strikethrough">äter</span> äta en pizza.
    </p>

    <p className="w3-margin-left">
      Han vill <span className="red-strikethrough">dricker</span> dricka en
      Cola.
    </p>

    <p className="w3-margin-left">
      De vill <span className="red-strikethrough">spelar</span> spela Minecraft.
    </p>

    <p>
      Finally, if you want to be extra polite, you can use the double helping
      verb <i>skulle vilja</i>. In this case, adding <i>tack</i> is optional.
    </p>

    <p className="w3-margin-left">Jag skulle vilja ha en Calzone (, tack).</p>
  </div>,
  <div className="lesson-chunk">
    <h5>
      GP2: Can you use <i>kan</i> correctly?
      <br />
      (More about helping verbs)
    </h5>

    <p>
      <i>Kan</i> is another helping verb which can take on a bunch of meanings.
      The most basic of this is the same as in English, expressing an ability to
      do something:
    </p>

    <p className="w3-margin-left">Jag kan simma.</p>

    <p>
      Because <i>kan</i> is a helping verb, the main verb needs to be in the
      dictionary form, just like we saw with <i>vill</i>.
      <br />
      We can also add objects to our sentences:
    </p>

    <p className="w3-margin-left">Du kan prata svenska.</p>
    <p className="w3-margin-left">Håkan kan köra bil.</p>
    <p className="w3-margin-left">Lena kan baka bröd.</p>
  </div>,
  <div className="lesson-chunk">
    <p>
      When negating sentences with helping verbs, the word <i>inte</i> needs to
      be put after the helping verb and before the main verb:
    </p>

    <p className="w3-margin-left">Jag kan inte simma.</p>
    <p className="w3-margin-left">Jag vill inte sova.</p>

    <p>The same goes for sentences </p>

    <p className="w3-margin-left">Jag kan inte prata svenska.</p>
    <p className="w3-margin-left">Jag vill inte äta pizza.</p>

    <p>
      Let's get back to the positive sentences for a while and suppose we want
      to turn them into questions. Just like we did before we had helping verbs,
      we flip the order of the helping verb and subject. However, now that we
      have a main verb, it stays in place:
    </p>

    <p className="w3-margin-left">Kan du simma?</p>
    <p className="w3-margin-left">Vill du leka?</p>

    <p>
      And this also means that any objects will stay in their places as well:
    </p>

    <p className="w3-margin-left">Kan du prata svenska?</p>
    <p className="w3-margin-left">Kan Håkan köra bil?</p>
  </div>,
  <div className="lesson-chunk">
    <p>
      An additional meaning of <i>kan</i> is "may". We saw it in this sentence:
    </p>

    <p className="w3-margin-left">Du kan sätta dig under tiden du väntar.</p>

    <p>
      This sentence does not express the ability of sitting down but rather the
      permission of doing so (= You may sit down while you're waiting). <br />
      In this case it is said because fast food shops and pizzerias usually
      don't have waiters coming to your table; instead you have to place your
      order at the cash register when you enter the place. Once the order (and
      payment) is done, the patron may be seated.
    </p>
  </div>,
  <div className="lesson-chunk">
    <div className="culture-note">
      <h4 className="theme-swe-blue">Culture note: Pizzerias in Sweden</h4>

      <p>
        Pizza restaurants, or pizzerias, are common sights in the suburbs of
        Sweden. Almost every city block has at least one pizzeria where you can
        feed your belly if you are looking for something to eat for a relatively
        low price.
      </p>
      <p>
        Although the first pizzeria opened in 1947 in Västerås by Italian guest
        workers, most pizzerias today are owned by migrants from the Middle
        East.
      </p>
      <p>
        Most pizzerias feature a wide range of pizzas to select from, usually 50
        to 70 different kinds with various combinations of toppings.
        <br />
        And the most common one? Kebab!
      </p>

      <p>
        That's right, this Swedish idea of combining Italian and Turkish cuisine
        might horrify Italians and Turks. Kebab pizza usually comes with a the
        meat itself thinly sliced, a selection of sauce, fefferoni peppers,
        tomato sauce, cheese and onions. It is greasy and not really healthy to
        eat, but it tastes amazing. People say that it is also a good cure for
        hangovers.
      </p>

      <p>
        Besides kebab pizza, most pizzerias also offer kebab in a roll, bread
        (pita) or a <i>tallrik</i> (plate), which includes fries and often
        sliced lettuce, cucumbers and tomatoes.
      </p>

      <p>
        Since kebab has such a huge impact on our food culture, many people
        judge a pizzeria solely by the taste of their kebab!
      </p>
    </div>
  </div>
];

export default lessonChunks;
