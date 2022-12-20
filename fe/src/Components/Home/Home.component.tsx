const HomeComponent = () => {
  return (
    <div>
      <div className="flex justify-end w-100 px-[20%]">
        <img
          src="./person_temp.png"
          alt="profileImage"
          className="object-cover w-40 rounded-full bg-gray-200 z-10"
        />
      </div>
      <div className="bg-gray-100 h-fit -translate-y-32 pb-20">
        <div className="flex flex-col px-[20%]">
          <div className="absolute right-[20%] top-40">
            <button className="border border-blue-600 py-2 px-4 rounded-full text-blue-600 font-light">Contect</button>
          </div>
          <div className="text-4xl font-light pt-10">loopy</div>
          <div className="text-sm font-normal pt-4">FE 개발자</div>
          <div className="text-base font-normal pt-6">FE가 세상을 바꿉니다.</div>
        </div>
        <div className="px-[10%]">
          
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
