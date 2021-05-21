import meetTheSvenssonsLessonChunks from '../lessons/lesson-contents/the-basics/MeetTheSvenssons';
import meetTheSvenssonsExercises from '../lessons/exercises/MeetTheSvenssons';
import whatAreTheyDoingLessonChunks from '../lessons/lesson-contents/the-basics/WhatAreTheyDoing';
import whatAreTheyDoingExercises from '../lessons/exercises/WhatAreTheyDoing';
import theSvenssonsHaveADogLessonChunks from '../lessons/lesson-contents/the-basics/TheSvenssonsHaveADog';
import theSvenssonsHaveADogExercises from '../lessons/exercises/TheSvenssonsHaveADog';
import moreThanYesAndNoLessonChunks from '../lessons/lesson-contents/the-basics/MoreThanYesAndNo';
import canYouCountLessonChunks from '../lessons/lesson-contents/the-basics/CanYouCount';
import atThePizzeriaLessonChunks from '../lessons/lesson-contents/the-basics/AtThePizzeria';
import itsAlwaysRainingInMidsummerLessonChunks from '../lessons/lesson-contents/the-basics/ItsAlwaysRainingInMidsummer';
import meMyselfAndIPart1LessonChunks from '../lessons/lesson-contents/the-basics/MeMyselfAndIPart1';
import meMyselfAndIPart2LessonChunks from '../lessons/lesson-contents/the-basics/MeMyselfAndIPart2';
import sevenDaysWithoutASwedishLessonMakesOneWeekLessonChunks from '../lessons/lesson-contents/the-basics/SevenDaysWithoutASwedishLessonMakesOneWeek';
import itsFikaTimeLessonChunks from '../lessons/lesson-contents/the-basics/ItsFikaTime';
import bigNumbersLessonChunks from '../lessons/lesson-contents/the-basics/BigNumbers';
import factsAboutSwedenLessonChunks from '../lessons/lesson-contents/the-basics/FactsAboutSweden';
import whosOnFirstLessonChunks from '../lessons/lesson-contents/the-basics/WhosOnFirst';
import iveGotADateLessonChunks from '../lessons/lesson-contents/the-basics/IveGotADate';
import hakansPhoneIsBrokenLessonChunks from '../lessons/lesson-contents/the-basics/HakansPhoneIsBroken';
import fiveAntsAreMoreThanFourElephantsLessonChunks from '../lessons/lesson-contents/the-basics/FiveAntsAreMoreThanFourElephants';

const theBasicsCourse = {
  name: 'Course II: The basics',
  urlName: 'course-2',
  lessons: [
    {
      number: 0,
      urlName: 'course-2',
      name: 'Course overview',
      description: 'See an overview of all lessons in this course.',
      chunks: [],
      exercises: [],
      hideBottomNavigation: true
    },
    {
      name: 'Meet the Svenssons',
      urlName: 'meet-the-svenssons',
      description: 'A short text to give you a feel for the Swedish language.',
      chunks: meetTheSvenssonsLessonChunks,
      exercises: meetTheSvenssonsExercises
    },
    {
      name: 'What are they doing?',
      urlName: 'what-are-they-doing',
      description: 'Learn how to answer simple questions and state what the Karlsson family is doing.',
      chunks: whatAreTheyDoingLessonChunks,
      exercises: whatAreTheyDoingExercises
    },
    {
      name: 'The Svenssons have a dog',
      urlName: 'the-svenssons-have-a-dog',
      description: 'Learn how to say that someone has something and describe it.',
      chunks: theSvenssonsHaveADogLessonChunks,
      exercises: theSvenssonsHaveADogExercises
    },
    {
      name: 'More than yes and no',
      urlName: 'more-than-yes-and-no',
      description: 'Learn how to ask questions and then answer them in a more natural way.',
      chunks: moreThanYesAndNoLessonChunks,
      exercises: []
    },
    {
      name: 'Can you count?',
      urlName: 'can-you-count',
      description: 'Learn how to count 0-20.',
      chunks: canYouCountLessonChunks,
      exercises: []
    },
    {
      name: 'At the pizzeria',
      urlName: 'at-the-pizzeria',
      description: 'Use the skills you have learned so far to place an order at a pizzeria.',
      chunks: atThePizzeriaLessonChunks,
      exercises: []
    },
    {
      name: `It's always raining in midsummer`,
      urlName: 'its-always-raining-in-midsummer',
      description: 'Learn how to describe weather and temperature.',
      chunks: itsAlwaysRainingInMidsummerLessonChunks,
      exercises: []
    },
    {
      name: 'Me, Myself and I, Part 1',
      urlName: 'me-myself-and-i-part-1',
      description: 'Learn about verbs with pronouns in the objective case.',
      chunks: meMyselfAndIPart1LessonChunks,
      exercises: []
    },
    {
      name: 'Me, Myself and I, Part 2',
      urlName: 'me-myself-and-i-part-2',
      description: 'Learn about reflexive pronouns and how adding them can change the meaning of the verb.',
      chunks: meMyselfAndIPart2LessonChunks,
      exercises: []
    },
    {
      name: '7 days without a Swedish lesson makes one week',
      urlName: '7-days-without-a-swedish-lesson',
      description: 'Learn how to say the days of the week.',
      chunks: sevenDaysWithoutASwedishLessonMakesOneWeekLessonChunks,
      exercises: []
    },
    {
      name: `It's fika time`,
      urlName: 'its-fika time',
      description: 'Learn how to tell the time and some odd quirks about it in Swedish.',
      chunks: itsFikaTimeLessonChunks,
      exercises: []
    },
    {
      name: 'Big numbers',
      urlName: 'big-numbers',
      description: 'We continue counting from 20 to the billions.',
      chunks: bigNumbersLessonChunks,
      exercises: []
    },
    {
      name: 'Facts about Sweden I',
      urlName: 'facts-about-sweden-1',
      description: 'Read about some basic facts about Sweden, in Swedish.',
      chunks: factsAboutSwedenLessonChunks,
      exercises: []
    },
    {
      name: "Who's on first?",
      urlName: 'whos-on-first',
      description: 'Two ways of saying the ordinal numbers in Swedish.',
      chunks: whosOnFirstLessonChunks,
      exercises: []
    },
    {
      name: `I've got a date`,
      urlName: 'ive-got-a-date',
      description: 'Some useful expressions to know when talking about dates (not the romantic kind), and some holidays in Sweden.',
      chunks: iveGotADateLessonChunks,
      exercises: []
    },
    {
      name: `Håkan's phone is broken`,
      urlName: 'hakans-phone-is-broken',
      description: `Learn how to say someone's something and some ways to construct definite forms.`,
      chunks: hakansPhoneIsBrokenLessonChunks,
      exercises: []
    },
    {
      name: 'Five ants are more than four elephants',
      urlName: 'five-ants-are-more-than-four-elephants',
      description: `We'll look at some plural forms of nouns.`,
      chunks: fiveAntsAreMoreThanFourElephantsLessonChunks,
      exercises: []
    },
    {
      name: 'Fundament and inverted word order',
      urlName: 'fundament',
      description: '',
      chunks: [],
      exercises: []
    },
    {
      name: 'Review I',
      urlName: 'review-1',
      description: '',
      chunks: [],
      exercises: []
    },
    {
      name: 'Pronunciation drills',
      urlName: '',
      description: '',
      chunks: [],
      exercises: []
    }
  ]
};

export default theBasicsCourse;