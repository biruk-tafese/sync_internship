import React from "react";
import { auth } from "../firebase";
import classNames from "classnames";

const styles = `
.messageContainer {
  max-height: 200px; /* Set a maximum height for the container */
  overflow-y: auto; /* Add a scrollbar when content exceeds container height */
}

.message {
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.12);
  margin: 3rem;
  padding: 1px 5px;
  // border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

.name {
  margin-right:1rem;
  font-family:"Romans";
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: #e5e5ea;
  padding: 1.5rem;
}

.sent,
.received {
  background-color: #e5e5ea;
  color: #000000;
  float: left;
  border-bottom-right-radius: 100px;
}
`;

export const Message = ({ message }) => {
  try {
    const messageClass =
      message.uid === auth.currentUser.uid
        ? `${styles.sent}`
        : `${styles.received}`;
    return (
      <div style={styles.messageContainer}>
        <style>{styles}</style>
        <div className="message">
          <p className="name">{message.name}</p>
          <p>{message.text}</p>
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);
    // Handle the error appropriately
    return null;
  }
};
