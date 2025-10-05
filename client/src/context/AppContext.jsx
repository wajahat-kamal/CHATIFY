import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { dummyChats, dummyUser } from "../assets/Data";
import axios from "axios";
import toast from 'react-hot-toast'

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();

  axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;

  // -------------------- State --------------------
  const [user, setUser] = useState(null);
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [loadingUser, setLoadingUser] = useState(true)

  const fetchUser = async () => {
    try {
      const { data } = await axios.get("/api/user/data", {
        headers: { Authorization: token },
      });
      if (data.success) {
        setUser(data.user)
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoadingUser(false)
    }
  };

  const createNewChat = async () => {
    try {
      if(!user) return toast('Login to create a new chat')
      navigate("/")
      await axios.get("/api/chat/create", {headers : {Authorization: token}})
      await fetchUserChats()
    } catch (error) {
      
    }
  }

  const fetchUserChats = async () => {
    try {
      const {data} = await axios.get('/api/chat/get', {headers: {Authorization: token}})
      if (data.success) {
        setChats(chats)
      } else (
        toast.error(data.message)
      )
    } catch (error) {
      toast.error(error.message)
    }
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    if (user) {
      fetchUserChats();
    } else {
      setChats([]);
      setSelectedChat(null);
    }
  }, [user]);

  useEffect(() => {
    fetchUser();
  }, []);

  // -------------------- Context Value --------------------
  const value = {
    navigate,
    user,
    setUser,
    chats,
    setChats,
    selectedChat,
    setSelectedChat,
    theme,
    setTheme,
    fetchUser,
    fetchUserChats,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);

export default AppContextProvider;
