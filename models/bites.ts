import { Bite } from "./types";
import AboutLanguageBitesChunks from './lessons/AboutBites';
import UnderstandingJuChunks from './lessons/bites/UnderstandingJu';
import UnderstandingNämligenChunks from './lessons/bites/UnderstandingNämligen';
import UnderstandingManChunks from './lessons/bites/UnderstandingMan';
import UnderstandingVälChunks from './lessons/bites/UnderstandingVäl';
import WhyMenarIsSometimesWrongChunks from './lessons/bites/TheTrueMeaningOfMena';
import { sortBy } from "lodash";

const bites: Bite[] = [
  {
    name: 'About Language Bites',
    urlName: 'about-bites',
    chunks: AboutLanguageBitesChunks,
    exercises: []
  },
  {
    name: 'The true meaning of "mena"',
    urlName: 'menar',
    chunks: WhyMenarIsSometimesWrongChunks,
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
    chunks: UnderstandingVälChunks,
    exercises: []
  },
  {
    name: 'Understanding "nämligen"',
    urlName: 'understanding-nämligen',
    chunks: UnderstandingNämligenChunks,
    exercises: []
  },
  {
    name: 'Understanding "man"',
    urlName: 'understanding-man',
    chunks: UnderstandingManChunks,
    exercises: []
  },
  /*{
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
    name: '"Från" or "ifrån"?',
    urlName: 'från-or-ifrån',
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
  }*/
];

export default sortBy(bites, 'name');