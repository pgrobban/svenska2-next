import React from "react";
import classnames from "classnames";
import { Lesson } from "../../models/types";
import LessonLink from "../LessonLink";
import { COURSES_PATH } from "./CourseList";

interface Props {
  lessons: Lesson[];
  activeLessonUrlName: string;
}

const LessonList: React.FC<Props> = (props: Props) => {
  const { lessons, activeLessonUrlName } = props;
  const overviewLesson = lessons.find(
    (lesson) => lesson.name === "Course overview"
  );
  const nonOverviewLessons = lessons.filter(
    (lesson) => lesson.name !== "Course overview"
  );

  return (
    <>
      <ul className="w3-ul w3-animate-left">
        {overviewLesson && (
          <li
            className={classnames([
              "theme-swe-hover",
              {
                "theme-swe-active": activeLessonUrlName === overviewLesson.urlName,
              },
            ])}
          >
            <Link
              to={`${COURSES_PATH}/${overviewLesson.urlName}`}
              title={overviewLesson.description}
            >
              Course overview
            </Link>
          </li>
        )}
      </ul>

      <ol className="w3-ol w3-animate-left">
        {nonOverviewLessons.map((lesson: Lesson, index) => (
          <li
            key={index}
            className={classnames([
              "theme-swe-hover",
              { "theme-swe-active": activeLessonUrlName === lesson.urlName },
            ])}
          >
            <LessonLink lesson={lesson} />
          </li>
        ))}
      </ol>
    </>
  );
};

export default LessonList;
