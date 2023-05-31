import React from "react";
import './Header.css';
import MarsLogo from "../../assets/mars-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="flex-container">
        <nav>
          <div className="marslogo">
            <Link to={"/main"}>
              <img src={MarsLogo} alt="" />
            </Link>
          </div>
          <ul className="flex">
            <li>
              <Link className="active" to={"/main"}>
                Home
              </Link>
            </li>
            <li>
              <Link to={"/main/library"}>Library</Link>
            </li>
            <li>
              <Link to={'/main/addnews'}>Add Newss</Link>
            </li>
          </ul>

          <div>
            <Link className="crqz" to={"/createquiz"}>
              Create
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
