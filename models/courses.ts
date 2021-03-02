import React from 'react';
import { chunks as beforeYouStartChunks } from './lessons/BeforeYouStart';
import intermediateGrammarCourse from './courses/intermediateGrammarCourse';
import pronunciationCourse from './courses/pronunciationCourse';
import readingMaterialCourse from './courses/readingMaterialCourse';
import theBasicsCourse from './courses/theBasicsCourse';

const courses = [
  {
    name: 'Introduction to the site',
    urlName: 'intro',
    lessons: [{
      name: 'Before you start',
      urlName: 'before-you-start',
      description: 'A quick start guide on how to use the interactive textbook.',
      chunks: beforeYouStartChunks,
      exercises: [],
      hideBottomNavigation: true
    }]
  },
//  pronunciationCourse,
//  theBasicsCourse,
//  intermediateGrammarCourse,
//  readingMaterialCourse
];

export default courses;