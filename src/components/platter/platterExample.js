// react
import React, { useState } from "react";

// components
import Platter from "./platter";
import Modal from "../modal/modal";
import Textbox from "../textbox/textbox";
import Button from "../button/button";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from "react-accessible-accordion";

// sub-components
import TeamChatbots from "./components/team/teamChatbots";
import Settings from "./components/settings/settings";
import Analyze from "./components/analyze/analyze";
import Members from "./components/members/members";

// styles
import "./platterExample.css";

// font-awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faCommentAlt,
  faChartLine,
  faPlus,
  faAddressBook
} from "@fortawesome/free-solid-svg-icons";

// assets
import RobotImage from "../../assets/robo.png";

const PlatterExample = () => {
  const numberOfTeams = [
    {
      id: 1,
      teamName: "Sales Team"
    },
    {
      id: 2,
      teamName: "Marketing Team"
    }
  ];

  // const for managing the right side views based on the selection
  const [selectedTeam, setSelectedTeam] = useState(numberOfTeams[0].teamName);
  const [viewType, setViewType] = useState("team-chatbots");

  // State Constants for Managing the Modal Data
  const [smallModalIsOpen, setSmallModalIsOpen] = useState(false);
  const [teamName, setTeamName] = useState("");

  const openModal = () => {
    setSmallModalIsOpen(true);
  };

  const onModalClose = () => {
    setSmallModalIsOpen(false);
  };

  const handleSideNavClick = (name, type) => {
    setSelectedTeam(name);
    setViewType(type);
  };

  const getListValues = name => {
    return (
      <>
        <p
          onClick={() => handleSideNavClick(name, "team-chatbots")}
          className="platter-contents-container-sidenav-contents-header-list-values"
        >
          <FontAwesomeIcon icon={faCommentAlt} className="icons" />
          Team Chatbots
        </p>
        <p
          onClick={() => handleSideNavClick(name, "analyze")}
          className="platter-contents-container-sidenav-contents-header-list-values"
        >
          <FontAwesomeIcon icon={faChartLine} className="icons" />
          Analyze
        </p>
        <p
          onClick={() => handleSideNavClick(name, "members")}
          className="platter-contents-container-sidenav-contents-header-list-values"
        >
          <FontAwesomeIcon icon={faAddressBook} className="icons" />
          Members
        </p>
        <p
          onClick={() => handleSideNavClick(name, "settings")}
          className="platter-contents-container-sidenav-contents-header-list-values"
        >
          <FontAwesomeIcon icon={faCog} className="icons" />
          Settings
        </p>
      </>
    );
  };

  const getSideNavSettings = () => {
    const data = numberOfTeams.map(teams => {
      const { teamName: name } = teams;

      return (
        <>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>{name}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>{getListValues(name)}</AccordionItemPanel>
          </AccordionItem>
        </>
      );
    });
    return data;
  };

  const getCurrentContainerView = (name, type) => {
    switch (type) {
      case "team-chatbots":
        return <TeamChatbots teamName={name} />;
      case "analyze":
        return <Analyze />;
      case "members":
        return <Members teamName={name} />;
      case "settings":
        return <Settings teamName={name} />;
      default:
        return <TeamChatbots teamName={name} />;
    }
  };

  const handleModalTextboxChange = inputText => {
    setTeamName(inputText);
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
      <Platter>
        <div className="platter-contents-container">
          <div className="platter-contents-container-sidenav">
            <p className="platter-contents-container-sidenav-contents-header">
              Organization (All Teams)
            </p>
            <p
              className="platter-contents-container-sidenav-contents-teams"
              onClick={() => openModal()}
            >
              <span className="platter-contents-container-sidenav-contents-teams-name">
                Teams
              </span>
              <FontAwesomeIcon icon={faPlus} />
            </p>
            {numberOfTeams.length > 0 && (
              <Accordion allowZeroExpanded={true}>
                {getSideNavSettings()}
              </Accordion>
            )}
          </div>
          <div className="platter-contents-container-details">
            {getCurrentContainerView(selectedTeam, viewType)}
          </div>
        </div>
      </Platter>
      <Modal size="medium" showModal={smallModalIsOpen} onClose={onModalClose}>
        <div className="modal-body">{getModalBodyDetails()}</div>
      </Modal>
    </>
  );
};

export default PlatterExample;
