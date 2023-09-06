import { useEffect } from "react";
import { useReducer } from "react";

import { createContext } from "react";

export const UserContext = createContext();
const getUserFromStorage = () => {
  const localData = localStorage.getItem("user");
  return localData ? JSON.parse(localData) : [];
};

const setUserInStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const gitHubUserReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_USER":
      const existingUser = state.usermame === action.payload.login;

      if (!existingUser) {
        const { name, avatar_url, html_url, login } = action.payload;

        const newUser = { name, avatar_url, html_url, username: login };

        setUserInStorage(newUser);

        return newUser;
      }
      return state;
    default:
      return state;
  }
};

export const userContextProvider = ({ children }) => {
  const [user, dispatch] = useReducer(
    gitHubUserReducer,
    {},
    getUserFromStorage
  );

  useEffect(() => {
    setUserInStorage(user);
  }, [user]);

  const changeUser = (user) => dispatch({ type: "CHANGE_USER", payload: user });

  return (
    <UserContext.Provider value={{ user, changeUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default userContextProvider;
