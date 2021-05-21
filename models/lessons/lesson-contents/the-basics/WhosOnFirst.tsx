import React from "react";
import {
  whosOnFirstWords,
  whosOnFirstAdditionalWords
} from "../../word-lists/WhosOnFirst";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";

const lessonChunks = [
  <div className="lesson-chunk">
    <div className="blackboard lesson-blackboard">
      <h2>Lesson 14</h2>
      <h3>Who's on first?</h3>
    </div>

    <div className="lesson-goals">
      <h3 className="theme-swe-blue w3-margin-top">Lesson goals</h3>
      <p>In this lesson you will learn:</p>

      <ul>
        <li>...different ways of saying the ordinal numbers.</li>
      </ul>
    </div>
  </div>,
  <div className="lesson-chunk">
    <h4 className="theme-swe-blue">Text</h4>

    <img
      className="w3-image w3-margin-bottom"
      src={"/images/race.jpg"}
      alt="Race"
    />

    <Table>
      <TableBody>
        <TableRow>
          <TableCell>Kommentator</TableCell>
          <TableCell>
            Ojojoj! Vilket spännande lopp! Och de är i mål! Rickardson på första
            plats, Hamilton tvåa, McKinley trea. Det här är Rickardsons sjunde
            raka seger.
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>,
  <div className="lesson-chunk">
    <h4 className="theme-swe-blue">New words</h4>
    <WordList words={whosOnFirstWords} />
  </div>,
  <div className="lesson-chunk">
    <h4 className="theme-swe-blue">Additional words</h4>
    <WordList words={whosOnFirstAdditionalWords} />
  </div>,
  <div className="lesson-chunk">
    <h4 className="theme-swe-blue">Grammar points</h4>
    <h5>GP1: Ordinal numbers</h5>

    <p>
      Ordinal numbers are numbers that define what order something comes in,
      e.g. words like "first", "second", etc. In Swedish they can be constructed
      in two ways.
    </p>

    <h6>True ordinals</h6>
    <p>
      The first one is the true ordinal numbers, and they work like in English
      in the sense that a noun or noun phrase must follow the ordinal:
    </p>

    <p className="w3-margin-left">
      min <strong>första</strong> bil
      <br />
      din <strong>andra</strong> hund
      <br />
      Rickardsons <strong>sjunde</strong> raka vinst
    </p>

    <p>
      The words <i>första</i>, <i>andra</i> and <i>sjunde</i> are the ordinal
      forms of <i>ett</i>, <i>två</i> and <i>sju</i>, respectively. I will
      present a table with the cardinal forms in a few sections.
    </p>

    <p>
      When another adjective follows an ordinal, it needs to be in a definite
      form. Usually this is constructed by adding -a to the base adjective.
      <br />
      In the last example above, <i>rak</i> is the base form, so we change it to
      <i>raka</i>. This is not a rule specific to cardinals numbers, so we will
      return to this rule in a later lesson about adjectives.
    </p>
  </div>,
  <div className="lesson-chunk">
    <h6>Turning numbers into nouns</h6>
    <p>
      The second way is changing the cardinal numbers (<i>ett</i>, <i>två</i>
      ...) into nouns by adding the suffix -a: <i>etta</i>, <i>tvåa</i> and so
      on. This noun form eliminates the proper noun <i>plats</i> and thus can
      only be used in the contexts of races or competitions.
    </p>

    <p>
      Thus the expression <i>han kommer etta</i> is equivalent to saying
      <i>han kommer på första plats</i>. You can't say
    </p>

    <p className="red-strikethrough">min tvåa (bil)</p>

    <p>as the noun has nothing to do with placement.</p>

    <p>
      This noun construction usually works only with the numbers 1-12, though
      you can extend it to numbers above 20 that are not divisible by 10. The
      table <IfMobile>on the next section</IfMobile>{" "}
      <IfDesktop>below</IfDesktop>
      shows the first 20 and some other ordinal numbers both in the "true"
      ordinal form and the noun-constructed form.
    </p>
  </div>,
  <div className="lesson-chunk">
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>#</TableCell>
          <TableCell>Ordinal</TableCell>
          <TableCell>{/* pronunciation */}</TableCell>
          <TableCell>Noun construction</TableCell>
          <TableCell>{/* pronunciation */}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>första</TableCell>
          <TableCell>
            <AudioButton fileName="första.mp3" />
          </TableCell>
          <TableCell>etta</TableCell>
          <TableCell>
            <AudioButton fileName="etta.mp3" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2</TableCell>
          <TableCell>andra</TableCell>
          <TableCell>
            <AudioButton fileName="andra.mp3" />
          </TableCell>
          <TableCell>tvåa</TableCell>
          <TableCell>
            <AudioButton fileName="tvåa.mp3" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>3</TableCell>
          <TableCell>tredje</TableCell>
          <TableCell>
            <AudioButton fileName="tredje.mp3" />
          </TableCell>
          <TableCell>trea</TableCell>
          <TableCell>
            <AudioButton fileName="trea.mp3" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>4</TableCell>
          <TableCell>fjärde</TableCell>
          <TableCell>
            <AudioButton fileName="fjärde.mp3" />
          </TableCell>
          <TableCell>fyra</TableCell>
          <TableCell>
            <AudioButton fileName="fyra.mp3" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>5</TableCell>
          <TableCell>femte</TableCell>
          <TableCell>
            <AudioButton fileName="femte.mp3" />
          </TableCell>
          <TableCell>femma</TableCell>
          <TableCell>
            <AudioButton fileName="femma.mp3" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>6</TableCell>
          <TableCell>sjätte</TableCell>
          <TableCell>
            <AudioButton fileName="sjätte.mp3" />
          </TableCell>
          <TableCell>sexa</TableCell>
          <TableCell>
            <AudioButton fileName="sexa.mp3" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>7</TableCell>
          <TableCell>sjunde</TableCell>
          <TableCell>
            <AudioButton fileName="sjunde.mp3" />
          </TableCell>
          <TableCell>sjua</TableCell>
          <TableCell>
            <AudioButton fileName="sjua.mp3" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>8</TableCell>
          <TableCell>åttonde</TableCell>
          <TableCell>
            <AudioButton fileName="åttonde.mp3" />
          </TableCell>
          <TableCell>åtta</TableCell>
          <TableCell>
            <AudioButton fileName="åtta.mp3" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>9</TableCell>
          <TableCell>nionde</TableCell>
          <TableCell>
            <AudioButton fileName="nionde.mp3" />
          </TableCell>
          <TableCell>nia</TableCell>
          <TableCell>
            <AudioButton fileName="nia.mp3" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>10</TableCell>
          <TableCell>tionde</TableCell>
          <TableCell>
            <AudioButton fileName="tionde.mp3" />
          </TableCell>
          <TableCell>tia</TableCell>
          <TableCell>
            <AudioButton fileName="tia.mp3" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>11</TableCell>
          <TableCell>elfte</TableCell>
          <TableCell>
            <AudioButton fileName="elfte.mp3" />
          </TableCell>
          <TableCell>elva</TableCell>
          <TableCell>
            <AudioButton fileName="elva.mp3" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>12</TableCell>
          <TableCell>tolfte</TableCell>
          <TableCell>
            <AudioButton fileName="tolfte.mp3" />
          </TableCell>
          <TableCell>tolva</TableCell>
          <TableCell>
            <AudioButton fileName="tolva.mp3" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>13</TableCell>
          <TableCell>trettonde</TableCell>
          <TableCell>
            <AudioButton fileName="tolfte.mp3" />
          </TableCell>
          <TableCell>-</TableCell>
          <TableCell>-</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>14</TableCell>
          <TableCell>fjortonde</TableCell>
          <TableCell>
            <AudioButton fileName="tolfte.mp3" />
          </TableCell>
          <TableCell>-</TableCell>
          <TableCell>-</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>15</TableCell>
          <TableCell>femtonde</TableCell>
          <TableCell>
            <AudioButton fileName="tolfte.mp3" />
          </TableCell>
          <TableCell>-</TableCell>
          <TableCell>-</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>16</TableCell>
          <TableCell>sextonde</TableCell>
          <TableCell>
            <AudioButton fileName="tolfte.mp3" />
          </TableCell>
          <TableCell>-</TableCell>
          <TableCell>-</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>17</TableCell>
          <TableCell>sjuttonde</TableCell>
          <TableCell>
            <AudioButton fileName="tolfte.mp3" />
          </TableCell>
          <TableCell>-</TableCell>
          <TableCell>-</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>18</TableCell>
          <TableCell>artonde</TableCell>
          <TableCell>
            <AudioButton fileName="tolfte.mp3" />
          </TableCell>
          <TableCell>-</TableCell>
          <TableCell>-</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>19</TableCell>
          <TableCell>nittonde</TableCell>
          <TableCell>
            <AudioButton fileName="tolfte.mp3" />
          </TableCell>
          <TableCell>-</TableCell>
          <TableCell>-</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>20</TableCell>
          <TableCell>tjugonde</TableCell>
          <TableCell>
            <AudioButton fileName="tolfte.mp3" />
          </TableCell>
          <TableCell>-</TableCell>
          <TableCell>-</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>21</TableCell>
          <TableCell>tjugoförsta</TableCell>
          <TableCell>
            <AudioButton fileName="tolfte.mp3" />
          </TableCell>
          <TableCell>(tjugoetta)</TableCell>
          <TableCell>
            <AudioButton fileName="tolva.mp3" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>22</TableCell>
          <TableCell>tjugoandra</TableCell>
          <TableCell>
            <AudioButton fileName="tolfte.mp3" />
          </TableCell>
          <TableCell>(tjugotvåa)</TableCell>
          <TableCell>
            <AudioButton fileName="tolva.mp3" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>23</TableCell>
          <TableCell>tjugotredje</TableCell>
          <TableCell>
            <AudioButton fileName="tolfte.mp3" />
          </TableCell>
          <TableCell>(tjugotrea)</TableCell>
          <TableCell>
            <AudioButton fileName="tolva.mp3" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>30</TableCell>
          <TableCell>trettionde</TableCell>
          <TableCell>
            <AudioButton fileName="tolfte.mp3" />
          </TableCell>
          <TableCell>-</TableCell>
          <TableCell>-</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>31</TableCell>
          <TableCell>trettioförsta</TableCell>
          <TableCell>
            <AudioButton fileName="tolfte.mp3" />
          </TableCell>
          <TableCell>(trettioetta)</TableCell>
          <TableCell>
            <AudioButton fileName="tolva.mp3" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>40</TableCell>
          <TableCell>fyrtionde [förtionde]</TableCell>
          <TableCell>
            <AudioButton fileName="tolfte.mp3" />
          </TableCell>
          <TableCell>-</TableCell>
          <TableCell>-</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>50</TableCell>
          <TableCell>femtionde</TableCell>
          <TableCell>
            <AudioButton fileName="tolfte.mp3" />
          </TableCell>
          <TableCell>-</TableCell>
          <TableCell>-</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>60</TableCell>
          <TableCell>sextionde</TableCell>
          <TableCell>
            <AudioButton fileName="tolfte.mp3" />
          </TableCell>
          <TableCell>-</TableCell>
          <TableCell>-</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>70</TableCell>
          <TableCell>sjuttionde</TableCell>
          <TableCell>
            <AudioButton fileName="tolfte.mp3" />
          </TableCell>
          <TableCell>-</TableCell>
          <TableCell>-</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>80</TableCell>
          <TableCell>åttionde</TableCell>
          <TableCell>
            <AudioButton fileName="tolfte.mp3" />
          </TableCell>
          <TableCell>-</TableCell>
          <TableCell>-</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>90</TableCell>
          <TableCell>nittionde</TableCell>
          <TableCell>
            <AudioButton fileName="tolfte.mp3" />
          </TableCell>
          <TableCell>-</TableCell>
          <TableCell>-</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>100</TableCell>
          <TableCell>hundrade</TableCell>
          <TableCell>
            <AudioButton fileName="tolfte.mp3" />
          </TableCell>
          <TableCell>-</TableCell>
          <TableCell>-</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>152</TableCell>
          <TableCell>hundrafemtioandra</TableCell>
          <TableCell>
            <AudioButton fileName="tolfte.mp3" />
          </TableCell>
          <TableCell>(hundrafemtiotvåa)</TableCell>
          <TableCell>
            <AudioButton fileName="tolva.mp3" />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>,
  <div className="lesson-chunk">
    <p>
      I should perhaps mention that there are other meanings to the
      noun-constructed forms. I will write an article about it in the Language
      Bites section later and link it here.
    </p>

    <p>
      If you want a short form of writing ordinals, like "2nd" in English
      instead of the word "second", the general format is:
    </p>

    <p className="w3-margin-left">
      &lt;number&gt; + : + &lt;last letter of either form&gt;
    </p>

    <p>e.g: 1:a, 2:a, 3:e/3:a</p>

    <p>
      For dates (see next lesson), we only write the numbers, e.g. 15 januari.
    </p>
  </div>,
  <div className="lesson-chunk">
    <h5>GP2: Expressing surprise</h5>

    <p>
      In the text, the commentator said <i>Vilket spännande lopp!</i>. The
      normal meaning of <i>vilket</i> is the question word "which" and needs to
      be changed to <i>vilken</i> for en-nouns (<i>lopp</i> is an ett-noun).
    </p>
    <p>
      When <i>vilken/vilket</i> are not in a question, they act as an
      intensifier, similar to "what a..." in English. This can also be combined
      with interjections such as <i>Oj!</i> or <i>Wow!</i> to further emphasize
      the reaction or emotion of surprise.
    </p>
    <p>
      In some dialects or age groups, <i>vilken/vilket</i> changes to{" "}
      <i>sicken/sicket</i> verbally but not in text. This comes from contracting
      <i>se vilken/vilket</i>. Thus, <i>sicken/sicket</i> do not carry the
      meaning of the question words.
      <br />I find the use of <i>sicken/sicket</i> interesting as it is
      considered slang and inappropriate to be used in formal contexts, but it
      has been recorded in use since 1678!
    </p>
  </div>
];

export default lessonChunks;
