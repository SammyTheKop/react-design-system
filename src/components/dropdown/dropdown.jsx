// react
import React from "react";

// prop-types
import { string, arrayOf, object } from "prop-types";

const Dropdown = ({ dropdownName, dropdownList, ...props }) => {
  const getDropdownLists = () => {
    return (
      <>
        {dropdownList.map((item) => {
          const { id, name } = item;

          return (
            <>
              <button
                type="button"
                className="dropdown-content-buttons"
                key={`${id} ${name}`}
                onClick={(event) => item.clickHandlerFunc(event, item)}
              >
                {name}
              </button>
              <style jsx>
                {`
                  /* Links inside the dropdown */
                  .dropdown-content-buttons {
                    background: whitesmoke;
                    margin: 0px;
                    border: 0px;
                    box-shadow: none;
                    color: black;
                    display: block;
                    width: 100%;
                  }

                  /* Change color of dropdown links on hover */
                  .dropdown-content-buttons:hover {
                    background: wheat;
                  }
                `}
              </style>
            </>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="dropdown-component" {...props}>
        <button className="dropdown-button">
          {dropdownName}
          <i className="dropdown-button-arrow-down"></i>
        </button>
        <div className="dropdown-content">{getDropdownLists()}</div>
      </div>
      <style jsx>
        {`
          /* Styles for the Dropdown Component */
          .dropdown-component {
            display: inline-block;
            position: relative;
          }

          .dropdown-component .dropdown-button {
            background: #4caf50;
            color: white;
            padding: 16px;
            font-weight: 700;
            border: none;
            cursor: pointer;
            min-width: 200px;
            border-radius: 4px;
          }

          .dropdown-component .dropdown-button-arrow-down {
            border: solid white;
            border-width: 0 3px 3px 0;
            display: inline-block;
            padding: 4px;
            transform: rotate(45deg);
            margin-left: 12px;
          }

          /* Dropdown Content (Hidden by Default) */
          .dropdown-component .dropdown-content {
            display: none;
            position: absolute;
            background: white;
            min-width: 200px;
            box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
            z-index: 1;
          }

          /* Show the dropdown menu on hover */
          .dropdown-component:hover .dropdown-content {
            display: block;
          }

          .dropdown-component .dropdown-button:hover {
            background: #3e8e41;
          }
        `}
      </style>
    </>
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
