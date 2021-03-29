import useMediaQuery from '@material-ui/core/useMediaQuery';
import { getRenderableItems } from './utils';

// @ts-ignore
const IfDesktop: React.FC = ({ children }) => {
  const matches = useMediaQuery('(min-width:1200px)');
  const renderableItems = getRenderableItems(children);
  return matches ? <>{renderableItems.map((child) => <>{child}</>)}</> : null;
};

export default IfDesktop;
