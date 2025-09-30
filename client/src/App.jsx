import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ChatBox from "./components/ChatBox";
import Credits from "./pages/Credits";
import Community from "./pages/Community";

function App() {
  return (
    <div className="dark:bg-gradient-to-b from-[#242124] to-black dark:text-white min-h-screen">
      <div className="flex w-screen h-screen">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<ChatBox />} />
            <Route path="/credits" element={<Credits />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
