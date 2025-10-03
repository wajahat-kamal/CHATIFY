import { useState } from "react";

export default function Login() {
  const [state, setState] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log({ name, email, password, state });
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="md:w-96 w-80 flex flex-col items-center justify-center 
                 bg-white dark:bg-gray-900 rounded-2xl shadow-xl px-7 py-10 
                 transition-all duration-300 hover:shadow-2xl"
    >
      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
        {state === "login" ? "Welcome Back 👋" : "Create Account 🚀"}
      </h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
        {state === "login"
          ? "Please sign in to continue your journey"
          : "Join us today and explore endless possibilities"}
      </p>

      {/* Name field (only signup) */}
      {state === "signup" && (
        <div className="w-full mt-6">
          <input
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 h-12 rounded-lg border border-gray-300 dark:border-gray-700 
                       bg-transparent text-gray-700 dark:text-gray-200 text-sm 
                       focus:ring-2 focus:ring-purple-500 outline-none 
                       transition-all duration-200"
            required
          />
        </div>
      )}

      {/* Email field */}
      <div className="w-full mt-6">
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 h-12 rounded-lg border border-gray-300 dark:border-gray-700 
                     bg-transparent text-gray-700 dark:text-gray-200 text-sm 
                     focus:ring-2 focus:ring-purple-500 outline-none 
                     transition-all duration-200"
          required
        />
      </div>

      {/* Password field */}
      <div className="w-full mt-4">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 h-12 rounded-lg border border-gray-300 dark:border-gray-700 
                     bg-transparent text-gray-700 dark:text-gray-200 text-sm 
                     focus:ring-2 focus:ring-purple-500 outline-none 
                     transition-all duration-200"
          required
        />
      </div>

      {/* Extra options (only login) */}
      {state === "login" && (
        <div className="w-full flex items-center justify-between mt-4 text-gray-500 dark:text-gray-400">
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input
              className="h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
              type="checkbox"
            />
            Remember me
          </label>
          <a
            className="text-sm font-medium text-purple-600 hover:text-purple-700 hover:underline transition"
            href="#"
          >
            Forgot password?
          </a>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        className="mt-8 w-full h-12 rounded-lg text-white font-medium 
                   bg-gradient-to-r from-purple-600 to-purple-700 
                   hover:from-purple-700 hover:to-purple-800 
                   active:scale-95 transition-all duration-200 shadow-md"
      >
        {state === "login" ? "Login" : "Sign up"}
      </button>

      {/* Switch state */}
      <p className="text-gray-500 dark:text-gray-400 text-sm mt-6">
        {state === "login" ? (
          <>
            Don’t have an account?{" "}
            <button
              type="button"
              onClick={() => setState("signup")}
              className="text-purple-600 font-medium hover:underline"
            >
              Sign up
            </button>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => setState("login")}
              className="text-purple-600 font-medium hover:underline"
            >
              Login
            </button>
          </>
        )}
      </p>
    </form>
  );
}
