import NavBarComponent from '../../Components/NavBar/NavBar.component';
import PostComponent from '../../Components/Post/Post.component';

const Post = () => {
  return (
    <div className="h-fit">
      <NavBarComponent isAbsolute={true} isWhite={true} />
      <PostComponent />
    </div>
  );
};

export default Post;
