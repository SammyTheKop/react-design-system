// react
import React from "react";

// classnames
import classnames from "classnames";

// prop-types
import { string, node } from "prop-types";

// styles
import "./platter.css";

const Platter = ({ classname, children, headerName, ...props }) => {
  return (
    <div className={classnames(classname, "platter-container")} {...props}>
      <div className="platter-container-header">{headerName}</div>
      <div className="platter-container-contents">{children}</div>
    </div>
  );
};

Platter.propTypes = {
  classname: string,
  children: node.isRequired,
  headerName: string
};

Platter.defaultProps = {
  classname: "",
  headerName: "My Chatbots"
};

export default Platter;
