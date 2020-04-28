import React from "react";

// component
import Label from "./label";

// jest renderer
import renderer from "react-test-renderer";

// testing library react
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// Case 1: Label Renders properly or not
it("Case 1: Label Component Renders Correctly", () => {
  const labelComponentTree = renderer.create(<Label>Test</Label>).toJSON();
  expect(labelComponentTree).toMatchSnapshot();
});

// Case 2: Label Component renders the correct value or not
it("Case 2: Label Component renders the correct value or not (Positive Testing", () => {
  const { getByTestId } = render(<Label>Test</Label>);
  expect(getByTestId("label").textContent).toEqual("Test");
});

// Case 3: Label Component renders the correct value or not
it("Case 3: Label Component renders the correct value or not (Negative Testing", () => {
  const { getByTestId } = render(<Label>Test - 1</Label>);
  expect(getByTestId("label").textContent).not.toEqual("Test");
});

// Case 4: Label Component test id is present or not
it("Case 4: Label Component test is is present orr not", () => {
  const { getByTestId } = render(<Label>Test - 1</Label>);
  expect(getByTestId("label")).toBeInTheDocument();
});
