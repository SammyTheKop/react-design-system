// react
import React from "react";

// component
import Modal from "./modal";

// jest renderer
import renderer from "react-test-renderer";

// testing library react
import "@testing-library/jest-dom/extend-expect";

// Case 1: Button Renders properly or not
it("Case 1: Button Component Renders Correctly", () => {
  const modalComponentTree = renderer.create(<Modal>Test</Modal>).toJSON();
  expect(modalComponentTree).toMatchSnapshot();
});
