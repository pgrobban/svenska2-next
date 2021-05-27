import { ReactElement, useState } from "react";
import { Button } from "@material-ui/core";
import Icon from "./Icon";
import { carouselProps } from "../helpers/props";
import Carousel from "react-multi-carousel";
import React from "react";
import { IfDesktop, IfMobile } from "../helpers/showBasedOnScreen";
import { CommonExerciseProps } from "./Exercise";

interface ExerciseViewProps {
  lessonName: string;
  exercises: ReactElement<CommonExerciseProps>[];
}

const ExerciseView: React.FC<ExerciseViewProps> = (props) => {
  const { lessonName, exercises } = props;
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);

  const onSlideChange = (newExerciseIndex: number) => {
    setCurrentExerciseIndex(newExerciseIndex);
    window.scrollTo(0, 0);
  };

  return (
    <div className="main-centered w3-margin-bottom">
      <h2 className="theme-swe-blue">{lessonName} - Exercises</h2>

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
