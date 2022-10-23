import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Comments from './components/Comment/Comments';
import CreateComment from './components/Comment/CreateComment';
import Login from './components/Login/Login';
import CreatePost from './components/Post/CreatePost';
import PostDetails from './components/Post/PostDetails';
import Posts from './components/Post/Posts';
import Signup from './components/Signup/Signup';
import User from './components/User';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/postdetails" element={<PostDetails />} />
          <Route path="/createcomment" element={<CreateComment />} />
          <Route path="/comments" element={<Comments />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
