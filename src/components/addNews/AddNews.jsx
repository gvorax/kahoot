import React from "react";
import "./AddNews.css";
import Download from "../../assets/download.png";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/useContext";

const AddNews = () => {

  const {news, setNews} = useContext(UserContext)
  const [data, setData] = useState({
    id: Date.now(),
    news: "",
    quizImg: ""
  })

  const addInfo = (e) => {
    setData({...data, [e.target.name]:e.target.value})
  }

  const addImage = (e) => {
    setData({...data, [e.target.name]:e.target.files[0]})
  }

  const infoSubmit = (e) => {
    e.preventDefault()
    setNews([...news, data])
  }
  return (
    <div className="add-news-wrapper">
      <form action="" className="add-news-form" onSubmit={infoSubmit}>

        <div className="file">
          <div className="file_bg">
            <img src={Download} alt="" className="downloadImage" />
            <input
              type="file"
              className="fileInput"
              name="quizImg"
              onChange={addImage}
            />
            <button>Upload Image</button>
          </div>
        </div>

        <textarea name="news" id="" cols="60" rows="7" className="news_info" onChange={addInfo}></textarea>

        <button type="submit" className="news_btn">Add News</button>

      </form>
    </div>
  );
};

export default AddNews;
