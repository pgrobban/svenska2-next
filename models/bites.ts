import { Bite } from "./types";
import AboutLanguageBitesChunks from './lessons/AboutBites';
import UnderstandingJuChunks from './lessons/bites/UnderstandingJu';

const bites: Bite[] = [
  {
    name: 'About Language Bites',
    urlName: 'about-bites',
    chunks: AboutLanguageBitesChunks,
    exercises: []
  },
  {
    name: 'Understanding "ju"',
    urlName: 'understanding-ju',
    chunks: UnderstandingJuChunks,
    exercises: []
  },
  {
    name: 'Understanding "väl"',
    urlName: 'understanding-väl',
    chunks: [],
    exercises: []
  },
  {
    name: 'Understanding "nämligen"',
    urlName: 'understanding-nämligen',
    chunks: [],
    exercises: []
  },
  {
    name: 'Understanding "man"',
    urlName: 'understanding-man',
    chunks: [],
    exercises: []
  },
  {
    name: '"Prata" or "tala"?',
    urlName: 'prata-or-tala',
    chunks: [],
    exercises: []
  },
  {
    name: '"Gilla" or "tycka om"?',
    urlName: 'gilla-or-tycka-om',
    chunks: [],
    exercises: []
  },
  {
    name: 'Expressing future tense',
    urlName: 'expressing-future-tense',
    chunks: [],
    exercises: []
  },
  {
    name: 'Expressing an action in progress',
    urlName: 'expressing-action-in-progress',
    chunks: [],
    exercises: []
  }
];

export default bites;