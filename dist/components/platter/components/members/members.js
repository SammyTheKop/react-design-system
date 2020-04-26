import _slicedToArray from "/home/samghosh/Documents/Design-System/learnstorybook-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray";
// react
import React, { useState } from "react"; // components

import Card from "../../../card/card"; // styles

import "./members.css";
import Button from "../../../button/button";
import Dropdown from "../../../dropdown/dropdown";
import Textbox from "../../../textbox/textbox";

var Members = function Members(_ref) {
  var teamName = _ref.teamName;
  var userData = [{
    id: 1,
    firstName: "Samrat",
    lastName: "Ghosh",
    email: "samrat@hellotars.com",
    status: "Read"
  }, {
    id: 2,
    firstName: "Vinit",
    lastName: "Agrawal",
    email: "vinit@hellotars.com",
    status: "Read"
  }, {
    id: 3,
    firstName: "Ish",
    lastName: "Jindal",
    email: "ish@hellotars.com",
    status: "Write"
  }, {
    id: 4,
    firstName: "",
    lastName: "",
    email: "febin@hellotars.com",
    status: "Pending"
  }];

  var _useState = useState(""),
      _useState2 = _slicedToArray(_useState, 2),
      newTeamName = _useState2[0],
      setNewTeamName = _useState2[1];

  var dropdownList = [{
    id: 1,
    name: "Read",
    clickHandlerFunc: function clickHandlerFunc(e, id, name) {
      console.log("Button Clicked", id, name);
    }
  }, {
    id: 2,
    name: "Write",
    clickHandlerFunc: function clickHandlerFunc(e, id, name) {
      console.log("Button Clicked", id, name);
    }
  }];

  var handleRemoveButton = function handleRemoveButton(firstName, lastName, email) {
    console.log(firstName, lastName, email);
  };

  var getCardList = function getCardList() {
    return /*#__PURE__*/React.createElement("div", {
      className: "members-container-content-list"
    }, userData.map(function (item) {
      var firstName = item.firstName,
          lastName = item.lastName,
          email = item.email,
          status = item.status;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: "members-container-content-list-details"
      }, /*#__PURE__*/React.createElement("p", {
        className: "members-container-content-list-details-initials"
      }, /*#__PURE__*/React.createElement("span", null, firstName.charAt(0), lastName.charAt(0))), /*#__PURE__*/React.createElement("p", {
        className: "members-container-content-list-details-name"
      }, firstName, " ", lastName), /*#__PURE__*/React.createElement("p", {
        className: "members-container-content-list-details-email"
      }, email)), /*#__PURE__*/React.createElement("div", {
        className: "members-container-content-list-details-buttons"
      }, /*#__PURE__*/React.createElement("div", {
        className: "members-container-content-list-details-status"
      }, status === "Pending" ? /*#__PURE__*/React.createElement(Button, {
        size: "button-small",
        disabled: true
      }, "Pending") : /*#__PURE__*/React.createElement(Dropdown, {
        dropdownName: status,
        dropdownList: dropdownList
      })), /*#__PURE__*/React.createElement("div", {
        className: "members-container-content-list-details-remove"
      }, /*#__PURE__*/React.createElement(Button, {
        size: "button-small",
        onClick: function onClick() {
          return handleRemoveButton(firstName, lastName, email);
        }
      }, "Remove"))));
    }));
  };

  var handleAddTeam = function handleAddTeam(name) {
    setNewTeamName(name);
  };

  var handleAddTeamButton = function handleAddTeamButton(name) {
    console.log(name);
  };

  var getMembersCardData = function getMembersCardData(name) {
    return /*#__PURE__*/React.createElement("div", {
      className: "members-container-content"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "members-container-content-header"
    }, name, " Members"), /*#__PURE__*/React.createElement("p", null, "Team members can view and join all Team Visible chatbots and create new chatbots in the team."), userData.length > 0 && getCardList(), /*#__PURE__*/React.createElement("div", {
      className: "members-container-content-addteams"
    }, /*#__PURE__*/React.createElement(Textbox, {
      placeHolder: "Create new Team",
      canClear: false,
      value: newTeamName,
      handleChange: function handleChange(e) {
        return handleAddTeam(e.target.value);
      }
    }), newTeamName ? /*#__PURE__*/React.createElement(Button, {
      onClick: function onClick() {
        return handleAddTeamButton(newTeamName);
      },
      disabled: false
    }, "Create Team") : /*#__PURE__*/React.createElement(Button, {
      disabled: true
    }, "Create Team")));
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "members-container"
  }, /*#__PURE__*/React.createElement(Card, null, getMembersCardData(teamName)));
};

export default Members;