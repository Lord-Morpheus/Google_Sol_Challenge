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
      <Sidebar/>
      <div className={`m-2 bg-white rounded-md ${isOpen?'col-span-5':'col-span-13'}`}>
      </div>
    </div>
  );
};

export default homePage;