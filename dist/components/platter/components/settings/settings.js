import _slicedToArray from "/home/samghosh/Documents/Design-System/learnstorybook-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray";
// react
import React, { useState } from "react"; // prop-types

// styles
import "./settings.css";
import Textbox from "../../../textbox/textbox";
import Button from "../../../button/button";
import Modal from "../../../modal/modal"; // assets

import RobotImage from "../../../../assets/robo.png";

var Settings = function Settings(_ref) {
  var teamName = _ref.teamName;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      smallModalIsOpen = _useState2[0],
      setSmallModalIsOpen = _useState2[1];

  var _useState3 = useState({
    modalText: "You are about to update the Team Name",
    modalPrompt: "Are you sure?"
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      modalText = _useState4[0],
      setModalText = _useState4[1];

  var onModalClose = function onModalClose() {
    setSmallModalIsOpen(false);
  };

  var modalOpen = function modalOpen(type) {
    if (type === "update") {
      setModalText({
        modalText: "You are about to update the Team Name",
        modalPrompt: "Are you sure?"
      });
    } else {
      setModalText({
        modalText: "You are about to Delete the Team",
        modalPrompt: "Are you sure?"
      });
    }

    setSmallModalIsOpen(true);
  };

  var onSaveButtonClick = function onSaveButtonClick() {
    modalOpen("update");
  };

  var onDeleteButtonClicked = function onDeleteButtonClicked() {
    modalOpen("delete");
  };

  var handleModalButtonClick = function handleModalButtonClick() {
    console.log("modal button Clicked");
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
    var modalContent = modalText.modalText,
        modalSmallerContent = modalText.modalPrompt;
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
    }, modalContent)), /*#__PURE__*/React.createElement("div", {
      className: "modal-body-container-details-headerThree"
    }, /*#__PURE__*/React.createElement("p", {
      className: "modal-body-container-details-headerThree-content"
    }, modalSmallerContent)), /*#__PURE__*/React.createElement("div", {
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

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "settings-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "settings-container-contents"
  }, /*#__PURE__*/React.createElement("div", {
    className: "settings-container-contents-teamName"
  }, /*#__PURE__*/React.createElement("p", {
    className: "settings-container-contents-teamName-content"
  }, "Team Name"), /*#__PURE__*/React.createElement(Textbox, {
    value: teamName
  })), /*#__PURE__*/React.createElement("div", {
    className: "settings-container-contents-buttons"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onSaveButtonClick,
    size: "button-large"
  }, "Update Team Name")), /*#__PURE__*/React.createElement("div", {
    className: "settings-container-contents-delete"
  }, /*#__PURE__*/React.createElement("p", {
    className: "settings-container-contents-delete-content"
  }, "Team Name"), /*#__PURE__*/React.createElement(Textbox, {
    value: teamName,
    readOnly: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "settings-container-contents-buttons"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onDeleteButtonClicked,
    size: "button-large"
  }, "Delete Team")))), /*#__PURE__*/React.createElement(Modal, {
    size: "medium",
    showModal: smallModalIsOpen,
    onClose: onModalClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, getModalBodyDetails())));
};

export default Settings;