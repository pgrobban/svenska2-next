import React from "react";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { getRenderableItems } from "./utils";

interface IfMobileProps {
  biggerThanPhone?: boolean;
}

const IfMobile: React.FC<IfMobileProps> = ({ children, biggerThanPhone }) => {
  return null;
};

export default IfMobile;
