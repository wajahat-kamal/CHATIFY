import React, { useState } from "react";
import ChatBody from "./ChatBody";

export default function ChatifyCard() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    try {
      
    } catch (error) {
      
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center
                 bg-gradient-to-br from-gray-900 via-gray-800 to-black
                 transition-colors duration-700"
    >
      <section
        aria-label="Chat window"
        className="flex flex-col overflow-hidden
                   w-full sm:w-[420px] h-screen sm:h-[550px]
                   bg-gray-900/80 text-gray-100
                   sm:rounded-2xl shadow-2xl
                   backdrop-blur-xl border border-gray-200/40 dark:border-gray-700/40
                   transition-all duration-700"
      >
        <ChatBody
          messages={messages}
          input={input}
          setInput={setInput}
          loading={loading}
          handleSend={handleSend}
        />
      </section>
    </div>
  );
}
