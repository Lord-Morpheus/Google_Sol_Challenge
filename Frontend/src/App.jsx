import React, { useState } from "react";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import Header from "./components/Header";

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  ]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  return (
    <div>
      <Header />
      <AddBook addBook={addBook} />
      <BookList books={books} />
    </div>
  );
}

export default App;
