const PostCellComponent = () => {
  return (
    <div className="w-80">
      <img className="box object-cover w-80 h-60" src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg" alt="blog_post_image" />
      <div>
        <div className="text-2xl py-4">Title</div>
        <div className="text-sm text-gray-500 leading-6 line-clamp-3">공개하지 아니한 회의내용의 공표에 관하여는 법률이 정하는 바에 의한다. 대통령의 국법상 행위는 문서로써 하며, 이 문서에는 국무총리와 관계 국무위원이 부서한다. 군사에 관한 것도 또한 같다.제2항과 제3항의 처분에 대하여는 법원에 제소할 수 없다. 국교는 인정되지 아니하며, 종교와 정치는 분리된다.</div>
        <div className="test-xs text-gray-400 my-4">10분 전</div>
      </div>
    </div>
  );
};

export default PostCellComponent;
