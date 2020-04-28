// react
import React from "react";

// component
import Platter from "./platter";

// jest renderer
import renderer from "react-test-renderer";

// testing library react
import "@testing-library/jest-dom/extend-expect";

// Case 1: Button Renders properly or not
it("Case 1: Button Component Renders Correctly", () => {
  const platterComponentTree = renderer
    .create(<Platter headerName="Platter Header">Platter Contents</Platter>)
    .toJSON();
  expect(platterComponentTree).toMatchSnapshot();
});
