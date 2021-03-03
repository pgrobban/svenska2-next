import { isArray } from "lodash";
import React from "react";
import { Media } from "./media";

const IfDesktop: React.FC = (props) => {
  const { children } = props;

  return (
    <>
      <Media lessThan="lg">
        <React.Fragment />
      </Media>
      <Media greaterThanOrEqual="lg">
        {isArray(children)
          ? children.map((child, index) => <div key={index}>{child}</div>)
          : children}
      </Media>
    </>
  );
};

export default IfDesktop;
