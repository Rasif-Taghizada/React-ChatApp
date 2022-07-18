import styled from "styled-components";

export const StyledModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  animation: fade 0.5s;

  @keyframes fade {
    from {
      opacity: 0.1;
    }
    to {
      opacity: 1;
    }
  }
`;

export const StyledModalForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  height: 200px;
  background-color: #ffffff;
  border-radius: 20px;

  div {
    display: flex;
    justify-content: space-between;
    width: 90%;
  }
`;

export const StyledModalInput = styled.input`
  width: 90%;
  height: 50px;
  outline: none;
  border: 1px solid #f3b6b6;
  padding: 0 10px;
  border-radius: 20px;
  margin-top: 25px;
`;

export const StyledModalButton = styled.button`
  width: 48%;
  height: 40px;
  background-color: ${({ bg }) => bg || "#54069e"};
  border: none;
  margin-top: 25px;
  border-radius: 10px;
  color: #ffffff;
  transition: all 0.3s;

  &:hover {
    background-color: #170924;
    cursor: pointer;
  }
`;
