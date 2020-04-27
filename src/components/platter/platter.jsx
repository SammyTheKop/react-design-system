// react
import React from "react";

// classnames
import classnames from "classnames";

// prop-types
import { string, node } from "prop-types";

const Platter = ({ classname, children, headerName, ...props }) => {
  return (
    <>
      <div className={classnames(classname, "platter-container")} {...props}>
        <div className="platter-container-header">{headerName}</div>
        <div className="platter-container-contents">{children}</div>
      </div>
      <style jsx>
        {`
          /* Styles for the Platter Component */
          .platter-container {
            background: #e2e4e6;
            border-radius: 6px;
            height: 100%;
            padding: 10px;
          }

          .platter-container-header {
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 700;
            margin-bottom: 16px;
          }

          .platter-container-contents {
            height: 90%;
            background-color: #c5c5c5;
            border-radius: 6px;
          }
        `}
      </style>
    </>
  );
};

Platter.propTypes = {
  classname: string,
  children: node.isRequired,
  headerName: string,
};

Platter.defaultProps = {
  classname: "",
  headerName: "My Chatbots",
};

export default Platter;
