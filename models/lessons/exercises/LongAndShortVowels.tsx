import React from "react";
import Exercise from "../../../components/Exercise";
import ReadTongueTwisters from "../../../components/exercises/ReadTongueTwisters";
import { ExerciseProps } from "../../types";

const exercises = [
  <Exercise
    key={1}
    id={"tongue-twister-sh"}
    numberInLesson={1}
    title={"Tongue twister - SH sound"}
    ExerciseComponent={ReadTongueTwisters}
    exerciseComponentProps={{
      tongueTwisters: [
        {
          header: "P and K sound",
          recordingFileNameSlow: "tongue-twister/pk.mp3",
          recordingFileNameFast: "tongue-twister/pk-fast.mp3",
          label: "Packa pappas kappsäck"
        },
        {
          header: "K and S sound",
          recordingFileNameSlow: "tongue-twister/ks.mp3",
          recordingFileNameFast: "tongue-twister/ks-fast.mp3",
          label: "Kvistfritt kvastskaft"
        },
        {
          header: "X and SK sound",
          recordingFileNameSlow: "tongue-twister/x.mp3",
          recordingFileNameFast: "tongue-twister/x-fast.mp3",
          label: "Sex laxar i en laxask ska paxas."
        },
        {
          header: "SH sound",
          recordingFileNameSlow: "tongue-twister/sh.mp3",
          recordingFileNameFast: "tongue-twister/sh-fast.mp3",
          label: "Köp tjugo kilo kyckling till Cher."
        },
        {
          header: "SJE sound",
          recordingFileNameSlow: "tongue-twister/sje.mp3",
          recordingFileNameFast: "tongue-twister/sje-fast.mp3",
          label: "Sju sjösjuka sjömän på skeppet Shanghai"
        }
      ]
    }}
  />
];

export default exercises;
