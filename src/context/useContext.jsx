import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState({
    userName: "",
    gamePin: "",
    disable: false,
  });
  
  const [hostUser,setHostUser]=useState({
    name:'',
    email:'',
    password:''
  })
  return (
    <UserContext.Provider value={{ user, setUser,hostUser, setHostUser }}>
      <div>{children}</div>
    </UserContext.Provider>
  );
}
