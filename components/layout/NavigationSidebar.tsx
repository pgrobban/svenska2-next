import Link from "next/link";
import CourseList from "../CourseList";
import { IfDesktop, IfMobile } from "../../helpers/showBasedOnScreen";
import React from "react";

interface Props {
  location: string;
  activeLessonUrlName?: string;
}

const NavigationSidebar = (props: Props) => {
  const { location, activeLessonUrlName } = props;

  const isLessonOpen = ['lessons', 'courses', 'exercises'].includes(location);
  return (
    <>
      <IfMobile>
        <div className="theme-swe-nav">
          <h4 className="w3-bar-item">
            <b>Menu</b>
          </h4>

          <ul className="w3-ul theme-swe-hover">
            <li>
              <Link href="/lessons"><a>Textbook</a></Link>
              {isLessonOpen && (
                <CourseList activeLessonUrlName={activeLessonUrlName} />
              )}
            </li>
            <li>
              <Link href="/language-bites">
                <a>Language bites</a>
              </Link>
            </li>
            <li>
              <Link href="/forums">
                <a>Forums</a>
              </Link>
            </li>
            <li>
              <Link href="/forums">
                <a>News</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About &amp; Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </IfMobile>

      <IfDesktop>
        {!isLessonOpen && <div>What to add here?</div>}
        {isLessonOpen && (
          <CourseList activeLessonUrlName={activeLessonUrlName} />
        )}
      </IfDesktop>
    </>
  );
};

export default NavigationSidebar;
