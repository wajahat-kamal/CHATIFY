import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import chatbot from "../assets/chatbot.avif";

function ChatBox() {

  const {selectedChat, theme} = useAppContext();

  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    if (selectedChat) {
      setMessages(selectedChat.messages)
    }
  }, [selectedChat])
  

  return (
    <div>
      {/* messages */}
      <div>

      </div>

      {/* chat input */}
      <form>

      </form>
    </div>
  )
}

export default ChatBox