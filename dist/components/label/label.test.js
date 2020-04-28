import React from "react"; // component

import Label from "./label"; // jest renderer

import renderer from "react-test-renderer"; // testing library react

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Case 1: Label Renders properly or not

it("Case 1: Label Component Renders Correctly", function () {
  var buttonComponentTree = renderer.create( /*#__PURE__*/React.createElement(Label, null, "Test")).toJSON();
  expect(buttonComponentTree).toMatchSnapshot();
}); // Case 2: Label Component renders the correct value or not

it("Case 2: Label Component renders the correct value or not (Positive Testing", function () {
  var _render = render( /*#__PURE__*/React.createElement(Label, null, "Test")),
      getByTestId = _render.getByTestId;

  expect(getByTestId("label").textContent).toEqual("Test");
}); // Case 3: Label Component renders the correct value or not

it("Case 3: Label Component renders the correct value or not (Negative Testing", function () {
  var _render2 = render( /*#__PURE__*/React.createElement(Label, null, "Test - 1")),
      getByTestId = _render2.getByTestId;

  expect(getByTestId("label").textContent).not.toEqual("Test");
}); // Case 4: Label Component test id is present or not

it("Case 4: Label Component test is is present orr not", function () {
  var _render3 = render( /*#__PURE__*/React.createElement(Label, null, "Test - 1")),
      getByTestId = _render3.getByTestId;

  expect(getByTestId("label")).toBeInTheDocument();
});