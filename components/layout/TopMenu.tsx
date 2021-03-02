import React from "react";
import {
  Button,
  InputAdornment,
  TextField,
  IconButton,
} from "@material-ui/core";
import Icon from "../Icon";
import classnames from "classnames";
import IfMobile from "../../helpers/IfMobile";
import IfDesktop from "../../helpers/IfDesktop";
import Link from "next/link";

interface Props {
  isSideBarOpen: boolean;
  setIsSideBarOpen: (sideBarOpen: boolean) => void;
}

const TopMenu: React.FunctionComponent<Props> = (props) => {
  const { isSideBarOpen, setIsSideBarOpen } = props;

  return (
    <div className="w3-top w3-bar w3-top w3-left-align w3-large theme-swe theme-swe-top-nav">
      <IfMobile>
        <Button
          className="w3-bar-item w3-right w3-large theme-swe"
          onClick={(e) => setIsSideBarOpen(!isSideBarOpen)}
        >
          <Icon type="menu" />
        </Button>
      </IfMobile>

      <Link href="/">
        <a id="logo" className="w3-bar-item w3-button">
          Robban's Swedish Corner
        </a>
      </Link>
      <IfDesktop>
        <Link href="/lessons">
          <a
            className={classnames([
              "w3-bar-item",
              // { "theme-swe-active": location?.pathname?.startsWith("/lesson") },
            ])}
          >
            Textbook
          </a>
        </Link>
        <Link href="/bites">
          <a
            className={classnames([
              "w3-bar-item",
              // { "theme-swe-active": location?.pathname?.startsWith("/bites") },
            ])}
          >
            Language bites
          </a>
        </Link>
        <Link href="/forums">
          <a
            className={classnames([
              "w3-bar-item",
              // { "theme-swe-active": location?.pathname?.startsWith("/forums") },
            ])}
          >
            Forums
          </a>
        </Link>
        <Link href="/news">
          <a
            className={classnames([
              "w3-bar-item",
              // { "theme-swe-active": location?.pathname === "/news" },
            ])}
          >
            News
          </a>
        </Link>
        <Link href="/about">
          <a
            className={classnames([
              "w3-bar-item",
              // { "theme-swe-active": location?.pathname === "/about" },
            ])}
          >
            About &amp; Contact
          </a>
        </Link>
      </IfDesktop>

      <TextField
        id="input-with-icon-textfield"
        className="w3-hide-small theme-swe"
        color="secondary"
        style={{ float: "right", paddingRight: 10, marginTop: 5 }}
        inputProps={{ className: "theme-swe" }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => {}}
                onMouseDown={() => {}}
              >
                <Icon type="search" className="theme-swe" />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <div className="w3-clear" />
    </div>
  );
};

export default TopMenu;
