import React, { useEffect, useRef } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import {
  StyledInput,
  StyledInputForm,
  StyledMessage,
  StyledMessages,
} from "../styles/MessagePart.styled";

const Messages = ({ messages, user, add, set }) => {
  const inputRef = useRef();

  const addMessage = (e) => {
    e.preventDefault();
    if (inputRef.current.value.trim() !== "") {
      add(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, [user]);

  return (
    <StyledMessages>
      {messages?.map((message, index) => (
        <StyledMessage person={index !== 0 && "me"} key={index}>
          {message}
        </StyledMessage>
      ))}
      <StyledInputForm onSubmit={addMessage}>
        <StyledInput ref={inputRef} placeholder="Enter your Message..." />
        <button type="submit">
          <FaArrowAltCircleUp />
        </button>
      </StyledInputForm>
    </StyledMessages>
  );
};

export default Messages;
