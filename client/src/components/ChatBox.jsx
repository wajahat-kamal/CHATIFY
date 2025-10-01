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
      {/* messages */}
      <div className="flex-1 overflow-y-scroll mb-5">
        {messages.length === 0 && (
          <div>
            {/* logo */}
            <div className="flex items-center gap-2">
              <img
                src={chatbot}
                alt="Chatify Logo"
                className="w-9 h-9 rounded-md shadow-md"
              />
              <h1 className="text-2xl font-bold tracking-wide">CHATIFY</h1>
            </div>
          </div>
        )}
      </div>

      {/* chat input */}
      <form></form>
    </div>
  );
}

export default ChatBox;
