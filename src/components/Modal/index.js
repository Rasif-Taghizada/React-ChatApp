import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import {
  StyledModalButton,
  StyledModalContainer,
  StyledModalForm,
  StyledModalInput,
} from "../styles/Modal.styled";

const Modal = ({ open, setOpen, addUser }) => {
  const [input, setInput] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, [open]);

  const addingUser = () => {
    if (input.trim() === "") {
      alert("Input field can't be empty!");
    } else {
      addUser({ name: input, id: Math.random(), messages: ["Salam"] });
      setOpen(false);
      setInput("");
    }
  };

  const submitForm = (e) => {
    addingUser();
    e.preventDefault();
  };

  if (!open) {
    return <StyledModalInput ref={inputRef} style={{ display: "none" }} />;
  }

  return ReactDOM.createPortal(
    <StyledModalContainer>
      <StyledModalForm onSubmit={submitForm}>
        <label>Enter The User...</label>
        <StyledModalInput
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <div>
          <StyledModalButton
            type="button"
            bg="#4f0594"
            onClick={() => setOpen(false)}
          >
            Close
          </StyledModalButton>
          <StyledModalButton type="submit" bg="#892fde">
            Add
          </StyledModalButton>
        </div>
      </StyledModalForm>
    </StyledModalContainer>,
    document.querySelector("#modal")
  );
};

export default Modal;
