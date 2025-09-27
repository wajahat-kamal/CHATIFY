import botImage from "../assets/chatbot.avif";
import userImage from "../assets/user-avatar.png"; 

export default function ChatHeader() {
  return (
    <header
      className="flex items-center justify-between px-4 py-3
                 bg-white/10 dark:bg-gray-800/50 backdrop-blur-md
                 border-b border-gray-200/40 dark:border-gray-700/40
                 shadow-sm transition-colors duration-700"
    >
      <div className="flex items-center gap-2">
        <img
          src={botImage}
          alt="Chatify Logo"
          className="w-8 h-8 rounded-full object-cover shadow-md ring-2 ring-purple-500/40"
        />
        <h1 className="text-xl font-bold tracking-wide">CHATIFY</h1>
      </div>
      
      <div>
        <img
          src={userImage}
          alt="User Avatar"
          className="w-8 h-8 rounded-full object-cover shadow-md ring-2 ring-purple-500/40 cursor-pointer"
        />
      </div>
    </header>
  );
}
