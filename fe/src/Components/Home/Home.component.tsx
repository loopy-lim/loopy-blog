import PostCellComponent from '../Post/PostCell.component';

const HomeComponent = () => {
  const CONTAINER_WITH = `px-[25%]`;
  const POSITION_RIGHT = `right-[25%]`;

  return (
    <div>
      <div className={`flex justify-end w-100 ${CONTAINER_WITH}`}>
        <img
          src="./person_temp.png"
          alt="profileImage"
          className="object-cover w-20 h-20 rounded-full bg-gray-200 z-10"
        />
      </div>
      <div className="bg-gray-100 h-fit -translate-y-10 pb-20">
        <div className={`flex flex-col ${CONTAINER_WITH} pb-20`}>
          <div className={`absolute ${POSITION_RIGHT} top-20`}>
            <button className="border border-blue-600 py-1 px-4 rounded-full text-blue-600 font-light text-xs">
              Contect
            </button>
          </div>
          <div className="text-2xl font-light pt-10">loopy</div>
          <div className="text-sm font-normal pt-4">FE 개발자</div>
          <div className="text-base font-normal pt-6">
            FE가 세상을 바꿉니다.
          </div>
        </div>
        <div className="flex flex-wrap justify-around px-[10%] gap-8">
          <PostCellComponent />
          <PostCellComponent />
          <PostCellComponent />
          <PostCellComponent />
          <PostCellComponent />
          <PostCellComponent />
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
