import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { LETTERS_OF_ALPHABET } from "../../helpers/utils";
import { ExerciseProps } from "../../models/types";
import InstallingSwedishKeyboardInstructionsDialog, {
  OperatingSystem
} from "../InstallingSwedishKeyboardInstructionsDialog";

const REQUIRED_TIMES_FOR_COMPLETION = 3;

interface TypingTheAlphabetProps extends ExerciseProps {}

const TypingTheAlphabet: React.FunctionComponent<TypingTheAlphabetProps> = (
  props: TypingTheAlphabetProps
) => {
  const { onMarkAsCompleted } = props;
  const [inputText, setInputText] = useState("");
  const [alphabetCompletedTimes, setAlphabetCompletedTimes] = useState(0);
  const [guideOpen, setGuideOpen] = useState<OperatingSystem | null>(null);
  const exerciseCompleted =
    alphabetCompletedTimes === REQUIRED_TIMES_FOR_COMPLETION;

  const onInputChange = (newInputText: string) => {
    const normalizedInput = newInputText.trim().toUpperCase();
    if (normalizedInput === LETTERS_OF_ALPHABET) {
      const newNumberOfTimesCompleted = alphabetCompletedTimes + 1;
      setAlphabetCompletedTimes(newNumberOfTimesCompleted);
      setInputText("");
      if (newNumberOfTimesCompleted === REQUIRED_TIMES_FOR_COMPLETION) {
        onMarkAsCompleted();
      }
    } else {
      setInputText(normalizedInput);
    }
  };

  const openGuide = (operatingSystem: OperatingSystem) => {
    setGuideOpen(operatingSystem);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <p>
        We will start things off easy by simply typing the Swedish alphabet.
        This is just to make sure that you have the Swedish keyboard installed
        on your device and know how to type our extra letters.
      </p>
      <p>
        Click on one of the buttons below to get instructions on how to install
        the Swedish keyboard for your device.
      </p>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => openGuide("iOS")}
        >
          iOS
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => openGuide("Android")}
        >
          Android
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => openGuide("Windows")}
        >
          Windows
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => openGuide("Mac OS")}
        >
          Mac OS
        </Button>
      </div>

      <p>
        Next, if you're using a keyboard, take a look at the image below to see
        where Å, Ä and Ö are located.
      </p>

      <img className="w3-image" src={'/images/swedish_keyboard.svg'} alt="Swedish keyboard" />

      <p>Now you can begin typing in the text box below.</p>

      <h5>Instructions &amp; passing criteria</h5>
      <p>
        Write the Swedish alphabet in its correct order in the box below. Do
        this three times and the exercise will be marked with a green check mark
        to indicate that you have passed.
        <br />
        After a completed alphabet, the box will automatically clear.
      </p>

      <p>
        You can click the reset button to clear your answers for an exercise.
        The exercise will still be marked as passed in your profile.
      </p>

      <form autoComplete="off">
        <TextField
          id="alphabet-input"
          label={
            exerciseCompleted
              ? "Congrats! You completed the exercise."
              : "Type here"
          }
          fullWidth
          disabled={exerciseCompleted}
          value={inputText}
          variant="outlined"
          onChange={(evt) => onInputChange(evt.target.value)}
        />
      </form>

      <p>
        Times completed:{" "}
        <strong className="w3-large">{alphabetCompletedTimes}</strong>/
        {REQUIRED_TIMES_FOR_COMPLETION}{" "}
      </p>

      <InstallingSwedishKeyboardInstructionsDialog
        dialogOpenForOperatingSystem={guideOpen}
        onClose={() => setGuideOpen(null)}
      />
    </>
  );
};

export default TypingTheAlphabet;
