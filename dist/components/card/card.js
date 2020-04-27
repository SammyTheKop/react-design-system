import _objectWithoutProperties from "/home/samghosh/Documents/Design-System/learnstorybook-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties";
// react
import React from "react"; // prop-types

// classnames package
import classNames from "classnames";
/**
 * @name Card
 * @description function to create the card component
 * @param className
 * @param children
 * @param type
 * @param ...props (other props)
 * @returns card component
 */

var Card = function Card(_ref) {
  var classname = _ref.classname,
      children = _ref.children,
      type = _ref.type,
      props = _objectWithoutProperties(_ref, ["classname", "children", "type"]);

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", Object.assign({
    className: classNames(classname, type, "card-component"),
    "data-testid": "card"
  }, props), children), /*#__PURE__*/React.createElement("style", {
    jsx: true
  }, "\n          /* Styles for the Card Component */\n          .card-component {\n            border-radius: 4px;\n            height: 100%;\n            padding: 16px;\n            font-weight: 700;\n          }\n\n          /* Keep adding the colors of the background colors */\n          .card-component-background-1 {\n            background-color: #0079bf;\n            color: white;\n          }\n\n          .card-component-background-2 {\n            background-color: #cd5a91;\n            color: white;\n          }\n\n          .card-component-background-3 {\n            background-color: #89609e;\n            color: white;\n          }\n\n          .card-component-background-4 {\n            background-color: white;\n            color: black;\n          }\n\n          /* Styles for the Types of Cards */\n          .normal-card {\n            display: flex;\n            align-items: center;\n          }\n\n          .image-card {\n            background-image: url(\"/modalBackground.svg\");\n            background-repeat: no-repeat;\n            background-size: cover;\n            color: black;\n          }\n        "));
};

Card.defaultProps = {
  classname: "card-component-background-1",
  type: "normal-card"
};
export default Card;