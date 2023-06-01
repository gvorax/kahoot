import React from "react";
import { useParams } from "react-router-dom";
import Image from "../../assets/userImage.png";
import { MdQuiz, MdCircle, MdTimer } from "react-icons/md";
import { BiImages, BiRectangle } from "react-icons/bi";
import { CgShapeRhombus } from "react-icons/cg";
import { BsFillTriangleFill } from "react-icons/bs";
import "./GamePage.css";
const GamePage = () => {
  const { params } = useParams();
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
