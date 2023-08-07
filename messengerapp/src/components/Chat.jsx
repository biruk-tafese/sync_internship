import React, { useState, useEffect, useRef } from "react";
import { Message } from "./Message";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { SendMessage } from "./SendMessage"; // Update the import statement

const style = {
  main: `flex flex-col p-[10px] relative`,
};

export const Chat = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <main className={style.main}>
        {/* Chat message components */}
        {messages &&
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
        <SendMessage scroll={scroll}/>
      </main>

      <span ref={scroll}></span>
    </>
  );
};
