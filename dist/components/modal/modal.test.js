// react
import React from "react"; // component

import Modal from "./modal"; // jest renderer

import renderer from "react-test-renderer"; // testing library react

import "@testing-library/jest-dom/extend-expect"; // Case 1: Button Renders properly or not

it("Case 1: Button Component Renders Correctly", function () {
  var modalComponentTree = renderer.create( /*#__PURE__*/React.createElement(Modal, null, "Test")).toJSON();
  expect(modalComponentTree).toMatchSnapshot();
});