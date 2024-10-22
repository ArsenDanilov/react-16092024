import { useState } from "react";
import { UserContext } from ".";

export const UserContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false); // auth
  const [name, setName] = useState('Anonymous');

  const toggleAuth = () => setIsAuth(!isAuth);

  return <UserContext.Provider value={{ isAuth, toggleAuth, name, setName }}>{children}</UserContext.Provider>;
};
