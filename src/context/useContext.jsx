import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState({
    userName: "",
    gamePin: "",
    disable: false,
  });

  const [hostUser, setHostUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [quizs, setQuizs] = useState([
    {
      quiz: "Bu qaysi logo",
      quizImg: "",
      firstAnswer: "BMW",
      secondAnswer: "Mersades",
      thirdAnswer: "Bugatti",
      fourthAnswer: "GM",
      correctAnswer: "answer1",
      quizType: "quiz",
      timeLimit: "5 seconds",
    },
  ]);

  const [news, setNews] = useState([{
    id: Date.now(),
    news: "Chiroyli gullar",
    quizImg: ""
  }])

  console.log(news)

  return (
    <UserContext.Provider
      value={{ user, setUser, hostUser, setHostUser, quizs, setQuizs , news, setNews }}
    >
      <div>{children}</div>
    </UserContext.Provider>
  );
}
