import React, { useContext, useState } from "react";
import { UserContext } from "../../context/useContext";
import "./AllGames.css";
import Image from "../../assets/mars-logo.png";
import { useNavigate } from "react-router-dom";

const AllGames = () => {
  const navigate = useNavigate();
  const { quizs, setQuizs } = useContext(UserContext);
  
  const handleDelete = (id) => {
    let newQuizs = quizs.filter((item) => item.id != id);
    console.log("newQuiz", newQuizs);
    setQuizs(newQuizs);
  };
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };

  
  const onGameStart = (item) => {
    let randomNumber = getRandomInt(100000,999999);

    const updatedItems = quizs.map(i => {
      if (i.id === item.id) {
        navigate(`/hostwaiting/${randomNumber}`);
        return { ...item, quizNumber: randomNumber };
      }
      return item;
    });

    setQuizs(updatedItems);
  };

  return (
    <div>
      <div className="container_flex">
        {quizs.length ? (
          quizs.map((item, index) => {
            return (
              <div className="quiz_item" key={index}>
                <div className="quiz_head">
                  <img src={Image} alt="" width={200} />
                  <p>{item.quizs[0].quiz}</p>
                </div>
                <div className="btns">
                  <button className="green" onClick={() => onGameStart(item)}>
                    Start
                  </button>
                  <button className="red" onClick={() => handleDelete(item.id)}>
                    Delete
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="notGames">There is not any game</div>
        )}
      </div>
    </div>
  );
};

export default AllGames;
