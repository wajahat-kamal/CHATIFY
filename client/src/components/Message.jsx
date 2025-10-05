import React, { useEffect } from "react";
import { User } from "lucide-react";
import chatbot from "../assets/chatbot.avif";
import moment from "moment";
import ReactMarkdown from "react-markdown";
import Prism from "prismjs";

function Message({ message }) {
  const { role, content, timestamp } = message;

  useEffect(() => {
    Prism.highlightAll();
  }, [message.content]);

  return (
    <div>
      {role === "user" ? (
        // User Message
        <div className="flex items-start justify-end my-4 gap-2">
          <div
            className="flex flex-col gap-2 p-3 px-4 bg-slate-50 dark:bg-[#57317C]/30 
                       border border-[#80609F]/30 rounded-lg shadow-sm
                       max-w-[85%] sm:max-w-lg md:max-w-xl lg:max-w-2xl"
          >
            <p className="text-sm dark:text-primary">{content}</p>
            <span className="text-xs text-gray-400 dark:text-[#B1A6C0]">
              {moment(timestamp).fromNow()}
            </span>
          </div>

          <div className="bg-gray-200 dark:bg-purple-600 rounded-full p-1 sm:p-1.5">
            <User className="text-gray-700 dark:text-gray-100 w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        </div>
      ) : (
        // Bot Message
        <div className="flex items-start justify-start my-4 gap-2">
          <div className="bg-gray-200 dark:bg-purple-600 rounded-full p-1 sm:p-1.5">
            <img
              src={chatbot}
              alt="Chatbot Avatar"
              className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover"
            />
          </div>
          <div
            className="flex flex-col gap-2 p-3 px-4 
                       bg-primary/20 dark:bg-[#57317C]/30 
                       border border-[#80609F]/30 rounded-lg shadow-sm
                       max-w-[85%] sm:max-w-lg md:max-w-xl lg:max-w-2xl"
          >
            <p className="text-sm dark:text-primary reset-tw">
              <ReactMarkdown>{message.content}</ReactMarkdown>
            </p>

            <span className="text-xs text-gray-400 dark:text-[#B1A6C0] self-end">
              {moment(timestamp).fromNow()}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Message;
