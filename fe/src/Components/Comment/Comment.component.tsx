const CommentComponent = () => {
  return (
    <div className="w-full bg-white flex justify-center">
      <div className="flex items-center w-full max-w-[65rem] px-[5%]">
        <div className="flex items-center flex-col border rounded-sm p-4 mt-2 mb-14 w-full">
          <textarea
            className="text-sm font-light resize-none focus:outline-none w-full"
            placeholder="댓글을 입력하세요!"
            name="comment"
            id="comment"
            rows={4}
          />
          <button className="py-1 px-4 rounded-full text-sm font-light border border-gray-400 self-end focus:outline-none">
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentComponent;
