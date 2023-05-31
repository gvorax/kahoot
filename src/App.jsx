import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { UserContextProvider } from "./context/useContext";
import Login from "./pages/CreatePage/LoginPage/LoginPage";
import JoinGame from "./pages/JoinGame/JoinGame";
import Waiting from "./pages/WaitingPage/Waiting";
import RegisterPage from './pages/CreatePage/RegisterPage/RegisterPage';
import MainPage from './pages/MainPage/MainPage';
import CreatePage from './pages/createQuiz/CreatePage';
import AllGames from './components/games/AllGames';
import Home from './components/home/Home';
import AddNews from './components/addNews/AddNews';

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route index path="/" element={<JoinGame />} />
        <Route path="/waiting" element={<Waiting />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/main" element={<MainPage />} >
          <Route path='' element={<Home />} />
          <Route path='library' element={<AllGames />} />
          <Route path='addnews' element={<AddNews />} />
        </Route>
        <Route path="/createquiz" element={<CreatePage />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
