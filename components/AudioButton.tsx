import { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import Icon from "./Icon";

interface Props {
  fileName: string;
  label?: string;
  className?: string;
  small?: boolean;
}

const AudioButton: React.FC<Props> = (props) => {
  const { label, fileName, className } = props;
  const [audio, setAudio] = useState(null); // since we don't have Audio API on SSR
  useEffect(() => {
    setAudio(new Audio(`/sounds/${fileName}`));
  }, [fileName]);

  return (
    <Button
      style={{ minWidth: label ? 105 : 0 }}
      variant="contained"
      color="primary"
      className={`audio-button w3-margin-right-small ${className || ''}`}
      onClick={() => audio.play()}
    >
      <Icon type="sound" style={{ marginRight: label ? 5 : 0 }} /> {label}
    </Button>
  );
};

export default AudioButton;
