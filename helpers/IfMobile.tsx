import React from "react";
import { Media } from "./media";

interface IfMobileProps {
  biggerThanPhone?: boolean;
}

const IfMobile: React.FC<IfMobileProps> = (props) => {
  const { biggerThanPhone, children } = props;

  return (
    <React.Fragment>
      <Media at="sm">{biggerThanPhone ? null : children}</Media>
      <Media at="md">{!biggerThanPhone ? children : null}</Media>
      <Media greaterThanOrEqual="lg"><React.Fragment /></Media>
    </React.Fragment>
  );
};

export default IfMobile;
