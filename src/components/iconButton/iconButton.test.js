// react
import React, { useState } from "react";

// component
import IconButton from "./iconButton";

// jest renderer
import renderer from "react-test-renderer";

// testing library react
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

/**
 * @name TestComponent
 * @details use case of button component
 * @returns button component with the updated count
 */
const TestComponent = () => {
  const [count, setCounter] = useState(0);

  const handleButtonClick = () => {
    setCounter(count + 1);
  };

  return (
    <IconButton handleClick={handleButtonClick} type="image-icon">
      Click to increase: {count}
    </IconButton>
  );
};

// Case 1: IconButton Renders properly or not
it("Case 1: IconButton Component Renders Correctly", () => {
  const handleButtonClick = () => {
    console.log("IconButton Clicked");
  };

  const iconButtonComponentTree = renderer
    .create(<IconButton handleClick={handleButtonClick}>Test</IconButton>)
    .toJSON();
  expect(iconButtonComponentTree).toMatchSnapshot();
});

// Case 2: Checks the IconButton data-testid is correct or not
it("Case 2: Checks the IconButton data-testId is correct or not", () => {
  const handleButtonClick = () => {
    console.log("IconButton Clicked");
  };
  const { getByTestId } = render(
    <IconButton handleClick={handleButtonClick}>Test</IconButton>
  );
  expect(getByTestId("button")).toBeInTheDocument();
});

// Case 3: Checks the IconButton data-testid is correct or not
it("Case 3: Checks the IconButton Text data-testId is correct or not", () => {
  const handleButtonClick = () => {
    console.log("IconButton Clicked");
  };
  const { getByTestId } = render(
    <IconButton handleClick={handleButtonClick}>Test</IconButton>
  );
  expect(getByTestId("button-text")).toBeInTheDocument();
});

// Case 4: Checks the number of times button is clicked
it("Case 4: Checks the number of times button is clicked", () => {
  const { getByTestId, getByText } = render(<TestComponent />);
  fireEvent.click(getByTestId("button"));
  fireEvent.click(getByTestId("button"));
  expect(getByText("Click to increase: 2")).toBeInTheDocument();
});

// Case 5: Checks the IconButton Component Name is correct or Not
it("Case 5: Checks the IconButton Component Name is correct or Not", () => {
  const { getByText } = render(<TestComponent />);
  expect(getByText("Click to increase: 0")).toBeInTheDocument();
});
