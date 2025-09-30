import React, { useState } from "react";
import { Search, Plus } from "lucide-react";
import { useAppContext } from "../context/AppContext";
import chatbot from "../assets/chatbot.avif"

function Sidebar() {
  const { user, chats, theme, setTheme, setSelectedChat } = useAppContext();
  const [search, setSearch] = useState("");

  return (
    <div className="h-screen min-w-72 p-5 flex flex-col dark:bg-gradient-to-b from-[#242124] to-black dark:text-white border-r border-[#80609F]/40 backdrop-blur-2xl">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src={chatbot}
          alt="Chatify Logo"
          className="w-8 h-8 rounded-md"
        />
        <h1 className="text-3xl font-bold tracking-wide">CHATIFY</h1>
      </div>

      {/* New chat button */}
      <button className="mt-5 flex items-center justify-center gap-2 py-3 rounded-md bg-gradient-to-r from-[#A456F7] to-[#3D61F6] text-white font-medium shadow-md hover:scale-[1.02] transition-transform">
        <Plus size={18} /> New Chat
      </button>

      {/* Search input */}
      <div className="relative mt-5">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={16}
        />
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          placeholder="Search Conversation"
          className="w-full pl-9 pr-3 py-3 text-sm rounded-lg border border-gray-400/30 dark:border-white/20 bg-transparent focus:outline-none focus:ring-1 focus:ring-[#A456F7] placeholder:text-gray-400"
        />
      </div>
    </div>
  );
}

export default Sidebar;
