import _objectWithoutProperties from "/home/samghosh/Documents/Design-System/learnstorybook-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties";
// react
import React from "react"; // classnames package

import classnames from "classnames"; // prop-types

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
var Label = function Label(_ref) {
  var classname = _ref.classname,
      htmlFor = _ref.htmlFor,
      children = _ref.children,
      size = _ref.size,
      props = _objectWithoutProperties(_ref, ["classname", "htmlFor", "children", "size"]);

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "label-component"
  }, /*#__PURE__*/React.createElement("label", Object.assign({
    className: classnames(classname, "label", size),
    "data-testid": "label",
    htmlFor: htmlFor
  }, props), children)), /*#__PURE__*/React.createElement("style", {
    jsx: true
  }, "\n          /* Styles for the Label Component */\n          /* Keep adding the Styles of the Label Size Props below and other CSS properties above */\n          .label.extra-large {\n            font-size: 24px;\n          }\n\n          .label.large {\n            font-size: 20px;\n          }\n\n          .label.medium {\n            font-size: 16px;\n          }\n\n          .label.small {\n            font-size: 14px;\n          }\n\n          .label.extra-small {\n            font-size: 10px;\n          }\n        "));
};

Label.defaultProps = {
  classname: "",
  htmlFor: "",
  size: "medium"
};
export default Label;