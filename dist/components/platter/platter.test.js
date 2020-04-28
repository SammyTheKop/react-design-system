// react
import React from "react"; // component

import Platter from "./platter"; // jest renderer

import renderer from "react-test-renderer"; // testing library react

import "@testing-library/jest-dom/extend-expect"; // Case 1: Button Renders properly or not

it("Case 1: Button Component Renders Correctly", function () {
  var platterComponentTree = renderer.create( /*#__PURE__*/React.createElement(Platter, {
    headerName: "Platter Header"
  }, "Platter Contents")).toJSON();
  expect(platterComponentTree).toMatchSnapshot();
});