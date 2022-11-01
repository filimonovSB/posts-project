import React from "react";
import { Menu, Button } from "antd";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
const MainMenu = ({ Auth, setAuth }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    setAuth(false);
    navigate("/login");
    setAuth(false);
    localStorage.removeItem("auth");
  };
  return (
    <Menu
      mode="horizontal"
      style={{ width: "400px", height: "70px" }}
      items={
        Auth
          ? [
              {
                key: 1,
                label: <NavLink to={"/about"}> О сайте</NavLink>,
              },
              {
                key: 2,
                label: <NavLink to={"/posts"}>Посты</NavLink>,
              },

              {
                key: 4,
                label: <Button onClick={handleLogout}>Выйти</Button>,
              },
            ]
          : [
              {
                key: 3,
                label: <NavLink to={"/login"}>Войти</NavLink>,
              },
            ]
      }
    />
  );
};

export default MainMenu;
