import _taggedTemplateLiteral from "/home/samghosh/Documents/Design-System/learnstorybook-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _slicedToArray from "/home/samghosh/Documents/Design-System/learnstorybook-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    margin-top: 16px;\n    margin-bottom: 16px;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// react
import React, { useState } from "react"; // modal

import Modal from "./modal"; // button

import Button from "../button/button"; // styled-component

import styled from "styled-components";

var ModalExample = function ModalExample() {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      smallModalIsOpen = _useState2[0],
      setSmallModalIsOpen = _useState2[1];

  var openSmallModal = function openSmallModal() {
    setSmallModalIsOpen(true);
  };

  var onSmallModalClose = function onSmallModalClose() {
    setSmallModalIsOpen(false);
  };

  var Container = styled.div(_templateObject());
  var ButtonContainer = styled.div(_templateObject2());
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(ButtonContainer, null, /*#__PURE__*/React.createElement(Button, {
    handleClick: openSmallModal,
    size: "button-extra-large"
  }, "Open the Modal"))), /*#__PURE__*/React.createElement(Modal, {
    showModal: smallModalIsOpen,
    onClose: onSmallModalClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, "Modal Content")));
};

export default ModalExample;