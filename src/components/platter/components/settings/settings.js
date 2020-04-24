// react
import React, { useState } from "react";

// prop-types
import { string } from "prop-types";

// styles
import "./settings.css";
import Textbox from "../../../textbox/textbox";
import Button from "../../../button/button";
import Modal from "../../../modal/modal";

// assets
import RobotImage from "../../../../assets/robo.png";

const Settings = ({ teamName }) => {
  const [smallModalIsOpen, setSmallModalIsOpen] = useState(false);
  const [modalText, setModalText] = useState({
    modalText: "You are about to update the Team Name",
    modalPrompt: "Are you sure?",
  });

  const onModalClose = () => {
    setSmallModalIsOpen(false);
  };

  const modalOpen = (type) => {
    if (type === "update") {
      setModalText({
        modalText: "You are about to update the Team Name",
        modalPrompt: "Are you sure?",
      });
    } else {
      setModalText({
        modalText: "You are about to Delete the Team",
        modalPrompt: "Are you sure?",
      });
    }
    setSmallModalIsOpen(true);
  };

  const onSaveButtonClick = () => {
    modalOpen("update");
  };

  const onDeleteButtonClicked = () => {
    modalOpen("delete");
  };

  const handleModalButtonClick = () => {
    console.log("modal button Clicked");
  };

  const getButtonBasedOnTeamName = () => {
    if (teamName) {
      return (
        <Button onClick={handleModalButtonClick} size="button-extra-large">
          Continue
        </Button>
      );
    }

    return (
      <Button
        disabled={true}
        onClick={handleModalButtonClick}
        size="button-extra-large"
      >
        Continue
      </Button>
    );
  };

  const getModalBodyDetails = () => {
    const {
      modalText: modalContent,
      modalPrompt: modalSmallerContent,
    } = modalText;

    return (
      <div className="modal-body-container">
        <div className="modal-body-container-details">
          <div className="modal-body-container-details-headerOne">
            <p className="modal-body-container-details-headerOne-content">
              Let's Build a Team
            </p>
          </div>
          <div className="modal-body-container-details-headerTwo">
            <p className="modal-body-container-details-headerTwo-content">
              {modalContent}
            </p>
          </div>
          <div className="modal-body-container-details-headerThree">
            <p className="modal-body-container-details-headerThree-content">
              {modalSmallerContent}
            </p>
          </div>
          <div className="modal-body-container-details-teamName">
            {getButtonBasedOnTeamName()}
          </div>
        </div>
        <div className="modal-body-container-image">
          <div className="modal-body-container-image-firstImage">
            <img
              src={RobotImage}
              className="modal-body-container-image-firstImage-roboImage"
              alt="Robot"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="settings-container">
        <div className="settings-container-contents">
          <div className="settings-container-contents-teamName">
            <p className="settings-container-contents-teamName-content">
              Team Name
            </p>
            <Textbox value={teamName} />
          </div>
          <div className="settings-container-contents-buttons">
            <Button onClick={onSaveButtonClick} size="button-large">
              Update Team Name
            </Button>
          </div>
          <div className="settings-container-contents-delete">
            <p className="settings-container-contents-delete-content">
              Team Name
            </p>
            <Textbox value={teamName} readOnly={true} />
          </div>
          <div className="settings-container-contents-buttons">
            <Button onClick={onDeleteButtonClicked} size="button-large">
              Delete Team
            </Button>
          </div>
        </div>
      </div>
      <Modal size="medium" showModal={smallModalIsOpen} onClose={onModalClose}>
        <div className="modal-body">{getModalBodyDetails()}</div>
      </Modal>
    </>
  );
};

Settings.propTypes = {
  teamName: string.isRequired,
};

export default Settings;
