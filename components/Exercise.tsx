import React, { useState } from "react";
import { ExerciseProps } from "../models/types";
import { DateTime } from 'luxon';
import Image from 'next/image';

export interface CommonExerciseProps {
  id: string;
  numberInLesson: number;
  title: string;
  ExerciseComponent: React.FC<ExerciseProps>;
  exerciseComponentProps?: any;
  saolRequired?: boolean;
}

const Exercise: React.FC<CommonExerciseProps> = (
  props: CommonExerciseProps
) => {
  const [
    exerciseCompletionDate,
    setExerciseCompletionDate,
  ] = useState<DateTime | null>(null);
  const {
    numberInLesson,
    title,
    ExerciseComponent,
    exerciseComponentProps,
    saolRequired
  } = props;

  return (
    <div className="w3-padding-small" style={exerciseCompletionDate ? { border: "1px solid green" } : {}}>
      {saolRequired && <Image src="/images/saol.png" alt="SAOL" width={75} className="w3-right" />}
      <h3>
        Exercise {numberInLesson}:
        <br />
        {title}
      </h3>
      {exerciseCompletionDate && <small>Completed on {exerciseCompletionDate.setLocale('en-US').toFormat('DD')}</small>}

      <ExerciseComponent
        onMarkAsCompleted={!exerciseCompletionDate ? () => setExerciseCompletionDate(DateTime.local()) : () => {}}
        {...exerciseComponentProps}
      />
    </div>
  );
};

export default Exercise;
