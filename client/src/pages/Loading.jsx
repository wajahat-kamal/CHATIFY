import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 8000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-gradient-to-b from-[#531B81] to-[#29184B] text-white">
      {/* Spinner */}
      <div className="flex items-center justify-center">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-ping"></div>
          <div className="w-16 h-16 rounded-full border-4 border-white border-t-transparent animate-spin"></div>
        </div>
      </div>

      {/* Text */}
      <p className="mt-6 text-lg font-semibold tracking-wide animate-pulse">
        Loading...
      </p>
    </div>
  );
}

export default Loading;
