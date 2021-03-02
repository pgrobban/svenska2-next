import { createMedia } from "@artsy/fresnel";

const TABLET_MAX_WIDTH = 1200;
const PHONE_MAX_WIDTH = 600;

const AppMedia = createMedia({
  breakpoints: {
    sm: 0,
    md: PHONE_MAX_WIDTH,
    lg: TABLET_MAX_WIDTH,
    xl: 2000
  }
});

// Generate CSS to be injected into the head
export const mediaStyle = AppMedia.createMediaStyle();
export const { Media, MediaContextProvider } = AppMedia;
