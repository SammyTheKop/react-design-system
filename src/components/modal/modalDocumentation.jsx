// react
import React, { useState } from "react";

// modal
import Modal from "./modal";

// button
import Button from "../button/button";

// styled-component
import styled from "styled-components";

const ModalDocumentation = () => {
  const [smallModalIsOpen, setSmallModalIsOpen] = useState(false);
  const [mediumModalIsOpen, setMediumModalIsOpen] = useState(false);
  const [largeModalIsOpen, setLargeModalIsOpen] = useState(false);

  const openSmallModal = () => {
    setSmallModalIsOpen(true);
  };

  const onSmallModalClose = () => {
    setSmallModalIsOpen(false);
  };

  const openMediumModal = () => {
    setMediumModalIsOpen(true);
  };

  const onMediumModalClose = () => {
    setMediumModalIsOpen(false);
  };

  const openLargeModal = () => {
    setLargeModalIsOpen(true);
  };

  const onLargeModalClose = () => {
    setLargeModalIsOpen(false);
  };

  const Container = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const ButtonContainer = styled.div`
    margin-top: 16px;
    margin-bottom: 16px;
  `;

  return (
    <>
      <Container>
        <ButtonContainer>
          <Button handleClick={openSmallModal} size="button-extra-large">
            Open the Modal | Size: Small
          </Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button handleClick={openMediumModal} size="button-extra-large">
            Open the Modal | Size: Medium
          </Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button handleClick={openLargeModal} size="button-extra-large">
            Open the Modal | Size: Large
          </Button>
        </ButtonContainer>
      </Container>
      <Modal
        showModal={smallModalIsOpen}
        onClose={onSmallModalClose}
        size="small"
      >
        <div className="modal-header">Modal Header</div>
        <div className="modal-body">Modal Content</div>
        <div className="modal-footer">Modal Footer</div>
      </Modal>
      <Modal showModal={mediumModalIsOpen} onClose={onMediumModalClose}>
        <div className="modal-header">Modal Header</div>
        <div className="modal-body">Modal Content</div>
        <div className="modal-footer">Modal Footer</div>
      </Modal>
      <Modal
        showModal={largeModalIsOpen}
        onClose={onLargeModalClose}
        size="large"
      >
        <div className="modal-header">Modal Header</div>
        <div className="modal-body">Modal Content</div>
        <div className="modal-footer">Modal Footer</div>
      </Modal>
    </>
  );
};

export default ModalDocumentation;
