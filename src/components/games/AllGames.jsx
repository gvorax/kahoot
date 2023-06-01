import React, { useContext } from "react";
import { UserContext } from "../../context/useContext";
import "./AllGames.css";
import Image from "../../assets/mars-logo.png";

const AllGames = () => {
  const { quizs, setQuizs } = useContext(UserContext);
  const handleDelete = (id) => {
    let newQuizs = quizs.filter((item) => item.id != id);
    console.log("newQuiz", newQuizs);
    setQuizs(newQuizs);
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
                  <p>{item.quiz}</p>
                </div>
                <div className="btns">
                  <button className="green" >Start</button>
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
