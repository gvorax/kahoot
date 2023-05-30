import React from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/useContext";
let Pin = "1234";

const Game = () => {
  const {user} = useContext(UserContext)
  const {setUser} = useContext(UserContext)
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const checkPin = () => {
    if (Pin == user.gamePin) {
      setUser({ ...user, disable: true });
    }else{
      alert('Pin is wrong')
      setUser({...user,gamePin:''})
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/waiting')
    console.log(user);
  };

  return (
    <div className="main">
      <div className="container">
        <h1>MARS GAME</h1>
        <form action="post" onSubmit={handleSubmit} className='joinForm'>
          {!user.disable ? (
            <div className="firstForm">
              <input
                type="number"
                placeholder="Game pin"
                name="gamePin"
                value={user.gamePin}
                onChange={handleChange}
              />
              <p className="btn_pin" onClick={checkPin}>
                Enter
              </p>
            </div>
          ) : (
            <div className="secondForm">
              <input
                type="text"
                placeholder="Your name"
                name="userName"
                value={user.userName}
                onChange={handleChange}
              />
              <button className="btn">Enter</button>
            </div>
          )}
        </form>
      </div>
      <div className="bottom_link">
        <h1>
          Create your own quiz <Link to="/login">here</Link>
        </h1>
      </div>
    </div>
  );
};

export default Game;
