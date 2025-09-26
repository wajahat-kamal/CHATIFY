import React, { useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";

export default function ChatifyCard() {
  const [theme, setTheme] = useState("dark");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const handleRefresh = () => {
    setMessages([]);
    setInput("");
  };

  const handleSend = (e) => {
    e.preventDefault();
    const userMsg = input.trim();
    if (!userMsg) return;

    setMessages((prev) => [...prev, { from: "user", text: userMsg }]);
    setInput("");
  };

  return (
    <div
      className={`${
        theme === "light"
          ? "bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300"
          : "bg-gradient-to-br from-gray-900 via-gray-800 to-black"
      } min-h-screen w-full flex items-center justify-center transition-colors duration-700`}
    >
      <div
        className={`${
          theme === "light"
            ? "bg-white/80 text-gray-900"
            : "bg-gray-900/80 text-gray-100"
        } w-full sm:w-[420px] h-screen sm:h-[550px]
           sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden
           backdrop-blur-xl border border-gray-200/40 dark:border-gray-700/40
           transition-all duration-700`}
      >
        <ChatHeader
          theme={theme}
          toggleTheme={toggleTheme}
          handleRefresh={handleRefresh}
        />
        <ChatBody
          messages={messages}
          input={input}
          setInput={setInput}
          loading={loading}
          handleSend={handleSend}
        />
      </div>
    </div>
  );
}
