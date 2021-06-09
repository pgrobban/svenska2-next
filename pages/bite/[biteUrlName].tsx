import { getBiteByUrlName } from "../../helpers/utils";
import { IfDesktop } from "../../helpers/showBasedOnScreen";
import { useRouter } from "next/router";
import Layout from "../../components/layout/Layout";
import React, { useEffect, useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import Icon from "../../components/Icon";
import LessonContentView from "../../components/LessonContentView";
import ExerciseView from "../../components/ExerciseView";
import { isEmpty } from "lodash";
import bites from "../../models/bites";

const SECTIONS = {
  LESSON: 0,
  EXERCISES: 1,
  FEEDBACK_AND_QUESTIONS: 2
};

const getInitialViewingSection = (locationHash) => {
  switch (locationHash) {
    case "#lesson":
      return SECTIONS.LESSON;
    case "#exercises":
      return SECTIONS.EXERCISES;
    case "#feedback":
      return SECTIONS.FEEDBACK_AND_QUESTIONS;
    default:
      return SECTIONS.LESSON;
  }
};

const LessonView: React.FC = () => {
  const router = useRouter();
  const { biteUrlName } = router.query;
  const [viewingSection, setViewingSection] = useState(SECTIONS.LESSON);
  useEffect(
    () => setViewingSection(getInitialViewingSection(location.hash)),
    []
  );
  const showBottomNavigation = biteUrlName !== 'before-you-start';

  if (typeof biteUrlName !== "string") {
    return null;
  }

  const bite = getBiteByUrlName(bites, biteUrlName);
  if (!bite) {
    return (
      <Layout location="bites" title="Oh no!">
        <span>
          This bite link is invalid. If you followed a link to get here,
          please file a bug report in the forums.
        </span>
      </Layout>
    );
  }

  if (isEmpty(bite.chunks)) {
    return (
      <Layout location="bites" title="Oh no!">
        <span>
          This bite hasn't been written yet :(
        </span>
      </Layout>
    );
  }

  return (
    <Layout
      location="bites"
      activeLessonUrlName={biteUrlName}
      title={bite.name}
    >
      {viewingSection === SECTIONS.LESSON && (
        <LessonContentView lessonChunks={bite.chunks} />
      )}
      {viewingSection === SECTIONS.EXERCISES && (
        <ExerciseView lessonName={bite.name} exercises={bite.exercises} />
      )}

      {showBottomNavigation && (
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
            disabled={isEmpty(bite.exercises)}
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
