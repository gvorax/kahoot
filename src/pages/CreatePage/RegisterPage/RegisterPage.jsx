import React, { useRef } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../context/useContext";
import "../LoginPage/login.css";

const RegisterPage = () => {
  const {check, setCheck} = useContext(UserContext);
  const { hostUser, setHostUser } = useContext(UserContext);
  const nameRef = useRef()
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setHostUser({ ...hostUser, email: emailRef, password: passwordRef });
    setCheck(true);
    } catch (error) {
      alert('Something went wrong')
      setCheck(false)
    }

  };

  if (check) {
    return <Navigate to={"/main"} />;
  }
  
  return (
    <div className="bg">
      <div className="wrapper">
        <div className="title">Login Form</div>
        <form action="#" onSubmit={handleSubmit}>
        <div className="field">
            <input type="text" required ref={nameRef} />
            <label>Name</label>
          </div>
          <div className="field">
            <input type="text" required ref={emailRef} />
            <label>Email Address</label>
          </div>
          <div className="field">
            <input type="password" required ref={passwordRef} />
            <label>Password</label>
          </div>
          <div className="content">
            <div className="checkbox">
              <input type="checkbox" id="remember-me" />
              <label>Remember me</label>
            </div>
          </div>
          <div className="field">
            <button className="btn">Register</button>
          </div>
          <div className="signup-link">
            Are you member? <Link to={'/login'}>Login</Link>
          </div>
        </form> 
      </div>
    </div>
  );
};

export default RegisterPage;
