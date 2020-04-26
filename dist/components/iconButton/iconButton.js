import _objectWithoutProperties from "/home/samghosh/Documents/Design-System/learnstorybook-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties";
// react
import React from "react"; // prop-types

// styles
import "./iconButton.css"; // components

import Button from "../button/button"; // font-awesome

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

var IconButton = function IconButton(_ref) {
  var classname = _ref.classname,
      appearance = _ref.appearance,
      size = _ref.size,
      children = _ref.children,
      disabled = _ref.disabled,
      handleClick = _ref.handleClick,
      type = _ref.type,
      icon = _ref.icon,
      props = _objectWithoutProperties(_ref, ["classname", "appearance", "size", "children", "disabled", "handleClick", "type", "icon"]);

  /**
   * @name clickHandler
   * @description Function handles the button click
   * @param {*} event
   */
  var clickHandler = function clickHandler(event) {
    handleClick(event);
  };

  var getIconButtonContent = function getIconButtonContent() {
    return /*#__PURE__*/React.createElement("div", {
      className: "icon-button-component-contents"
    }, /*#__PURE__*/React.createElement("span", {
      className: "icon-button-component-contents-icon"
    }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
      icon: icon
    })), /*#__PURE__*/React.createElement("span", {
      className: "icon-button-component-contents-text"
    }, children));
  };

  var getIconContent = function getIconContent() {
    return /*#__PURE__*/React.createElement("div", {
      className: "icon-button-component-contents"
    }, /*#__PURE__*/React.createElement("span", {
      className: "icon-button-component-contents-icon"
    }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
      icon: icon
    })));
  };

  var getImageIconContent = function getImageIconContent() {
    return /*#__PURE__*/React.createElement("div", {
      className: "icon-button-component-contents"
    }, /*#__PURE__*/React.createElement("span", {
      className: "icon-button-component-contents-text"
    }, children), /*#__PURE__*/React.createElement("span", {
      className: "icon-button-component-contents-icon"
    }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
      icon: icon
    })));
  };

  return /*#__PURE__*/React.createElement(Button, Object.assign({
    classname: "".concat(classname, " icon-button-component"),
    appearance: appearance,
    size: size,
    handleClick: clickHandler,
    disabled: disabled
  }, props), type === "image-icon" && getIconButtonContent(), type === "icon" && getIconContent(), type === "icon-image" && getImageIconContent());
};

IconButton.defaultProps = {
  disabled: false,
  classname: "",
  appearance: "",
  size: "button-medium",
  type: "icon",
  icon: faPlus
};
export default IconButton;