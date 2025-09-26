import { RotateCcw, Sun, Moon } from "lucide-react";
import botImage from "../assets/chatbot.avif";

export default function ChatHeader({ theme, toggleTheme, handleRefresh }) {
  return (
    <header
      className="flex items-center justify-between px-4 py-3
                 bg-white/10 dark:bg-gray-800/50 backdrop-blur-md
                 border-b border-gray-200/40 dark:border-gray-700/40
                 shadow-sm transition-colors duration-700"
    >
      {/* ---- Logo + Title ---- */}
      <div className="flex items-center gap-2">
        <img
          src={botImage}
          alt="Chatify Logo"
          className="w-8 h-8 rounded-full object-cover shadow-md ring-2 ring-purple-500/40"
        />
        <h1 className="text-xl font-bold tracking-wide">CHATIFY</h1>
      </div>

      {/* ---- Action Buttons ---- */}
      <div className="flex items-center gap-1.5">
        <button
          onClick={handleRefresh}
          className="p-1.5 rounded-xl hover:bg-purple-500/20
                     text-gray-600 dark:text-gray-200
                     bg-gray-700
                     hover:text-purple-600 dark:hover:text-purple-400
                     transition-colors duration-300"
          title="Refresh chat"
        >
          <RotateCcw size={18} />
        </button>

        <button
          onClick={toggleTheme}
          className="p-1.5 rounded-xl hover:bg-purple-500/20 bg-gray-700
                     text-gray-600 dark:text-gray-200
                     hover:text-purple-600 dark:hover:text-purple-400
                     transition-colors duration-300"
          title="Toggle theme"
        >
          {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </div>
    </header>
  );
}
