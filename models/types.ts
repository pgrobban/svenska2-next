
import { ReactElement, ReactNode } from 'react';
import { CommonExerciseProps } from '../components/Exercise';

export interface Course {
  name: string;
  lessons: Lesson[];
}

export interface Lesson {
  name: string;
  urlName: string;
  description: string;
  chunks: ReactElement[];
  exercises: ReactElement<CommonExerciseProps>[];
}

export interface ExerciseProps {
  onMarkAsCompleted: () => void;
}

export enum WordClass {
  Noun = "N",
  Verb = "V",
  Adjective = "Adj",
  Adverb = "Adv",
  Pronoun = "Pro",
  Preposition = "Pre",
  Interjection = "I",
  Conjunction = "C",
  Numeral = "Nu",
  Phrase = "Phr"
}

export interface Word {
  swedish: string;
  dictionaryForm?: string;
  audioFileName: string;
  payAttentionToPronunciation?: string;
  english: string;
  wordClass: WordClass;
  moreInfoComponent?: ReactNode;
  subWords?: Word[];
}

export type CorrectIncorrectMark = "correct" | "incorrect";
 
export interface ShowBasedOnScreenProps {
  inline?: boolean;
  children: ReactNode;
}

export type Bite = Omit<Lesson, 'description'>;
