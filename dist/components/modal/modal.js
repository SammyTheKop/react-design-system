import _slicedToArray from "/home/samghosh/Documents/Design-System/learnstorybook-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "/home/samghosh/Documents/Design-System/learnstorybook-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties";
// react and react hooks
import React, { useState, useEffect, useRef } from "react"; // classnames package

import classnames from "classnames"; // prop-types

// custom hook
import handleClickOutside from "../../common-hooks/useHandleClickOutsie";

var Modal = function Modal(_ref) {
  var classname = _ref.classname,
      showModal = _ref.showModal,
      children = _ref.children,
      onClose = _ref.onClose,
      size = _ref.size,
      props = _objectWithoutProperties(_ref, ["classname", "showModal", "children", "onClose", "size"]);

  var _useState = useState(showModal),
      _useState2 = _slicedToArray(_useState, 2),
      isVisible = _useState2[0],
      setVisibility = _useState2[1];

  var modalRef = useRef(null);
  useEffect(function () {
    setVisibility(showModal);
  }, [showModal]);

  var closeModal = function closeModal() {
    setVisibility(false);
    onClose();
  };

  var handlekeyPress = function handlekeyPress(e) {
    if (e.key === "Enter") {
      setVisibility(false);
      onClose();
    }
  };

  useEffect(function () {
    var handler = handleClickOutside(modalRef, closeModal);

    if (isVisible) {
      document.addEventListener("click", handler);
    }

    return function () {
      document.removeEventListener("click", handler);
    };
  });

  var handleEsc = function handleEsc(e) {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  useEffect(function () {
    if (isVisible) {
      document.addEventListener("keydown", handleEsc, false);
    }

    return function () {
      document.removeEventListener("keydown", handleEsc, false);
    };
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", Object.assign({
    className: classnames(classname, "modal", {
      show: isVisible
    })
  }, props, {
    "data-testid": "modal-container"
  }), /*#__PURE__*/React.createElement("div", {
    className: classnames("modal-content", size),
    ref: modalRef
  }, /*#__PURE__*/React.createElement("span", {
    role: "button",
    onKeyPress: handlekeyPress,
    tabIndex: 0,
    className: "close-icon",
    onClick: closeModal
  }, "\xD7"), children)), /*#__PURE__*/React.createElement("style", {
    jsx: true
  }, "\n          /* Styles for the Modal Component */\n          .modal {\n            display: none; /* Hidden by default */\n            position: fixed; /* Stay in place */\n            z-index: 999; /* Sit on top */\n            left: 0;\n            top: 0;\n            width: 100%; /* Full width */\n            height: 100%; /* Full height */\n            overflow: auto; /* Enable scroll if needed */\n            background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\n          }\n\n          .modal .modal-content {\n            background-color: #fefefe;\n            position: relative;\n            border-radius: 3px;\n            margin: auto;\n            overflow: hidden;\n          }\n\n          .modal-content.large {\n            width: 90%;\n            height: 90%;\n          }\n\n          .modal-content.medium {\n            width: 75%;\n            height: 75%;\n          }\n\n          .modal-content.small {\n            width: 50%;\n            width: 50%;\n          }\n\n          .modal .modal-content.fadein {\n            animation-name: fadein;\n            animation-duration: 0.4s;\n            display: block;\n          }\n\n          .modal .modal-header {\n            padding: 15px;\n            text-align: left;\n            border-bottom: 1px solid #ececec;\n          }\n\n          .modal .modal-body {\n            text-align: left;\n            min-height: 100px;\n          }\n\n          .modal .modal-footer {\n            padding: 15px;\n            text-align: left;\n            border-top: 1px solid #e5e5e5;\n            background: #ececec;\n            border-radius: 0 0 8px 8px;\n          }\n\n          .close-icon {\n            position: absolute;\n            right: 15px;\n            top: 5px;\n            cursor: pointer;\n            font-size: 30px;\n          }\n\n          .modal.show {\n            display: flex;\n          }\n\n          /* Add Animation */\n          @keyframes fadein {\n            from {\n              opacity: 0;\n            }\n            to {\n              opacity: 1;\n            }\n          }\n        "));
};

Modal.defaultProps = {
  classname: "",
  showModal: false,
  onClose: function onClose() {},
  size: "medium"
};
export default Modal;