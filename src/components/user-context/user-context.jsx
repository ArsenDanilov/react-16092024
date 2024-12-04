import { useState } from "react";
import { UserContext } from ".";

export const UserContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({ isAuthorized: false });

  const toggleAuth = () => {
    setAuth((prev) => {
      return prev.isAuthorized
        ? { isAuthorized: false }
        : { isAuthorized: true, name: "Arsen", id: "jg4985gj94" };
    });
  };

  return (
    <UserContext.Provider value={{ auth, toggleAuth }}>
      {children}
    </UserContext.Provider>
  );
};
