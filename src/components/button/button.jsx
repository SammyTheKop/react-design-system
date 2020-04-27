// react
import React from "react";

// classnames package
import classnames from "classnames";

// prop-types
import { node, string, bool, func, oneOf } from "prop-types";

// styles
// import "./button.css";

/**
 * @name Button
 * @description function to create the button component
 * @param classname
 * @param appearance
 * @param size
 * @param children
 * @param disabled
 * @param delay
 * @param handleClick
 * @param ...props (other props)
 * @returns button component
 */
const Button = ({
  classname,
  appearance,
  size,
  children,
  disabled,
  handleClick,
  ...props
}) => {
  /**
   * @name clickHandler
   * @description Function handles the button click
   * @param {*} event
   */
  const clickHandler = (event) => {
    handleClick(event);
  };

  let disabledClassName = "";
  if (disabled) {
    disabledClassName = "button-disabled";
  }

  return (
    <>
      <div className="button-component">
        <button
          type="button"
          disabled={disabled}
          onClick={clickHandler}
          data-testid="button"
          className={classnames(
            classname,
            appearance,
            disabledClassName,
            size,
            "button"
          )}
          {...props}
        >
          <p className="button-text" data-testid="button-text">
            {children}
          </p>
        </button>
      </div>
      <style jsx>
        {`
          /* Styles for the Button Component */
          .button-component .button {
            background: linear-gradient(#5aac44 0px, #519839 100%);
            box-shadow: 0 1px 0 #959da1;
            border-radius: 4px;
            color: white;
            height: 40px;
            padding: 8px;
            overflow: hidden;
          }

          .button-component .button:hover {
            background: #298fca;
            border-color: #298fca #298fca #026aa7;
          }

          .button-component .button-text {
            display: flex;
            justify-content: center;
            font-weight: 700;
            margin: 0;
          }

          .button-component .button-disabled {
            cursor: not-allowed;
            background: gray;
          }

          .button-component .button-disabled:hover {
            background-color: gray;
            border-color: gray;
          }

          /* Keep adding the Styles of the Button Size Props below */
          .button-component .button-extra-small {
            width: 50px;
          }

          .button-component .button-small {
            width: 100px;
          }

          .button-component .button-medium {
            width: 150px;
          }

          .button-component .button-large {
            width: 200px;
          }

          .button-component .button-extra-large {
            width: 250px;
          }

          .button-component .transparent {
            background: white;
            box-shadow: none;
            border-radius: none;
            color: black;
          }

          .button-component .button-red {
            color: #fff;
            background-color: #cb2431;
            background-image: linear-gradient(-180deg, #de4450, #cb2431 90%);
            border-color: rgba(27, 31, 35, 0.5);
          }

          .button-component .button-red:hover {
            color: #cb2431;
            background-color: #fafbfc;
            background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);
          }
        `}
      </style>
    </>
  );
};

Button.propTypes = {
  children: node.isRequired,
  disabled: bool,
  handleClick: func.isRequired,
  classname: string,
  appearance: string,
  size: oneOf([
    "button-medium",
    "button-large",
    "button-extra-large",
    "button-small",
    "button-extra-small",
  ]),
};

Button.defaultProps = {
  disabled: false,
  classname: "",
  appearance: "",
  size: "button-medium",
};

export default Button;
