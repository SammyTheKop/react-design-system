// react
import React, { useState } from "react";

// modal
import Modal from "./modal";

// button
import Button from "../button/button";

// styled-component
import styled from "styled-components";

const ModalExample = () => {
  const [smallModalIsOpen, setSmallModalIsOpen] = useState(false);

  const openSmallModal = () => {
    setSmallModalIsOpen(true);
  };

  const onSmallModalClose = () => {
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

  return (
    <>
      <Container>
        <ButtonContainer>
          <Button handleClick={openSmallModal} size="button-extra-large">
            Open the Modal
          </Button>
        </ButtonContainer>
      </Container>
      <Modal showModal={smallModalIsOpen} onClose={onSmallModalClose}>
        <div className="modal-body">Modal Content</div>
      </Modal>
    </>
  );
};

export default ModalExample;
