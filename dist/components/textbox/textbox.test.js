import _objectSpread from "/home/samghosh/Documents/Design-System/learnstorybook-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "/home/samghosh/Documents/Design-System/learnstorybook-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from "react"; // component

import Textbox from "./textbox"; // jest renderer

import renderer from "react-test-renderer"; // testing library react

import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Case 1: Textbox Renders properly or not

it("Case 1: Textbox Component Renders Correctly or not", function () {
  var buttonComponentTree = renderer.create( /*#__PURE__*/React.createElement(Textbox, {
    placeholder: "This is a Nacho Style Textbox"
  })).toJSON();
  expect(buttonComponentTree).toMatchSnapshot();
});
/**
 * @name TestComponent
 * @details use case of textbox component
 * @returns button component with the updated count
 */

var TestComponent = function TestComponent() {
  var _useState = useState("Test"),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var handleTextboxChange = function handleTextboxChange(inputText) {
    setValue(inputText);
  };

  return /*#__PURE__*/React.createElement(Textbox, {
    handleClick: function handleClick(e) {
      return handleTextboxChange(e.target.value);
    },
    placeholder: "This is a Nacho Style Textbox"
  }, value);
};

var setup = function setup() {
  var utils = render( /*#__PURE__*/React.createElement(TestComponent, null));
  var input = utils.getByLabelText("textbox");
  return _objectSpread({
    input: input
  }, utils);
}; // Case 2: Checks the value of the textbox component


it("Case 2: Checks the value of the textbox component", function () {
  var _setup = setup(),
      input = _setup.input;

  fireEvent.change(input, {
    target: {
      value: "Something"
    }
  });
  expect(input.value).toBe("Something");
}); // Case 3: Checks the value of the textbox component

it("Case 3: Checks the value of the textbox component (Negative Testing)", function () {
  var _setup2 = setup(),
      input = _setup2.input;

  fireEvent.change(input, {
    target: {
      value: "Something"
    }
  });
  expect(input.value).not.toBe("Not Something");
}); // Case 4: Checks the value of the textbox component testid

it("Case 4: Checks the value of the textbox component testid", function () {
  var _render = render( /*#__PURE__*/React.createElement(TestComponent, null)),
      getByTestId = _render.getByTestId;

  expect(getByTestId("textbox")).toBeInTheDocument();
}); // Case 5: Checks the value of the textbox-clear testid

it("Case 5: Checks the value of the textbox-clear testid", function () {
  var _render2 = render( /*#__PURE__*/React.createElement(TestComponent, null)),
      getByTestId = _render2.getByTestId;

  expect(getByTestId("textbox")).toBeInTheDocument();
});