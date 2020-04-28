// react
import React from "react"; // component

import Card from "./card"; // jest renderer

import renderer from "react-test-renderer"; // testing library react

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Case 1: Card Snapshot matches or not

it("Case 1: Card Component Renders Correctly", function () {
  var cardComponentTree = renderer.create( /*#__PURE__*/React.createElement(Card, null, "Test")).toJSON();
  expect(cardComponentTree).toMatchSnapshot();
}); // Case 2: Card Renders the children (content) properly or not

it("Case 2: Card Renders the children (content) properly or not", function () {
  var _render = render( /*#__PURE__*/React.createElement(Card, null, "Test")),
      getByText = _render.getByText;

  expect(getByText("Test")).toBeInTheDocument();
}); // Case 3: Card Renders default classnames properly or not

it("Case 3: Card Renders default classnames properly or not", function () {
  var _render2 = render( /*#__PURE__*/React.createElement(Card, null, "Test")),
      getByTestId = _render2.getByTestId;

  expect(getByTestId("card").className).toBe("card-component-background-1 normal-card card-component");
}); // Case 4: Card Renders passed classnames properly or not (Negative Testing)

it("Case 4: Card Renders passed classnames properly or not", function () {
  var _render3 = render( /*#__PURE__*/React.createElement(Card, {
    classname: "extra-classname"
  }, "Test")),
      getByTestId = _render3.getByTestId;

  expect(getByTestId("card").className).not.toBe("card-component-background-1 normal-card card-component");
}); // Case 5: Card Renders default classnames properly or not

it("Case 5: Card Renders default classnames properly or not", function () {
  var _render4 = render( /*#__PURE__*/React.createElement(Card, {
    classname: "extra-classname"
  }, "Test")),
      getByTestId = _render4.getByTestId;

  expect(getByTestId("card").className).toBe("extra-classname normal-card card-component");
});