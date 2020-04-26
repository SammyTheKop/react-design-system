// react
import React from "react";

// prop-types
import { string, arrayOf, object } from "prop-types";

// styles
import "./dropdown.css";

const Dropdown = ({ dropdownName, dropdownList, ...props }) => {
  const getDropdownLists = () => {
    return (
      <>
        {dropdownList.map((item) => {
          const { id, name } = item;

          return (
            <button
              type="button"
              className="dropdown-content-buttons"
              key={`${id} ${name}`}
              onClick={(event) => item.clickHandlerFunc(event, item)}
            >
              {name}
            </button>
          );
        })}
      </>
    );
  };

  return (
    <div className="dropdown-component" {...props}>
      <button className="dropdown-button">
        {dropdownName}
        <i className="dropdown-button-arrow-down"></i>
      </button>
      <div className="dropdown-content">{getDropdownLists()}</div>
    </div>
  );
};

Dropdown.propTypes = {
  dropdownName: string,
  dropdownList: arrayOf(object),
};

Dropdown.defaultProps = {
  dropdownName: "Dropdown",
};

export default Dropdown;
