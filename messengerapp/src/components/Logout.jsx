import React from "react";
import { auth } from "../firebase";

const style = {
  button: {
    backgroundColor: "white",
    padding: "0.5rem",
    width: "5rem",
    borderRadius: "5px", // Added border radius
  },
  buttonHover: {
    backgroundColor: "brown",
    cursor: "pointer",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  },
};

export default function Logout() {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const buttonStyle = isHovered
    ? { ...style.button, ...style.buttonHover }
    : style.button;

  const signOut = () => {
    signOut(auth);
  };
  return (
    <button
      onClick={() => auth.signOut()}
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      LogOut
    </button>
  );
}
