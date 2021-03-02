import fromAToÖChunks from '../../lessons/lesson-contents/pronunciation/FromAToÖ';
import fromAToÖExercises from '../../lessons/exercises/FromAToÖ';
import GAndKChunks from '../../lessons/lesson-contents/pronunciation/GandK';
import GAndKExercises from '../../lessons/exercises/GandK';
import AdditionalSoundsChunks from '../../lessons/lesson-contents/pronunciation/AdditionalSounds';
import LongAndShortVowelChunks from '../../lessons/lesson-contents/pronunciation/LongAndShortVowels';
import LongAndShortVowelExercises from '../../lessons/exercises/LongAndShortVowels';
import StressAndPitchAccentChunks from '../../lessons/lesson-contents/pronunciation/StressAndPitchAccent';

const pronunciationCourse =   {
  name: 'Course I: Pronunciation',
  urlName: 'course-1',
  lessons: [
    {
      number: 0,
      urlName: 'course-1',
      name: 'Course overview',
      description: 'See an overview of all lessons in this course.',
      chunks: [],
      exercises: [],
      hideBottomNavigation: true
    },
    {
      number: 1,
      name: 'From A to Ö',
      urlName: 'from-a-to-ö',
      description: `We start with the basics - it doesn't get much more basic than alphabet.`,
      chunks: fromAToÖChunks,
      exercises: fromAToÖExercises
    },
    {
      number: 2,
      name: 'G and K',
      urlName: 'g-and-k',
      description: 'Learn about the different ways the letters G and K can be pronounced..',
      chunks: GAndKChunks,
      exercises: GAndKExercises
    },
    {
      number: 3,
      name: 'Additional sounds',
      urlName: 'additional-sounds',
      description: 'Learn about additional letters and sounds that are in our language but not in our alphabet.',
      chunks: AdditionalSoundsChunks,
      exercises: []
    },
    {
      number: 4,
      name: 'Long and short vowels',
      urlName: 'long-and-short-vowels',
      description: 'Mixing these up can surely lead to embarrassing moments!',
      chunks: LongAndShortVowelChunks,
      exercises: LongAndShortVowelExercises
    },
    {
      number: 5,
      name: 'Stress and pitch accent',
      urlName: 'stress-and-pitch-accent',
      description: 'How to sound more natural by correctly stressing syllables and get a more rhythmic tone in your language.',
      chunks: StressAndPitchAccentChunks,
      exercises: []
    }
  ]
};

export default pronunciationCourse;