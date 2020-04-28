import _objectWithoutProperties from "/home/samghosh/Documents/Design-System/learnstorybook-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties";
// react
import React from "react"; // prop-types

var Dropdown = function Dropdown(_ref) {
  var dropdownName = _ref.dropdownName,
      dropdownList = _ref.dropdownList,
      props = _objectWithoutProperties(_ref, ["dropdownName", "dropdownList"]);

  var getDropdownLists = function getDropdownLists() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, dropdownList.map(function (item, index) {
      var id = item.id,
          name = item.name;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
        type: "button",
        className: "dropdown-content-buttons",
        key: "".concat(id, " ").concat(name, " ").concat(index),
        onClick: function onClick(event) {
          return item.clickHandlerFunc(event, item);
        },
        "data-testid": "dropdown-content-button"
      }, name), /*#__PURE__*/React.createElement("style", {
        jsx: true
      }, "\n                  /* Links inside the dropdown */\n                  .dropdown-content-buttons {\n                    background: whitesmoke;\n                    margin: 0px;\n                    border: 0px;\n                    box-shadow: none;\n                    color: black;\n                    padding: 16px;\n                    display: block;\n                    width: 100%;\n                  }\n\n                  /* Change color of dropdown links on hover */\n                  .dropdown-content-buttons:hover {\n                    background: wheat;\n                  }\n                "));
    }));
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", Object.assign({
    className: "dropdown-component"
  }, props), /*#__PURE__*/React.createElement("button", {
    className: "dropdown-button",
    "data-testid": "dropdown-button"
  }, dropdownName, /*#__PURE__*/React.createElement("i", {
    className: "dropdown-button-arrow-down"
  })), /*#__PURE__*/React.createElement("div", {
    className: "dropdown-content"
  }, getDropdownLists())), /*#__PURE__*/React.createElement("style", {
    jsx: true
  }, "\n          /* Styles for the Dropdown Component */\n          .dropdown-component {\n            display: inline-block;\n            position: relative;\n          }\n\n          .dropdown-component .dropdown-button {\n            background: #4caf50;\n            color: white;\n            font-weight: 700;\n            border: none;\n            cursor: pointer;\n            min-width: 200px;\n            border-radius: 4px;\n          }\n\n          .dropdown-component .dropdown-button-arrow-down {\n            border: solid white;\n            border-width: 0 3px 3px 0;\n            display: inline-block;\n            padding: 4px;\n            transform: rotate(45deg);\n            margin-left: 12px;\n          }\n\n          /* Dropdown Content (Hidden by Default) */\n          .dropdown-component .dropdown-content {\n            display: none;\n            position: absolute;\n            background: white;\n            min-width: 200px;\n            box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n            z-index: 1;\n          }\n\n          /* Show the dropdown menu on hover */\n          .dropdown-component:hover .dropdown-content {\n            display: block;\n          }\n\n          .dropdown-component .dropdown-button:hover {\n            background: #3e8e41;\n          }\n        "));
};

Dropdown.defaultProps = {
  dropdownName: "Dropdown"
};
export default Dropdown;