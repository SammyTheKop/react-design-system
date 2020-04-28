import _slicedToArray from "/home/samghosh/Documents/Design-System/learnstorybook-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray";
// react
import React, { useState } from "react"; // component

import Dropdown from "./dropdown"; // jest renderer

import renderer from "react-test-renderer"; // testing library react

import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Dropdown List that can be reused by the Dropdown Component below in terms of executing the test cases

export var dropdownList = [{
  id: 1,
  name: "Dropdown Content - 1",
  clickHandlerFunc: function clickHandlerFunc(e, id, name) {
    console.log("Button Clicked", id, name);
  }
}, {
  id: 2,
  name: "Dropdown Content - 2",
  clickHandlerFunc: function clickHandlerFunc(e, id, name) {
    console.log("Button Clicked", id, name);
  }
}, {
  id: 3,
  name: "Dropdown Content - 3",
  clickHandlerFunc: function clickHandlerFunc(e, id, name) {
    console.log("Button Clicked", id, name);
  }
}]; // Case 1: Dropdown Renders properly or not

it("Case 1: Dropdown Component Renders Correctly", function () {
  var dropdownComponentTree = renderer.create( /*#__PURE__*/React.createElement(Dropdown, {
    dropdownName: "Dropdown",
    dropdownList: dropdownList
  })).toJSON();
  expect(dropdownComponentTree).toMatchSnapshot();
}); // Case 2: Checks the Dropdown Button Test id is correct or not

it("Case 2: Checks the Dropdown Button Test id is correct or not", function () {
  var _render = render( /*#__PURE__*/React.createElement(Dropdown, {
    dropdownName: "Dropdown",
    dropdownList: dropdownList
  })),
      getByTestId = _render.getByTestId;

  expect(getByTestId("dropdown-button")).toBeInTheDocument();
}); // Case 3: Checks the number of the dropdown buttons

it("Case 3: Checks the number of the dropdown buttons", function () {
  var _render2 = render( /*#__PURE__*/React.createElement(Dropdown, {
    dropdownName: "Dropdown",
    dropdownList: dropdownList
  })),
      getAllByTestId = _render2.getAllByTestId;

  expect(getAllByTestId("dropdown-content-button").length).toEqual(3);
}); // Case 4: Checks the dropdown name is correct or not

it("Case 4: Checks the dropdown name is correct or not", function () {
  var _render3 = render( /*#__PURE__*/React.createElement(Dropdown, {
    dropdownName: "Dropdown",
    dropdownList: dropdownList
  })),
      getByText = _render3.getByText;

  expect(getByText("Dropdown")).toBeInTheDocument();
});
/**
 * @name TestComponent
 * @details  example use case of the dropdown button component
 * @returns Dropdown button component with the updated count
 */

var TestComponent = function TestComponent() {
  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      firstDropdownValue = _useState2[0],
      setFirstDropdownValue = _useState2[1];

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      secondDropdownValue = _useState4[0],
      setSecondDropdownValue = _useState4[1];

  var _useState5 = useState(0),
      _useState6 = _slicedToArray(_useState5, 2),
      thirdDropdownValue = _useState6[0],
      setThirdDropdownValue = _useState6[1];

  var dropdownList = [{
    id: 1,
    name: "Dropdown Content - 1 | Value: ".concat(firstDropdownValue),
    clickHandlerFunc: function clickHandlerFunc(e, id, name) {
      setFirstDropdownValue(firstDropdownValue + 1);
    }
  }, {
    id: 2,
    name: "Dropdown Content - 2 | Value: ".concat(secondDropdownValue),
    clickHandlerFunc: function clickHandlerFunc(e, id, name) {
      setSecondDropdownValue(secondDropdownValue + 1);
    }
  }, {
    id: 3,
    name: "Dropdown Content - 3 | Value: ".concat(thirdDropdownValue),
    clickHandlerFunc: function clickHandlerFunc(e, id, name) {
      setThirdDropdownValue(thirdDropdownValue + 1);
    }
  }];
  return /*#__PURE__*/React.createElement(Dropdown, {
    dropdownName: "Dropdown",
    dropdownList: dropdownList
  });
}; // Case 5: Checks the functiona


it("Case 5: Dropdown Button Click Check", function () {
  var _render4 = render( /*#__PURE__*/React.createElement(TestComponent, null)),
      getByText = _render4.getByText; // Click event using JEST for all the dropdown buttons


  fireEvent.click(getByText("Dropdown Content - 1 | Value: 0"));
  fireEvent.click(getByText("Dropdown Content - 2 | Value: 0"));
  fireEvent.click(getByText("Dropdown Content - 3 | Value: 0")); // validate the button click returns the correct resutl

  expect(getByText("Dropdown Content - 1 | Value: 1")).toBeInTheDocument();
  expect(getByText("Dropdown Content - 2 | Value: 1")).toBeInTheDocument();
  expect(getByText("Dropdown Content - 3 | Value: 1")).toBeInTheDocument();
});