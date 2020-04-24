// react
import React, { useState } from "react";

// modal
import Modal from "./modal";

// button
import Button from "../button/button";
import Textbox from "../textbox/textbox";

// styled-component
import styled from "styled-components";

// styles
import "./modalExampleSecond.css";

// assets
import RobotImage from "../../assets/robo.png";

const ModalExample = () => {
  const [smallModalIsOpen, setSmallModalIsOpen] = useState(false);
  const [teamName, setTeamName] = useState("");

  const openModal = () => {
    setSmallModalIsOpen(true);
  };

  const onModalClose = () => {
    setSmallModalIsOpen(false);
  };

  const Container = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const ButtonContainer = styled.div`
    margin-top: 16px;
    margin-bottom: 16px;
  `;

  const handleModalButtonClick = () => {
    console.log("modal button Clicked");
  };

  const handleModalTextboxChange = inputText => {
    setTeamName(inputText);
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
              Boost your productivity by making it easier for everyone to access
              boards in one location.
            </p>
          </div>
          <div className="modal-body-container-details-headerThree">
            <p className="modal-body-container-details-headerThree-content">
              Team Name
            </p>
          </div>
          <div className="modal-body-container-details-teamName">
            <Textbox
              placeHolder="e.g Taco's Co"
              canClear={false}
              handleChange={e => handleModalTextboxChange(e.target.value)}
            />
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
      <Container>
        <ButtonContainer>
          <Button handleClick={openModal} size="button-extra-large">
            Open the Trello Style Modal
          </Button>
        </ButtonContainer>
      </Container>
      <Modal size="medium" showModal={smallModalIsOpen} onClose={onModalClose}>
        <div className="modal-body">{getModalBodyDetails()}</div>
      </Modal>
    </>
  );
};

export default ModalExample;
