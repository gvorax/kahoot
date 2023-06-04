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
      id: 1,
      quizs: [
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
        {
          quiz: "Bu qaysi mashina",
          quizImg: "",
          firstAnswer: "BMW",
          secondAnswer: "Mersades",
          thirdAnswer: "Bugatti",
          fourthAnswer: "GM",
          correctAnswer: "answer1",
          quizType: "quiz",
          timeLimit: "5 seconds",
        },
      ],
      quizNumber: 827470,
    },
    {
      id: 2,
      quizs: [
        {
          quiz: "Bu qaysi mashina",
          quizImg: "",
          firstAnswer: "BMW",
          secondAnswer: "Mersades",
          thirdAnswer: "Bugatti",
          fourthAnswer: "GM",
          correctAnswer: "answer1",
          quizType: "quiz",
          timeLimit: "5 seconds",
        },
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
      ],
      quizNumber: undefined,
    },
  ]);

  const [news, setNews] = useState([{
    id: Date.now(),
    news: "Chiroyli gullar",
    quizImg: ""
  }])


 
  const [check, setCheck] = useState(false);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        hostUser,
        setHostUser,
        quizs,
        setQuizs,
        check,
        setCheck,
        news, setNews 
      }}

    >
      <div>{children}</div>
    </UserContext.Provider>
  );
}
