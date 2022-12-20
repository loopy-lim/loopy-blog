import { Link } from 'react-router-dom';
import NavBarCenterComponent from './NavBarCenter.component';
import { FaRegComment, FaRegHeart } from 'react-icons/fa';

const NavBarComponent = () => {
  const subtitle = '';

  return (
    <div className="w-full px-[10%] py-10 flex justify-between">
      <div className="flex items-center justify-center">
        <Link to="/" className="p-4">
          <div className="text-3xl">Loopy</div>
        </Link>
      </div>
      {subtitle ? <NavBarCenterComponent subtitle={subtitle} /> : ''}
      <div className="flex items-center justify-center">
        <Link to="/" className="p-4">
          <FaRegHeart className="w-6 h-6" />
        </Link>
        <Link to="/" className="p-4">
          <FaRegComment className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

export default NavBarComponent;
