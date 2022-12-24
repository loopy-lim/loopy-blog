import { Link } from 'react-router-dom';
import NavBarCenterComponent from './NavBarCenter.component';
import { FaRegComment, FaRegHeart } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';

/**
 * is로 시작되는 변수는 모두 false가 기본입니다.
 * @param nav config
 */
const NavBarComponent = ({
  isTextWhite,
  isFixed,
  isPlus,
  isHeart,
  isComment,
}: {
  isTextWhite?: boolean;
  isFixed?: boolean;
  isPlus?: boolean;
  isHeart?: boolean;
  isComment?: boolean;
}) => {
  const subtitle = '';

  return (
    <div
      className={`w-full px-[5%] py-2 flex justify-between z-50 ${
        isFixed ? 'fixed' : ''
      } ${isTextWhite ? 'text-white' : ''}
      backdrop-blur-md`}
    >
      <div className="flex items-center justify-center">
        <Link to="/" className="p-4">
          <div className="text-3xl">Loopy</div>
        </Link>
      </div>
      {subtitle ? <NavBarCenterComponent subtitle={subtitle} /> : ''}
      <div className="flex items-center justify-center">
        {isHeart ? (
          <Link to="/" className="p-4">
            <FaRegHeart className="w-6 h-6" />
          </Link>
        ) : (
          ''
        )}
        {isComment ? (
          <Link to="/" className="p-4">
            <FaRegComment className="w-6 h-6" />
          </Link>
        ) : (
          ''
        )}
        {isPlus ? (
          <Link to="/" className="p-4">
            <AiOutlinePlus />
          </Link>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default NavBarComponent;
