import {
  FormControl,
  InputLabel,
  Select,
  TextField,
  MenuItem,
  Button
} from "@material-ui/core";
import React, { useState } from "react";
import { ExerciseProps } from "../types";

interface CompleteTheSelfIntroductionProps extends ExerciseProps {}

const CompleteTheSelfIntroduction: React.FC<CompleteTheSelfIntroductionProps> = (
  props: CompleteTheSelfIntroductionProps
) => {
  const { onMarkAsCompleted } = props;

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [placeOfOrigin, setPlaceOfOrigin] = useState("");
  const [placeOfLiving, setPlaceOfLiving] = useState("");
  const [relationshipStatus, setRelationshipStatus] = useState("");
  const [partnerName, setPartnerName] = useState("");
  const [partnerPlaceOfOrigin, setPartnerPlaceOfOrigin] = useState("");
  const [numberOfChildren, setNumberOfChildren] = useState(-1);

  const formValid =
    age > 0 &&
    !!placeOfOrigin &&
    !!placeOfLiving &&
    !!relationshipStatus &&
    !!partnerName &&
    !!partnerPlaceOfOrigin &&
    numberOfChildren >= 0;

  const onReset = () => {
    setName("");
    setAge(0);
    setPlaceOfOrigin("");
    setPlaceOfLiving("");
    setRelationshipStatus("");
    setPartnerName("");
    setPartnerPlaceOfOrigin("");
    setNumberOfChildren(0);
  };

  return (
    <>
      <h5>Instructions &amp; passing criteria</h5>
      <p>
        Use the input boxes and dropdown menus below to complete the self
        introduction.
      </p>
      <p>
        Since I can't check if you have answered truthfully or not, the only
        criteria for passing is that you have entered at least something in all
        boxes.
      </p>

      <h6 className="w3-margin-top w3-center">Min introduktion</h6>

      <form noValidate autoComplete="off">
        <div className="w3-margin-bottom">
          Hej! Jag heter{" "}
          <FormControl className="p-input">
            <InputLabel htmlFor="name-input" />
            <TextField
              id="name-input"
              placeholder="(name)"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          , och jag kommer från (come from)
          <FormControl className="p-input">
            <TextField
              placeholder="(place of origin)"
              value={placeOfOrigin}
              onChange={(e) => setPlaceOfOrigin(e.target.value)}
            />
          </FormControl>
          .
        </div>
        <div>
          Jag är{" "}
          <FormControl className="p-input-small">
            <TextField
              placeholder="(age)"
              value={age}
              type="number"
              onChange={(e) => setAge(Number(e.target.value))}
              inputProps={{
                min: 0,
                max: 100,
                inputMode: "numeric"
              }}
            />
          </FormControl>{" "}
          år gammal (years old) och bor i{" "}
          <FormControl className="p-input">
            <TextField
              placeholder="(place of living)"
              value={placeOfLiving}
              onChange={(e) => setPlaceOfLiving(e.target.value)}
            />
          </FormControl>
          .
        </div>
        <div>
          Min{" "}
          <FormControl className="p-input">
            <Select
              placeholder="(relationship partner)"
              value={relationshipStatus}
              type="number"
              onChange={(e) => setRelationshipStatus(e.target.value as string)}
            >
              <MenuItem disabled value={""}>
                <em>Select an answer</em>
              </MenuItem>
              <MenuItem value="fru">fru (wife)</MenuItem>
              <MenuItem value="man">man (husband)</MenuItem>
              <MenuItem value="fästmö">
                fästmö (fiancée (= engaged woman))
              </MenuItem>
              <MenuItem value="fästman">
                fästman (fiancé (= engaged man))
              </MenuItem>
              <MenuItem value="flickvän">flickvän (girlfriend)</MenuItem>
              <MenuItem value="pojkvän">pojkvän (boyfriend)</MenuItem>
            </Select>
          </FormControl>{" "}
          heter{" "}
          <FormControl className="p-input">
            <TextField
              placeholder="(name)"
              value={partnerName}
              onChange={(e) => setPartnerName(e.target.value)}
            />
          </FormControl>
          och kommer från{" "}
          <FormControl className="p-input">
            <TextField
              placeholder="(place of origin)"
              value={partnerPlaceOfOrigin}
              onChange={(e) => setPartnerPlaceOfOrigin(e.target.value)}
            />
          </FormControl>
          .
        </div>
        <div className="w3-margin-bottom">
          Vi har{" "}
          <FormControl className="p-input">
            <Select
              required
              placeholder="(number of children)"
              value={numberOfChildren}
              type="number"
              onChange={(e) => setNumberOfChildren(Number(e.target.value))}
            >
              <MenuItem disabled value={-1}>
                <em>Select an answer</em>
              </MenuItem>
              <MenuItem value={0}>inga (no)</MenuItem>
              <MenuItem value={1}>ett</MenuItem>
              <MenuItem value={2}>två</MenuItem>
              <MenuItem value={3}>tre (three)</MenuItem>
              <MenuItem value={4}>fyra (four)</MenuItem>
              <MenuItem value={5}>många (many)</MenuItem>
            </Select>
          </FormControl>{" "}
          barn.
        </div>

        <div className="centered">
          <Button
            variant="contained"
            color="primary"
            className="w3-margin-right-big"
            disabled={!formValid}
            onClick={(e) => {
              e.preventDefault();
              onMarkAsCompleted();
            }}
            type="submit"
          >
            Submit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => onReset()}
          >
            Reset
          </Button>
        </div>
      </form>
    </>
  );
};

export default CompleteTheSelfIntroduction;
