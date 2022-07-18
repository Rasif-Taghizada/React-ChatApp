import React from "react";
import { StyledSidebar } from "../styles/Sidebar.styled";
import { FaPlusCircle } from "react-icons/fa";
import SidebarCard from "./SidebarCard";

const Sidebar = ({ users, setOpen, setChosedUser, del }) => {
  return (
    <StyledSidebar>
      <header>
        <h2>Add Chat</h2>
        <FaPlusCircle onClick={() => setOpen(true)} />
      </header>
      <div>
        {users.map((user, index) => (
          <SidebarCard
            del={del}
            setChosedUser={setChosedUser}
            key={index}
            user={user}
          />
        ))}
      </div>
    </StyledSidebar>
  );
};

export default Sidebar;
