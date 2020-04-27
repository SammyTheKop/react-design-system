// react
import React from "react";

// classnames package
import classnames from "classnames";

// prop-types
import { node, string, oneOf } from "prop-types";

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
    <>
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
      <style jsx>
        {`
          /* Styles for the Label Component */
          /* Keep adding the Styles of the Label Size Props below and other CSS properties above */
          .label.extra-large {
            font-size: 24px;
          }

          .label.large {
            font-size: 20px;
          }

          .label.medium {
            font-size: 16px;
          }

          .label.small {
            font-size: 14px;
          }

          .label.extra-small {
            font-size: 10px;
          }
        `}
      </style>
    </>
  );
};

Label.propTypes = {
  children: node.isRequired,
  htmlFor: string,
  classname: string,
  size: oneOf(["medium", "large", "extra-large", "small", "extra-small"]),
};

Label.defaultProps = {
  classname: "",
  htmlFor: "",
  size: "medium",
};

export default Label;
