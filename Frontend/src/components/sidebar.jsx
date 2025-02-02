import { useEffect, useState } from "react";

const Sidebar = () => {
  const [resources, setResources] = useState([]);
  const [genres, setGenres] = useState([]);
  const [isHidden, setIsHidden] = useState(null);

  useEffect(() => {
    const fetchResources = async () => {
      const response = await fetch("http://localhost:4000/resources/all");
      const resource = await response.json();
      console.log(resource.data);
      setResources(resource.data);

      const genres = resource.data.flatMap((resource) => resource.genre);
      setGenres(genres);
    };
    fetchResources();
  }, []);

  const hideDropdown = (currentFilter) => {
    isHidden === currentFilter ? setIsHidden(null) : setIsHidden(currentFilter);
  };

  return (
    <div className="col-span-1 flex flex-col w-full">
      <h2>Sidebar</h2>
      <h4>Filters</h4>
      <div className="mt-4 flex flex-col gap-2">
        <button
          onClick={() => hideDropdown("genre")}
          className="w-full flex justify-between px-[10%]"
        >
          <p>Genre</p>
          {isHidden === "genre" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 transition-transform duration-1000 transform rotate-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 transition-transform duration-1000 transform rotate-180"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          )}
        </button>
        {isHidden === "genre" &&
          genres.map((genre, index) => (
            
            <li key={index} className="flex pl-[20%]">
              <p>{genre}</p>
            </li>
          ))}

        <button
          onClick={() => hideDropdown("author")}
          className="w-full flex justify-between px-[10%]"
        >
          <p>author</p>
          {isHidden === "author" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 transition-transform duration-1000 transform rotate-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 transition-transform duration-1000 transform rotate-180"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          )}
        </button>
        {isHidden === "author" &&
          resources.map((resource, index) => (
            <li key={index} className="flex pl-[20%]">
              <p>{resource.author}</p>
            </li>
          ))}

        <button
          onClick={() => hideDropdown("publication")}
          className="w-full flex justify-between px-[10%]"
        >
          <p>publication</p>
          {isHidden === "publication" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 transition-transform duration-1000 transform rotate-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 transition-transform duration-1000 transform rotate-180"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          )}
        </button>
        {isHidden === "publication" &&
          resources.map((resource, index) => (
            <li key={index} className="flex pl-[20%]">
              <p>{resource.publication}</p>
            </li>
          ))}

        <button
          onClick={() => hideDropdown("language")}
          className="w-full flex justify-between px-[10%]"
        >
          <p>language</p>
          {isHidden === "language" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 transition-transform duration-1000 transform rotate-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 transition-transform duration-1000 transform rotate-180"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          )}
        </button>
        {isHidden === "language" &&
          resources.map((resource, index) => (
            <li key={index} className="flex pl-[20%]">
              <p>{resource.language}</p>
            </li>
          ))}

        <button
          onClick={() => hideDropdown("age")}
          className="w-full flex justify-between px-[10%]"
        >
          <p>age</p>
          {isHidden === "age" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 transition-transform duration-1000 transform rotate-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 transition-transform duration-1000 transform rotate-180"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          )}
        </button>
        {isHidden === "age" &&
          resources.map((resource, index) => (
            <li key={index} className="flex pl-[20%]">
              <p>{resource.age}</p>
            </li>
          ))}

        <button
          onClick={() => hideDropdown("publishedIn")}
          className="w-full flex justify-between px-[10%]"
        >
          <p>Relased In</p>
          {isHidden === "publishedIn" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 transition-transform duration-1000 transform rotate-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 transition-transform duration-1000 transform rotate-180"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          )}
        </button>
        {isHidden === "publishedIn" &&
          resources.map((resource, index) => (
            <li key={index} className="flex pl-[20%]">
              <p>{resource.publishedIn}</p>
            </li>
          ))}
      </div>
    </div>
  );
};

export default Sidebar;
