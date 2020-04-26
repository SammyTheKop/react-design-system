import _objectWithoutProperties from "/home/samghosh/Documents/Design-System/learnstorybook-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties";
// react
import React from "react"; // classnames package

import classnames from "classnames"; // prop-types

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
var Button = function Button(_ref) {
  var classname = _ref.classname,
      appearance = _ref.appearance,
      size = _ref.size,
      children = _ref.children,
      disabled = _ref.disabled,
      handleClick = _ref.handleClick,
      props = _objectWithoutProperties(_ref, ["classname", "appearance", "size", "children", "disabled", "handleClick"]);

  /**
   * @name clickHandler
   * @description Function handles the button click
   * @param {*} event
   */
  var clickHandler = function clickHandler(event) {
    handleClick(event);
  };

  var disabledClassName = "";

  if (disabled) {
    disabledClassName = "button-disabled";
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "button-component"
  }, /*#__PURE__*/React.createElement("button", Object.assign({
    type: "button",
    disabled: disabled,
    onClick: clickHandler,
    "data-testid": "button",
    className: classnames(classname, appearance, disabledClassName, size, "button")
  }, props), /*#__PURE__*/React.createElement("p", {
    className: "button-text",
    "data-testid": "button-text"
  }, children)));
};

Button.defaultProps = {
  disabled: false,
  classname: "",
  appearance: "",
  size: "button-medium"
};
export default Button;