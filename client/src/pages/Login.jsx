import { motion } from "framer-motion";
import { LogIn } from "lucide-react";
import botImage from "../assets/chatbot.avif";
import userImage from "../assets/user-avatar.png";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center 
                    bg-gradient-to-br from-purple-600/30 via-gray-200/30 to-purple-700/30
                    dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
                    backdrop-blur-lg px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-sm bg-white/10 dark:bg-gray-800/40 
                   rounded-2xl shadow-xl border border-gray-200/30 dark:border-gray-700/30 
                   p-8 backdrop-blur-md"
      >
        {/* Header */}
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 tracking-wide">
              Login 
            </h1>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
            login to start chatting with the AI bot CHATIFY
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                         bg-white/70 dark:bg-gray-900/70
                         text-gray-800 dark:text-gray-100
                         focus:outline-none focus:ring-2 focus:ring-purple-400 dark:focus:ring-purple-600
                         placeholder-gray-500 dark:placeholder-gray-400
                         transition-colors duration-300"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                         bg-white/70 dark:bg-gray-900/70
                         text-gray-800 dark:text-gray-100
                         focus:outline-none focus:ring-2 focus:ring-purple-400 dark:focus:ring-purple-600
                         placeholder-gray-500 dark:placeholder-gray-400
                         transition-colors duration-300"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2
                       bg-purple-600 hover:bg-purple-700
                       text-white font-semibold py-2.5 rounded-lg shadow-md
                       transition-colors duration-300"
          >
            <LogIn size={18} />
            Log In
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
          Don’t have an account?{" "}
          <a
            href="#"
            className="text-purple-600 dark:text-purple-400 font-medium hover:underline"
          >
            Sign up
          </a>
        </p>

      </motion.div>
    </div>
  );
}
