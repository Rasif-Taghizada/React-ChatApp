import React from "react";
import { StyledCard } from "../styles/SidebarCard.styled";
import { FaUserAlt, FaTrash } from "react-icons/fa";

const SidebarCard = ({ user, setChosedUser, del }) => {
  return (
    <StyledCard>
      <FaUserAlt onClick={() => setChosedUser(user)} />
      <p onClick={() => setChosedUser(user)}>{user.name}</p>
      <FaTrash onClick={() => del(user.id, user.name)} />
    </StyledCard>
  );
};

export default SidebarCard;
