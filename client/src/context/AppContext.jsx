import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyUserData } from "../assets/Data";
const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const { user, setUser } = useState(null);
  const { chats, setChats } = useState([]);
  const { selectedChat, setSelectedChat } = useState(null);
  const { theme, setTheme } = useState(
    localStorage.getItem("theme") || "light"
  );

  const fetchUser = () => {
    setUser(dummyUserData);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const value = {
    navigate, user, setUser, chats, setChats, selectedChat, setSelectedChat, theme, fetchUser
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);

export default AppContextProvider;
