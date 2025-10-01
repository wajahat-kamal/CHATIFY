import React from "react";
import { User } from "lucide-react";
import chatbot from "../assets/chatbot.avif";

function Message({ message }) {
  const { role, content, timestamp } = message;

  return (
    <div>
      {role === "user" ? (
        // User Message
        <div className="flex items-start justify-end my-4 gap-2">
          {/* Message Bubble */}
          <div
            className="flex flex-col gap-2 p-3 px-4 bg-slate-50 dark:bg-[#57317C]/30 
                          border border-[#80609F]/30 rounded-lg max-w-2xl shadow-sm"
          >
            <p className="text-sm dark:text-primary">{content}</p>
            <span className="text-xs text-gray-400 dark:text-[#B1A6C0]">
              {timestamp}
            </span>
          </div>

          {/* User Icon */}
          <div className="bg-gray-200 dark:bg-purple-600 rounded-full p-1.5">
            <User size={18} className="text-gray-700 dark:text-gray-100" />
          </div>
        </div>
      ) : (
        // Bot Message
        <div className="flex items-end gap-2 my-4">
          {/* Avatar */}
          <div className="flex-shrink-0 bg-gray-200 dark:bg-purple-600 rounded-full w-8 h-8 flex items-center justify-center">
            <img
              src={chatbot}
              alt="Chatbot Avatar"
              className="w-6 h-6 rounded-full object-cover"
            />
          </div>

          {/* Message Bubble */}
          <div
            className="flex flex-col gap-1 p-3 px-4 max-w-[75%] rounded-lg shadow-sm 
                     bg-primary/20 dark:bg-[#57317C]/30 
                     border border-[#80609F]/30"
          >
            <p className="text-sm dark:text-primary reset-tw">{content}</p>
            <span className="text-xs text-gray-400 dark:text-[#B1A6C0] self-end">
              {timestamp}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Message;
