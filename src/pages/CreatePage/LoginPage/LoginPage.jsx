import React, { useRef } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../../../context/useContext";
import "./login.css";

const LoginPage = () => {
  const [redirect, setRedirect] = useState(false)
  const { hostUser, setHostUser } = useContext(UserContext);
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setHostUser({ ...hostUser, email: emailRef, password: passwordRef });
    setRedirect(true)
  };

  if (redirect) {
    return <Navigate to={"/main"} />;
  }

  return (
    <div className="bg">
      <div className="wrapper">
        <div className="title">Login Form</div>
        <form action="#" onSubmit={handleSubmit}>
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
              <label for="remember-me">Remember me</label>
            </div>
            <div className="pass-link">
              <Link href="#">Forgot password?</Link>
            </div>
          </div>
          <div className="field">
            <button className="btn">Login</button>
          </div>
          <div className="signup-link">
            Not a member? <Link to={'/register'}>Signup now</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
