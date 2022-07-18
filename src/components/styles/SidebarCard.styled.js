import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
  height: 100px;
  background-color: #ffffff;
  margin-bottom: 10px;
  border-radius: 20px;
  padding-left: 20px;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  p {
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 100%;
    height: 100%;
  }

  svg {
    font-size: 33px;
    margin-right: 20px;
  }

  svg:nth-child(3) {
    font-size: 20px;
    position: absolute;
    right: 0;
    z-index: 5;

    &:hover {
      color: #000;
      cursor: pointer;
    }
  }
`;
