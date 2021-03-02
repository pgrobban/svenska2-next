import React, { useState } from "react";
import { getLessonByUrlName } from "../../helpers/utils";
import LessonContentView from "../../components/LessonContentView";
import ExerciseView from "../../components/ExerciseView";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import Icon from "../../components/Icon";
import IfDesktop from "../../helpers/IfDesktop";
import { isEmpty } from "lodash";
import { Lesson } from "../../models/types";
import Layout from "../../components/Layout";

const SECTIONS = {
  LESSONS: 0,
  EXERCISES: 1,
  FEEDBACK_AND_QUESTIONS: 2,
};

interface Props {
  lesson: Lesson;
}

const Lessons: React.FC<Props> = (props: Props) => {
  const { lesson } = props;
  const [viewingSection, setViewingSection] = useState(SECTIONS.LESSONS);

  if (isEmpty(lesson.chunks)) {
    return (
      <Layout>
        <p>This lesson hasn't been created yet.</p>
      </Layout>
    );
  }

  return (
    <Layout>
      {viewingSection === SECTIONS.LESSONS && (
        <LessonContentView lesson={lesson} />
      )}
      {viewingSection === SECTIONS.EXERCISES && (
        <ExerciseView lesson={lesson} />
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
          <BottomNavigationAction label="Lesson" icon={<Icon type="help" />} />
          <BottomNavigationAction
            label="Exercises"
            icon={<Icon type="exercise" />}
            disabled={isEmpty(lesson.exercises)}
          />
          <BottomNavigationAction
            label="Feedback"
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

//@ts-ignore
Lessons.getInitialProps = (context) => {
  const { lessonUrlName } = context.query;
  const lesson = getLessonByUrlName(lessonUrlName);
  if (!lesson) {
    //  res.writeHead(301, { location: '/404' });
    //  res.end();
    return {};
  }

  return { lesson };
};

export default Lessons;
