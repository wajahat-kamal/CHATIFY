import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ChatBox from "./components/ChatBox";
import Credits from "./pages/Credits";
import Community from "./pages/Community";
import menu from "./assets/menu.svg";
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {!isMenuOpen && (
        <img
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden fixed top-5 left-5 w-10 h-10 not-dark:invert"
          src={menu}
          alt="Menu Icon"
        />
      )}

      <div className="dark:bg-gradient-to-b from-[#242124] to-black dark:text-white min-h-screen">
        <div className="flex w-screen h-screen">
          <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <main className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<ChatBox />} />
              <Route path="/credits" element={<Credits />} />
              <Route path="/community" element={<Community />} />
            </Routes>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
