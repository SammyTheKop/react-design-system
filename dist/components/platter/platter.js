import _objectWithoutProperties from "/home/samghosh/Documents/Design-System/learnstorybook-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties";
// react
import React from "react"; // classnames

import classnames from "classnames"; // prop-types

var Platter = function Platter(_ref) {
  var classname = _ref.classname,
      children = _ref.children,
      headerName = _ref.headerName,
      props = _objectWithoutProperties(_ref, ["classname", "children", "headerName"]);

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", Object.assign({
    className: classnames(classname, "platter-container")
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "platter-container-header"
  }, headerName), /*#__PURE__*/React.createElement("div", {
    className: "platter-container-contents"
  }, children)), /*#__PURE__*/React.createElement("style", {
    jsx: true
  }, "\n          /* Styles for the Platter Component */\n          .platter-container {\n            background: #e2e4e6;\n            border-radius: 6px;\n            height: 100%;\n            padding: 10px;\n          }\n\n          .platter-container-header {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            font-weight: 700;\n            margin-bottom: 16px;\n          }\n\n          .platter-container-contents {\n            height: 90%;\n            background-color: #c5c5c5;\n            border-radius: 6px;\n          }\n        "));
};

Platter.defaultProps = {
  classname: "",
  headerName: "My Chatbots"
};
export default Platter;