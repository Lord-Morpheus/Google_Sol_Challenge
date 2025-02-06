const Header = () => {
  return (
    <div className="bg-slate-950">
    <nav className="w-full h-14 bg-indigo-200 flex justify-between
    px-4 items-center md:px-4">
      <div className=" text-2xl text-indigo-700 font-bold">LibBooks</div>
      <ul className='md:flex hidden font-bold'>
        <li className='mx-[40px] cursor-pointer'>Home</li>
        <li className='mx-[40px] cursor-pointer'>Find Books</li>
        <li className='mx-[40px] cursor-pointer'>About Us</li>
      </ul>
      <div className='hidden md:block bg-indigo-700 text-white rounded-2xl
       px-2 py-2 font-bold cursor-pointer'>Login/Signup</div>
      <div className='md:hidden'>
        <a href="#" className='text-4xl'>&#8801;</a>
      </div>
    </nav>
  </div>
  );
};

export default Header;
