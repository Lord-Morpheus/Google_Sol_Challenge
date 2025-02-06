import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Homepage from '../src/pages/homePage.jsx';
import Header from '../src/components/header.jsx';
import Pagehome2 from "./pages/Pagehome2.jsx";

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  ]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  return (
    <>
      {/* <Header /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>  
      </Router>  
    </>
  );
}

export default App;
