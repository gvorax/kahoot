import React from "react";
import {Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import Home from "../../components/home/Home";
import "./Main.css";

const MainPage = () => {

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default MainPage;
