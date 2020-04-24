// react
import React from "react";

// prop-types
import { string } from "prop-types";

// components
import Card from "../../../card/card";

// styles
import "./teamChatbots.css";

// assets
import RobotImage from "../../../../assets/robo.png";

const TeamChatbots = ({ teamName }) => {
  const chatbotNames = [
    {
      id: 1,
      chatbotName: "Marketing",
    },
    {
      id: 2,
      chatbotName: "Customer Success",
    },
    {
      id: 3,
      chatbotName: "Sales",
    },
    {
      id: 4,
      chatbotName: "Marketing",
    },
    {
      id: 5,
      chatbotName: "Customer Success",
    },
    {
      id: 6,
      chatbotName: "Sales",
    },
    {
      id: 7,
      chatbotName: "Marketing",
    },
    {
      id: 8,
      chatbotName: "Customer Success",
    },
    {
      id: 9,
      chatbotName: "Sales",
    },
  ];

  const getCardDetails = () => {
    return (
      <>
        {chatbotNames.map((item) => {
          let { chatbotName: name } = item;

          if (name.length > 9) {
            name = ` ${name.slice(0, 8)}...`;
          }
          return (
            <Card classname="card-component-background-4">
              <div className="team-chatbots-container-contents-details">
                <img src={RobotImage} alt="Robot" className="robot-image" />
                {name}
              </div>
            </Card>
          );
        })}
      </>
    );
  };

  return (
    <div className="team-chatbots-container">
      <p className="team-chatbots-container-header">{teamName} Chatbots</p>
      <div className="team-chatbots-container-contents">{getCardDetails()}</div>
    </div>
  );
};

TeamChatbots.propTypes = {
  teamName: string.isRequired,
};

export default TeamChatbots;
