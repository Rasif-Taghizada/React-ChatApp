import React, { useEffect, useState } from "react";
import { StyledMessagePart } from "../styles/MessagePart.styled";
import { FaUserAlt, FaCamera, FaPhoneAlt } from "react-icons/fa";
import Messages from "./Messages";

const MessagePart = ({ user, addM }) => {
  const [userMessage, setUserMessage] = useState(user.messages);
  const [id, setId] = useState(user.id);

  const addMessage = (newMessage) => {
    setUserMessage((prev) => {
      return [...prev, newMessage];
    });
    addM(id, newMessage);
  };

  useEffect(() => {
    setUserMessage(user.messages);
    setId(user.id);
  }, [user]);

  return (
    <StyledMessagePart>
      <header>
        <div>
          <FaUserAlt />
          <p>{user.name}</p>
        </div>
        <div>
          <span></span>
          <FaPhoneAlt />
          <FaCamera />
        </div>
      </header>
      <Messages
        messages={user.messages}
        user={user.name}
        add={addMessage}
        set={setUserMessage}
      />
    </StyledMessagePart>
  );
};

export default MessagePart;
