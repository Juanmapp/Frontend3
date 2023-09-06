import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

const userContextProvider = ({ children }) => {
  const getUserFromStorage = () => {
    const localData = localStorage.getItem("user");
    return localData ? JSON.parse(localData) : [];
  };

  const setUserInStorage = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };

  const [user, setUser] = useState(getUserFromStorage());

  useEffect(() => {
    setUserInStorage(user);
  }, [user]);
  const changeUser = (user) => setUser(user);

  return (
    <UserContext.Provider value={{ user, changeUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default userContextProvider;
