// react
import React from "react";

// classnames package
import classnames from "classnames";

// prop-types
import { node, string, oneOf } from "prop-types";

// styles
import "./label.css";

/**
 * @name Label
 * @description function to create the Label component
 * @param classname
 * @param htmlFor
 * @param size
 * @param children
 * @param otherProps
 * @returns label component
 */
const Label = ({ classname, htmlFor, children, size, ...props }) => {
  return (
    <div className="label-component">
      <label
        className={classnames(classname, "label", size)}
        data-testid="label"
        htmlFor={htmlFor}
        {...props}
      >
        {children}
      </label>
    </div>
  );
};

Label.propTypes = {
  children: node.isRequired,
  htmlFor: string,
  classname: string,
  size: oneOf(["medium", "large", "extra-large", "small", "extra-small"])
};

Label.defaultProps = {
  classname: "",
  htmlFor: "",
  size: "medium"
};

export default Label;
