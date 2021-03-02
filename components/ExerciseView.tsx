import React, { useState } from "react";
import { Lesson } from "../models/types";
import { Button } from "@material-ui/core";
import Icon from "./Icon";
import IfDesktop from "../helpers/IfDesktop";
import IfMobile from "../helpers/IfMobile";
import { carouselProps } from "../helpers/props";
import Carousel from "react-multi-carousel";

interface LessonViewProps {
  lesson: Lesson;
}

const ExerciseView: React.FC<LessonViewProps> = (props) => {
  const { lesson } = props;
  const { exercises } = lesson;
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);

  const onSlideChange = (newExerciseIndex: number) => {
    setCurrentExerciseIndex(newExerciseIndex);
    window.scrollTo(0, 0);
  };

  return (
    <div className="lesson w3-margin-bottom">
      <h2 className="theme-swe-blue">{lesson.name} - Exercises</h2>

      <div className="w3-margin-bottom">
        <IfMobile>
          <Carousel
            {...carouselProps}
            afterChange={(_, obj) => onSlideChange(obj.currentSlide)}
          >
            {exercises.map((exercise, index) => (
              <React.Fragment key={index}>{exercise}</React.Fragment>
            ))}
          </Carousel>
        </IfMobile>

        <IfDesktop>{exercises[currentExerciseIndex]}</IfDesktop>
      </div>

      <div className="centered w3-margin-bottom">
        {currentExerciseIndex !== 0 && (
          <Button
            variant="contained"
            className="w3-margin-right"
            onClick={() => onSlideChange(currentExerciseIndex - 1)}
          >
            <Icon type="arrowLeft" />
          </Button>
        )}
        {currentExerciseIndex + 1}/{exercises.length}
        {currentExerciseIndex !== exercises.length - 1 && (
          <Button
            variant="contained"
            className="w3-margin-left"
            onClick={() => onSlideChange(currentExerciseIndex + 1)}
          >
            <Icon type="arrowRight" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default ExerciseView;
