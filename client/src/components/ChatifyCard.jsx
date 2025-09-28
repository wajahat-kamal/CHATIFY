import React, { useState } from "react";
import axios from "axios";               // ✅ Correct import
import ChatBody from "./ChatBody";

export default function ChatifyCard() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    try {
      setLoading(true);

      const { data } = await axios.post(
        "http://localhost:7000/bot/v1/message",
        { text: input.trim() }
      );

      if (data.success) {
        setMessages((prev) => [
          ...prev,
          { text: data.userMessage, sender: "user" },
          { text: data.botReplay, sender: "bot" },
        ]);
        setInput("");
      } else {
        console.warn("Server responded without success:", data);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
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
