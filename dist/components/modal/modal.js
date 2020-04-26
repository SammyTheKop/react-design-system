import _slicedToArray from "/home/samghosh/Documents/Design-System/learnstorybook-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "/home/samghosh/Documents/Design-System/learnstorybook-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties";
// react and react hooks
import React, { useState, useEffect, useRef } from "react"; // classnames package

import classnames from "classnames"; // prop-types

// styles
import "./modal.css"; // custom hook

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
  return /*#__PURE__*/React.createElement("div", Object.assign({
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
  }, "\xD7"), children));
};

Modal.defaultProps = {
  classname: "",
  showModal: false,
  onClose: function onClose() {},
  size: "medium"
};
export default Modal;