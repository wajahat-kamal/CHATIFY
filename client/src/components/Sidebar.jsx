import React, { useState } from "react";
import { Search, Plus, Trash2, Sun, User, LogOut, X } from "lucide-react";
import { useAppContext } from "../context/AppContext";
import logo from "../assets/logo.svg";
import moment from "moment";
import toast from "react-hot-toast";

function Sidebar({ isMenuOpen, setIsMenuOpen }) {
  const {
    user,
    chats,
    theme,
    setTheme,
    setSelectedChat,
    navigate,
    createNewChat,
    fetchUserChats,
    setToken,
    token,
    setChats,
    axios,
  } = useAppContext();

  const [search, setSearch] = useState("");

  // ✅ logout fix: proper toast + clear user
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    toast.success("Logged out successfully");
  };

  // ✅ deleteChat fix: added Bearer header + proper toast.promise handling
  const deleteChat = async (chatId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this chat?"
    );
    if (!confirmDelete) return;

    try {
      const { data } = await axios.post(
        "/api/chat/delete",
        { chatId },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (data.success) {
        setChats((prev) => prev.filter((chat) => chat._id !== chatId));
        await fetchUserChats();
        toast.success(data.message || "Chat deleted");
      } else {
        toast.error(data.message || "Failed to delete chat");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <div
      className={`h-screen min-w-72 p-5 flex flex-col 
      bg-white dark:bg-gradient-to-b dark:from-[#242124] dark:to-black 
      text-gray-900 dark:text-white border-r border-gray-200/60 dark:border-[#80609F]/40 
      backdrop-blur-2xl transition-transform duration-300 ease-in-out 
      fixed md:static z-40 top-0 left-0
      ${!isMenuOpen ? "-translate-x-full md:translate-x-0" : "translate-x-0"}`}
    >
      <div className="flex items-center gap-3 group">
        <div className="relative">
          <img
            src={logo}
            alt="Chatify Logo"
            className="w-10 h-10 rounded-2xl shadow-lg border border-purple-400/40 
                 dark:border-purple-500/40 transition-transform duration-300 
                 group-hover:scale-105 group-hover:rotate-3"
          />
          <div
            className="absolute inset-0 rounded-2xl blur-md bg-gradient-to-tr 
                    from-purple-500/20 to-blue-500/20 opacity-0 
                    group-hover:opacity-100 transition-opacity duration-300"
          ></div>
        </div>

        <h1
          className="text-3xl font-extrabold tracking-wide bg-gradient-to-r 
               from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent 
               drop-shadow-sm select-none group-hover:scale-105 transition-transform duration-300"
        >
          CHATIFY
        </h1>
      </div>

      {/* New chat button */}
      <button
        onClick={createNewChat}
        className="mt-6 flex items-center justify-center gap-2 py-3 rounded-lg 
        bg-gradient-to-r from-[#A456F7] to-[#3D61F6] 
        text-white font-medium shadow-md hover:scale-[1.02] 
        transition-transform duration-200"
      >
        <Plus size={18} /> New Chat
      </button>

      {/* Search input */}
      <div className="relative mt-4">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
          size={16}
        />
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          placeholder="Search Conversation"
          className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border 
          border-gray-300 dark:border-white/20 
          bg-gray-50 dark:bg-transparent 
          focus:outline-none focus:ring-1 focus:ring-[#A456F7] 
          placeholder:text-gray-400 dark:placeholder:text-gray-500"
        />
      </div>

      {/* Recent Chats */}
      {chats.length > 0 && (
        <p className="mt-4 mb-2 text-xs uppercase tracking-wide text-gray-500 dark:text-[#B1A6C0]">
          Recent Chats
        </p>
      )}

      <div
        className="space-y-2 overflow-y-auto h-[42vh] pr-1 
        scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-[#4B3B58] scrollbar-track-transparent"
      >
        {chats
          .filter((chat) =>
            chat.messages.length > 0
              ? chat.messages[0].content
                  .toLowerCase()
                  .includes(search.toLowerCase())
              : chat.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((chat) => (
            <div
              key={chat._id}
              onClick={() => {
                setSelectedChat(chat);
                navigate("/");
                setIsMenuOpen(false);
              }}
              className="flex items-center justify-between py-2.5 px-3 rounded-lg 
              border border-gray-200 dark:border-[#80609F]/20 
              bg-gray-50 dark:bg-[#1C1522] 
              hover:bg-gray-100 dark:hover:bg-[#2A2130] 
              transition-all duration-200 shadow-sm group cursor-pointer"
            >
              {/* Chat info */}
              <div className="flex flex-col max-w-[70%]">
                <p className="truncate text-sm font-medium text-gray-800 dark:text-gray-100">
                  {chat.messages.length > 0
                    ? chat.messages[0].content.slice(0, 32)
                    : chat.name}
                </p>
                <span className="text-[11px] font-medium text-gray-500 dark:text-[#B1A6C0] mt-0.5 italic">
                  {moment(chat.updatedAt, moment.ISO_8601).fromNow()}
                </span>
              </div>

              {/* Delete button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toast.promise(deleteChat(chat._id), {
                    loading: "Deleting...",
                    success: "Deleted!",
                    error: "Failed to delete",
                  });
                }}
                className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
      </div>

      {/* Dark Mode Toggle */}
      <div
        className="flex items-center justify-between p-4 mt-4 rounded-lg border 
        border-gray-300/50 dark:border-white/20 
        bg-gray-50 dark:bg-transparent shadow-sm"
      >
        <div className="flex items-center gap-2">
          <Sun
            size={18}
            className="text-gray-600 dark:text-gray-300 transition duration-200"
          />
          <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
            Dark Mode
          </p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="sr-only peer"
          />
          <div className="w-10 h-5 bg-gray-300 peer-checked:bg-purple-500 rounded-full transition-colors"></div>
          <div
            className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full border shadow-sm 
            peer-checked:translate-x-5 transition-transform"
          ></div>
        </label>
      </div>

      {/* User Account */}
      <div
        className="flex items-center justify-between gap-3 p-4 mt-4 rounded-lg border 
        border-gray-300/50 dark:border-white/20 
        bg-gray-50 dark:bg-transparent cursor-pointer group"
      >
        <div className="flex items-center gap-2">
          <div className="bg-gray-200 dark:bg-purple-600 rounded-full p-1.5">
            <User size={18} className="text-gray-700 dark:text-gray-100" />
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-gray-800 dark:text-gray-100 truncate">
              {user ? user?.name : "User Name"}
            </p>
          </div>
        </div>
        <LogOut
          onClick={logout}
          className="hidden group-hover:block text-gray-600 dark:text-gray-300 hover:text-red-500 transition"
          size={18}
        />
      </div>

      {/* Close button for mobile */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className="absolute top-6 right-4 md:hidden block w-6 h-6 text-gray-700 dark:text-gray-200 cursor-pointer"
      >
        <X />
      </div>
    </div>
  );
}

export default Sidebar;
