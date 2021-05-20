
import { ReactNode } from 'react';

export interface Course {
  name: string;
  lessons: Lesson[];
}

export interface Lesson {
  name: string;
  urlName: string;
  description: string;
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
