import React from "react";
import { useParams } from "react-router-dom";
import Image from "../../assets/userImage.png";
import { MdQuiz, MdCircle, MdTimer } from "react-icons/md";
import { BiImages, BiRectangle } from "react-icons/bi";
import { CgShapeRhombus } from "react-icons/cg";
import { BsEmojiSmileUpsideDown, BsFillTriangleFill } from "react-icons/bs";
import "./GamePage.css";
import { useContext } from "react";
import { UserContext } from "../../context/useContext";
import { useEffect } from "react";
import { useState } from "react";
const GamePage = () => {
  const { params } = useParams();
  const [savol, setSavol] = useState();
  const { quizs } = useContext(UserContext);

  useEffect(() => {
    let data = quizs.map((item) => {
      if (item.gameNumber === params) {
        return item;
      } else {
        console.log("Ishlamayapti");
      }
      return null;
    });

    console.log("newData", data);

    // const [data, setData] = useState([]);
    // const [matchingObject, setMatchingObject] = useState(null);
    // const number = 10;

    // useEffect(() => {
    //   const fetchData = async () => {
    //     // Fetch data and store it in the data state
    //     const response = await fetch('your-api-endpoint');
    //     const responseData = await response.json();
    //     setData(responseData);
    //   };

    //   fetchData();
    // }, []);

    // useEffect(() => {
    //   if (number) {
    //     const object = data.find(item => item.id === number);
    //     setMatchingObject(object);
    //   }
    // }, [number, data]);
  }, []);

  return (
    <div className="main_bg">
      <div className="blur blur_new">
        <div className="head">
          <div className="ques shadow">
            <p>Savol bor bu yerda</p>
          </div>
          <div className="game_center">
            <div className="time">
              <p>28</p>
            </div>
            <div className="img_box">
              <img src={Image} alt="image" width={200} />
            </div>
            <div className="user_ans">
              <div className="time">
                <p>0</p>
              </div>
              <p className="zero">Answer</p>
            </div>
          </div>
        </div>

        <div className="game_answers">
          <div className="answers_box">
            <div className="ans_box shadow">
              <div className="flex_1">
                <div className="shape" style={{ color: "#fff" }}>
                  <BsFillTriangleFill size={40} />
                </div>
                <p className="answer_user">Here is answer</p>
              </div>
            </div>
            <div className="ans_box shadow">
              <div className="flex_1">
                <div className="shape blue" style={{ color: "#fff" }}>
                  <CgShapeRhombus size={40} />
                </div>
                <p className="answer_user">Here is answer</p>
              </div>
            </div>
            <div className="ans_box shadow">
              <div className="flex_1">
                <div className="shape yellow" style={{ color: "#fff" }}>
                  <MdCircle size={40} />
                </div>
                <p className="answer_user">Here is answer</p>
              </div>
            </div>
            <div className="ans_box shadow">
              <div className="flex_1">
                <div className="shape green" style={{ color: "#fff" }}>
                  <BiRectangle size={40} />
                </div>
                <p className="answer_user">Here is answer</p>
              </div>
            </div>
          </div>
        </div>

        <div className="skip">
          <button className="shadow">Skip</button>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
