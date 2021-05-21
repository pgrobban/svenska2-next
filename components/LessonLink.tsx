import Link from 'next/link';
import { LESSONS_PATH } from '../helpers/utils';
import { Lesson } from '../models/types';

interface Props {
  lesson: Lesson;
}

const LessonLink: React.FC<Props> = (props: Props) => {
  const { lesson } = props;
  return (
    <Link href={`${LESSONS_PATH}/${lesson.urlName}`}>
      <a title={lesson.description}>{lesson.name}</a>
    </Link>
  )
}

export default LessonLink;
