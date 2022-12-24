import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Post from './Pages/Post/Post';
import PostWrite from './Pages/Post/PostWrite';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="post" element={<Post />} />
        <Route path="post/write" element={<PostWrite />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
