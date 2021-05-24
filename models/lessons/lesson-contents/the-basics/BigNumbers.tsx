import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@material-ui/core";
import AudioButton from "../../../../components/AudioButton";
import WordList from "../../../../components/WordList";
import { IfDesktop, IfMobile } from "../../../../helpers/showBasedOnScreen";
import { bigNumbersWords, bigNumbersAdditionalWords } from "../../word-lists/BigNumbers";

const lessonChunks = [
  <div className="lesson-chunk">
    <div className="blackboard lesson-blackboard">
      <h2>Lesson 12</h2>
      <h3>Big numbers</h3>
    </div>

    <div className="lesson-goals">
      <h3 className="theme-swe-blue w3-margin-top">Lesson goals</h3>
      <p>In this lesson you will learn:</p>

      <ul>
        <li>...how to say numbers bigger than 20.</li>
      </ul>
    </div>
  </div>,
  <div className="lesson-chunk">
    <h4 className="theme-swe-blue">Text</h4>

    <p>Håkan betalar notan på ett kafé.</p>

    <Table>
      <TableBody>
        <TableRow>
          <TableCell className="smallcaps">Kassörska:</TableCell>
          <TableCell>
            En chokladboll och en dubbel espresso. Det blir 74 kronor, tack.
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="smallcaps">Håkan:</TableCell>
          <TableCell>
            Javisst. Jag ska se om jag har någon hundralapp i min plånbok...
            <br />
            Går det bra med en femhundring? Jag kan betala med kort annars.
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="smallcaps">Kassörska:</TableCell>
          <TableCell>Det går bra med en femhundring.</TableCell>
        </TableRow>
      </TableBody>
    </Table>

    <p>
      Håkan ger kassörskan en femhundralapp, och kassörskan ger växel tillbaka.
    </p>

    <Table>
      <TableBody>
        <TableRow>
          <TableCell className="smallcaps">Kassörska:</TableCell>
          <TableCell>
            100, 200, 300, 400, 410, 420, 425, 426 kronor tillbaka. Vill du ha
            kvittot?
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="smallcaps">Håkan:</TableCell>
          <TableCell>Nej, du kan behålla det.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="smallcaps">Kassörska:</TableCell>
          <TableCell>Ha en bra dag.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="smallcaps">Håkan:</TableCell>
          <TableCell>Tack, detsamma.</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>,
  <div className={"lesson-chunk"}>
    <h4 className="theme-swe-blue">New words</h4>
    <WordList words={bigNumbersWords} />
  </div>,
  <div className={"lesson-chunk"}>
    <h4 className="theme-swe-blue">Additional words</h4>
    <WordList words={bigNumbersAdditionalWords} />
  </div>,
  <div className={"lesson-chunk"}>
    <h4 className="theme-swe-blue">Grammar points</h4>
    <h5>GP1: Expressing big numbers</h5>

    <p>
      In Lesson 5 we took a look at the numbers 0-20. Here, we will go all the
      way up to the billions!
      <br />
      It might seem like a lot but the rules for big numbers are more or less
      the same as in English. For instance, for numbers between 21 and 99 you
      have a base word for the tens digits and then add the word for the single
      digit.
    </p>

    <p>
      Many of these words have different pronunciations depending on which
      dialect you are speaking. I have listed some alternative pronunciations in
      the third column in the table <IfDesktop>below</IfDesktop>{" "}
      <IfMobile>in the next section</IfMobile>. Note for example that the final
      vowels in for the tens digits are often slurred in fast speech.
    </p>

    <p>
      Don't forget to use the correct en/ett form if you are using them together
      with nouns.
    </p>
  </div>,
  <div className="lesson-chunk">
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>20</TableCell>
          <TableCell>tjugo</TableCell>
          <TableCell>[tjuge, tjugi]</TableCell>
          <TableCell>
            <AudioButton fileName="tjugo.mp3" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>21</TableCell>
          <TableCell>tjugoett, tjugoen</TableCell>
          <TableCell>[tjuett, tjuen, tjuge-ett, tjuge-en]</TableCell>
          <TableCell>
            <AudioButton fileName="tjugo.mp3" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>22</TableCell>
          <TableCell>tjugotvå</TableCell>
          <TableCell>[tjutvå, tjugetvå, tjutvå]</TableCell>
          <TableCell>
            <AudioButton fileName="tjugo.mp3" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>23</TableCell>
          <TableCell>tjugotre</TableCell>
          <TableCell>[tjutre, tjugetre, tjutre]</TableCell>
          <TableCell>
            <AudioButton fileName="tjugo.mp3" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>30</TableCell>
          <TableCell>trettio</TableCell>
          <TableCell>[tretti]</TableCell>
          <TableCell>
            <AudioButton fileName="tjugo.mp3" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>40</TableCell>
          <TableCell>fyrtio</TableCell>
          <TableCell>
            pronounced [förtio] in most dialects, or [förti]
          </TableCell>
          <TableCell>
            <AudioButton fileName="tjugo.mp3" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>50</TableCell>
          <TableCell>femtio</TableCell>
          <TableCell>[femti]</TableCell>
          <TableCell>
            <AudioButton fileName="tjugo.mp3" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>60</TableCell>
          <TableCell>sextio</TableCell>
          <TableCell>[sexti]</TableCell>
          <TableCell>
            <AudioButton fileName="tjugo.mp3" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>70</TableCell>
          <TableCell>sjuttio</TableCell>
          <TableCell>[sjutti]</TableCell>
          <TableCell>
            <AudioButton fileName="tjugo.mp3" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>80</TableCell>
          <TableCell>åttio</TableCell>
          <TableCell>[åtti]</TableCell>
          <TableCell>
            <AudioButton fileName="tjugo.mp3" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>90</TableCell>
          <TableCell>nittio</TableCell>
          <TableCell>[nitti]</TableCell>
          <TableCell>
            <AudioButton fileName="tjugo.mp3" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>100</TableCell>
          <TableCell>(ett) hundra*</TableCell>
          <TableCell></TableCell>
          <TableCell>
            <AudioButton fileName="tjugo.mp3" />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>

    <small>
      * When counting we say <i>hundra</i> with an optional <i>ett</i>
      in front. However, remember that in compound nouns the en/ett form changes
      depending on the last noun in the chain. Thus a 100 kr bill/note is{" "}
      <i>en hundralapp</i> because
      <i>lapp</i> is an en-word.
    </small>
  </div>,
  <div className="lesson-chunk">
    <p>
      Hopefully that wasn't so hard now, was it? For bigger numbers its even
      easier as most dialects have the same words for the larger powers of ten.
    </p>
    <p>
      <strong>Note:</strong> The digits separator in Swedish is either a space
      or a dot (.). I have chosen to use spaces in the table below. <br />
      Using a dot can lead to confusion because in English-speaking countries a
      dot is the decimal separator. In Swedish, we use the comma as a decimal
      separator instead.
    </p>

    <Table>
      <TableBody>
        <TableRow>
          <TableCell>123</TableCell>
          <TableCell>(ett) hundratjugotre</TableCell>
          <TableCell>[(ett) hundratjutre] etc.</TableCell>
          <TableCell>
            <AudioButton fileName="tjugo.mp3" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>268</TableCell>
          <TableCell>tvåhundrasextioåtta</TableCell>
          <TableCell>[tvåhundrasextiåtta]</TableCell>
          <TableCell>
            <AudioButton fileName="tjugo.mp3" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>1 000</TableCell>
          <TableCell>(ett) tusen</TableCell>
          <TableCell></TableCell>
          <TableCell>
            <AudioButton fileName="tjugo.mp3" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>1 145</TableCell>
          <TableCell>(ett) tusen (ett) hundrafyrtiofem</TableCell>
          <TableCell>[tusenförtifem]</TableCell>
          <TableCell>
            <AudioButton fileName="tjugo.mp3" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>23 967</TableCell>
          <TableCell>trettio</TableCell>
          <TableCell>[tretti]</TableCell>
          <TableCell>
            <AudioButton fileName="tjugo.mp3" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>100 000</TableCell>
          <TableCell>(ett) hundra tusen</TableCell>
          <TableCell></TableCell>
          <TableCell>
            <AudioButton fileName="tjugo.mp3" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>1 000 000</TableCell>
          <TableCell>(en) miljon</TableCell>
          <TableCell></TableCell>
          <TableCell>
            <AudioButton fileName="tjugo.mp3" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>1 000 000 000</TableCell>
          <TableCell>(en) miljard</TableCell>
          <TableCell></TableCell>
          <TableCell>
            <AudioButton fileName="tjugo.mp3" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>1 000 000 000 000</TableCell>
          <TableCell>(en) biljon</TableCell>
          <TableCell></TableCell>
          <TableCell>
            <AudioButton fileName="tjugo.mp3" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>1 000 000 000 000 000</TableCell>
          <TableCell>(en) biljard</TableCell>
          <TableCell></TableCell>
          <TableCell>
            <AudioButton fileName="tjugo.mp3" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>23,6</TableCell>
          <TableCell>tjugotre komma sex</TableCell>
          <TableCell>[tjutre komma sex] etc.</TableCell>
          <TableCell>
            <AudioButton fileName="tjugo.mp3" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>692,47</TableCell>
          <TableCell>sexhundranittiotvå komma fyrtiosju</TableCell>
          <TableCell>[sexhundranittitvå komma förtisju]</TableCell>
          <TableCell>
            <AudioButton fileName="tjugo.mp3" />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>,
  <div className="lesson-chunk">
    <div className="culture-note">
      <h4 className="theme-swe-blue">Culture note: Sweden and cash</h4>

      <p>
        For a long time, Sweden has been on the forefront with technical
        advancements and this can also be seen in how we deal with things like
        banking and money.
      </p>

      <p>
        The currency used in Sweden is <i>kronor</i> (singular <i>krona</i>,
        abbreviated <i>kr</i>), which means crowns. Although we are not members
        of the eurozone, many stores that accept cash will also accept euros,
        particularly in southern Sweden.
      </p>

      <p>
        One krona is equal to 100 <i>öre</i>, but because of inflation and the
        abolishment of öre coins, we rarely if ever have to think about öre more
        than when looking at our bank statements. If you see something costing
        19.99 kr at a store, you will pay 20 if you use cash and not receive any
        change.
      </p>
    </div>
  </div>,
  <div className="lesson-chunk">
    <div className="culture-note">
      <p>
        Sweden is mostly a cashless society, and few people carry more than a
        meal's worth of money in their wallets. The key is to bring your debit
        card or phone with you, as these are what we use to pay instead.
        <br />
        Most stores and restaurants do accept credit cards as well, but we
        rarely use them for daily expenses. Contactless phone payment solutions
        such as Apple Pay or Samsung Pay exist in some chains like 7-11 or the
        competing chain <i>Pressbyrån</i> but not in many other places.
      </p>
      <p>
        Although many big restaurant chains such as McDonald's still accept
        cash, there are plenty of smaller restaurants or shops which only accept
        cards or mobile payment with apps such as Swish.
      </p>
      <p>
        This also applies to public transport - you are expected to have a
        prepaid card with you, which could be in the form of a physical card or
        a digital ticket in an app. This is not only for convenience of the
        passengers but also helps reduce waiting times of others to board the
        vehicles, as well as safety for the drivers since they don't have to
        worry about getting robbed.
      </p>
      <p>
        For the situations where you do need cash though, it is useful to
        recognize what they look like. The notes are color coded and ordered by
        size, so you can easily sort them in your wallet.
        <br />
        Notes exist in values of 20, 50, 100, 200, 500 and 1000 kr. Coins exist
        in values of 1, 2, 5 and 10 kr.
      </p>
    </div>
  </div>
];

export default lessonChunks;
