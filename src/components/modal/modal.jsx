// react and react hooks
import React, { useState, useEffect, useRef } from "react";

// classnames package
import classnames from "classnames";

// prop-types
import { string, func, bool, node, oneOf } from "prop-types";

// custom hook
import handleClickOutside from "../../common-hooks/useHandleClickOutsie";

const Modal = ({ classname, showModal, children, onClose, size, ...props }) => {
  const [isVisible, setVisibility] = useState(showModal);
  const modalRef = useRef(null);

  useEffect(() => {
    setVisibility(showModal);
  }, [showModal]);

  const closeModal = () => {
    setVisibility(false);
    onClose();
  };

  const handlekeyPress = (e) => {
    if (e.key === "Enter") {
      setVisibility(false);
      onClose();
    }
  };

  useEffect(() => {
    const handler = handleClickOutside(modalRef, closeModal);
    if (isVisible) {
      document.addEventListener("click", handler);
    }
    return () => {
      document.removeEventListener("click", handler);
    };
  });

  const handleEsc = (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener("keydown", handleEsc, false);
    }
    return () => {
      document.removeEventListener("keydown", handleEsc, false);
    };
  });

  return (
    <>
      <div
        className={classnames(classname, "modal", { show: isVisible })}
        {...props}
        data-testid="modal-container"
      >
        <div className={classnames("modal-content", size)} ref={modalRef}>
          <span
            role="button"
            onKeyPress={handlekeyPress}
            tabIndex={0}
            className="close-icon"
            onClick={closeModal}
          >
            &times;
          </span>
          {children}
        </div>
      </div>
      <style jsx>
        {`
          /* Styles for the Modal Component */
          .modal {
            display: none; /* Hidden by default */
            position: fixed; /* Stay in place */
            z-index: 999; /* Sit on top */
            left: 0;
            top: 0;
            width: 100%; /* Full width */
            height: 100%; /* Full height */
            overflow: auto; /* Enable scroll if needed */
            background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
          }

          .modal .modal-content {
            background-color: #fefefe;
            position: relative;
            border-radius: 3px;
            margin: auto;
            overflow: hidden;
          }

          .modal-content.large {
            width: 90%;
            height: 90%;
          }

          .modal-content.medium {
            width: 75%;
            height: 75%;
          }

          .modal-content.small {
            width: 50%;
            width: 50%;
          }

          .modal .modal-content.fadein {
            animation-name: fadein;
            animation-duration: 0.4s;
            display: block;
          }

          .modal .modal-header {
            padding: 15px;
            text-align: left;
            border-bottom: 1px solid #ececec;
          }

          .modal .modal-body {
            text-align: left;
            min-height: 100px;
          }

          .modal .modal-footer {
            padding: 15px;
            text-align: left;
            border-top: 1px solid #e5e5e5;
            background: #ececec;
            border-radius: 0 0 8px 8px;
          }

          .close-icon {
            position: absolute;
            right: 15px;
            top: 5px;
            cursor: pointer;
            font-size: 30px;
          }

          .modal.show {
            display: flex;
          }

          /* Add Animation */
          @keyframes fadein {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}
      </style>
    </>
  );
};

Modal.propTypes = {
  children: node.isRequired,
  classname: string,
  showModal: bool,
  onClose: func,
  size: oneOf(["large", "medium", "small"]),
};

Modal.defaultProps = {
  classname: "",
  showModal: false,
  onClose: () => {},
  size: "medium",
};

export default Modal;
