import '../components/sidebar.jsx';
import Sidebar from '../components/sidebar.jsx';

const homePage = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <Sidebar />
      <h2 className='col-span-3'>Home</h2>
    </div>
  );
};

export default homePage;