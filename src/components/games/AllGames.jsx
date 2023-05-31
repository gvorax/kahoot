import React, { useContext } from "react";
import { UserContext } from "../../context/useContext";
import "./AllGames.css";
import Image from "../../assets/mars-logo.png";

const AllGames = () => {
  const { quizs } = useContext(UserContext);
  return (
    <div>
      <div className="container_flex">
        {quizs.map((item, index) => (
          <div className="quiz_item">
            <div className="quiz_head">
              <img src={Image} alt="" width={200} />
              <p>Bu qaysi logo ?</p>
            </div>
            <div className="btns">
              <button>Start</button>
              <button>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllGames;
