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

import Button from "../button/button";
import Textbox from "../textbox/textbox"; // styled-component

import styled from "styled-components"; // styles

import "./modalExampleSecond.css"; // assets

import RobotImage from "../../assets/robo.png";

var ModalExample = function ModalExample() {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      smallModalIsOpen = _useState2[0],
      setSmallModalIsOpen = _useState2[1];

  var _useState3 = useState(""),
      _useState4 = _slicedToArray(_useState3, 2),
      teamName = _useState4[0],
      setTeamName = _useState4[1];

  var openModal = function openModal() {
    setSmallModalIsOpen(true);
  };

  var onModalClose = function onModalClose() {
    setSmallModalIsOpen(false);
  };

  var Container = styled.div(_templateObject());
  var ButtonContainer = styled.div(_templateObject2());

  var handleModalButtonClick = function handleModalButtonClick() {
    console.log("modal button Clicked");
  };

  var handleModalTextboxChange = function handleModalTextboxChange(inputText) {
    setTeamName(inputText);
  };

  var getButtonBasedOnTeamName = function getButtonBasedOnTeamName() {
    if (teamName) {
      return /*#__PURE__*/React.createElement(Button, {
        onClick: handleModalButtonClick,
        size: "button-extra-large"
      }, "Continue");
    }

    return /*#__PURE__*/React.createElement(Button, {
      disabled: true,
      onClick: handleModalButtonClick,
      size: "button-extra-large"
    }, "Continue");
  };

  var getModalBodyDetails = function getModalBodyDetails() {
    return /*#__PURE__*/React.createElement("div", {
      className: "modal-body-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal-body-container-details"
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal-body-container-details-headerOne"
    }, /*#__PURE__*/React.createElement("p", {
      className: "modal-body-container-details-headerOne-content"
    }, "Let's Build a Team")), /*#__PURE__*/React.createElement("div", {
      className: "modal-body-container-details-headerTwo"
    }, /*#__PURE__*/React.createElement("p", {
      className: "modal-body-container-details-headerTwo-content"
    }, "Boost your productivity by making it easier for everyone to access boards in one location.")), /*#__PURE__*/React.createElement("div", {
      className: "modal-body-container-details-headerThree"
    }, /*#__PURE__*/React.createElement("p", {
      className: "modal-body-container-details-headerThree-content"
    }, "Team Name")), /*#__PURE__*/React.createElement("div", {
      className: "modal-body-container-details-teamName"
    }, /*#__PURE__*/React.createElement(Textbox, {
      placeHolder: "e.g Taco's Co",
      canClear: false,
      handleChange: function handleChange(e) {
        return handleModalTextboxChange(e.target.value);
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "modal-body-container-details-teamName"
    }, getButtonBasedOnTeamName())), /*#__PURE__*/React.createElement("div", {
      className: "modal-body-container-image"
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal-body-container-image-firstImage"
    }, /*#__PURE__*/React.createElement("img", {
      src: RobotImage,
      className: "modal-body-container-image-firstImage-roboImage",
      alt: "Robot"
    }))));
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(ButtonContainer, null, /*#__PURE__*/React.createElement(Button, {
    handleClick: openModal,
    size: "button-extra-large"
  }, "Open the Trello Style Modal"))), /*#__PURE__*/React.createElement(Modal, {
    size: "medium",
    showModal: smallModalIsOpen,
    onClose: onModalClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, getModalBodyDetails())));
};

export default ModalExample;