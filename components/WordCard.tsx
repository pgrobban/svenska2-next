import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography
} from "@material-ui/core";
import { Word, WordClass } from "../models/types";
import Icon from "./Icon";

const getKeyByValue = (obj: any, value: any) => Object.keys(obj).find(key => obj[key] === value);

interface WordCardProps {
  word: Word;
}

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const WordCard: React.FC<WordCardProps> = ({ word }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Card variant={"outlined"} className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {word.swedish}
            {word.dictionaryForm && (
              <>
                <br />
                DF: {word.dictionaryForm}
              </>
            )}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {getKeyByValue(WordClass, word.wordClass)?.toLowerCase()}
          </Typography>
          <Typography variant="body2" component="p">
            {word.english}
          </Typography>
        </CardContent>
        {word.moreInfoComponent === "See grammar point" && (
          <div className="w3-padding">See GP</div>
        )}
        {word.moreInfoComponent &&
          word.moreInfoComponent !== "See grammar point" && (
            <CardActions>
              <Button size="small" onClick={() => setExpanded(!expanded)}>
                See more
                <Icon type={expanded ? "collapse" : "expand"} />
              </Button>
            </CardActions>
          )}
        {expanded && <div className="w3-padding">{word.moreInfoComponent}</div>}
      </Card>
    </>
  );
};

export default WordCard;
