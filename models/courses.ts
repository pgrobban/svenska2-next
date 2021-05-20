const courses = [
  {
    name: 'Introduction to the site',
    urlName: 'intro',
    lessons: [{
      name: 'Before you start',
      urlName: 'before-you-start',
      description: 'A quick start guide on how to use the interactive textbook.',
    }]
  },
  {
    name: 'Course I: Pronunciation',
    urlName: 'course-1',
    lessons: [
      {
        number: 0,
        urlName: 'course-1',
        name: 'Course overview',
        description: 'See an overview of all lessons in this course.',
      },
      {
        number: 1,
        name: 'From A to Ö',
        urlName: 'from-a-to-ö',
        description: `We start with the basics - it doesn't get much more basic than alphabet.`
      },
      {
        number: 2,
        name: 'G and K',
        urlName: 'g-and-k',
        description: 'Learn about the different ways the letters G and K can be pronounced..',
      },
      {
        number: 3,
        name: 'Additional sounds',
        urlName: 'additional-sounds',
        description: 'Learn about additional letters and sounds that are in our language but not in our alphabet.',
      },
      {
        number: 4,
        name: 'Long and short vowels',
        urlName: 'long-and-short-vowels',
        description: 'Mixing these up can surely lead to embarrassing moments!',
      },
      {
        number: 5,
        name: 'Stress and pitch accent',
        urlName: 'stress-and-pitch-accent',
        description: 'How to sound more natural by correctly stressing syllables and get a more rhythmic tone in your language.'
      }
    ]
  },
  {
    name: 'Course II: The basics',
    urlName: 'course-2',
    lessons: [
      {
        urlName: 'course-2',
        name: 'Course overview',
        description: 'See an overview of all lessons in this course.'
      },
      {
        name: 'Meet the Svenssons',
        urlName: 'meet-the-svenssons',
        description: 'A short text to give you a feel for the Swedish language.'
      },
      {
        name: 'What are they doing?',
        urlName: 'what-are-they-doing',
        description: 'Learn how to answer simple questions and state what the Karlsson family is doing.'
      },
      {
        name: 'The Svenssons have a dog',
        urlName: 'the-svenssons-have-a-dog',
        description: 'Learn how to say that someone has something and describe it.'
      },
      {
        name: 'More than yes and no',
        urlName: 'more-than-yes-and-no',
        description: 'Learn how to ask questions and then answer them in a more natural way.'
      },
      {
        name: 'Can you count?',
        urlName: 'can-you-count',
        description: 'Learn how to count 0-20.'
      },
      {
        name: 'At the pizzeria',
        urlName: 'at-the-pizzeria',
        description: 'Use the skills you have learned so far to place an order at a pizzeria.'
      },
      {
        name: `It's always raining in midsummer`,
        urlName: 'its-always-raining-in-midsummer',
        description: 'Learn how to describe weather and temperature.',
      },
      {
        name: 'Me, Myself and I, Part 1',
        urlName: 'me-myself-and-i-part-1',
        description: 'Learn about verbs with pronouns in the objective case.',
      },
      {
        name: 'Me, Myself and I, Part 2',
        urlName: 'me-myself-and-i-part-2',
        description: 'Learn about reflexive pronouns and how adding them can change the meaning of the verb.',
      },
      {
        name: '7 days without a Swedish lesson makes one week',
        urlName: '7-days-without-a-swedish-lesson',
        description: 'Learn how to say the days of the week.'
      },
      {
        name: `It's fika time`,
        urlName: 'its-fika time',
        description: 'Learn how to tell the time and some odd quirks about it in Swedish.'
      },
      {
        name: 'Big numbers',
        urlName: 'big-numbers',
        description: 'We continue counting from 20 to the billions.'
      },
      {
        name: 'Facts about Sweden I',
        urlName: 'facts-about-sweden-1',
        description: 'Read about some basic facts about Sweden, in Swedish.'
      },
      {
        name: "Who's on first?",
        urlName: 'whos-on-first',
        description: 'Two ways of saying the ordinal numbers in Swedish.'
      },
      {
        name: `I've got a date`,
        urlName: 'ive-got-a-date',
        description: 'Some useful expressions to know when talking about dates (not the romantic kind), and some holidays in Sweden.',
      },
      {
        name: `Håkan's phone is broken`,
        urlName: 'hakans-phone-is-broken',
        description: `Learn how to say someone's something and some ways to construct definite forms.`,
      },
      {
        name: 'Five ants are more than four elephants',
        urlName: 'five-ants-are-more-than-four-elephants',
        description: `We'll look at some plural forms of nouns.`,
      },
      {
        name: 'Fundament and inverted word order',
        urlName: 'fundament',
        description: '',
      },
      {
        name: 'Review I',
        urlName: 'review-1',
        description: '',
      },
      {
        name: 'Pronunciation drills',
        urlName: '',
        description: '',
      }
    ]
  },
  {
    name: 'Course III: Intermediate grammar',
    urlName: 'course-3',
    lessons: [
      {
        urlName: 'course-3-overview',
        name: 'Course overview',
        description: 'See an overview of all lessons in this course.'
      },
      {
        name: 'Plural nouns (I)',
        urlName: '',
        description: '',
      },
      {
        name: 'Plural nouns (II)',
        urlName: '',
        description: ''
      },
      {
        name: 'Definite nouns and adjectives',
        urlName: '',
        description: ''
      },
      {
        name: 'Reflexive pronouns',
        urlName: '',
        description: ''
      }
    ]
  },
  {
    name: 'Course IV: Advanced grammar',
    urlName: 'course-4',
    lessons: []
  },
  {
    name: 'Course V: Reading material',
    urlName: 'course-5',
    lessons: []
  }
];

export default courses;