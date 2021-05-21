import { ShowBasedOnScreenProps } from "../models/types";

export const IfDesktop: React.FC<ShowBasedOnScreenProps> = (props: ShowBasedOnScreenProps) => {
  const classes = "w3-hide-small w3-hide-medium";
  return props.inline ? <span className={classes}>{props.children}</span> : <div className={classes}>{props.children}</div>;
}

export const IfMobile: React.FC<ShowBasedOnScreenProps> = (props: ShowBasedOnScreenProps) => {
  const classes = "w3-hide-large";
  return props.inline ? <span className={classes}>{props.children}</span> : <div className={classes}>{props.children}</div>;
}

export const IfPhone: React.FC<ShowBasedOnScreenProps> = (props: ShowBasedOnScreenProps) => {
  const classes = "w3-hide-medium w3-hide-large";
  return props.inline ? <span className={classes}>{props.children}</span> : <div className={classes}>{props.children}</div>;
}

export const IfTablet: React.FC<ShowBasedOnScreenProps> = (props: ShowBasedOnScreenProps) => {
  const classes = "w3-hide-small w3-hide-large";
  return props.inline ? <span className={classes}>{props.children}</span> : <div className={classes}>{props.children}</div>;
}
