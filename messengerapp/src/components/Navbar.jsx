import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./Signin";
import Logout from "./Logout";

import "./Css/Nav.css"; // Add this import statement to import the CSS file

export default function Navbar() {
  const [user] = useAuthState(auth);

  return (
    <div className="nav">
      <h1 className="heading">ChatApp</h1>
      {user ? <Logout /> : <SignIn />}
    </div>
  );
}
