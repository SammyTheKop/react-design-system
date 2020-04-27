import _slicedToArray from "/home/samghosh/Documents/Design-System/learnstorybook-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "/home/samghosh/Documents/Design-System/learnstorybook-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties";
// react
import React, { useState, useRef, useEffect } from "react"; // classnames package

import classnames from "classnames"; // prop-types

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

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
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
  }, "\xD7")), children), /*#__PURE__*/React.createElement("style", {
    jsx: true
  }, "\n          /* Styles for the Textbox Component */\n          .textbox-component {\n            position: relative;\n            display: inline-block;\n            width: 100%;\n          }\n\n          .textbox-component > input {\n            min-height: 48px;\n            font-size: 16px;\n            width: 100%;\n            box-sizing: border-box;\n            background-color: #fafbfc;\n            border: none;\n            box-shadow: inset 0 0 0 2px #dfe1e6;\n            color: #172b4d;\n            box-sizing: border-box;\n            border-radius: 3px;\n            display: block;\n            line-height: 20px;\n            padding: 8px 12px;\n            transition-property: background-color, border-color, box-shadow;\n            transition-duration: 85ms;\n            transition-timing-function: ease;\n            -webkit-appearance: none;\n          }\n\n          .textbox-component > input::-ms-clear,\n          .textbox-component > input::-ms-reveal {\n            display: none;\n          }\n\n          .textbox-component .clear {\n            position: absolute;\n            top: 0;\n            bottom: 0px;\n            right: 0;\n            color: #282c34;\n            margin-right: 5px;\n            cursor: pointer;\n            display: flex;\n            align-items: center;\n          }\n\n          .textbox-component .clear > .clear__icon {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            border: solid 1px;\n            border-radius: 50%;\n            height: 14px;\n            width: 14px;\n            padding: 0 0 2px 1px;\n          }\n\n          .textbox-component > input[type=\"text\"]:focus {\n            background: #fff;\n            border: none;\n            box-shadow: inset 0 0 0 2px #0079bf;\n          }\n\n          .textbox-component > input[type=\"text\"]:focus:hover {\n            background: #fff;\n            border: none;\n            box-shadow: inset 0 0 0 2px #0079bf;\n          }\n\n          .textbox-component > .textbox-component-disabled:focus {\n            background-color: #fafbfc !important;\n            border: none !important;\n            box-shadow: inset 0 0 0 2px #dfe1e6 !important;\n          }\n\n          .textbox-component > input[type=\"text\"]:hover {\n            background-color: #ebecf0;\n            border: none;\n            box-shadow: inset 0 0 0 2px #dfe1e6;\n          }\n        "));
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