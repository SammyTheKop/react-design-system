import _objectWithoutProperties from "/home/samghosh/Documents/Design-System/learnstorybook-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties";
// react
import React from "react"; // prop-types

// classnames package
import classNames from "classnames"; // styles

import "./card.css";
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

  return /*#__PURE__*/React.createElement("div", Object.assign({
    className: classNames(classname, type, "card-component"),
    "data-testid": "card"
  }, props), children);
};

Card.defaultProps = {
  classname: "card-component-background-1",
  type: "normal-card"
};
export default Card;