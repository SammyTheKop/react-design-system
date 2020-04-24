// react
import React, { useState } from "react";

// components
import Card from "../../../card/card";

// styles
import "./members.css";
import Button from "../../../button/button";
import Dropdown from "../../../dropdown/dropdown";
import Textbox from "../../../textbox/textbox";

const Members = ({ teamName }) => {
  const userData = [
    {
      id: 1,
      firstName: "Samrat",
      lastName: "Ghosh",
      email: "samrat@hellotars.com",
      status: "Read",
    },
    {
      id: 2,
      firstName: "Vinit",
      lastName: "Agrawal",
      email: "vinit@hellotars.com",
      status: "Read",
    },
    {
      id: 3,
      firstName: "Ish",
      lastName: "Jindal",
      email: "ish@hellotars.com",
      status: "Write",
    },
    {
      id: 4,
      firstName: "",
      lastName: "",
      email: "febin@hellotars.com",
      status: "Pending",
    },
  ];

  const [newTeamName, setNewTeamName] = useState("");

  const dropdownList = [
    {
      id: 1,
      name: "Read",
      clickHandlerFunc: (e, id, name) => {
        console.log("Button Clicked", id, name);
      },
    },
    {
      id: 2,
      name: "Write",
      clickHandlerFunc: (e, id, name) => {
        console.log("Button Clicked", id, name);
      },
    },
  ];

  const handleRemoveButton = (firstName, lastName, email) => {
    console.log(firstName, lastName, email);
  };

  const getCardList = () => {
    return (
      <div className="members-container-content-list">
        {userData.map((item) => {
          const { firstName, lastName, email, status } = item;
          return (
            <>
              <div className="members-container-content-list-details">
                <p className="members-container-content-list-details-initials">
                  <span>
                    {firstName.charAt(0)}
                    {lastName.charAt(0)}
                  </span>
                </p>
                <p className="members-container-content-list-details-name">
                  {firstName} {lastName}
                </p>
                <p className="members-container-content-list-details-email">
                  {email}
                </p>
              </div>
              <div className="members-container-content-list-details-buttons">
                <div className="members-container-content-list-details-status">
                  {status === "Pending" ? (
                    <Button size="button-small" disabled={true}>
                      Pending
                    </Button>
                  ) : (
                    <Dropdown
                      dropdownName={status}
                      dropdownList={dropdownList}
                    />
                  )}
                </div>
                <div className="members-container-content-list-details-remove">
                  <Button
                    size="button-small"
                    onClick={() =>
                      handleRemoveButton(firstName, lastName, email)
                    }
                  >
                    Remove
                  </Button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    );
  };

  const handleAddTeam = (name) => {
    setNewTeamName(name);
  };

  const handleAddTeamButton = (name) => {
    console.log(name);
  };

  const getMembersCardData = (name) => {
    return (
      <div className="members-container-content">
        <h4 className="members-container-content-header">{name} Members</h4>
        <p>
          Team members can view and join all Team Visible chatbots and create
          new chatbots in the team.
        </p>
        {userData.length > 0 && getCardList()}
        <div className="members-container-content-addteams">
          <Textbox
            placeHolder="Create new Team"
            canClear={false}
            value={newTeamName}
            handleChange={(e) => handleAddTeam(e.target.value)}
          />
          {newTeamName ? (
            <Button
              onClick={() => handleAddTeamButton(newTeamName)}
              disabled={false}
            >
              Create Team
            </Button>
          ) : (
            <Button disabled={true}>Create Team</Button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="members-container">
      <Card>{getMembersCardData(teamName)}</Card>
    </div>
  );
};

export default Members;
