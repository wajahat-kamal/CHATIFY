import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import chatbot from "../assets/chatbot.avif";
import Message from "./Message";
import { Send, SendHorizonal } from "lucide-react";

function ChatBox() {
  const { selectedChat, theme } = useAppContext();

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedChat) {
      setMessages(selectedChat.messages);
    }
  }, [selectedChat]);

  return (
    <div className="flex-1 flex flex-col justify-between m-5 md:m-10 xl:mx-30 max-md:mt-14 2xl:pr-40">
      {/* Messages */}
      <div className="flex-1 mb-5 overflow-y-scroll">
        {messages.length === 0 && (
          <div class="h-full flex flex-col items-center justify-center gap-2 text-primary">
            <div className="flex items-center gap-2">
              <img
                src={chatbot}
                alt="Chatify Logo"
                className="w-14 h-14 rounded-md shadow-md"
              />
              <h1 className="text-4xl font-bold tracking-wide">CHATIFY</h1>
            </div>
            <p class="mt-5 text-4xl sm:text-6xl text-center text-gray-400 dark:text-white">
              Ask me anything.
            </p>
          </div>
        )}

        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}

        {loading && (
          <div className="loader flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gray-500 dark:bg-white animate-bounce"></div>
            <div className="w-2 h-2 rounded-full bg-gray-500 dark:bg-white animate-bounce"></div>
            <div className="w-2 h-2 rounded-full bg-gray-500 dark:bg-white animate-bounce"></div>
          </div>
        )}
      </div>

      {/* chat input */}
      <form
        className="bg-primary/10 dark:bg-[#583C79]/30 border border-primary/40 dark:border-[#80609F]/30 
  rounded-full w-full max-w-2xl p-2.5 pl-4 mx-auto flex items-center gap-3 shadow-sm backdrop-blur"
      >
        {/* Mode Selector */}
        <select
          className="text-sm px-3 py-1 rounded-full bg-white/70 dark:bg-purple-900/60 
    border border-gray-300 dark:border-[#6d4a96]/40 
    outline-none focus:ring-2 focus:ring-primary/50 transition-all"
        >
          <option value="text">Text</option>
          <option value="image">Image</option>
        </select>

        {/* Input */}
        <input
          placeholder="Type your prompt here..."
          className="flex-1 w-full text-sm px-2 py-1 bg-transparent 
    placeholder:text-gray-400 dark:placeholder:text-gray-300 
    outline-none focus:ring-0"
          required
          type="text"
        />

        {/* Send Button */}
        <button
          type="submit"
          className="w-9 h-9 flex items-center justify-center rounded-full 
    bg-gradient-to-r from-purple-500 to-indigo-600 text-white 
    hover:scale-110 transition-transform shadow-md"
        >
         <SendHorizonal size={20}/>
        </button>
      </form>
    </div>
  );
}

export default ChatBox;
