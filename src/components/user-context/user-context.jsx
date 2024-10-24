import { useState } from "react";
import { UserContext } from ".";

export const UserContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({ isAuthorized: false }); // auth

  const toggleAuth = () => {
    setAuth((prev) => {
      return prev.isAuthorized
        ? { isAuthorized: false }
        : { isAuthorized: true, name: "User" };
    });
  };

  return (
    <UserContext.Provider value={{ auth, toggleAuth }}>
      {children}
    </UserContext.Provider>
  );
};
