const ComponentCountComponent = ({
  countedComment,
}: {
  countedComment: number;
}) => {
  return (
    <div className="flex justify-center w-full bg-white pb-2">
      <div className="max-w-[65rem] px-[5%] w-full">
        <div className="pb-2 border-b">
          댓글<span className="px-2 text-blue-600">{countedComment}</span>
        </div>
      </div>
    </div>
  );
};

export default ComponentCountComponent;
