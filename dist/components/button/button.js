import _objectWithoutProperties from "/home/samghosh/Documents/Design-System/learnstorybook-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties";
// react
import React from "react"; // classnames package

import classnames from "classnames"; // prop-types

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

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
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
  }, children))), /*#__PURE__*/React.createElement("style", {
    jsx: true
  }, "\n          /* Styles for the Button Component */\n          .button-component .button {\n            background: linear-gradient(#5aac44 0px, #519839 100%);\n            box-shadow: 0 1px 0 #959da1;\n            border-radius: 4px;\n            border: 0px;\n            color: white;\n            height: 40px;\n            padding: 8px;\n            overflow: hidden;\n          }\n\n          .button-component .button:hover {\n            background: #298fca;\n            border-color: #298fca #298fca #026aa7;\n          }\n\n          .button-component .button-text {\n            display: flex;\n            justify-content: center;\n            font-weight: 700;\n            margin: 0;\n          }\n\n          .button-component .button-disabled {\n            cursor: not-allowed;\n            background: gray;\n          }\n\n          .button-component .button-disabled:hover {\n            background-color: gray;\n            border-color: gray;\n          }\n\n          /* Keep adding the Styles of the Button Size Props below */\n          .button-component .button-extra-small {\n            width: 50px;\n          }\n\n          .button-component .button-small {\n            width: 100px;\n          }\n\n          .button-component .button-medium {\n            width: 150px;\n          }\n\n          .button-component .button-large {\n            width: 200px;\n          }\n\n          .button-component .button-extra-large {\n            width: 250px;\n          }\n\n          .button-component .transparent {\n            background: white;\n            box-shadow: none;\n            border-radius: none;\n            color: black;\n          }\n\n          .button-component .button-red {\n            color: #fff;\n            background-color: #cb2431;\n            background-image: linear-gradient(-180deg, #de4450, #cb2431 90%);\n            border-color: rgba(27, 31, 35, 0.5);\n          }\n\n          .button-component .button-red:hover {\n            color: #cb2431;\n            background-color: #fafbfc;\n            background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n          }\n        "));
};

Button.defaultProps = {
  disabled: false,
  classname: "",
  appearance: "",
  size: "button-medium"
};
export default Button;