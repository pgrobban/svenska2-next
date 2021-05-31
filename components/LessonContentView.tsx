import React, { ReactElement, useRef, useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IfDesktop, IfMobile } from "../helpers/showBasedOnScreen";
import { carouselProps } from "../helpers/props";

interface LessonViewProps {
  lessonChunks: ReactElement[];
}

const LessonContentView: React.FC<LessonViewProps> = (props) => {
  const { lessonChunks } = props;

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const carousel = useRef(null);

  const slides = lessonChunks.map((chunk, index) => (
    <React.Fragment key={index}>{chunk}</React.Fragment>
  ));

  const onSlideChange = (newSlideIndex: number) => {
    setCurrentSlideIndex(newSlideIndex);
    window.scrollTo(0, 0);
  };
  
  useEffect(() => {
    onSlideChange(0);
    carousel?.current.goToSlide(0);
  }, [lessonChunks]);

  return (
    <div className="main-centered w3-margin-bottom">
      <IfMobile>
        <Carousel
          {...carouselProps}
          ref={carousel}
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
