// react
import React from "react"; // prop-types

// components
import Card from "../../../card/card"; // styles

import "./teamChatbots.css"; // assets

import RobotImage from "../../../../assets/robo.png";

var TeamChatbots = function TeamChatbots(_ref) {
  var teamName = _ref.teamName;
  var chatbotNames = [{
    id: 1,
    chatbotName: "Marketing"
  }, {
    id: 2,
    chatbotName: "Customer Success"
  }, {
    id: 3,
    chatbotName: "Sales"
  }, {
    id: 4,
    chatbotName: "Marketing"
  }, {
    id: 5,
    chatbotName: "Customer Success"
  }, {
    id: 6,
    chatbotName: "Sales"
  }, {
    id: 7,
    chatbotName: "Marketing"
  }, {
    id: 8,
    chatbotName: "Customer Success"
  }, {
    id: 9,
    chatbotName: "Sales"
  }];

  var getCardDetails = function getCardDetails() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, chatbotNames.map(function (item) {
      var name = item.chatbotName;

      if (name.length > 9) {
        name = " ".concat(name.slice(0, 8), "...");
      }

      return /*#__PURE__*/React.createElement(Card, {
        classname: "card-component-background-4"
      }, /*#__PURE__*/React.createElement("div", {
        className: "team-chatbots-container-contents-details"
      }, /*#__PURE__*/React.createElement("img", {
        src: RobotImage,
        alt: "Robot",
        className: "robot-image"
      }), name));
    }));
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "team-chatbots-container"
  }, /*#__PURE__*/React.createElement("p", {
    className: "team-chatbots-container-header"
  }, teamName, " Chatbots"), /*#__PURE__*/React.createElement("div", {
    className: "team-chatbots-container-contents"
  }, getCardDetails()));
};

export default TeamChatbots;