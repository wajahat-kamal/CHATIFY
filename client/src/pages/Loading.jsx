import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Loading() {

  const navigate = useNavigate()

  useEffect(() => {
    const timeout = setTimeout(() => {
      Navigate("/")
    }, 8000);
    return () => clearTimeout(timeout)
  }, [])
  

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-b from-[#531B81] to-[#29184B] text-white">
      {/* Spinner */}
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-ping"></div>
        <div className="w-12 h-12 rounded-full border-4 border-white border-t-transparent animate-spin"></div>
      </div>

      {/* Text */}
      <p className="mt-6 text-lg font-medium tracking-wide animate-pulse">
        Loading...
      </p>
    </div>
  );
}

export default Loading;
