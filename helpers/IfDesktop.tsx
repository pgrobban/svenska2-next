import React from "react";
import { Media } from "./media";

const IfDesktop: React.FC = (props) => {
  const { children } = props;
  return (
    <>
      <Media at="sm">
        <React.Fragment />
      </Media>
      <Media at="md">
        <React.Fragment />
      </Media>
      <Media greaterThanOrEqual="lg">{children}</Media>
    </>
  );
};

export default IfDesktop;
