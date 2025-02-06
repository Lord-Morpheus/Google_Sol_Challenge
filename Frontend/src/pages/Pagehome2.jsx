const Pagehome2 = () => {
  const urls = [
    "https://skyryedesign.com/wp-content/uploads/2016/04/56c6f9b7efad5-cover-books-design-illustrations.jpg",
    "https://bukovero.com/wp-content/uploads/2016/07/Harry_Potter_and_the_Cursed_Child_Special_Rehearsal_Edition_Book_Cover.jpg",
    "https://66.media.tumblr.com/beb4103f9101491afdda0ff4ab600d0f/tumblr_pwtk4vrTJd1tgh17uo4_1280.jpg",
    "https://m.media-amazon.com/images/I/51qanCN4qGL._AC_UF1000,1000_QL80_.jpg",
  ];
  return (
    <div>
      <header className="w-full h-auto">
        <img
          className="w-full md:block h-[800px] hidden"
          src="https://images.unsplash.com/photo-1526243741027-444d633d7365?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <img
          className="w-full md:hidden h-[600px]"
          src="https://images.unsplash.com/photo-1517148892120-4d2da39c8dc1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </header>

      <div className="h-auto w-full flex flex-col items-center text-center p-10">
        <div className="w-full h-auto flex justify-center">
          <p className="text-green-700 font-bold md:text-6xl text-3xl">
          &quot;Top Books&quot;
          </p>
        </div>
        <div className="w-30 md:w-60 h-1 border-b-4 border-b-blue-900 md:mt-4 mt-2 rounded-2xl"></div>

        <div className="w-full flex flex-wrap justify-evenly">
          {urls.map((url, index) => (
            <div key={index} className=" w-70 flex flex-col items-center mb-12 mt-12">
              <img className="w-60 h-75 hover:opacity-70" src={url} alt="" />
            </div>
          ))}
        </div>
      </div>

      <div className="h-auto w-full flex flex-col items-center text-center p-10">
        <div className="w-full h-auto flex justify-center">
          <p className="text-green-700 font-bold md:text-6xl text-3xl">
          &quot;Newly Released Books&quot;
          </p>
        </div>
        <div className="w-60 md:w-140 h-1 border-b-4 border-b-blue-900 md:mt-4 mt-2 rounded-2xl"></div>

        <div className="w-full flex flex-wrap justify-evenly">
          {urls.map((url, index) => (
            <div key={index} className=" w-70 flex flex-col items-center mb-12 mt-12">
              <img className="w-60 h-75 hover:opacity-70" src={url} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pagehome2;
