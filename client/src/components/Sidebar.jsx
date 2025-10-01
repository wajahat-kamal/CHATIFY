import React, { useState } from "react";
import { Search, Plus, Trash2, Images, CreditCard } from "lucide-react";
import { useAppContext } from "../context/AppContext";
import chatbot from "../assets/chatbot.avif";
import moment from "moment";

function Sidebar() {
  const { user, chats, theme, setTheme, setSelectedChat, navigate } =
    useAppContext();
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
      <div className="space-y-2 overflow-y-auto max-h-[50vh] pr-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-[#4B3B58] scrollbar-track-transparent">
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
              className="flex items-center justify-between p-2 rounded-md border border-gray-200 dark:border-[#80609F]/20 
                   dark:bg-[#1C1522] bg-white/80 backdrop-blur-sm
                   hover:bg-gray-50 dark:hover:bg-[#2A2130] transition-all duration-200 shadow-sm"
            >
              {/* Chat info */}
              <div className="flex flex-col max-w-[70%]">
                <p className="truncate text-sm font-medium text-gray-800 dark:text-gray-100">
                  {chat.messages.length > 0
                    ? chat.messages[0].content.slice(0, 32)
                    : chat.name}
                </p>
                <span className="text-[11px] font-medium text-gray-500 dark:text-[#B1A6C0] mt-0.5 italic">
                  {moment(chat.updatedAt).fromNow()}
                </span>
              </div>

              {/* Delete button */}
              <button className="hidden group-hover:block text-gray-400 hover:text-red-500 transition">
                <Trash2 size={16} />
              </button>
            </div>
          ))}
      </div>

      {/* Community Images */}
      <div
        onClick={() => navigate("/community")}
        className="flex items-center gap-3 p-3.5 mt-6 
             rounded-lg border border-gray-400/30 dark:border-white/20 
             bg-transparent hover:scale-[1.02]
             transition-all duration-200 shadow-sm cursor-pointer"
      >
        <Images
          size={18}
          className="text-gray-600 dark:text-gray-300 transition duration-200"
        />
        <p className="text-sm font-medium text-gray-700 dark:text-gray-200 transition">
          Community Images
        </p>
      </div>

      {/* Credits purchase option */}
      <div
        onClick={() => navigate("/credits")}
        className="flex items-center gap-3 p-3.5 mt-4 
             rounded-lg border border-gray-400/30 dark:border-white/20 
             bg-transparent hover:scale-[1.02] hover:shadow-md
             transition-all duration-200 cursor-pointer"
      >
        <CreditCard
          size={20}
          className="text-gray-600 dark:text-gray-30"
        />

        <div className="flex flex-col">
          <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">
            Credits: {user?.credits ?? 0}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Purchase credits to use Chatify
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
