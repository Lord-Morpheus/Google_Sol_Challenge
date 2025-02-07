import { useEffect } from "react";

const HomePage = () => {
  return (
    <div className="rounded-md bg-white flex w-full h-full">
      <div className="flex justify-start gap-4 items-center w-3/4 p-4">
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
      <div className="w-1/4">
        
      </div>
    </div>
  );
};

export default HomePage;