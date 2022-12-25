import { useEffect, useState } from 'react';
import NavBarComponent from '../../Components/NavBar/NavBar.component';
import PostComponent from '../../Components/Post/PostView/Post.component';
import PostHomeComponent from '../../Components/Home/PostHome.component';
import CommentComponent from '../../Components/Comment/Comment.component';
import ComponentCountComponent from '../../Components/Comment/CommentCount.component';

const Post = () => {
  const [isTitleBackgroundHeight, setIsBackgroundHeight] = useState(true);

  useEffect(() => {
    const handleWindowScroll = () => {
      setIsBackgroundHeight(!isOverTitleBackground());
    };
    window.addEventListener('scroll', handleWindowScroll);
    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
    };
  }, []);

  return (
    <div className="h-fit">
      <NavBarComponent
        isFixed={true}
        isTextWhite={isTitleBackgroundHeight}
        isHeart={true}
        isComment={true}
      />
      <PostComponent />
      <div className="translate-y-[100vh]">
        <ComponentCountComponent countedComment={0} />
        <CommentComponent />
        <PostHomeComponent />
      </div>
    </div>
  );
};

const isOverTitleBackground = (): boolean => {
  const { scrollY, innerHeight } = window;

  return scrollY >= innerHeight;
};

export default Post;
