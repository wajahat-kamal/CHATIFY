import { motion } from "framer-motion";
import { Send } from "lucide-react";
import Chatbot from "../assets/chatbot.png";

export default function ChatBody({
  messages,
  input,
  setInput,
  loading,
  handleSend,
}) {
  return (
    <>
      {/* Body */}
      <div className="flex-1 flex flex-col items-center justify-start px-4 py-6 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center flex-1">
            <motion.img
              src={Chatbot}
              alt="Bot"
              className="w-28 h-28 drop-shadow-xl"
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <h2 className="text-2xl sm:text-3xl font-semibold">
              How can I help you?
            </h2>
          </div>
        ) : (
          <div className="w-full flex flex-col gap-2">
            {messages.map((message, idx) => (
              <div
                key={idx}
                className={`max-w-[85%] px-4 py-2 my-1 rounded-lg shadow text-start
          ${
            message.from === "user"
              ? "self-end bg-purple-600 text-white"
              : "self-start bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          }`}
              >
                <span className="text-sm">{message.text}</span>
              </div>
            ))}
          </div>
        )}
        {loading && (
          <div className="w-full flex justify-start px-4 py-2 my-1">
            <span className="text-sm italic text-gray-500 dark:text-gray-400">
              Typing...
            </span>
          </div>
        )}
      </div>

      {/* Input Area */}
      <form
        onSubmit={handleSend}
        className="flex items-center gap-2 px-4 py-4
                   border-t border-gray-200/40 dark:border-gray-700/40
                   bg-gray-50/10 dark:bg-gray-800/50
                   backdrop-blur-md transition-colors duration-700"
      >
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 rounded-xl border border-gray-300 dark:border-gray-600
                     px-4 py-2 text-sm
                     bg-white/70 dark:bg-gray-900/70
                     text-gray-800 dark:text-gray-100
                     focus:outline-none focus:ring-2
                     focus:ring-purple-400 dark:focus:ring-purple-600
                     placeholder-gray-500 dark:placeholder-gray-400
                     transition-colors duration-300"
        />

        <button
          type="submit"
          disabled={loading}
          className="p-3 rounded-xl flex items-center justify-center shadow-md
                     bg-purple-600 hover:bg-purple-700
                     text-white transition-colors duration-300"
        >
          <Send size={20} />
        </button>
      </form>
    </>
  );
}
