import Sidebar from '../components/sidebar.jsx';
import { useSelector } from 'react-redux';
// import { toggleSidebar } from '../redux/actions';

const homePage = () => {
  // const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isOpen);

  return (
    <div
      className={`grid ${
        isOpen ? 'grid-cols-6' : 'grid-cols-14'
      } bg-[#f6f4f5] transition-all duration-500 ease-in-out`}  // Adjusted transition duration
    >
      <Sidebar className="col-span-1"/>
      <h2 className={`my-3 bg-white rounded-s col-span-${isOpen ? 5 : 13} w-full`}>Home</h2>
    </div>
  );
};

export default homePage;