import React from "react";
import { useState } from "react";

const Addbook = () => {
  const [book, setBook] = useState({
    bookName: "",
    authorName: "",
    genre: "",
    language: "",
    publication: "",
    publishedYear: "",
    age: "",
    description: "",
  });
  const handlesubmit = (e) => {
    console.log(book);
    e.preventDefault();  
  };
  return (
    <div className="grid place-items-center bg-gray-100 rounded-xl h-full p-5">
      <h1 className="font-bold text-3xl">Add Book</h1>
      <form className="flex flex-col p-5">
        <div className="flex w-full">
          <input
            type="text"
            placeholder="Book Name"
            className="p-2 m-2 border-2 border-gray-300 rounded-md w-full"
            value={book.bookName}
            onChange={(e) => setBook({ ...book, bookName: e.target.value })}
          />
          <input
            type="text"
            placeholder="Author Name"
            className="p-2 m-2 border-2 border-gray-300 rounded-md w-full"
            value={book.authorName} 
            onChange={(e) => setBook({ ...book, authorName: e.target.value })}
          />
        </div>
        <div className="flex w-full">
          <input
            type="text"
            placeholder="Genre"
            value={book.genre}
            onChange={(e) => setBook({ ...book, genre: e.target.value })}
            className="p-2 m-2 border-2 border-gray-300 rounded-md w-full"/>
          <input
            type="text"
            placeholder="Language"
            value={book.language}
            onChange={(e) => setBook({ ...book, language: e.target.value })}
            className="p-2 m-2 border-2 border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="flex w-full">
          <input
            type="text"
            placeholder="Publication"
            value={book.publication}  
            onChange={(e) => setBook({ ...book, publication: e.target.value })}
            className="p-2 m-2 border-2 border-gray-300 rounded-md w-full"
          />
          <input
            type="text"
            placeholder="Published Year"
            value={book.publishedYear}
            onChange={(e) => setBook({ ...book, publishedYear: e.target.value })}
            className="p-2 m-2 border-2 border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="flex w-full">
          <div className="p-2">
            <label className="block text-gray-600 text-[20px] font-medium m-2 p-2 ">
              Upload Book
            </label>
            <input
              type="file"
              accept="application/pdf"
              className=" self-center p-2 m-2 border-2 border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="p-2">
            <label className="block text-gray-600 text-[20px] font-medium m-2 p-2 ">
              Cover Image
            </label>
            <input
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              className=" self-center p-2 m-2 border-2 border-gray-300 rounded-md w-full"
            />
          </div>
        </div>
        <textarea
          type="text"
          value={book.description}
          onChange={(e) => setBook({ ...book, description: e.target.value })}
          placeholder="Description"
          className="p-2 m-2 border-2 border-gray-300 rounded-md w-full min-h-32"
        />
        <input
          type="text"
          placeholder="Minimum Age"
          value={book.age}
          onChange={(e) => setBook({ ...book, age: e.target.value })}
          className=" self-center p-2 m-2 border-2 border-gray-300 rounded-md w-32"
        />
        <button
          onClick={(e) => e.preventDefault()}
          className="p-2 m-2 bg-gray-100 text-black border-black border-2 hover:bg-blue-500 rounded-md w-48 self-center"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default Addbook;
