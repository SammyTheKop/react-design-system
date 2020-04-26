import _taggedTemplateLiteral from "/home/samghosh/Documents/Design-System/learnstorybook-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900');\n\n  body {\n    ", "\n\n    margin: 16px;\n    overflow-y: auto;\n    overflow-x: hidden;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-size: ", "px;\n  color: ", ";\n\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-tap-highlight-color: transparent;\n  -webkit-overflow-scrolling: touch;\n\n  * {\n    box-sizing: border-box;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-weight: ", ";\n    margin: 0;\n    padding: 0;\n  }\n\n  button,\n  input,\n  textarea,\n  select {\n    outline: none;\n    font-family: ", ";\n  }\n\n  sub,\n  sup {\n    font-size: 0.8em;\n  }\n\n  sub {\n    bottom: -0.2em;\n  }\n\n  sup {\n    top: -0.2em;\n  }\n\n  b,\n  em {\n    font-weight: ", ";\n  }\n\n  hr {\n    border: none;\n    border-top: 1px solid ", ";\n    clear: both;\n    margin-bottom: 1.25rem;\n  }\n\n  code,\n  pre {\n    font-family: ", ";\n    font-size: ", "px;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  code {\n    display: inline-block;\n    padding-left: 2px;\n    padding-right: 2px;\n    vertical-align: baseline;\n\n    color: ", ";\n  }\n\n  pre {\n    line-height: 18px;\n    padding: 11px 1rem;\n    white-space: pre-wrap;\n\n    background: rgba(0, 0, 0, 0.05);\n    color: ", ";\n    border-radius: 3px;\n    margin: 1rem 0;\n  }\n\n  &.ReactModal__Body--open {\n    overflow: hidden;\n    &.hide-intercom #intercom-container {\n      display: none;\n    }\n  }\n\n  .ReactModalPortal > div {\n    opacity: 0;\n  }\n\n  .ReactModalPortal .ReactModal__Overlay {\n    transition: all 200ms ease-in;\n\n    &--after-open {\n      opacity: 1;\n    }\n    &--before-close {\n      opacity: 0;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import { createGlobalStyle, css } from "styled-components";
import { color, typography } from "./styles";
export var bodyStyles = css(_templateObject(), typography.type.primary, typography.size.s3, color.darkest, typography.weight.regular, typography.type.primary, typography.weight.bold, color.border, typography.type.code, typography.size.s2 - 1, color.secondary, color.darkest);
export var GlobalStyle = createGlobalStyle(_templateObject2(), bodyStyles);