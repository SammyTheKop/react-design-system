// react
import React from "react";

// prop-types
import { node, string, oneOf } from "prop-types";

// classnames package
import classNames from "classnames";

/**
 * @name Card
 * @description function to create the card component
 * @param className
 * @param children
 * @param type
 * @param ...props (other props)
 * @returns card component
 */
const Card = ({ classname, children, type, ...props }) => {
  return (
    <>
      <div
        className={classNames(classname, type, "card-component")}
        data-testid="card"
        {...props}
      >
        {children}
      </div>
      <style jsx>
        {`
          /* Styles for the Card Component */
          .card-component {
            border-radius: 4px;
            height: 100%;
            padding: 16px;
            font-weight: 700;
          }

          /* Keep adding the colors of the background colors */
          .card-component-background-1 {
            background-color: #0079bf;
            color: white;
          }

          .card-component-background-2 {
            background-color: #cd5a91;
            color: white;
          }

          .card-component-background-3 {
            background-color: #89609e;
            color: white;
          }

          .card-component-background-4 {
            background-color: white;
            color: black;
          }

          /* Styles for the Types of Cards */
          .normal-card {
            display: flex;
            align-items: center;
          }

          .image-card {
            background-image: url("/modalBackground.svg");
            background-repeat: no-repeat;
            background-size: cover;
            color: black;
          }
        `}
      </style>
    </>
  );
};

Card.propTypes = {
  children: node.isRequired,
  classname: string,
  type: oneOf(["normal-card", "image-card"]),
};

Card.defaultProps = {
  classname: "card-component-background-1",
  type: "normal-card",
};

export default Card;
