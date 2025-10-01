import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import chatbot from "../assets/chatbot.avif";

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
    <div className="flex justify-between flex-col flex-1 m-5 xl:mx-30 max-md:mt-14 2xl:pr-40">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto mb-5">
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center  text-center text-primary px-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img
                src={chatbot}
                alt="Chatify Logo"
                className="w-14 h-14 rounded-md shadow-md"
              />
              <h1 className="text-4xl font-bold tracking-wide">CHATIFY</h1>
            </div>

            {/* Subtitle */}
            <p className="mt-4 text-3xl sm:text-5xl text-gray-600 dark:text-white max-w-md">
              Ask me anything.
            </p>
          </div>
        )}
      </div>

      {/* chat input */}
      <form></form>
    </div>
  );
}

export default ChatBox;
