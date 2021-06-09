import classnames from "classnames";
import React from "react";
import bites from "../models/bites";
import BiteLink from "./BiteLink";

interface CourseListProps {
  activeBiteUrlName: string;
}

const CourseList: React.FC<CourseListProps> = (props) => {
  const { activeBiteUrlName } = props;

  const bitesInBiteList = bites.filter(
    (bite) => bite.name !== "About Language Bites"
  );

  return (
    <div className="bite-list">
      <ul className="w3-ul w3-animate-left">
        {bitesInBiteList.map((bite, index) => (
          <li
            key={index}
            className={classnames([
              "theme-swe-hover",
              { "theme-swe-active": activeBiteUrlName === bite.urlName }
            ])}
          >
            <BiteLink bite={bite} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
