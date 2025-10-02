import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import chatbot from "../assets/chatbot.avif";
import Message from "./Message";
import { SendHorizonal, StopCircle } from "lucide-react";

function ChatBox() {
  const { selectedChat } = useAppContext();

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const [prompt, setPrompt] = useState("");
  const [mode, setMode] = useState("text");
  const [isPublish, setIsPublish] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
  }

  useEffect(() => {
    if (selectedChat) {
      setMessages(selectedChat.messages);
    }
  }, [selectedChat]);

  return (
    <div className="flex-1 flex flex-col justify-between xl:mx-15 md:p-10 max-md:pt-14 p-5 2xl:pr-40 h-screen">
      {/* Messages */}
      <div className="flex-1 mb-5 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-400/60 scrollbar-track-transparent">
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center gap-3 text-primary">
            <div className="flex items-center gap-3">
              <img
                src={chatbot}
                alt="Chatify Logo"
                className="w-14 h-14 rounded-md shadow-md"
              />
              <h1 className="text-4xl font-bold tracking-wide">CHATIFY</h1>
            </div>
            <p className="mt-5 text-3xl sm:text-5xl text-center text-gray-400 dark:text-gray-200">
              Ask me anything.
            </p>
          </div>
        )}

        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}

        {loading && (
          <div className="loader flex items-center gap-2 mt-3">
            <div className="w-2 h-2 rounded-full bg-gray-500 dark:bg-white animate-bounce"></div>
            <div className="w-2 h-2 rounded-full bg-gray-500 dark:bg-white animate-bounce [animation-delay:0.2s]"></div>
            <div className="w-2 h-2 rounded-full bg-gray-500 dark:bg-white animate-bounce [animation-delay:0.4s]"></div>
          </div>
        )}
      </div>

      {/* Chat input */}
      <form
        className="bg-white/70 dark:bg-[#2a1f3d]/50 border border-purple-300/30 dark:border-[#80609F]/30 
        rounded-full w-full max-w-2xl p-2.5 pl-4 mx-auto 
        flex items-center gap-3 shadow-md backdrop-blur-sm 
        focus-within:ring-2 focus-within:ring-purple-400 transition"
      >
        {/* Mode Selector */}
        <select
          onChange={(e) => setMode(e.target.value)}
          value={mode}
          className="text-sm pr-2 pl-3 outline-none cursor-pointer"
        >
          <option className="dark:bg-purple-900" value="text">
            Text
          </option>
          <option className="dark:bg-purple-900" value="image">
            Image
          </option>
        </select>

        {/* Input */}
        <input
          onChange={(e) => setPrompt(e.target.value)}
          value={prompt}
          placeholder="Type your prompt here..."
          className="flex-1 w-full text-sm px-2 pl-0 py-1 bg-transparent 
          placeholder:text-gray-400 dark:placeholder:text-gray-300 
          outline-none"
          required
          type="text"
        />

        {/* Send Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-10 h-10 flex items-center justify-center rounded-full 
          bg-gradient-to-r from-purple-500 to-indigo-600 text-white 
          hover:scale-110 hover:shadow-lg hover:shadow-purple-500/40 
          transition-all duration-200 cursor-pointer"
        >
          {loading ? <StopCircle size={20}/> : <SendHorizonal size={20} />}
          
        </button>
      </form>
    </div>
  );
}

export default ChatBox;
