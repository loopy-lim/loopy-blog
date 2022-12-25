const PostBackgroundComponent = () => {
  return (
    <>
      <div className="h-screen w-screen fixed bg-black">
        <img
          className="object-cover w-screen h-screen opacity-70"
          src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg"
          alt="blog_post_image"
        />
      </div>
      <div className="flex justify-center h-screen w-screen fixed text-white">
          <div className="flex flex-col justify-end items-start h-full w-4/5">
            <div className="text-6xl mb-4">"제목입니다"</div>
            <div className="font-extralight text-lg mb-16">by Loopy</div>
            <div className="font-extralight text-sm mb-6">Nov. 2022. 24</div>
          </div>
      </div>
    </>
  );
};
export default PostBackgroundComponent;

