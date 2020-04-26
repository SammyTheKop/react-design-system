import _slicedToArray from "/home/samghosh/Documents/Design-System/learnstorybook-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray";
// react
import React, { useState } from "react"; // components

import Platter from "./platter";
import Modal from "../modal/modal";
import Textbox from "../textbox/textbox";
import Button from "../button/button";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion"; // sub-components

import TeamChatbots from "./components/team/teamChatbots";
import Settings from "./components/settings/settings";
import Analyze from "./components/analyze/analyze";
import Members from "./components/members/members"; // styles

import "./platterExample.css"; // font-awesome

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faCommentAlt, faChartLine, faPlus, faAddressBook } from "@fortawesome/free-solid-svg-icons"; // assets

import RobotImage from "../../assets/robo.png";

var PlatterExample = function PlatterExample() {
  var numberOfTeams = [{
    id: 1,
    teamName: "Sales Team"
  }, {
    id: 2,
    teamName: "Marketing Team"
  }]; // const for managing the right side views based on the selection

  var _useState = useState(numberOfTeams[0].teamName),
      _useState2 = _slicedToArray(_useState, 2),
      selectedTeam = _useState2[0],
      setSelectedTeam = _useState2[1];

  var _useState3 = useState("team-chatbots"),
      _useState4 = _slicedToArray(_useState3, 2),
      viewType = _useState4[0],
      setViewType = _useState4[1]; // State Constants for Managing the Modal Data


  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      smallModalIsOpen = _useState6[0],
      setSmallModalIsOpen = _useState6[1];

  var _useState7 = useState(""),
      _useState8 = _slicedToArray(_useState7, 2),
      teamName = _useState8[0],
      setTeamName = _useState8[1];

  var openModal = function openModal() {
    setSmallModalIsOpen(true);
  };

  var onModalClose = function onModalClose() {
    setSmallModalIsOpen(false);
  };

  var handleSideNavClick = function handleSideNavClick(name, type) {
    setSelectedTeam(name);
    setViewType(type);
  };

  var getListValues = function getListValues(name) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
      onClick: function onClick() {
        return handleSideNavClick(name, "team-chatbots");
      },
      className: "platter-contents-container-sidenav-contents-header-list-values"
    }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
      icon: faCommentAlt,
      className: "icons"
    }), "Team Chatbots"), /*#__PURE__*/React.createElement("p", {
      onClick: function onClick() {
        return handleSideNavClick(name, "analyze");
      },
      className: "platter-contents-container-sidenav-contents-header-list-values"
    }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
      icon: faChartLine,
      className: "icons"
    }), "Analyze"), /*#__PURE__*/React.createElement("p", {
      onClick: function onClick() {
        return handleSideNavClick(name, "members");
      },
      className: "platter-contents-container-sidenav-contents-header-list-values"
    }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
      icon: faAddressBook,
      className: "icons"
    }), "Members"), /*#__PURE__*/React.createElement("p", {
      onClick: function onClick() {
        return handleSideNavClick(name, "settings");
      },
      className: "platter-contents-container-sidenav-contents-header-list-values"
    }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
      icon: faCog,
      className: "icons"
    }), "Settings"));
  };

  var getSideNavSettings = function getSideNavSettings() {
    var data = numberOfTeams.map(function (teams) {
      var name = teams.teamName;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AccordionItem, null, /*#__PURE__*/React.createElement(AccordionItemHeading, null, /*#__PURE__*/React.createElement(AccordionItemButton, null, name)), /*#__PURE__*/React.createElement(AccordionItemPanel, null, getListValues(name))));
    });
    return data;
  };

  var getCurrentContainerView = function getCurrentContainerView(name, type) {
    switch (type) {
      case "team-chatbots":
        return /*#__PURE__*/React.createElement(TeamChatbots, {
          teamName: name
        });

      case "analyze":
        return /*#__PURE__*/React.createElement(Analyze, null);

      case "members":
        return /*#__PURE__*/React.createElement(Members, {
          teamName: name
        });

      case "settings":
        return /*#__PURE__*/React.createElement(Settings, {
          teamName: name
        });

      default:
        return /*#__PURE__*/React.createElement(TeamChatbots, {
          teamName: name
        });
    }
  };

  var handleModalTextboxChange = function handleModalTextboxChange(inputText) {
    setTeamName(inputText);
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

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Platter, null, /*#__PURE__*/React.createElement("div", {
    className: "platter-contents-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "platter-contents-container-sidenav"
  }, /*#__PURE__*/React.createElement("p", {
    className: "platter-contents-container-sidenav-contents-header"
  }, "Organization (All Teams)"), /*#__PURE__*/React.createElement("p", {
    className: "platter-contents-container-sidenav-contents-teams",
    onClick: function onClick() {
      return openModal();
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "platter-contents-container-sidenav-contents-teams-name"
  }, "Teams"), /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faPlus
  })), numberOfTeams.length > 0 && /*#__PURE__*/React.createElement(Accordion, {
    allowZeroExpanded: true
  }, getSideNavSettings())), /*#__PURE__*/React.createElement("div", {
    className: "platter-contents-container-details"
  }, getCurrentContainerView(selectedTeam, viewType)))), /*#__PURE__*/React.createElement(Modal, {
    size: "medium",
    showModal: smallModalIsOpen,
    onClose: onModalClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, getModalBodyDetails())));
};

export default PlatterExample;