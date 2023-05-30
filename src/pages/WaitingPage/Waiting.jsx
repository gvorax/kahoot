import React from "react";
import "./waiting.css";
import UserImage from "../../assets/userImage.png";
import PenImage from "../../assets/penIcon.png";
import { useContext } from "react";
import { UserContext } from "../../context/useContext";
import { Navigate } from "react-router-dom";

const Waiting = () => {
  const { user } = useContext(UserContext);

  if (!user.gamePin) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="main_bg">
      <div className="blur">
        <div className="select_image">
          <img src={UserImage} alt="logo" width="100px" className="userImage" />
          <div className="pen">
            <img src={PenImage} alt="" />
          </div>
          <h1>{user.userName}</h1>
          <p>You’re in! See your nickname on screen ?</p>
        </div>
      </div>
    </div>
  );
};

export default Waiting;
