import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@material-ui/core";
import WordList from "../../../../components/WordList";
import {
  iveGotADateWords,
  iveGotADateAdditionalWords
} from "../../word-lists/IveGotADate";
import AudioButton from "../../../../components/AudioButton";
import {
  getSwedishDateTodayAsText,
  getSwedishDayOfWeekToday,
  getSwedishDateTodayAsTextAlternate,
  getSwedishOrdinalDayToday
} from "../../../../helpers/utils";

const lessonChunks = [
  <div className="lesson-chunk">
    <div className="blackboard lesson-blackboard">
      <h2>Lesson 15</h2>
      <h3>I've got a date</h3>
    </div>

    <div className="lesson-goals">
      <h3 className="theme-swe-blue w3-margin-top">Lesson goals</h3>
      <p>
        In this lesson you will learn how to tell the date in different ways.
      </p>
    </div>
  </div>,
  <div className="lesson-chunk">
    <h4 className="theme-swe-blue">Text</h4>

    <p>
      Ett år har tolv månader.
      <br />
      Månaderna heter på svenska: januari, februari, mars, april, maj, juni,
      juli, augusti, september, oktober, november och december.
    </p>

    <p>
      Idag är det den {getSwedishDateTodayAsText()}.<br />
      Jag fyller år den tionde november.
    </p>

    <h5>Några svenska högtider</h5>

    <p>
      Nyårsdagen är 1 januari.
      <br />
      Trettondedag jul är 6 januari.
      <br />
      Påsk infaller någon gång i mars eller april.
      <br />
      Valborgsmässoafton 30 april och sedan kommer första maj.
      <br />
      Kristi himmelfärdsdag infaller 40 dagar efter påsk.
      <br />
      Midsommar infaller i slutet av juni.
      <br />
      Julafton är 24 december.
      <br />
      Nyårsafton är 31 december.
    </p>
  </div>,
  <div className={"lesson-chunk"}>
    <h4 className="theme-swe-blue">New words</h4>
    <WordList words={iveGotADateWords} />
  </div>,
  <div className={"lesson-chunk"}>
    <h4 className="theme-swe-blue">Additional words</h4>
    <WordList words={iveGotADateAdditionalWords} hideLegend />
  </div>,
  <div className={"lesson-chunk"}>
    <h4 className="theme-swe-blue">Grammar points</h4>
    <h5>GP1: Expressing dates</h5>

    <p>
      There are a couple of different ways to write and say dates in Swedish.
      The spoken versions include the ordinal numbers you learned in the
      previous lesson.
    </p>

    <p>
      For starters, I should note that years are read either by hundreds or in
      groups of two numbers. For example the year 1976 can be read{" "}
      <i>nittonhundrasjuttiosex</i> and 2021 <i>tjugo-tjugoett</i>. The cutoff
      point for when to use the latter seems to be the year 2020.
    </p>

    <p>
      You might have noticed that the months are written in lowercase letters in
      Swedish, just like the days of the week.
    </p>
  </div>,
  <div className="lesson-chunk">
    <p>Dates can be written in the following ways:</p>
    <ul>
      <li>
        (den) 15 mars (15 here is read <i>femtonde</i>)
      </li>
      <li>(den) 15:e mars (more casual, same reading as above)</li>
      <li>
        15/3 (read <i>femtonde i tredje)</i>
      </li>
    </ul>
    <p>
      The year is always placed last when writing in the forms above. Month and
      years are optional in contexts when they are known.
    </p>
    <p>
      Note 1: In the last example the month comes after the slash, not before
      like in the US standard.
    </p>
    <p>
      Note 2: When reading the dates, the words <i>första</i> and <i>andra</i>
      can sometimes be changed to <i>förste</i> and <i>andre</i>, so it's
      acceptable to write 1:a and 2:a (after all these are used in casual
      writing).
    </p>
    <p>
      Note 3: While we adopt the international standard YYYY-MM-DD, it is
      considered inappropriate for use in running text. However, you can use it
      as a header for documents, for instance.
    </p>
  </div>,
  <div className="lesson-chunk">
    <h6>What week will you finish school?</h6>

    <p>
      In Sweden, it's normal to give rough estimates of dates by saying the ISO
      week number. Projects could be given deadline by a certain week, which
      usually means the Friday on that week.
    </p>

    <p>
      If you want to know what week it is, you can either buy a physical
      calendar that shows you the week numbers, configure the calendar on your
      computer or phone to show you the week numbers, or use websites like{" "}
      <a href="http://vecka.nu">vecka.nu</a>.
    </p>
  </div>,
  <div className="lesson-chunk">
    <h6>Useful phrases for asking and answering about dates</h6>

    <p className="w3-margin-left">
      Vilken dag är det idag? (Asking for day of the month)
      <br />
      &rarr; Det är den {new Date().getDate()} ({getSwedishOrdinalDayToday()}) idag.
    </p>

    <p className="w3-margin-left">
      Vilket datum är det idag? (Asking for date) <br />
      &rarr; Det är den {getSwedishDateTodayAsText()}.<br />
      &rarr; Det är den {getSwedishDateTodayAsTextAlternate()}.
    </p>

    <p className="w3-margin-left">
      Vilken veckodag är det idag? (Asking for day of week)
      <br />
      &rarr; Det är {getSwedishDayOfWeekToday()} idag.
    </p>
  </div>
];

export default lessonChunks;
