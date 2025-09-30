import React, { useState } from "react";
import { Search, Plus, Trash2 } from "lucide-react";
import { useAppContext } from "../context/AppContext";
import chatbot from "../assets/chatbot.avif";

function Sidebar() {
  const { user, chats, theme, setTheme, setSelectedChat } = useAppContext();
  const [search, setSearch] = useState("");

  return (
    <div className="h-screen min-w-72 p-5 flex flex-col dark:bg-gradient-to-b from-[#242124] to-black dark:text-white border-r border-[#80609F]/40 backdrop-blur-2xl">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={chatbot} alt="Chatify Logo" className="w-8 h-8 rounded-md" />
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

      {/* Recent Chats */}
      {chats.length > 0 && (
        <p className="mt-6 mb-2 text-xs uppercase tracking-wide text-gray-500 dark:text-[#B1A6C0]">
          Recent Chats
        </p>
      )}
      <div className="space-y-2 overflow-y-auto max-h-[50vh] pr-1">
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
              className="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-[#80609F]/20 dark:bg-[#2A2430] hover:bg-gray-100 dark:hover:bg-[#3A3242] transition-colors group"
            >
              {/* Left Side: Avatar + Chat Info */}
              <div className="flex items-center gap-3">
                <img
                  src={chat.avatar || "/avatar.png"}
                  alt={chat.name}
                  className="w-8 h-8 rounded-full object-cover border border-gray-300 dark:border-[#80609F]/30"
                />
                <div>
                  <p className="font-medium text-sm text-gray-800 dark:text-gray-100">
                    {chat.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-[#B1A6C0] truncate max-w-[160px]">
                    {chat.messages.length > 0
                      ? chat.messages[0].content.slice(0, 40)
                      : "No messages yet"}
                  </p>
                </div>
              </div>

              {/* Right Side: Timestamp + Delete */}
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-gray-400 dark:text-[#B1A6C0]">
                  {new Date(chat.updatedAt).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
                <button className="hidden group-hover:block text-gray-400 hover:text-red-500 transition">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Sidebar;
