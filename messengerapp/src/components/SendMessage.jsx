import React from "react";
import { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const style = {
  form: {
    height: "3.5rem",
    width: "100%",
    maxWidth: "728px",
    display: "flex",
    fontSize: "1.6rem",
    position: "relative",
    bottom: "-20%",
  },
  input: {
    width: "100%",
    fontSize: "1.6rem",
    padding: "0.6rem",
    backgroundColor: "#000",
    color: "#fff",
    outline: "none",
    border: "none",
  },
  button: {
    width: "20%",
    backgroundColor: "#0f0", // corrected color code
  },
};

export const SendMessage = ({ scroll }) => {
  // Add curly braces to destruct the scroll prop
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Please enter a valid message");
      return;
    }
    const { uid, displayName } = auth.currentUser;

    await addDoc(collection(db, "messages"), {
      text: input,
      name: displayName,
      timestamp: serverTimestamp(),
    });

    setInput("");

    scroll.current.scrollIntoView({ behavior: "smooth" }); // Update to scroll.current
  };

  return (
    <form onSubmit={sendMessage} style={style.form}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={style.input}
        type="text"
        placeholder="message"
      />
      <button style={style.button} type="submit">
        send
      </button>
    </form>
  );
};
