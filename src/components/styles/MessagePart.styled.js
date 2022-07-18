import styled from "styled-components";

export const StyledMessagePart = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 50px;
  width: 60%;
  height: calc(100vh - 30px);
  background-color: aliceblue;
  position: relative;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  p {
    font-size: 30px;
  }

  svg {
    font-size: 25px;
    margin-right: 20px;

    &:hover {
      cursor: pointer;
      color: #0a6753;
    }
  }

  svg:nth-child(1) {
    font-size: 40px;
  }
`;

export const StyledMessages = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledMessage = styled.div`
  display: flex;
  align-items: center;
  align-self: ${({ person }) => (person === "me" ? "flex-end" : "flex-start")};
  background-color: ${({ person }) =>
    person === "me" ? "#46d5b6" : "#ffffff"};
  width: fit-content;
  min-height: 40px;
  padding: 0 20px;
  margin: 5px;
  border-radius: 20px;
  color: ${({ person }) => (person === "me" ? "#ffffff" : "#000000")};
  font-size: 18px;
  font-weight: 500;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const StyledInputForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 70px;
  width: 100%;
  background-color: #f4f3f4;

  button {
    border: none;
  }

  svg {
    font-size: 33px;
    color: #04503f;
  }
`;

export const StyledInput = styled.input`
  width: 90%;
  height: 40px;
  margin: 10px auto;
  outline: none;
  border: none;
  background-color: #e9e8e9;
  border-radius: 20px;
  padding: 0 10px;
`;
