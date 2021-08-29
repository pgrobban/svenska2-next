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
  meMyselfAndIPart2Words,
  meMyselfAndIPart2AdditionalWords
} from "../../word-lists/MeMyselfAndIPart2";
import AudioButton from "../../../../components/AudioButton";
import Image from "next/image";

const lessonChunks = [
  <div className="lesson-chunk">
    <div className="blackboard lesson-blackboard">
      <h2>Lesson 9</h2>
      <h3>Me, myself and I: Part 2</h3>
    </div>

    <div className="lesson-goals">
      <p>
        In this lesson we will continue to look at pronouns, and more
        specifically how the choice of pronouns can change the meaning of verbs
        in some cases.
      </p>
    </div>
  </div>,
  <div className="lesson-chunk">
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>
            <Image
              height={150}
              width={200}
              alt="teacher"
              src="/images/teacher.jpg"
            />
            <p>
              Jag lär <strong>dig</strong> svenska.
            </p>
          </TableCell>
          <TableCell>
            <AudioButton fileName="" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Image
              height={200}
              width={150}
              alt="student"
              src="/images/student.jpg"
            />
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
            <Image
              height={150}
              width={200}
              alt="meeting"
              src="/images/meeting.jpg"
            />
            <p>
              Lena känner Johan. <br />
              &rarr; Hon känner Johan.
              <br />
              &rarr; De känner varandra.
            </p>
          </TableCell>
          <TableCell>
            <AudioButton fileName="" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Image
              height={150}
              width={200}
              className="table-image"
              alt="play"
              src="/images/tired.jpg"
            />
            <p>
              Johan känner <strong>sig</strong> trött.
            </p>
          </TableCell>
          <TableCell>
            <AudioButton fileName="" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Image
              height={150}
              width={200}
              alt="wardrobe"
              src="/images/wardrobe.jpg"
            />
            <p>
              Håkan <strong>har</strong> en kostym.
            </p>
          </TableCell>
          <TableCell>
            <AudioButton fileName="" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Image
              height={200}
              width={150}
              alt="suit"
              src="/images/suit.jpg"
            />
            <p>
              Håkan <strong>har på sig</strong> en kostym.
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
    <WordList words={meMyselfAndIPart2Words} />
  </div>,
  <div className="lesson-chunk">
    <h4 className="theme-swe-blue">Grammar points</h4>
    <p>
      There's a lot going on in this lesson and the previous one despite having
      so few and so short sentences. I have tried to break it down into a few
      grammar points, but they are all related to each other, so it might be
      easier if you read through it all and then go back to the text.
    </p>

    <h5>GP2: Reflexive pronouns</h5>

    <p>
      Reflexive pronouns are pronouns that "reflect", or refer back a person or
      thing. They are words like myself, yourself, himself, herself, ourselves,
      yourselves and themselves.
    </p>

    <p>Compare the following sentences:</p>

    <p className="w3-margin-left">
      The barber shaves him.
      <br />
      The barber shaves himself.
    </p>

    <p>
      In the first sentence, the subject and object refer to different people,
      so we use the objective form of "he" to refer to a male other than the
      barber.
      <br />
      In the second sentence, the subject and object refer to the same person -
      the barber. Thus we have to use a reflexive pronoun, pointing us back to
      the subject.
    </p>

    <p>In Swedish, the first sentence would be translated as</p>

    <p className="w3-margin-left">Frisören rakar honom.</p>

    <p>
      This should come to no surprise if you followed along in the previous
      lesson. We use <i>honom</i> as it is the objective form of <i>han</i>.
    </p>

    <p>
      However, when we want to reflect that the action is done on the subject
      like in the second sentence, we have to consult the table of reflexive
      forms below.
    </p>
  </div>,
  <div className="lesson-chunk">
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Nom. EN</TableCell>
          <TableCell>Nom. SV</TableCell>
          <TableCell>Refl. EN</TableCell>
          <TableCell>Refl. SV</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>I</TableCell>
          <TableCell>jag</TableCell>
          <TableCell>myself</TableCell>
          <TableCell>mig</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>you (sing.)</TableCell>
          <TableCell>du</TableCell>
          <TableCell>yourself</TableCell>
          <TableCell>dig</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>he</TableCell>
          <TableCell>han</TableCell>
          <TableCell>himself</TableCell>
          <TableCell>sig [sej]</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>she</TableCell>
          <TableCell>hon</TableCell>
          <TableCell>herself</TableCell>
          <TableCell>sig</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>-</TableCell>
          <TableCell>hen</TableCell>
          <TableCell>-</TableCell>
          <TableCell>sig</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>it</TableCell>
          <TableCell>den, det</TableCell>
          <TableCell>itself</TableCell>
          <TableCell>sig</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>we</TableCell>
          <TableCell>vi</TableCell>
          <TableCell>ourselves</TableCell>
          <TableCell>oss</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>you (pl.) </TableCell>
          <TableCell>ni</TableCell>
          <TableCell>yourselves</TableCell>
          <TableCell>er</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>they</TableCell>
          <TableCell>de [dom]</TableCell>
          <TableCell>themselves</TableCell>
          <TableCell>sig</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>,
  <div className="lesson-chunk">
    <p>
      Compare this table to the one from GP1 in the previous part. You might see
      that the first and second person pronouns (I, you, we) share the reflexive
      form with the objective form. Not only that, but all the others all become
      a single word <i>sig</i> in the reflexive form!
    </p>

    <p>So back to the sentence, it would be</p>

    <p className="w3-margin-left">
      Frisören rakar <strong>sig</strong>.
    </p>

    <p>Another example:</p>

    <p className="w3-margin-left">
      Lena tvättar <strong>henne</strong>. (= Lena is washing her (i.e. someone
      else who is female)).
      <br />
      Lena tvättar <strong>sig</strong>. (= Lena is washing herself.)
    </p>

    <p>
      So in conclusion, when dealing with verbs, pay attention to the following:
    </p>
    <ul>
      <li>Does the verb need an object?</li>
      <li>
        If yes, is that object one or more people? &rarr; Use objective form.
      </li>
      <li>
        And if those people the same as the subject? &rarr; Use reflexive form.
      </li>
    </ul>

    <p>
      As a footnote, many Swedes like to add the word <i>själv</i> after
      mig/dig/sig to make it seem more like the English -self reflexive pronouns
      (e.g. they might think that <i>mig själv</i> means myself). <br />
      However, adding <i>själv</i> is rarely required in cases other than
      emphasis.
    </p>
  </div>,
  <div className="lesson-chunk">
    <h5>GP3: Verb particles</h5>

    <p>
      In Swedish, you can add particles to some verbs, and they will change the
      meaning of the word. Particles could be prepositions, for example:
    </p>

    <Table>
      <TableBody>
        <TableRow>
          <TableCell>spela</TableCell>
          <TableCell>play (game, role etc.)</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>spela upp</TableCell>
          <TableCell>playback (a video)</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>spela in</TableCell>
          <TableCell>record</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>känna</TableCell>
          <TableCell>
            to know someone or, <br />
            to feel something by touch
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>känna till</TableCell>
          <TableCell>to know of something</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>hålla</TableCell>
          <TableCell>hold</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>hålla med</TableCell>
          <TableCell>to agree with what someone has said</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>lägga</TableCell>
          <TableCell>lay</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>lägga av (med)</TableCell>
          <TableCell>to stop doing something</TableCell>
        </TableRow>
      </TableBody>
    </Table>

    <p>
      English has this to some degree, like "breaking" something and "breaking
      into" something have slightly different but mostly related meanings. In
      Swedish, the particles can completely change the meaning of a word, as we
      saw in the table above.
    </p>
  </div>,
  <div className="lesson-chunk">
    <p>
      Here's the kicker: if the particle is a pronoun instead, it can also
      change the meaning, but it also changes the meaning depending on if it's a
      pronoun in the objective form or if it's a reflexive pronoun!
    </p>
    <p>
      If it is a reflexive pronoun, we usually add <i>sig</i> to the dictionary
      form to indicate that this meaning is different from the base verb. A
      common example is the verb <i>lära</i>, which can take on the meaning of
      either "learning" or "teaching" depending on what follows.
      <br />
      If what follows is a reflexive pronoun, it means the former:
    </p>
    <p className="w3-margin-left">
      Jag lär mig svenska. (= I'm learning Swedish.)
      <br />
      Han lär sig svenska. (= He's learning Swedish.)
    </p>
    <p>
      If what follows is a pronoun in the objective form, it means the latter:
    </p>
    <p className="w3-margin-left">
      Jag lär honom svenska. (= I'm teaching him Swedish.)
      <br />
      Han lär mig svenska. (= He's teaching me Swedish.)
    </p>

    <p>
      Thus, you need to be careful with the mig/dig/sig words. They can either
      be the objective form of a pronoun, or they can be a reflexive pronoun -
      and depending on what role it has in the sentence, it changes the meaning
      of the verb!
    </p>

    <p>
      As another example, we will take the verb <i>känna</i>. On its own it can
      either mean "to feel something by touch" or "to know someone":
    </p>

    <p className="w3-margin-left">
      Jag känner tygets struktur. (= I'm feeling the structure of the fabric.)
      <br />
      Jag känner smärta. (= I'm feeling pain.)
      <br />
      Känner du henne (Lena Svensson)? (= Do you know her?)
    </p>

    <p>
      If we add a reflexive pronoun, it means feeling as in having an emotion:
    </p>

    <p className="w3-margin-left">
      Jag känner mig glad. (= I feel happy/I'm happy.)
      <br /> Han känner sig ledsen.
      <br /> (= He feels sad/He's sad.)
      <br />
      Känner du dig trött? (= Do you feel tired?/Are you tired?)
    </p>

    <p>
      A final example from the text: The verb <i>ha</i> by itself simply means
      "to have". But <i>ha på sig</i> means "to wear".
    </p>
    <br />
  </div>,
  <div className="lesson-chunk">
    <p>
      Whew, that was a long ride but I hope that at least some of it made sense.
      So, now you might be asking questions like how do I know which verbs can
      take on particles, which verbs can take on reflexive pronouns, and how do
      what change the meaning of the verb?
    </p>

    <p>
      The simple answer is sadly, there is no way other than practicing. You can
      check in SAOL for additional meanings of the verbs you have learned so
      far, and I will of course add the meanings in the lesson word lists for
      new words as they occur.
    </p>
    <p>
      I will always add the pronoun <i>sig</i> for the verbs that take on
      reflexive pronouns in the word lists. But don't forget that the words not
      taking on reflexive pronouns can still use pronouns in the objective form,
      which is the same as the reflexive form in most cases, to keep their
      original meaning!
      <br />
      Swedish is weird...
    </p>
  </div>
];

export default lessonChunks;
