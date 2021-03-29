import React from "react";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { getRenderableItems } from "./utils";

interface IfMobileProps {
  biggerThanPhone?: boolean;
}

// @ts-ignore
const IfMobile: React.FC<IfMobileProps> = (props) => {
  const { children } = props;
  const matches = useMediaQuery('(max-width:1199px)');
  const renderableItems = getRenderableItems(children);
  return matches ? <>{renderableItems.map((child) => <>{child}</>)}</> : null;
};

export default IfMobile;
