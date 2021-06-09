import Link from 'next/link';
import { BITES_PATH } from '../helpers/utils';
import { Bite } from '../models/types';

interface Props {
  bite: Bite;
}

const BiteLink: React.FC<Props> = (props: Props) => {
  const { bite } = props;
  return (
    <Link href={`${BITES_PATH}/${bite.urlName}`}>
      <a title={bite.name}>{bite.name}</a>
    </Link>
  )
}

export default BiteLink;
