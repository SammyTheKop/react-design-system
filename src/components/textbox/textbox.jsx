// react
import React, { useState, useRef, useEffect } from "react";

// classnames package
import classnames from "classnames";

// prop-types
import { node, string, bool, func, oneOf } from "prop-types";

const Textbox = ({
  classname,
  children,
  readOnly,
  value,
  handleChange,
  handleClearValue,
  type,
  ariaLabel,
  isRequired,
  canClear,
  placeHolder,
  ...props
}) => {
  const [textValue, setTextValue] = useState(value);
  const textInput = useRef(null);

  useEffect(() => {
    if (textValue !== value) {
      setTextValue(value);
    }
  }, [value]);

  const updateTextValue = (e) => {
    setTextValue(e.target.value);
    handleChange(e);
  };

  const clearField = () => {
    setTextValue("");
    handleClearValue();
    textInput.current.focus();
  };

  return (
    <>
      <div
        className={classnames(classname, "textbox-component", {
          disabled: readOnly,
        })}
      >
        <input
          type={type}
          value={textValue}
          onChange={updateTextValue}
          readOnly={readOnly}
          aria-label={ariaLabel}
          required={isRequired}
          aria-required={isRequired}
          placeholder={placeHolder}
          data-testid="textbox"
          ref={textInput}
          className={classnames(
            { disabled: readOnly },
            { "textbox-component-disabled": readOnly }
          )}
          {...props}
        />
        {canClear && !readOnly && textValue.length > 0 && (
          <div
            className="clear"
            role="button"
            tabIndex="0"
            aria-pressed="false"
            aria-label="clear-textbox"
            onClick={clearField}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                clearField(e);
              }
            }}
            data-testid="clear-textbox"
          >
            <span className="clear__icon">&times;</span>
          </div>
        )}
        {children}
      </div>
      <style jsx>
        {`
          /* Styles for the Textbox Component */
          .textbox-component {
            position: relative;
            display: inline-block;
            width: 100%;
          }

          .textbox-component input {
            min-height: 48px;
            font-size: 16px;
            width: 100%;
            box-sizing: border-box;
            background-color: #fafbfc;
            border: none;
            box-shadow: inset 0 0 0 2px #dfe1e6;
            color: #172b4d;
            box-sizing: border-box;
            border-radius: 3px;
            display: block;
            line-height: 20px;
            padding: 8px 12px;
            transition-property: background-color, border-color, box-shadow;
            transition-duration: 85ms;
            transition-timing-function: ease;
            -webkit-appearance: none;
          }

          .textbox-component input::-ms-clear,
          .textbox-component input::-ms-reveal {
            display: none;
          }

          .textbox-component .clear {
            position: absolute;
            top: 0;
            bottom: 0px;
            right: 0;
            color: #282c34;
            margin-right: 5px;
            cursor: pointer;
            display: flex;
            align-items: center;
          }

          .textbox-component .clear .clear__icon {
            display: flex;
            justify-content: center;
            align-items: center;
            border: solid 1px;
            border-radius: 50%;
            height: 14px;
            width: 14px;
            padding: 0 0 2px 1px;
          }

          .textbox-component input[type="text"]:focus {
            background: #fff;
            border: none;
            box-shadow: inset 0 0 0 2px #0079bf;
          }

          .textbox-component input[type="text"]:focus:hover {
            background: #fff;
            border: none;
            box-shadow: inset 0 0 0 2px #0079bf;
          }

          .textbox-component .textbox-component-disabled:focus {
            background-color: #fafbfc !important;
            border: none !important;
            box-shadow: inset 0 0 0 2px #dfe1e6 !important;
          }

          .textbox-component input[type="text"]:hover {
            background-color: #ebecf0;
            border: none;
            box-shadow: inset 0 0 0 2px #dfe1e6;
          }
        `}
      </style>
    </>
  );
};

Textbox.propTypes = {
  children: node,
  handleChange: func,
  handleClearValue: func,
  readOnly: bool,
  classname: string,
  value: string,
  type: oneOf(["text", "email", "password"]),
  ariaLabel: string,
  isRequired: bool,
  canClear: bool,
  placeHolder: string,
};

Textbox.defaultProps = {
  children: null,
  handleChange: () => {},
  handleClearValue: () => {},
  readOnly: false,
  classname: "",
  value: "",
  type: "text",
  ariaLabel: "textbox",
  isRequired: false,
  canClear: true,
  placeHolder: "",
};

export default Textbox;
