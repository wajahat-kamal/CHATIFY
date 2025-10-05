import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import chatbot from "../assets/chatbot.avif";
import Message from "./Message";
import { SendHorizonal, StopCircle } from "lucide-react";
import toast from "react-hot-toast";

function ChatBox() {
  const { selectedChat, user, axios, token } = useAppContext();

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [mode, setMode] = useState("text");
  const [isPublished, setIsPublished] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!user) return toast.error("Please login to send a message");

      if (!prompt.trim()) return toast.error("Prompt cannot be empty");

      setLoading(true);
      const promptCopy = prompt;
      setPrompt("");

      // Add user's message instantly
      setMessages((prev) => [
        ...prev,
        { role: "user", content: promptCopy, timestamp: Date.now(), isImage: false },
      ]);

      // ✅ FIX: Added proper Bearer token format
      const { data } = await axios.post(
        "/api/message/text",
        { chatId: selectedChat?._id, prompt: promptCopy },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (data.success) {
        setMessages((prev) => [...prev, data.reply]);
      } else {
        toast.error(data.message);
        setPrompt(promptCopy);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedChat) {
      setMessages(selectedChat.messages || []);
    }
  }, [selectedChat]);

  return (
    <div className="flex-1 flex flex-col justify-between xl:mx-15 md:p-10 max-md:pt-14 p-5 2xl:pr-40 h-screen">
      {/* Messages */}
      <div className="flex-1 mb-5 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-400/60 scrollbar-track-transparent">
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center gap-3 text-primary">
            <div className="flex items-center gap-3 group">
              <div className="relative">
                <img
                  src={chatbot}
                  alt="Chatify Logo"
                  className="w-14 h-14 rounded-2xl shadow-lg border border-purple-400/40 
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
                className="text-4xl sm:text-5xl font-extrabold tracking-wide bg-gradient-to-r 
                           from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent 
                           drop-shadow-sm select-none group-hover:scale-105 transition-transform duration-300"
              >
                Chatify
              </h1>
            </div>
            <p className="mt-5 text-2xl sm:text-3xl text-center text-gray-400 dark:text-gray-200">
              Ask me anything.
            </p>
          </div>
        )}

        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}

        {loading && (
          <div className="loader flex items-center gap-2 mt-3 ml-3">
            <div className="w-2 h-2 rounded-full bg-gray-500 dark:bg-white animate-bounce"></div>
            <div className="w-2 h-2 rounded-full bg-gray-500 dark:bg-white animate-bounce [animation-delay:0.2s]"></div>
            <div className="w-2 h-2 rounded-full bg-gray-500 dark:bg-white animate-bounce [animation-delay:0.4s]"></div>
          </div>
        )}
      </div>

      {/* Image publish option */}
      {mode === "image" && (
        <label className="inline-flex items-center gap-2 mb-3 text-sm mx-auto cursor-pointer">
          <p className="text-xs">Publish Generated Image to Community</p>
          <input
            type="checkbox"
            checked={isPublished}
            onChange={(e) => setIsPublished(e.target.checked)}
            className="cursor-pointer accent-purple-600"
          />
        </label>
      )}

      {/* Chat input */}
      <form
        onSubmit={onSubmit}
        className="bg-white/70 dark:bg-[#2a1f3d]/50 border border-purple-300/30 dark:border-[#80609F]/30 
                   rounded-full w-full max-w-2xl p-2.5 pl-4 mx-auto flex items-center gap-3 shadow-md 
                   backdrop-blur-sm focus-within:ring-2 focus-within:ring-purple-400 transition"
      >
        <select
          onChange={(e) => setMode(e.target.value)}
          value={mode}
          className="text-sm pr-2 pl-3 outline-none cursor-pointer"
        >
          <option value="text">Text</option>
        </select>

        <input
          onChange={(e) => setPrompt(e.target.value)}
          value={prompt}
          placeholder="Type your prompt here..."
          className="flex-1 w-full text-sm px-2 pl-0 py-1 bg-transparent 
                     placeholder:text-gray-400 dark:placeholder:text-gray-300 outline-none"
          required
          type="text"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-10 h-10 flex items-center justify-center rounded-full 
                     bg-gradient-to-r from-purple-500 to-indigo-600 text-white 
                     hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-200 
                     cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? <StopCircle size={20} /> : <SendHorizonal size={20} />}
        </button>
      </form>
    </div>
  );
}

export default ChatBox;
