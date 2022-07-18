import React, { useEffect, useState } from "react";
import "./App.css";

/* Components */
import Sidebar from "./components/Sidebar";
import MessagePart from "./components/MessagePart";
import Modal from "./components/Modal";

/* Styled Components */
import GlobalStyles from "./components/styles/Global";
import { Container } from "./components/styles/Container.styled";

const App = () => {
  const [users, setUsers] = useState([
    { name: "Emin", id: Math.random(), messages: ["Salam"] },
    { name: "Ulfet", id: Math.random(), messages: ["Salam"] },
    { name: "Miraga", id: Math.random(), messages: ["Salam"] },
  ]);
  const [chosedUser, setChosedUser] = useState(users[0]);
  const [open, setOpen] = useState(false);
  const [check, setCheck] = useState(false);

  const addUser = (user) => {
    setUsers((prev) => {
      return [user, ...prev];
    });
    setCheck(true);
  };

  const deleteUser = (id, name) => {
    if (window.confirm("Are You Sure To Delete")) {
      setUsers(users.filter((user) => user.id !== id));
    }
    setCheck(true);
  };

  useEffect(() => {
    let users = JSON.parse(localStorage.getItem("users"));
    if (users?.length) {
      setUsers(users);
      setChosedUser(users[0]);
    }
  }, []);

  useEffect(() => {
    check && setItemToLocalStorage();
    users[0] && setChosedUser(users[0]);
  }, [users]);

  const setItemToLocalStorage = () => {
    localStorage.setItem("users", JSON.stringify(users));
  };

  const addMessage = (id, message) => {
    users.forEach((user) => {
      if (id === user.id) {
        user.messages.push(message);
      }
    });

    setCheck(true);
    setItemToLocalStorage();
  };

  return (
    <Container>
      <GlobalStyles />
      <Sidebar
        users={users}
        setOpen={setOpen}
        setChosedUser={setChosedUser}
        del={deleteUser}
      />
      <MessagePart user={chosedUser} addM={addMessage} />
      <Modal open={open} setOpen={setOpen} addUser={addUser} />
    </Container>
  );
};

export default App;
