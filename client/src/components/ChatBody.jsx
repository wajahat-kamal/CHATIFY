import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import emptyStateBot from "../assets/chatbot.png";
import botImage from "../assets/chatbot.avif";
import userImage from "../assets/user-avatar.png";
import { useSelector } from "react-redux";

export default function ChatBody({
  messages,
  input,
  setInput,
  loading,
  handleSend,
}) {

  const { user } = useSelector((state) => state.auth);


  const inputClasses = `
    flex-1 rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 text-sm
    bg-white/70 dark:bg-gray-900/70 text-gray-800 dark:text-gray-100
    focus:outline-none focus:ring-2 focus:ring-purple-400 dark:focus:ring-purple-600
    placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-300
  `;

  const bubbleBase = `
    max-w-[80%] px-3 py-1.5 my-1 rounded-lg shadow text-start text-sm
  `;

  return (
    <>
      {/* Header */}
      <header
        className="flex items-center justify-between px-4 py-3
                   bg-white/10 dark:bg-gray-800/50 backdrop-blur-md
                   border-b border-gray-200/40 dark:border-gray-700/40
                   shadow-sm transition-colors duration-700"
      >
        <div className="flex items-center gap-2">
          <img
            src={botImage}
            alt="Chatify Bot Logo"
            className="w-8 h-8 rounded-full object-cover shadow-md ring-2 ring-purple-500/40"
          />
          <h1 className="text-xl font-bold tracking-wide">CHATIFY</h1>
        </div>

        {user ? (
  <button
    aria-label="User settings"
    className="
      relative focus:outline-none 
      hover:scale-105 active:scale-95
      transition-transform duration-200
      group
    "
  >
    <img
      src={userImage}
      alt="User avatar"
      className="
        w-9 h-9 rounded-full object-cover
        shadow-md ring-2 ring-purple-500/40
        group-hover:ring-purple-500/70
        transition duration-300
      "
    />
    <span
      className="
        absolute inset-0 rounded-full
        bg-purple-500/20 blur-md opacity-0
        group-hover:opacity-100 transition duration-300
      "
    />
  </button>
) : (
  <button
    className="
      px-4 py-1.5 rounded-full
      bg-purple-600 hover:bg-purple-700
      text-white text-sm font-medium
      shadow-md
      focus:outline-none focus:ring-2 focus:ring-purple-400
      active:scale-95
      transition-all duration-300
    "
  >
    Login
  </button>
)}


       
      </header>

      {/* Chat Body */}
      <main
        className="flex-1 flex flex-col items-center justify-start px-3 py-4 overflow-y-auto"
        aria-live="polite"
        aria-busy={loading}
      >
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center flex-1 text-center">
            <motion.img
              src={emptyStateBot}
              alt="Chatbot illustration"
              className="w-20 h-20 drop-shadow-xl"
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <h2 className="text-xl sm:text-2xl font-semibold mt-4 text-gray-700 dark:text-gray-200">
              How can I help you today?
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Start typing below to begin chatting.
            </p>
          </div>
        ) : (
          <div className="w-full flex flex-col gap-1">
            {messages.map((message, idx) => (
              <div
                key={idx}
                className={`${bubbleBase} ${
                  message.sender === "user"
                    ? "self-end bg-purple-600 text-white"
                    : "self-start bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>
        )}

        {loading && (
          <div className="w-full flex items-center gap-2 px-3 py-2 my-1 text-gray-500 dark:text-gray-400">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
            >
              <Loader2 size={18} className="text-purple-500" />
            </motion.div>
            <span className="text-xs italic">Typing…</span>
          </div>
        )}
      </main>

      {/* Input Area */}
      <form
        onSubmit={handleSend}
        className="flex items-center gap-2 px-3 py-3
                   border-t border-gray-200/40 dark:border-gray-700/40
                   bg-gray-50/10 dark:bg-gray-800/50
                   backdrop-blur-md transition-colors duration-700"
      >
        <label htmlFor="chat-input" className="sr-only">
          Type your message
        </label>
        <input
          id="chat-input"
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={inputClasses}
          disabled={loading}
          autoFocus
        />

        <button
          type="submit"
          disabled={loading}
          aria-label="Send message"
          className="p-2.5 rounded-lg flex items-center justify-center shadow-md
                     bg-purple-600 hover:bg-purple-700 disabled:opacity-60
                     text-white transition-colors duration-300"
        >
          <Send size={18} />
        </button>
      </form>
    </>
  );
}
