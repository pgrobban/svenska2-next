import React from "react";
import { IfPhone, IfDesktop, IfTablet } from "../helpers/showBasedOnScreen";
import { Word } from "../models/types";
import WordCard from "./WordCard";
import WordTable from "./WordTable";

interface WordListProps {
  words: Word[];
  hideLegend?: boolean;
}

const WordList: React.FC<WordListProps> = (props) => {
  const { words, hideLegend } = props;

  const showDictionaryFormLegend = !!words.find((word) => word.dictionaryForm);
  const showSeeGrammarPointLegend = !!words.find(
    (word) => word.moreInfoComponent === "See GP"
  );
  const showSeeCultureNoteLegend = !!words.find(
    (word) => word.moreInfoComponent === "See CN"
  );

  return (
    <>
      {!hideLegend && (
        <small>
          {showDictionaryFormLegend && (
            <>
              DF: Dictionary form
              <br />
            </>
          )}
          {showSeeGrammarPointLegend && <>See GP: See Grammar Point</>}
          {showSeeCultureNoteLegend && <>See CN: See Culture Note</>}
        </small>
      )}

      <IfPhone>
        {words.map((word, index) => (
          <WordCard key={index} word={word} />
        ))}
      </IfPhone>
      <IfTablet>
        <WordTable words={words} />
      </IfTablet>
      <IfDesktop>
        <WordTable words={words} />
      </IfDesktop>
    </>
  );
};

export default WordList;
