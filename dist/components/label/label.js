import _objectWithoutProperties from "/home/samghosh/Documents/Design-System/learnstorybook-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties";
// react
import React from "react"; // classnames package

import classnames from "classnames"; // prop-types

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

var Label = function Label(_ref) {
  var classname = _ref.classname,
      htmlFor = _ref.htmlFor,
      children = _ref.children,
      size = _ref.size,
      props = _objectWithoutProperties(_ref, ["classname", "htmlFor", "children", "size"]);

  return /*#__PURE__*/React.createElement("div", {
    className: "label-component"
  }, /*#__PURE__*/React.createElement("label", Object.assign({
    className: classnames(classname, "label", size),
    "data-testid": "label",
    htmlFor: htmlFor
  }, props), children));
};

Label.defaultProps = {
  classname: "",
  htmlFor: "",
  size: "medium"
};
export default Label;