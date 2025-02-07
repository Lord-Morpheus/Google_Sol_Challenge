import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Homepage from "./pages/homePage.jsx";
import Sidebar from "./components/sidebar.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  const isOpen = useSelector((state) => state.sidebar.isOpen);

  return (
    <div
      className={`grid h-lvh items-center ${
        isOpen ? "grid-cols-6" : "grid-cols-14"
      } bg-[#FDFBF7] transition-all duration-500 ease-in-out`} // Adjusted transition duration
    >
      <Sidebar />
      <div
        className={`min-h-lvh rounded-md ${
          isOpen ? "col-span-5" : "col-span-13"
        }`}
      >
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
