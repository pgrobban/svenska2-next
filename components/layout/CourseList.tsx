import { Button } from "@material-ui/core";
import classnames from "classnames";
import React, { useState } from "react";
import Link from "next/link";
import courses from "../../models/courses";
import { getCourseNameByLessonUrlName } from "../../helpers/utils";
import Icon from "../Icon";
import LessonList from "./LessonList";

export const LESSONS_PATH = "/lessons";
export const COURSES_PATH = "/courses";

const BEFORE_YOU_START_URL_NAME = "before-you-start";

const coursesInCourseList = courses.filter(
  (course) => course.name !== "Introduction to the site"
);

interface CourseListProps {
  activeLessonUrlName: string;
}

const CourseList: React.FC<CourseListProps> = (props) => {
  const { activeLessonUrlName } = props;
  const activeCourseName = getCourseNameByLessonUrlName(activeLessonUrlName)
    ?.name;
  const [expandedCourse, setExpandedCourse] = useState<
    string | null | undefined
  >(activeCourseName);

  return (
    <div className="course-list">
      <div className="w3-bar-item theme-swe-hover before-you-start">
        <Link href={`${LESSONS_PATH}/${BEFORE_YOU_START_URL_NAME}`}>
          <a
            className={classnames([
              "w3-padding-small",
              "w3-animate-left",
              {
                "theme-swe-active":
                  activeLessonUrlName === BEFORE_YOU_START_URL_NAME,
              },
            ])}
          />
        </Link>
      </div>

      <h3 className="w3-margin-left" style={{ marginBottom: 0 }}>
        Courses
      </h3>
      <ul className="w3-bar-item w3-ul w3-animate-left theme-swe-hover ">
        {coursesInCourseList.map((course, index) => (
          <li key={index}>
            <Button
              className={"w3-padding-small theme-swe"}
              style={{
                display: "flex",
                justifyContent: "space-between",
                cursor: "pointer",
                alignItems: "center",
              }}
              onClick={() =>
                setExpandedCourse(
                  expandedCourse === course.name ? null : course.name
                )
              }
              fullWidth
            >
              <span style={{ textAlign: "left" }}>{course.name}</span>
              <Icon
                type={expandedCourse === course.name ? "collapse" : "expand"}
              />
            </Button>
            {expandedCourse === course.name && (
              <LessonList
                lessons={course.lessons}
                activeLessonUrlName={activeLessonUrlName}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
