import _objectWithoutProperties from "/home/samghosh/Documents/Design-System/learnstorybook-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties";
// react
import React from "react"; // classnames

import classnames from "classnames"; // prop-types

// styles
import "./platter.css";

var Platter = function Platter(_ref) {
  var classname = _ref.classname,
      children = _ref.children,
      headerName = _ref.headerName,
      props = _objectWithoutProperties(_ref, ["classname", "children", "headerName"]);

  return /*#__PURE__*/React.createElement("div", Object.assign({
    className: classnames(classname, "platter-container")
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "platter-container-header"
  }, headerName), /*#__PURE__*/React.createElement("div", {
    className: "platter-container-contents"
  }, children));
};

Platter.defaultProps = {
  classname: "",
  headerName: "My Chatbots"
};
export default Platter;