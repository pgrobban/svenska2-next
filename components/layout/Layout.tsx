import Head from "next/head";
import { useEffect, useState } from "react";
import TopMenu from "./TopMenu";
import { IfMobile } from "../../helpers/showBasedOnScreen";
import { Button } from "@material-ui/core";
import Icon from "../Icon";
import NavigationSidebar from "./NavigationSidebar";
import UserController from "../UserController";
import Footer from "./Footer";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { SITE_NAME } from "../../helpers/utils";
import Image from 'next/image';

export const siteTitle = "Robban's Swedish corner";

const theme = createMuiTheme({
  typography: {
    fontFamily: `"Lato", sans-serif`
  },
  palette: {
    primary: {
      main: "#006AA7",
      contrastText: "#FECC00"
    }
  }
});

interface LayoutProps {
  location: string;
  title: string;
  activeLessonUrlName?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  location,
  activeLessonUrlName,
  title
}) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  useEffect(() => {
    // close sidebar when user is navigating to a new lesson
    setIsSideBarOpen(false);
  }, [activeLessonUrlName]);

  return (
    <>
      <Head>
        <title>
          {title}
          {title ? " - " : ""}
          {SITE_NAME}
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Interactive Swedish learning for beginners and advanced learners"
        />

        <meta name="og:title" content={siteTitle} />
      </Head>
      <ThemeProvider theme={theme}>
        <TopMenu
          isSideBarOpen={isSideBarOpen}
          setIsSideBarOpen={setIsSideBarOpen}
          location={location}
        />

        <nav
          className="w3-sidebar w3-bar-block w3-collapse w3-large theme-swe theme-swe-nav w3-animate-left"
          id="navigation-sidebar"
          style={{ display: isSideBarOpen ? "block" : "none" }}
        >
          <IfMobile>
            <Button
              className="theme-swe w3-right w3-xlarge w3-padding-16"
              title="Close Menu"
              onClick={() => setIsSideBarOpen(false)}
            >
              <Icon type="close" />
            </Button>
          </IfMobile>

          <NavigationSidebar
            location={location}
            activeLessonUrlName={activeLessonUrlName}
          />
        </nav>

        {/* Main content: shift it to the right by 300 pixels when the sidebar is visible */}
        <div
          className="w3-main"
          style={{ marginLeft: 300 }}
          onClick={() => setIsSideBarOpen(false)}
        >
          <div className="w3-row w3-padding-64 theme-swe-main">
            <div className="w3-threequarter w3-container">
              {(location === "404" || title === "Oh no!") && (
                <>
                  <h3>Oh no!</h3>
                  <Image
                    className="table-image centered"
                    alt="Sad panda"
                    title="Sad panda :("
                    src="/images/sad-panda.svg"
                  />
                </>
              )}
              {children}
            </div>
            <div className="w3-quarter w3-container">
              <div className="w3-hide-small">
                <UserController />
              </div>

              <IfMobile>
                <hr className="mobile-ad-separator" />
              </IfMobile>
              <p className="w3-border w3-padding-large w3-padding-32 w3-center">
                AD
              </p>
              <p className="w3-border w3-padding-large w3-padding-64 w3-center">
                AD
              </p>
            </div>
          </div>

          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
};

export default Layout;
