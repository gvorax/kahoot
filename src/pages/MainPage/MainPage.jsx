import React from "react";
import { Link, Outlet } from "react-router-dom";
import MarsLogo from "../../assets/mars-logo.png";
import AllGames from "../../components/games/AllGames";
import "./Main.css";

const MainPage = () => {
  return (
    <div>
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
                <Link  className="active" to={'/main'}>Home</Link>
              </li>
              <li>
                <Link to={'/main/library'}>Library</Link>
              </li>
              <li>
                <Link>Add News</Link>
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
      <Outlet />
    </div>
  );
};

export default MainPage;
