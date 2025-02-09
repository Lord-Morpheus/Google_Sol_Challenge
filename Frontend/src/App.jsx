import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Homepage from "./pages/homePage.jsx";
import Sidebar from "./components/sidebar.jsx";
import Navbar from "./components/Navbar.jsx";
import Login from "./pages/Login.jsx";
import Addbook from "./pages/Addbook.jsx";

function App() {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const isLogin = useSelector((state) => state.login.isLogin);
  const userData = useSelector((state) => state.login.userData);
  console.log(userData);
  console.log(isLogin);
  return (
    <div
      className={`grid items-center ${
        isOpen ? "grid-cols-6" : "grid-cols-14"
      } bg-[#FDFBF7] transition-all duration-500 ease-in-out`}
    >
      {isLogin && <Sidebar/>}
      {/* <Sidebar/> */}
      <div
        className={`rounded-md ${
          isLogin===false ? "col-span-full": isOpen && isLogin? "col-span-5" : "col-span-13"
        }`}
      >
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/addbook" element={<Addbook />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
