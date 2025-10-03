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
      className="md:w-96 w-80 flex flex-col items-center justify-center bg-white dark:bg-gray-900 rounded-xl shadow-lg px-6 py-8"
    >
      {/* Title */}
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
        {state === "login" ? "Sign in" : "Create account"}
      </h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
        {state === "login"
          ? "Welcome back! Please sign in to continue"
          : "Join us by creating your account"}
      </p>

      {/* Google login */}
      <button
        type="button"
        className="w-full mt-6 bg-gray-100 dark:bg-gray-800 flex items-center justify-center h-12 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      >
        <img
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg"
          alt="googleLogo"
          className="h-5"
        />
      </button>

      {/* Divider */}
      <div className="flex items-center gap-3 w-full my-6">
        <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700"></div>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          or continue with email
        </p>
        <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700"></div>
      </div>

      {/* Name field (only signup) */}
      {state === "signup" && (
        <div className="w-full mb-4">
          <input
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 h-12 rounded-full border border-gray-300 dark:border-gray-700 bg-transparent text-gray-700 dark:text-gray-200 text-sm focus:ring-2 focus:ring-purple-500 outline-none"
            required
          />
        </div>
      )}

      {/* Email field */}
      <div className="w-full mb-4">
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 h-12 rounded-full border border-gray-300 dark:border-gray-700 bg-transparent text-gray-700 dark:text-gray-200 text-sm focus:ring-2 focus:ring-purple-500 outline-none"
          required
        />
      </div>

      {/* Password field */}
      <div className="w-full">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 h-12 rounded-full border border-gray-300 dark:border-gray-700 bg-transparent text-gray-700 dark:text-gray-200 text-sm focus:ring-2 focus:ring-purple-500 outline-none"
          required
        />
      </div>

      {/* Extra options (only login) */}
      {state === "login" && (
        <div className="w-full flex items-center justify-between mt-4 text-gray-500 dark:text-gray-400">
          <label className="flex items-center gap-2 text-sm">
            <input
              className="h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
              type="checkbox"
            />
            Remember me
          </label>
          <a className="text-sm underline hover:text-purple-600" href="#">
            Forgot password?
          </a>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        className="mt-6 w-full h-12 rounded-full text-white font-medium bg-purple-600 hover:bg-purple-700 active:bg-purple-800 transition"
      >
        {state === "login" ? "Login" : "Sign up"}
      </button>

      {/* Switch state */}
      <p className="text-gray-500 dark:text-gray-400 text-sm mt-4">
        {state === "login" ? (
          <>
            Don’t have an account?{" "}
            <button
              type="button"
              onClick={() => setState("signup")}
              className="text-purple-600 hover:underline"
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
              className="text-purple-600 hover:underline"
            >
              Login
            </button>
          </>
        )}
      </p>
    </form>
  );
}
