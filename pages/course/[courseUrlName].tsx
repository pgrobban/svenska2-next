import { getCourseByUrlName } from "../../helpers/utils";
import { IfDesktop } from "../../helpers/showBasedOnScreen";
import { useRouter } from 'next/router'
import CourseOverview from "../../components/CourseOverview";
import Layout from "../../components/Layout";

interface Props {
  courseUrlName?: string;
}

const Lessons: React.FC<Props> = () => {

  const router = useRouter();
  const { courseUrlName } = router.query;
  
  if (typeof courseUrlName !== 'string') {
    return null;
  }

  const course = getCourseByUrlName(courseUrlName);
  if (!course) {
    return null;
  }

  return (
    <Layout location="courses">
      <CourseOverview course={course} />

      <IfDesktop>
        <div className="centered w3-margin-top">
          <a href="#top">Back to top</a>
        </div>
      </IfDesktop>
    </Layout>
  );
};

export default Lessons;
