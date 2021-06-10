import Icon from "./Icon";

const WarningBlock = ({ children }) => (
  <div className="warning-block">
    <Icon type="warning" size="l" className="w3-margin-left" />
    <div className="w3-margin-left">{children}</div>
  </div>
);

export default WarningBlock;
