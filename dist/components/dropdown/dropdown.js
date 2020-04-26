import _objectWithoutProperties from "/home/samghosh/Documents/Design-System/learnstorybook-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties";
// react
import React from "react"; // prop-types

// styles
import "./dropdown.css";

var Dropdown = function Dropdown(_ref) {
  var dropdownName = _ref.dropdownName,
      dropdownList = _ref.dropdownList,
      props = _objectWithoutProperties(_ref, ["dropdownName", "dropdownList"]);

  var getDropdownLists = function getDropdownLists() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, dropdownList.map(function (item) {
      var id = item.id,
          name = item.name;
      return /*#__PURE__*/React.createElement("button", {
        type: "button",
        className: "dropdown-content-buttons",
        key: "".concat(id, " ").concat(name),
        onClick: function onClick(event) {
          return item.clickHandlerFunc(event, item);
        }
      }, name);
    }));
  };

  return /*#__PURE__*/React.createElement("div", Object.assign({
    className: "dropdown-component"
  }, props), /*#__PURE__*/React.createElement("button", {
    className: "dropdown-button"
  }, dropdownName, /*#__PURE__*/React.createElement("i", {
    className: "dropdown-button-arrow-down"
  })), /*#__PURE__*/React.createElement("div", {
    className: "dropdown-content"
  }, getDropdownLists()));
};

Dropdown.defaultProps = {
  dropdownName: "Dropdown"
};
export default Dropdown;