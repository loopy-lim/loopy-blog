import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Post from './Pages/Post/Post';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
