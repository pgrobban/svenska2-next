import React, { useState } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField
} from "@material-ui/core";
import { CorrectIncorrectMark, ExerciseProps } from "../../models/types";
import InstallingSwedishKeyboardInstructionsDialog, {
  OperatingSystem
} from "../../components/InstallingSwedishKeyboardInstructionsDialog";
import {
  getEmptyStringsArray,
  getNullArray,
  getBorderColorByMark,
  normalizeInputs
} from "../../helpers/utils";

export interface WhoAreTheyProps extends ExerciseProps {}

const SvenssonFamilyMembers = ["Håkan", "Lena", "Alfred", "Saga"];

const WhoAreThey: React.FunctionComponent<WhoAreTheyProps> = (
  props: WhoAreTheyProps
) => {
  const { onMarkAsCompleted } = props;
  const [guideOpen, setGuideOpen] = useState<OperatingSystem | null>(null);
  const [inputs, setInputs] = useState<string[]>(
    getEmptyStringsArray(SvenssonFamilyMembers.length)
  );
  const [answerMarks, setAnswerMarks] = useState<
    CorrectIncorrectMark[] | null[]
  >(getNullArray(SvenssonFamilyMembers.length));
  const updateInputs = (index: number, newValue: string) => {
    inputs.splice(index, 1, newValue);
    setInputs([...inputs]);
    setAnswerMarks(getEmptyStringsArray(SvenssonFamilyMembers.length));
  };

  const openGuide = (operatingSystem: OperatingSystem) => {
    setGuideOpen(operatingSystem);
    window.scrollTo(0, 0);
  };

  const checkAnswers = () => {
    let correctAnswers = 0;
    const newAnswerMarks = [] as CorrectIncorrectMark[];
    const normalizedAnswers = normalizeInputs(inputs);

    SvenssonFamilyMembers.forEach((member, index) => {
      const correctAnswer = normalizedAnswers[index] === member.toUpperCase();
      if (correctAnswer) {
        correctAnswers++;
        newAnswerMarks.push("correct");
      } else {
        newAnswerMarks.push("incorrect");
      }
    });
    if (correctAnswers === SvenssonFamilyMembers.length) {
      onMarkAsCompleted();
    }
    setAnswerMarks(newAnswerMarks);
  };

  return (
    <>
      <p>
        <strong>Note:</strong> If you haven't done so already, please install
        the Swedish keyboard for your operating system. Using A or O instead of
        Å, Ä and Ö will cause your exercise to be <u>marked as incorrect</u>.
      </p>
      <p>
        Click on one of the buttons below to get instructions on how to install
        the Swedish keyboard for your device.
      </p>

      <div
        className="w3-margin-bottom"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
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

      <h5>Instructions &amp; passing criteria</h5>

      <p>
        Look at the pictures and write the names of the members of the
        corresponding Svensson family member according to the text.
        <br />
        You don't need to worry about capitalization. <br />
        Click the "Check answers" button when you're finished.
      </p>
      <p>
        The answers will be marked green if they are correct or red if they are
        incorrect. If all answers are correct, the exercise will be marked as
        completed. If one or more answers are incorrect, fix the mistakes and
        press "Check answers" again.
      </p>

      <Table>
        <TableBody>
          {SvenssonFamilyMembers.map((member, index) => (
            <TableRow key={member}>
              <TableCell>
                <img
                  className="table-image"
                  src={`/images/${member}.jpg`}
                  alt=""
                />
              </TableCell>
              <TableCell>
                <TextField
                  value={inputs[index]}
                  onChange={(evt) => updateInputs(index, evt.target.value)}
                  label="Write here..."
                  style={
                    answerMarks[index]
                      ? {
                          borderStyle: "solid",
                          borderWidth: 1,
                          borderColor: getBorderColorByMark(answerMarks[index])
                        }
                      : {}
                  }
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="centered">
        <Button
          variant="contained"
          color="primary"
          onClick={() => checkAnswers()}
        >
          Check answers
        </Button>
      </div>

      <InstallingSwedishKeyboardInstructionsDialog
        dialogOpenForOperatingSystem={guideOpen}
        onClose={() => setGuideOpen(null)}
      />
    </>
  );
};

export default WhoAreThey;
