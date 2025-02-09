import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [resourceData, setResourceData] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [currentPageExplore, setCurrentPageExplore] = useState(0);
  const [currentPageRead, setCurrentPageRead] = useState(0);
  const [currentPageAuthors, setCurrentPageAuthors] = useState(0);
  const [currentBook, setCurrentBook] = useState(0);
  const [loading, setLoading] = useState(true);

  const isOpen=useSelector((state)=>state.sidebar.isOpen);
  const isLogin=useSelector((state)=>state.login.isLogin);
  const data=useSelector((state)=>state.login.userData);
  const userData=data.data;
  console.log("userData",userData);
  const navigate=useNavigate();
  
  const itemsPerPage = 8;
  const authorsPerPage = 4;

  useEffect(() => {
    if(isLogin===false){
      navigate("/login");
    }

    const fetchResources = async () => {
      const response = await fetch("http://localhost:4000/resources/all");
      const resource = await response.json();
      const data = resource.data;
      setResourceData(data);
      // console.log(resourceData.pagesRead);
      setLoading(false);

      const authors = [
        ...new Set(data.map((resource) => resource.author).flat()),
      ];
      setAuthors(authors);
      console.log(authors);
    };
    fetchResources();
  }, [isLogin,navigate]);

  const currentItemsExplore = resourceData.slice(
    currentPageExplore * itemsPerPage,
    (currentPageExplore + 1) * itemsPerPage
  );
  const currentItemsRead = resourceData.slice(
    currentPageRead * authorsPerPage,
    (currentPageRead + 1) * authorsPerPage
  );
  const currentAuthors = authors.slice(
    currentPageAuthors * authorsPerPage,
    (currentPageAuthors + 1) * authorsPerPage
  );
  const currentBookData = resourceData[currentBook];

  const handlePreviousExplore = () => {
    if (currentPageExplore > 0) {
      setCurrentPageExplore(currentPageExplore - 1);
    }
  };
  const handlePreviousRead = () => {
    if (currentPageRead > 0) {
      setCurrentPageRead(currentPageRead - 1);
    }
  };
  const handleAuthorsPrevious = () => {
    console.log("author previous");
    if (currentPageAuthors > 0) {
      setCurrentPageAuthors(currentPageAuthors - 1);
    }
  };
  const handlePreviousBook = () => {
    if (currentBook > 0) {
      setCurrentBook(currentBook - 1);
    }
  };

  const handleNextExplore = () => {
    if ((currentPageExplore + 1) * itemsPerPage < resourceData.length) {
      setCurrentPageExplore(currentPageExplore + 1);
    }
  };
  const handleNextRead = () => {
    if ((currentPageRead + 1) * authorsPerPage < resourceData.length) {
      setCurrentPageRead(currentPageRead + 1);
    }
  };
  const handleAuthorsNext = () => {
    console.log("author next");
    if ((currentPageAuthors + 1) * authorsPerPage < authors.length) {
      setCurrentPageAuthors(currentPageAuthors + 1);
    }
  };
  const handleNextBook = () => {
    if (currentBook < resourceData.length - 1) {
      setCurrentBook(currentBook + 1);
    }
  };


  return (
    <div className="flex bg-[#f6faff]">
      <div className={`grid grid-rows-3 gap-2 ${isOpen?'w-2/3':'w-5/7'}`}>
        <div className="bg-white m-3 rounded-lg row-span-2">
          <div className="flex justify-between items-center p-4">
            <div className="flex justify-start gap-4 items-center">
              <div className="rounded-3xl bg-[#EBF4FF] px-5 py-1 text-center hover:bg-[#C2DDFF] cursor-pointer">
                Popular
              </div>
              <div className="rounded-3xl bg-[#EBF4FF] px-5 py-1 text-center hover:bg-[#C2DDFF] cursor-pointer">
                Latest
              </div>
              <div className="rounded-3xl bg-[#EBF4FF] px-5 py-1 text-center hover:bg-[#C2DDFF] cursor-pointer">
                Top Rated
              </div>
              <div className="rounded-3xl bg-[#EBF4FF] px-5 py-1 text-center hover:bg-[#C2DDFF] cursor-pointer">
                Following
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div
                className="capitalize rounded-full bg-[#EBF4FF] text-center p-1 hover:bg-[#C2DDFF] cursor-pointer"
                onClick={handlePreviousExplore}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#50a2ff"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div
                className="capitalize rounded-full bg-[#EBF4FF] text-center p-1 hover:bg-[#C2DDFF] cursor-pointer"
                onClick={handleNextExplore}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#50a2ff"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 pl-4 gap-2">
            {loading ? (
              <div>Loading...</div> // Or show a loading spinner here
            ) : (
              currentItemsExplore?.map((resource, index) => (
                <div className="basis-md" key={index}>
                  <img
                    className="object-fill h-[80%] w-[90%]"
                    src={resource.imageUrl}
                    alt="book image"
                  />
                  <div className="p-2">
                    <p className="text-md font-semibold capitalize truncate text-[#001B3D]">
                      {resource.name}
                    </p>
                    <div className="text-sm truncate text-gray-500">
                      {resource.author.join(" & ")}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        <div className="bg-white m-3 rounded-lg row-span-1">
          <div className="flex justify-between items-center">
            <div className="px-3 py-4 text-lg font-semibold capitalize text-[#001B3D]">
              progress
            </div>
            <div className="flex gap-4 items-center p-4">
              <div
                className="capitalize rounded-full bg-[#EBF4FF] text-center p-1 hover:bg-[#C2DDFF] cursor-pointer"
                onClick={handlePreviousRead}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#50a2ff"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div
                className="capitalize rounded-full bg-[#EBF4FF] text-center p-1 hover:bg-[#C2DDFF] cursor-pointer"
                onClick={handleNextRead}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#50a2ff"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
          {currentItemsRead?.map((resource, index) => (
            <div
              className="flex justify-between items-center px-3 py-1"
              key={index}
            >
              <div className="flex items-center gap-4">
                <img
                  className="h-10 w-10 rounded-full"
                  src={resource.imageUrl}
                  alt="book image"
                />
                <div className="text-[#001B3D]">
                  <p className="text-md capitalize">{resource.name}</p>
                </div>
              </div>
              <div className="p-4 flex items-center gap-2">
                <div className="w-90 h-2 bg-[#EBF4FF] rounded-full">
                  <div
                    className="h-full bg-[#50a2ff] rounded-full"
                    style={{
                      width: `${
                        (resource.pagesRead || 40 / resource.totalPages) * 100
                      }%`,
                    }}
                  ></div>
                </div>
                <div>
                  <p className="text-sm text-gray-500">
                    {(
                      ((resource.pagesRead || 40) / resource.totalPages) *
                      100
                    ).toFixed(1)}
                    %
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`grid grid-rows-3 gap-2 ${isOpen?'w-1/3':'w-2/7'}`}>
        <div className="bg-white m-3 rounded-lg flex flex-col row-span-1">
          <div className="flex justify-between items-center">
            <div className="p-4 text-lg font-semibold capitalize text-[#001B3D]">
              Recommended authors
            </div>
            <div className="flex gap-4 items-center p-4">
              <div
                className="capitalize rounded-full bg-[#EBF4FF] text-center p-1 hover:bg-[#C2DDFF] cursor-pointer"
                onClick={handleAuthorsPrevious}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#50a2ff"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div
                className="capitalize rounded-full bg-[#EBF4FF] text-center p-1 hover:bg-[#C2DDFF] cursor-pointer"
                onClick={handleAuthorsNext}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#50a2ff"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 text-[#001B3D]">
            {loading ? (
              <div>Loading...</div> // Or show a loading spinner here
            ) : (
              currentAuthors.map((author, index) => {
                const authorInitials = author
                  .split(" ")
                  .map((name) => name[0])
                  .join("");

                return (
                  <div className="flex items-center gap-4 px-4" key={index}>
                    <span className="w-10 h-10 flex items-center justify-center bg-[#50a2ff] text-white rounded-full">
                      {authorInitials}
                    </span>
                    <div>
                      <p className="text-md capitalize">{author}</p>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
        <div className="bg-white m-3 rounded-lg flex flex-col row-span-2">
          <div className="flex justify-between items-center">
            <div className="text-lg font-semibold capitalize text-[#001B3D] p-4">
              continue reading
            </div>
            <div className="flex gap-4 items-center p-4">
              <div
                className="capitalize rounded-full bg-[#EBF4FF] text-center p-1 hover:bg-[#C2DDFF] cursor-pointer"
                onClick={handlePreviousBook}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#50a2ff"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div
                className="capitalize rounded-full bg-[#EBF4FF] text-center p-1 hover:bg-[#C2DDFF] cursor-pointer"
                onClick={handleNextBook}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#50a2ff"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {loading ? (
              <div>Loading...</div>
            ) : (
              currentBookData && (
                <div className="flex flex-col items-start gap-4 px-4">
                  <img
                    className="w-full h-[420px] rounded-lg object-fill"
                    src={currentBookData.imageUrl}
                    alt="book image"
                  />
                  <div className="flex flex-col gap-2 w-full">
                    <div className="flex justify-between items-baseline gap-4">
                      <p className="text-2xl capitalize text-[#001B3D]">
                        {currentBookData.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {currentBookData.author.join(" & ")}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-sm text-gray-500">
                        {currentBookData.description}
                      </p>
                      <div className="flex items-baseline gap-2">
                        <p className="capitalize text-gray-500">rating</p>
                        <div className="w-full h-2 bg-[#EBF4FF] rounded-full">
                          <div
                            className="h-full bg-[#50a2ff] rounded-full"
                            style={{
                              width: `${
                                (currentBookData.userRating / 5) * 100
                              }%`,
                            }}
                          ></div>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">
                            {currentBookData.userRating}/5
                          </p>
                        </div>
                      </div>
                      <span className="text-end text-sm text-gray-500">
                        ({currentBookData.numUserRated} user
                        {currentBookData.numUserRated > 1 ? "s" : ""} rated)
                      </span>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
