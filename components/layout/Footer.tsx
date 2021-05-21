import React from "react";
import Icon from "../Icon";
import { Button } from "@material-ui/core";
import { IfMobile, IfDesktop } from "../../helpers/showBasedOnScreen";

interface Props {}

const Footer: React.FC<Props> = () => {
  const copyright = (
    <span>
      &copy; {new Date().getFullYear()} Robban's Swedish Language Corner
    </span>
  );
  const socialLinks = (
    <div>
      <span className="w3-margin-right">Follow us on</span>
      <Button variant="contained" color="primary">
        <Icon type="facebook" size="m" />
      </Button>
      <Button variant="contained" color="primary">
        <Icon type="instagram" size="m" />
      </Button>
    </div>
  );

  return (
    <footer>
      <div className="w3-container w3-theme-l2 w3-padding-16 theme-swe theme-swe-footer">
        <IfMobile>
          {copyright}
          <br />
          {socialLinks}
        </IfMobile>
        <IfDesktop>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            {copyright}
            {socialLinks}
          </div>
        </IfDesktop>
      </div>
    </footer>
  );
};

export default Footer;
