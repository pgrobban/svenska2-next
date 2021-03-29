import { Course } from "../models/types";
import LessonLink from "./LessonLink";

interface CourseOverviewProps {
  course: Course;
}

const CourseOverview: React.FC<CourseOverviewProps> = (props) => {
  const { course } = props;
  const { name, lessons } = course;

  return (
    <div className="lesson">
      <h3>{name}</h3>
      <h4>Course contents</h4>

      {lessons.map((lesson) => {
        if (lesson.name === "Course overview") {
          return null;
        }

        return (
          <p key={lesson.urlName}>
            <LessonLink lesson={lesson} />
            <br />
            {lesson.description}
          </p>
        );
      })}
    </div>
  );
};

export default CourseOverview;
