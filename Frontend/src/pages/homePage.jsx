import '../components/sidebar.jsx';
import Sidebar from '../components/sidebar.jsx';

const homePage = () => {
  return (
    <div className="grid grid-cols-12 bg-[#f6f4f5]">
      <Sidebar />
      <h2 className='col-span-10 my-3 bg-white rounded-s'>Home</h2>
    </div>
  );
};

export default homePage;