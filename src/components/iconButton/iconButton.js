// react
import React from "react";

// prop-types
import { node, string, bool, func, oneOf } from "prop-types";

// styles
import "./iconButton.css";

// components
import Button from "../button/button";

// font-awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

/**
 * @name IconButton
 * @description function to creates the button component
 * @param classname
 * @param appearance
 * @param size
 * @param children
 * @param disabled
 * @param handleClick
 * @param otherProps
 * @returns button component
 */
const IconButton = ({
  classname,
  appearance,
  size,
  children,
  disabled,
  handleClick,
  type,
  icon,
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

  const getIconButtonContent = () => {
    return (
      <div className="icon-button-component-contents">
        <span className="icon-button-component-contents-icon">
          <FontAwesomeIcon icon={icon} />
        </span>
        <span className="icon-button-component-contents-text">{children}</span>
      </div>
    );
  };

  const getIconContent = () => {
    return (
      <div className="icon-button-component-contents">
        <span className="icon-button-component-contents-icon">
          <FontAwesomeIcon icon={icon} />
        </span>
      </div>
    );
  };

  const getImageIconContent = () => {
    return (
      <div className="icon-button-component-contents">
        <span className="icon-button-component-contents-text">{children}</span>
        <span className="icon-button-component-contents-icon">
          <FontAwesomeIcon icon={icon} />
        </span>
      </div>
    );
  };

  return (
    <Button
      classname={`${classname} icon-button-component`}
      appearance={appearance}
      size={size}
      handleClick={clickHandler}
      disabled={disabled}
      {...props}
    >
      {type === "image-icon" && getIconButtonContent()}
      {type === "icon" && getIconContent()}
      {type === "icon-image" && getImageIconContent()}
    </Button>
  );
};

IconButton.propTypes = {
  children: node.isRequired,
  handleClick: func.isRequired,
  classname: string,
  type: oneOf(["icon", "icon-image", "image-icon"]),
  appearance: string,
  size: oneOf([
    "button-medium",
    "button-large",
    "button-extra-large",
    "button-small",
    "button-extra-small",
  ]),
  disabled: bool,
  icon: string,
};

IconButton.defaultProps = {
  disabled: false,
  classname: "",
  appearance: "",
  size: "button-medium",
  type: "icon",
  icon: faPlus,
};

export default IconButton;
