import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";

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
      <div></div>

      {/* chat input */}
      <form></form>
    </div>
  );
}

export default ChatBox;
