import React from "react";
import { useState } from "react";
import "./createquiz.css";
import Download from "../../assets/download.png";
import { MdQuiz, MdCircle, MdTimer } from "react-icons/md";
import { BiImages, BiRectangle } from "react-icons/bi";
import { CgShapeRhombus } from "react-icons/cg";
import { BsFillTriangleFill } from "react-icons/bs";
import { useContext } from "react";
import { UserContext } from "../../context/useContext";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const CreatePage = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const { quizs, setQuizs } = useContext(UserContext);
  const [quiz, setQuiz] = useState({
    quiz: "",
    quizImg: "",
    firstAnswer: "",
    secondAnswer: "",
    thirdAnswer: "",
    fourthAnswer: "",
    correctAnswer: "answer1",
    quizType: "quiz",
    timeLimit: "5 seconds",
  });
  const [quizOne, setQuizOne] = useState({
    id: undefined,
    quizs: [],
    gamePin: undefined,
  });
  const emplyQuiz = {
    quiz: "",
    quizImg: "",
    firstAnswer: "",
    secondAnswer: "",
    thirdAnswer: "",
    fourthAnswer: "",
    correctAnswer: "answer1",
    quizType: "quiz",
    timeLimit: "5 seconds",
  };
  const handleChange = (e) => {
    setQuiz({ ...quiz, [e.target.name]: e.target.value });
  };

  const handleChangeFile = (e) => {
    setQuiz({ ...quiz, [e.target.name]: e.target.files[0] });
  };

  const handleClear = () => {
    setQuiz(emplyQuiz);
  };

  const addQuiz = (e) => {
    if (
      quiz.quiz &&
      quiz.quizImg &&
      quiz.firstAnswer &&
      quiz.secondAnswer &&
      quiz.thirdAnswer &&
      quiz.fourthAnswer
    ) {
      quizOne.quizs.push(quiz);
      setQuiz(emplyQuiz);
      setErr(false);
    } else {
      alert("Please insert data...");
      setErr(true);
    }
  };

  const saveQuiz = (e) => {
    let id = uuidv4();
    addQuiz();
    if (!err) {
      const updated = Object.assign({}, quizOne, { id: id });
      const updatedItem = [...quizs, updated];
      setQuizs(updatedItem);
      console.log("updatedItem",updatedItem);
      navigate("/main");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form action="#" onSubmit={handleSubmit}>
      <div className="box">
        <div className="box_1">
          <div className="quiz">
            <input
              className="main_question"
              type="text"
              placeholder="Start typing your question"
              name="quiz"
              value={quiz.quiz}
              onChange={handleChange}
            />

            <div className="file">
              <div className="file_bg">
                <img src={Download} alt="" className="downloadImage" />
                <input
                  type="file"
                  className="fileInput"
                  name="quizImg"
                  onChange={handleChangeFile}
                />
                <button>Upload Image</button>
              </div>
            </div>

            <div className="answers">
              <div className="answer shadow">
                <div className="flex">
                  <div className="shape" style={{ color: "#fff" }}>
                    <BsFillTriangleFill size={40} />
                  </div>
                  <input
                    type="text"
                    placeholder="Add answer 1"
                    className="add_answer"
                    name="firstAnswer"
                    value={quiz.firstAnswer}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div style={{ position: "relative" }}>
                  <BiImages size={40} style={{ color: "#888" }} />
                  <input type="file" className="file_img" />
                </div>
              </div>
              <div className="answer shadow">
                <div className="flex">
                  <div className="shape blue" style={{ color: "#fff" }}>
                    <CgShapeRhombus size={40} />
                  </div>
                  <input
                    type="text"
                    placeholder="Add answer 2"
                    className="add_answer"
                    name="secondAnswer"
                    value={quiz.secondAnswer}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div style={{ position: "relative" }}>
                  <BiImages size={40} style={{ color: "#888" }} />
                  <input type="file" className="file_img" />
                </div>
              </div>
              <div className="answer shadow">
                <div className="flex">
                  <div className="shape yellow" style={{ color: "#fff" }}>
                    <MdCircle size={40} />
                  </div>
                  <input
                    type="text"
                    placeholder="Add answer 3"
                    className="add_answer"
                    name="thirdAnswer"
                    value={quiz.thirdAnswer}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div style={{ position: "relative" }}>
                  <BiImages size={40} style={{ color: "#888" }} />
                  <input type="file" className="file_img" />
                </div>
              </div>
              <div className="answer shadow">
                <div className="flex">
                  <div className="shape green" style={{ color: "#fff" }}>
                    <BiRectangle size={40} />
                  </div>
                  <input
                    type="text"
                    placeholder="Add answer 4"
                    className="add_answer"
                    name="fourthAnswer"
                    value={quiz.fourthAnswer}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div style={{ position: "relative" }}>
                  <BiImages size={40} style={{ color: "#888" }} />
                  <input type="file" className="file_img" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box_2">
          <div className="quiz_type">
            <label>
              {" "}
              <MdQuiz size={28} style={{ color: "#888" }} /> Question type
            </label>
            <select
              name="quizType"
              className="quiz_select"
              value={quiz.quizType}
              onChange={handleChange}
            >
              <option value="quiz">Quiz</option>
              <option value="truefalse" disabled>
                True or False
              </option>
            </select>
            <div className="quiz_line"></div>
            <label>
              <MdTimer size={28} style={{ color: "#888" }} /> Time limit
            </label>
            <select
              name="timeLimit"
              className="quiz_select"
              value={quiz.timeLimit}
              onChange={handleChange}
            >
              <option value="five">5 seconds</option>
              <option value="ten">10 seconds</option>
              <option value="fifteen">15 seconds</option>
              <option value="twenty">20 seconds</option>
            </select>
            <div className="quiz_line"></div>
            <label>
              <MdTimer size={28} style={{ color: "#888" }} /> Correct Answer
            </label>
            <select
              name="correctAnswer"
              className="correct_answer"
              placeholder="Choose a correct answer"
              value={quiz.correctAnswer}
              onChange={handleChange}
            >
              <option disabled>Choose a correct answer</option>
              <option value="answer1" className="bg_shape">
                Answer 1
              </option>
              <option value="answer2">Answer 2</option>
              <option value="answer3">Answer 3</option>
              <option value="asnwer4">Answer 4</option>
            </select>
            <button className="btn_quiz" onClick={addQuiz}>
              Add quiz
            </button>
          </div>
          <div className="quiz_settings">
            <Link to="/main">
              <button className="btn_exit" onClick={handleClear}>
                Exit
              </button>
            </Link>
            <button className="btn_delete" onClick={handleClear}>
              Delete
            </button>
            <button className="btn_save" onClick={saveQuiz}>
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreatePage;
