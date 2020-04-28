// react
import React, { useState } from "react";

// component
import Dropdown from "./dropdown";

// jest renderer
import renderer from "react-test-renderer";

// testing library react
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// Dropdown List that can be reused by the Dropdown Component below in terms of executing the test cases
export const dropdownList = [
  {
    id: 1,
    name: "Dropdown Content - 1",
    clickHandlerFunc: (e, id, name) => {
      console.log("Button Clicked", id, name);
    },
  },
  {
    id: 2,
    name: "Dropdown Content - 2",
    clickHandlerFunc: (e, id, name) => {
      console.log("Button Clicked", id, name);
    },
  },
  {
    id: 3,
    name: "Dropdown Content - 3",
    clickHandlerFunc: (e, id, name) => {
      console.log("Button Clicked", id, name);
    },
  },
];

// Case 1: Dropdown Renders properly or not
it("Case 1: Dropdown Component Renders Correctly", () => {
  const dropdownComponentTree = renderer
    .create(<Dropdown dropdownName="Dropdown" dropdownList={dropdownList} />)
    .toJSON();
  expect(dropdownComponentTree).toMatchSnapshot();
});

// Case 2: Checks the Dropdown Button Test id is correct or not
it("Case 2: Checks the Dropdown Button Test id is correct or not", () => {
  const { getByTestId } = render(
    <Dropdown dropdownName="Dropdown" dropdownList={dropdownList} />
  );
  expect(getByTestId("dropdown-button")).toBeInTheDocument();
});

// Case 3: Checks the number of the dropdown buttons
it("Case 3: Checks the number of the dropdown buttons", () => {
  const { getAllByTestId } = render(
    <Dropdown dropdownName="Dropdown" dropdownList={dropdownList} />
  );
  expect(getAllByTestId("dropdown-content-button").length).toEqual(3);
});

// Case 4: Checks the dropdown name is correct or not
it("Case 4: Checks the dropdown name is correct or not", () => {
  const { getByText } = render(
    <Dropdown dropdownName="Dropdown" dropdownList={dropdownList} />
  );
  expect(getByText("Dropdown")).toBeInTheDocument();
});

/**
 * @name TestComponent
 * @details  example use case of the dropdown button component
 * @returns Dropdown button component with the updated count
 */
const TestComponent = () => {
  const [firstDropdownValue, setFirstDropdownValue] = useState(0);
  const [secondDropdownValue, setSecondDropdownValue] = useState(0);
  const [thirdDropdownValue, setThirdDropdownValue] = useState(0);

  const dropdownList = [
    {
      id: 1,
      name: `Dropdown Content - 1 | Value: ${firstDropdownValue}`,
      clickHandlerFunc: (e, id, name) => {
        setFirstDropdownValue(firstDropdownValue + 1);
      },
    },
    {
      id: 2,
      name: `Dropdown Content - 2 | Value: ${secondDropdownValue}`,
      clickHandlerFunc: (e, id, name) => {
        setSecondDropdownValue(secondDropdownValue + 1);
      },
    },
    {
      id: 3,
      name: `Dropdown Content - 3 | Value: ${thirdDropdownValue}`,
      clickHandlerFunc: (e, id, name) => {
        setThirdDropdownValue(thirdDropdownValue + 1);
      },
    },
  ];

  return <Dropdown dropdownName="Dropdown" dropdownList={dropdownList} />;
};

// Case 5: Checks the functiona
it("Case 5: Dropdown Button Click Check", () => {
  const { getByText } = render(<TestComponent />);

  // Click event using JEST for all the dropdown buttons
  fireEvent.click(getByText("Dropdown Content - 1 | Value: 0"));
  fireEvent.click(getByText("Dropdown Content - 2 | Value: 0"));
  fireEvent.click(getByText("Dropdown Content - 3 | Value: 0"));

  // validate the button click returns the correct resutl
  expect(getByText("Dropdown Content - 1 | Value: 1")).toBeInTheDocument();
  expect(getByText("Dropdown Content - 2 | Value: 1")).toBeInTheDocument();
  expect(getByText("Dropdown Content - 3 | Value: 1")).toBeInTheDocument();
});
