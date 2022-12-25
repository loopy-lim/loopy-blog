import PostCellComponent from "../Post/PostView/PostCell.component";

const PostHomeComponent = () => {

  return (
    <div className="bg-white">
      <div className="flex justify-center">
        <div className={`w-full px-[5%] max-w-[65rem] z-10`}>
          <div className="flex justify-end  w-full">
            <img
              src="./person_temp.png"
              alt="profileImage"
              className="object-cover w-20 h-20 rounded-full bg-gray-200"
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-100 h-fit -translate-y-10 pb-20 flex justify-center">
        <div className="max-w-[65rem] w-full">
          <div className={`flex flex-col px-[5%] max-w-[65rem] pb-20`}>
            <div className="text-2xl font-light pt-10">loopy</div>
            <div className="text-sm font-normal pt-4">FE 개발자</div>
            <div className="flex justify-between pt-4">
              <div className="text-base font-normal">
                FE가 세상을 바꿉니다.
              </div>
              <div className='px-[5%]'>
                <button className="border border-blue-600 py-1 px-4 rounded-full text-blue-600 font-light text-xs">
                  Contect
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(16rem,_1fr))] justify-items-center px-[10%] gap-8">
            <PostCellComponent />
            <PostCellComponent />
            <PostCellComponent />
            <PostCellComponent />
            <PostCellComponent />
            <PostCellComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostHomeComponent;
