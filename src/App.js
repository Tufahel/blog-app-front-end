import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Comments from './components/Comment/Comments';
import CreateComment from './components/Comment/CreateComment';
import Login from './components/Login/Login';
import Navigation from './components/Navigation/Navigation';
import CreatePost from './components/Post/CreatePost';
import PostDetails from './components/Post/PostDetails';
import Posts from './components/Post/Posts';
import Signup from './components/Signup/Signup';

function App() {
  const postId = localStorage.getItem('postid');
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path={`/post/${postId}`} element={<PostDetails />} />
          <Route path={`/post/${postId}/createcomment`} element={<CreateComment />} />
          <Route path="/comments" element={<Comments />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
