import { useEffect, useState } from "react";

const HomePage = () => {
  const [resourceData, setResourceData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResources = async () => {
      const response = await fetch("http://localhost:4000/resources/all");
      const resource = await response.json();
      const data = resource.data;
      setResourceData(data);
      console.log(data);
      setLoading(false); // Once data is fetched, set loading to false
    };
    fetchResources();
  }, []);
  console.log(resourceData);
  return (
    <div className="rounded-md bg-[#f6faff] flex w-full h-full">
      <div className="bg-white m-2 rounded-md w-2/3">
        <div className="flex justify-start gap-4 items-center p-4">
          <div className="rounded-3xl bg-[#CEE4F3] px-5 py-1 text-center">
            Popular
          </div>
          <div className="rounded-3xl bg-[#CEE4F3] px-5 py-1 text-center">
            Latest
          </div>
          <div className="rounded-3xl bg-[#CEE4F3] px-5 py-1 text-center">
            Top Rated
          </div>
          <div className="rounded-3xl bg-[#CEE4F3] px-5 py-1 text-center">
            Following
          </div>
        </div>

        <div className="flex justify-evenly h-1/2">
          {loading ? (
            <div>Loading...</div> // Or show a loading spinner here
          ) : (
            resourceData?.map((resource, index) => (
              <div key={index}>
                <img className="w-full object-cover" src={resource.imageUrl} alt="book image" />
              </div>
            ))
          )}
        </div>
      </div>
      <div className="w-1/4"></div>
    </div>
  );
};


export default HomePage;
