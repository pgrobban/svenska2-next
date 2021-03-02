import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Lesson } from "../models/types";
import { carouselProps } from "../helpers/props";
import IfDesktop from "../helpers/IfDesktop";
import IfMobile from "../helpers/IfMobile";

interface LessonViewProps {
  lesson: Lesson;
}

const LessonContentView: React.FC<LessonViewProps> = (props) => {
  const { lesson } = props;
  const { chunks: lessonChunks } = lesson;
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const slides = lessonChunks.map((chunk, index) => (
    <React.Fragment key={index}>{chunk}</React.Fragment>
  ));

  const onSlideChange = (newSlideIndex: number) => {
    setCurrentSlideIndex(newSlideIndex);
    window.scrollTo(0, 0);
  };

  return (
    <div className="lesson w3-margin-bottom">
      <IfMobile>
        <Carousel
          {...carouselProps}
          afterChange={(_, obj) => onSlideChange(obj.currentSlide)}
        >
          {slides}
        </Carousel>

        <div className="centered">
          {currentSlideIndex + 1}/{slides.length}
        </div>
      </IfMobile>

      <IfDesktop>{lessonChunks}</IfDesktop>
    </div>
  );
};

export default LessonContentView;
