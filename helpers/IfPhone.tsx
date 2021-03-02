import React from "react";
import { Media } from "./media";

const IfPhone: React.FC = (props) => {
  const { children } = props;

  return (
    <>
      <Media at="sm">{children}</Media>
      <Media greaterThanOrEqual="md"><React.Fragment /></Media>
    </>
  );
};

export default IfPhone;
