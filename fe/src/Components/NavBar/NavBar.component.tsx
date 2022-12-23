import { Link } from 'react-router-dom';
import NavBarCenterComponent from './NavBarCenter.component';
import { FaRegComment, FaRegHeart } from 'react-icons/fa';

const NavBarComponent = ({
  isWhite,
  isFixed,
}: {
  isWhite: boolean;
  isFixed: boolean;
}) => {
  const subtitle = '';

  return (
    <div
      className={`w-full px-[5%] py-2 flex justify-between z-50 ${
        isFixed ? 'fixed' : ''
      } ${isWhite ? 'text-white' : ''}
      backdrop-blur-md`}
    >
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
