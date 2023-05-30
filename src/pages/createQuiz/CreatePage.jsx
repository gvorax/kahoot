import React from "react";
import { useState } from "react";
import "./createquiz.css";
import Download from "../../assets/download.png";
import { MdCircle } from "react-icons/md";
import { BiImages,BiRectangle } from "react-icons/bi";
import { CgShapeRhombus } from "react-icons/cg";

const CreatePage = () => {
  const [quiz, setQuiz] = useState([]);
  const [file, setFile] = useState();

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  return (
    <div className="box">
      <div className="box_1">
        <div className="quiz">
          <form action="#">
            <input
              className="main_question"
              type="text"
              placeholder="Start typing your question"
            />

            <div className="file">
              <div className="file_bg">
                <img src={Download} alt="" className="downloadImage" />
                <input
                  type="file"
                  onChange={handleChange}
                  className="fileInput"
                />
                <button>Upload Image</button>
              </div>
            </div>

            <div className="answers">
              <div className="answer shadow">
                <div className="flex">
                  <div className="shape" style={{ color: "#fff" }}>
                    <MdCircle size={40} />
                  </div>
                  <input
                    type="text"
                    placeholder="Add answer 1"
                    className="add_answer"
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
                    <CgShapeRhombus size={40}  />
                  </div>
                  <input
                    type="text"
                    placeholder="Add answer 2"
                    className="add_answer"
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
                    <MdCircle size={40}  />
                  </div>
                  <input
                    type="text"
                    placeholder="Add answer 3"
                    className="add_answer"
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
                    <BiRectangle size={40}  />
                  </div>
                  <input
                    type="text"
                    placeholder="Add answer 4"
                    className="add_answer"
                  />
                </div>

                <div style={{ position: "relative" }}>
                  <BiImages size={40} style={{ color: "#888" }} />
                  <input type="file" className="file_img" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="box_2"></div>
    </div>
  );
};

export default CreatePage;
