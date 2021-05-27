import React from "react";
import Icon from "../../components/Icon";
import { Button } from "@material-ui/core";
import AudioButton from "../../components/AudioButton";
import { IfDesktop, IfMobile } from "../../helpers/showBasedOnScreen";
import Link from "next/link";

export const chunks = [
  <div className="lesson-chunk">
    <h3 id="lesson-name" className="theme-swe-blue">
      Before you start - How to use this site
    </h3>

    <p>
      I want to take a brief moment to to talk about the structure of the
      courses and how to use this textbook in general. The way you interact with
      the site will be different depending on whether you're using a smart
      phone, tablet or computer. However, all of the lesson contents and
      exercises will be the same.
    </p>

    <IfMobile>
      <p>
        I have detected that you are using a phone or small tablet to browse
        this website, so you can navigate back and forth between sections by
        swiping left and right.
      </p>

      <p>
        If you browse this page on a computer or larger tablet, you would see
        all of the lesson contents on one page instead.
      </p>

      <p>Try swiping right to go to the next section now.</p>
    </IfMobile>
  </div>,
  <IfMobile>
    <div className="lesson-chunk">
      <p>
        Nice! You can also swipe back if you want to go back to the previous
        section.
      </p>
      <p>
        You can use the menu button
        <Button
          className="w3-margin-left w3-margin-right"
          variant="contained"
          color="primary"
        >
          <Icon type="menu" />
        </Button>
        on your top right to view the course structure and access different
        parts of the site. Try to open it now.
        <br />
        Tap the close button
        <Button
          className="w3-margin-left w3-margin-right"
          variant="contained"
          color="primary"
        >
          <Icon type="close" />
        </Button>
        or anywhere outside the blue menu box to close it.
      </p>
      <p>Swipe right to continue.</p>
    </div>
  </IfMobile>,
  <div className="lesson-chunk">
    <h4 className="theme-swe-blue">Navigating the menu</h4>
    <IfDesktop>
      <p>
        In the menu, you will see the course structure. All of the lessons are
        organized into courses, and each courses is divided into lessons that
        you can access at any time.
      </p>
    </IfDesktop>

    <p>
      You can see in the menu that the first course is called{" "}
      <i>Pronunciation</i>. If you're not interested in learning to speak
      Swedish but only read it, you may skip this course. However, you will see
      that pronouncing words correctly will help you internalizing your
      vocabulary, so I recommend that you at least skim through it.
    </p>
    <p>
      Clicking on the buttons labeled Course I-IV will reveal a dropdown menu
      where you can see the names of the lessons that belong to that course.
      Each course starts with an overview page, where you can see a brief
      description of what you will learn.
    </p>
    <p>
      You can take the lessons in any order. However, I recommend that you take
      them in the order they appear in as the grammar points and vocabulary will
      be based upon previous lessons.
    </p>
  </div>,
  <div className="lesson-chunk">
    <h4 className="theme-swe-blue">Lesson structure</h4>
    <p>The following sections are what you will typically see in a lesson:</p>

    <h5>Lesson goals</h5>
    <p>
      Each lesson starts with a short list of 2-3 goals that you achieve in that
      lesson. Most of these goals correspond to a grammar point and/or an
      exercise.
    </p>

    <h5>Text</h5>
    <p>
      You will be presented with a short text or conversation. You can listen to
      the texts by clicking on the sound icon
      <AudioButton className="w3-margin-left" fileName="lessons/hej.mp3" />.
    </p>
  </div>,
  <div className="lesson-chunk">
    <h5>Word list</h5>
    <p>
      After the text, you will see a list of new words for that lesson. This
      list will also have voice recordings so you can practice them individually
      if you want.
    </p>
    <p>
      If you take the course called Pronunciation, you will learn some basic
      rules about spelling and pronunciation. But since there are many
      exceptions, you will sometimes see a text within square brackets [] which
      indicates how the word should be spelled if it were according to the
      rules.
    </p>
    <p>
      Naturally the word list also contains the English translation, and which
      word class (noun, verb, adjective etc.) that the words belong to.
      <br />I recommend that you write these words down in a document or in a
      notebook. In later lessons, you will encounter some of the words again
      with different meanings and conjugations, so you don't have to remember
      them all at once.
    </p>
    <p>
      Words marked with "See GP" have a grammar point associated with them in a
      separate section after the word list.
      <br />
      These grammar points highlight what's important for this lesson, so make
      sure not to miss them.
    </p>

    <p>
      Some words are marked with a "more info" button
      <Button className="w3-margin-left w3-margin-right" variant="contained">
        <Icon type="info" />
        <Icon type="expand" />
      </Button>
      to signify that there is additional information that can be expanded for
      those hungry to learn more.
    </p>

    <p>
      It could be words that for instance are impossible to translate directly
      into English as they either don't exist, are phrased differently or have
      different cultural implications.
    </p>
  </div>,
  <div className="lesson-chunk">
    <h5>Grammar points</h5>
    <p>
      Yes, yes. I know, grammar is boring. But this is where the meat of the
      lessons are so we have to cover grammar in some form of other.
      <br />
      Each lesson will have a couple of grammar points, and some points will
      return in future lessons to expand on them.
    </p>
    <p>
      I try to make the grammar points short and easy to understand, but
      sometimes things can still be confusing. Sometimes the best way to
      practice the grammar is simply doing the exercises (see next section) over
      and over until it sticks. After all, practice makes perfect.
    </p>

    <h5>Culture notes</h5>
    <p>
      Finally, some lessons will have notes about Swedish culture in the last
      section. This information can be useful if you live in Sweden and want to
      blend in with the locals (which you totally should).
    </p>
  </div>,
  <div className="lesson-chunk">
    <h4 className="theme-swe-blue">Exercises</h4>
    <p>
      When you click on the exercise button in the bottom navigation bar, you
      will be taken to the exercises for that lesson.
      <br />
      Each exercise will come with its own set of instructions and criteria to
      pass, so I won't go into details here now. Please read the instructions
      carefully before you start.
    </p>
    <p>
      You can do the exercises in any order and there is no punishment for
      failing. However, the order of the questions or answer choices in an
      exercise can be random, so you have to pay attention and not just copy
      your answers or click the same buttons as last time.
    </p>
  </div>,
  <div className="lesson-chunk">
    <h5>You need to be logged in to save your progress</h5>
    <p>
      The site will save your progress for your current session. This means
      however, that if you clear your browser data or switch to another device
      such as another computer, phone or tablet, your progress will be lost!
    </p>
    <p>
      Please consider creating an account and make sure you are logged in when
      you use the site. This will enable us to save your progress in the cloud,
      no matter where you are in the world.
      <br />
      Being logged in will give you other perks as well. For instance, we will
      add achievements for completing lessons and some advanced lessons will
      encourage you to write your own texts that you can submit to us and a real
      person will grade them!
    </p>
  </div>,
  <div className="lesson-chunk">
    <h5>Useful apps</h5>
    <p>
      Some exercises are marked with the icon on the right.
      <img
        src="/images/saol.png"
        alt="SAOL"
        className="w3-right w3-margin-left"
        style={{ width: 75 }}
      />
      This is the logo for the Swedish Academy (Svenska Akademien). The Swedish
      Academy publishes a glossary regularly called SAOL (Svenska Akademiens
      ordlista), and they now have a free app with the same name that you can
      download (iOS/Android) for these exercises. I will tell you how to use the
      app in some of the lessons.
    </p>
    <p>
      The SAOL app is actually intended for native Swedes, and thus it is
      entirely in Swedish. However, because it has all the forms of words, such
      as conjugations and declensions, I find it very useful for learners as
      well. I suggest that you use it instead of relying on automatic
      translation tools such as Google Translate.
    </p>
    <p>
      The Swedish Academy also has another app called Svensk ordbok (SO) which
      is a digital form of their dictionary for native Swedes. What might be
      useful for you as a learner is that it has real voice recordings for
      nearly all entries.
    </p>
  </div>,

  <div className="lesson-chunk">
    <h4 className="theme-swe-blue">Bottom navigation</h4>
    <p>
      At the bottom of the lesson pages, you will see the following navigation
      bar:
    </p>
    <div className="centered">
      <img
        className="w3-image"
        src={"/images/bottom-navigation.png"}
        alt="Bottom navigation"
      />
    </div>
    <p>
      Here you can jump between the lesson contents, exercises as well as a
      feedback area. Lessons that don't have any exercises will have a grayed
      out exercise button that you can't click on.
    </p>
    <p>
      The feedback area shows a list of comments and questions that I have
      received for that lesson. If you wish to leave feedback, you have to be
      logged in to the site (this is to prevent spam).
    </p>
    <br />
    <p>
      That's pretty much all I have to say about using the site. I would love to
      hear your feedback or if you have any questions about the lessons or
      exercises. You can leave these in the lesson pages, or if you have
      comments about the site in general, head over to our forums.
    </p>
    <p>Lycka till (good luck) and enjoy!</p>
    <p className="w3-right-align">-Robban</p>

    <Button color="primary" className="w3-right" variant="contained">
      <Link href="/lesson/from-a-to-ö">
        <a>To the first lesson</a>
      </Link>
    </Button>
    <div className="w3-clear w3-margin" />
  </div>
];
