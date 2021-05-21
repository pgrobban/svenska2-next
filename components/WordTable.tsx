import React, { useState } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";
import AudioButton from "./AudioButton";
import Icon from "./Icon";
import { Word, WordClass } from "../models/types";
import { getKeyByValue } from "../helpers/utils";

interface WordTableProps {
  words: Word[];
}

const WordTable: React.FC<WordTableProps> = (props) => {
  const { words } = props;
  const [expandedIndex, setExpandedIndex] = useState(-1);

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{/* number */}</TableCell>
            <TableCell>Swedish</TableCell>
            <TableCell>{/* pronunciation */}</TableCell>
            <TableCell>English</TableCell>
            <TableCell>Word class</TableCell>
            <TableCell>More info</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {words.map((word, index) => {
            const resolvedWordClass = getKeyByValue(
              WordClass,
              word.wordClass
            )?.toLowerCase();
            return (
              <React.Fragment key={index}>
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    {word.swedish}
                    {word.dictionaryForm && (
                      <>
                        <br />
                        DF: {word.dictionaryForm}
                      </>
                    )}
                  </TableCell>
                  <TableCell>
                    <AudioButton fileName={word.audioFileName}></AudioButton>
                    {word.payAttentionToPronunciation && (
                      <span>
                        <br />
                        {word.payAttentionToPronunciation}
                      </span>
                    )}
                  </TableCell>
                  <TableCell>{word.english}</TableCell>
                  <TableCell>
                    <span className="dotted-underline" title={resolvedWordClass}>
                      {word.wordClass}
                    </span>
                  </TableCell>
                  <TableCell>
                    {word.moreInfoComponent === "See grammar point" && (
                      <span>See GP</span>
                    )}
                    {word.moreInfoComponent &&
                      word.moreInfoComponent !== "See grammar point" && (
                        <Button
                          onClick={() =>
                            setExpandedIndex(
                              expandedIndex === index ? -1 : index
                            )
                          }
                        >
                          <Icon type="info" />
                          <Icon
                            type={
                              expandedIndex === index ? "collapse" : "expand"
                            }
                          />
                        </Button>
                      )}
                  </TableCell>
                </TableRow>
                {expandedIndex === index && (
                  <TableRow className="w3-animate-top">
                    <TableCell colSpan={6}>{word.moreInfoComponent}</TableCell>
                  </TableRow>
                )}
              </React.Fragment>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default WordTable;
