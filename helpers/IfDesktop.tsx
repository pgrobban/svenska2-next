import { Media, MediaContextProvider } from "../pages/Media";

export default function IfDesktop({ children }) {
  return <div className="w3-hide-small w3-hide-medium">{children}</div>;
}
