import _slicedToArray from "/home/samghosh/Documents/Design-System/learnstorybook-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray";
// react
import React, { useState } from "react"; // component

import Button from "./button"; // jest renderer

import renderer from "react-test-renderer"; // testing library react

import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
/**
 * @name TestComponent
 * @details use case of button component
 * @returns button component with the updated count
 */

var TestComponent = function TestComponent() {
  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      count = _useState2[0],
      setCounter = _useState2[1];

  var handleButtonClick = function handleButtonClick() {
    setCounter(count + 1);
  };

  return /*#__PURE__*/React.createElement(Button, {
    handleClick: handleButtonClick
  }, "Click to increase: ", count);
}; // Case 1: Button Renders properly or not


it("Case 1: Button Component Renders Correctly", function () {
  var handleButtonClick = function handleButtonClick() {
    console.log("Button Clicked");
  };

  var buttonComponentTree = renderer.create( /*#__PURE__*/React.createElement(Button, {
    handleClick: handleButtonClick
  }, "Test")).toJSON();
  expect(buttonComponentTree).toMatchSnapshot();
}); // Case 2: Checks the Button data-testid is correct or not

it("Case 2: Checks the Button data-testId is correct or not", function () {
  var handleButtonClick = function handleButtonClick() {
    console.log("Button Clicked");
  };

  var _render = render( /*#__PURE__*/React.createElement(Button, {
    handleClick: handleButtonClick
  }, "Test")),
      getByTestId = _render.getByTestId;

  expect(getByTestId("button")).toBeInTheDocument();
}); // Case 3: Checks the Button data-testid is correct or not

it("Case 3: Checks the Button Text data-testId is correct or not", function () {
  var handleButtonClick = function handleButtonClick() {
    console.log("Button Clicked");
  };

  var _render2 = render( /*#__PURE__*/React.createElement(Button, {
    handleClick: handleButtonClick
  }, "Test")),
      getByTestId = _render2.getByTestId;

  expect(getByTestId("button-text")).toBeInTheDocument();
}); // Case 4: Checks the number of times button is clicked

it("Case 4: Checks the number of times button is clicked", function () {
  var _render3 = render( /*#__PURE__*/React.createElement(TestComponent, null)),
      getByTestId = _render3.getByTestId,
      getByText = _render3.getByText;

  fireEvent.click(getByTestId("button"));
  fireEvent.click(getByTestId("button"));
  expect(getByText("Click to increase: 2")).toBeInTheDocument();
}); // Case 5: Checks the Button Component Name is correct or Not

it("Case 5: Checks the Button Component Name is correct or Not", function () {
  var _render4 = render( /*#__PURE__*/React.createElement(TestComponent, null)),
      getByText = _render4.getByText;

  expect(getByText("Click to increase: 0")).toBeInTheDocument();
});