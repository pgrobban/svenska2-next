import { getLessonByUrlName } from "../../helpers/utils";
import { IfDesktop } from "../../helpers/showBasedOnScreen";
import { useRouter } from "next/router";
import Layout from "../../components/layout/Layout";
import React, { useEffect, useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import Icon from "../../components/Icon";
import LessonContentView from "../../components/LessonContentView";
import ExerciseView from "../../components/ExerciseView";
import { isEmpty } from "lodash";
import courses from "../../models/courses";

const SECTIONS = {
  LESSON: 0,
  EXERCISES: 1,
  FEEDBACK_AND_QUESTIONS: 2
};

const getInitialViewingSection = (locationHash) => {
  switch (locationHash) {
    case '#lesson':
      return SECTIONS.LESSON;
    case '#exercises':
      return SECTIONS.EXERCISES;
    case '#feedback':
      return SECTIONS.FEEDBACK_AND_QUESTIONS;
    default:
      return SECTIONS.LESSON;
  }
}

const LessonView: React.FC = () => {
  const router = useRouter();
  const { lessonUrlName } = router.query;
  const [viewingSection, setViewingSection] = useState(SECTIONS.LESSON);
  useEffect(() => setViewingSection(getInitialViewingSection(location.hash)), []);

  if (typeof lessonUrlName !== "string") {
    return null;
  }

  const lesson = getLessonByUrlName(courses, lessonUrlName);
  if (!lesson) {
    return (
      <Layout location="lessons" title="Oh no!">
        <span>This lesson does not exist yet.</span>
      </Layout>
    );
  }

  return (
    <Layout
      location="lessons"
      activeLessonUrlName={lessonUrlName}
      title={lesson.name}
    >
      {viewingSection === SECTIONS.LESSON && (
        <LessonContentView lessonChunks={lesson.chunks} />
      )}
      {viewingSection === SECTIONS.EXERCISES && (
        <ExerciseView lessonName={lesson.name} exercises={lesson.exercises} />
      )}

      {!lesson.hideBottomNavigation && (
        <BottomNavigation
          value={viewingSection}
          showLabels
          onChange={(_, newSection) => {
            window.scrollTo(0, 0);
            setViewingSection(newSection);
          }}
        >
          <BottomNavigationAction
            label={<a href="#lesson">Lesson</a>}
            icon={<Icon type="help" />}
          />
          <BottomNavigationAction
            label={<a href="#exercises">Exercises</a>}
            icon={<Icon type="exercise" />}
            disabled={isEmpty(lesson.exercises)}
          />
          <BottomNavigationAction
            label={<a href="#feedback">Feedback</a>}
            icon={<Icon type="chat" />}
          />
        </BottomNavigation>
      )}

      <IfDesktop>
        <div className="centered w3-margin-top">
          <a href="#top">Back to top</a>
        </div>
      </IfDesktop>
    </Layout>
  );
};

export default LessonView;
