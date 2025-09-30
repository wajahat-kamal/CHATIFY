import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyChats, dummyUser } from "../assets/Data";
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
    setUser(dummyUser);
  };

  const fetchUserChats = () => {
    setChats(dummyChats)
    setSelectedChat(dummyChats[0])
  }

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add("dark")
    }else {
      document.documentElement.classList.remove("dark")

    }
  }, [theme])
  

  useEffect(() => {
   if (user) {
    fetchUserChats()
   } else {
    setChats([])
    setSelectedChat(null)
   }
  }, [user])
  

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
