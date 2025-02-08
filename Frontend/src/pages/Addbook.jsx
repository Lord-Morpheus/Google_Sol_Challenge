import React from "react";

const Addbook = () => {
  return (
    <div className="grid place-items-center bg-gray-100 rounded-2xl">
      <h1 className="font-bold text-3xl">Add Book</h1>
      <form className="flex flex-col p-5">
        <div className="flex w-full">
          <input
            type="text"
            placeholder="Book Name"
            className="p-2 m-2 border-2 border-gray-300 rounded-md w-full"
          />
          <input
            type="text"
            placeholder="Author Name"
            className="p-2 m-2 border-2 border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="flex w-full">
          <input
            type="text"
            placeholder="Genre"
            className="p-2 m-2 border-2 border-gray-300 rounded-md w-full"/>
          <input
            type="text"
            placeholder="Language"
            className="p-2 m-2 border-2 border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="flex w-full">
          <input
            type="text"
            placeholder="Publication"
            className="p-2 m-2 border-2 border-gray-300 rounded-md w-full"
          />
          <input
            type="text"
            placeholder="Published Year"
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
          placeholder="Description"
          className="p-2 m-2 border-2 border-gray-300 rounded-md w-full h-32"
        />
        <input
          type="text"
          placeholder="Minimum Age"
          className=" self-center p-2 m-2 border-2 border-gray-300 rounded-md w-32"
        />
        <button
          onClick={(e) => e.preventDefault()}
          className="p-2 m-2 bg-blue-500 text-white rounded-md w-48 self-center"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default Addbook;
