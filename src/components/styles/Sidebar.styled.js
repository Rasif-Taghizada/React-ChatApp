import styled from "styled-components";

export const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 20px;
  background-color: #f4f3f4;
  height: calc(100vh - 30px);

  > div {
    margin-top: 10px;
    padding-left: 12px;
    width: 100%;
    overflow-y: scroll;
    height: calc(100vh - 60px);

    &::-webkit-scrollbar {
      display: none;
    }
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h2 {
    color: #ea4040;
  }

  svg {
    font-size: 22px;
    color: #3fdab6;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const Styledcard = styled.div``;
