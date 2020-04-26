import _slicedToArray from "/home/samghosh/Documents/Design-System/learnstorybook-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "/home/samghosh/Documents/Design-System/learnstorybook-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties";
// react
import React, { useState, useRef, useEffect } from "react"; // classnames package

import classnames from "classnames"; // prop-types

// styles
import "./textbox.css";

var Textbox = function Textbox(_ref) {
  var classname = _ref.classname,
      children = _ref.children,
      readOnly = _ref.readOnly,
      value = _ref.value,
      handleChange = _ref.handleChange,
      handleClearValue = _ref.handleClearValue,
      type = _ref.type,
      ariaLabel = _ref.ariaLabel,
      isRequired = _ref.isRequired,
      canClear = _ref.canClear,
      placeHolder = _ref.placeHolder,
      props = _objectWithoutProperties(_ref, ["classname", "children", "readOnly", "value", "handleChange", "handleClearValue", "type", "ariaLabel", "isRequired", "canClear", "placeHolder"]);

  var _useState = useState(value),
      _useState2 = _slicedToArray(_useState, 2),
      textValue = _useState2[0],
      setTextValue = _useState2[1];

  useEffect(function () {
    if (textValue !== value) {
      setTextValue(value);
    }
  }, [value]);
  var textInput = useRef(null);

  var updateTextValue = function updateTextValue(e) {
    setTextValue(e.target.value);
    handleChange(e);
  };

  var clearField = function clearField() {
    setTextValue("");
    handleClearValue();
    textInput.current.focus();
  };

  return /*#__PURE__*/React.createElement("div", {
    className: classnames(classname, "textbox-component", {
      disabled: readOnly
    })
  }, /*#__PURE__*/React.createElement("input", Object.assign({
    type: type,
    value: textValue,
    onChange: updateTextValue,
    readOnly: readOnly,
    "aria-label": ariaLabel,
    required: isRequired,
    "aria-required": isRequired,
    placeholder: placeHolder,
    "data-testid": "textbox",
    ref: textInput,
    className: classnames({
      disabled: readOnly
    }, {
      "textbox-component-disabled": readOnly
    })
  }, props)), canClear && !readOnly && textValue.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "clear",
    role: "button",
    tabIndex: "0",
    "aria-pressed": "false",
    "aria-label": "clear-textbox",
    onClick: clearField,
    onKeyPress: function onKeyPress(e) {
      if (e.key === "Enter") {
        clearField(e);
      }
    },
    "data-testid": "clear-textbox"
  }, /*#__PURE__*/React.createElement("span", {
    className: "clear__icon"
  }, "\xD7")), children);
};

Textbox.defaultProps = {
  children: null,
  handleChange: function handleChange() {},
  handleClearValue: function handleClearValue() {},
  readOnly: false,
  classname: "",
  value: "",
  type: "text",
  ariaLabel: "textbox",
  isRequired: false,
  canClear: true,
  placeHolder: ""
};
export default Textbox;