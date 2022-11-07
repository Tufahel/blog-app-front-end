import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getPosts, destroyPost } from '../../redux/actions/Post';

const Posts = () => {
  const postId = localStorage.getItem('postid');
  const user = localStorage.getItem('user');
  const posts = useSelector((state) => state.PostReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const handleDelete = (id) => {
    dispatch(destroyPost(id));
    window.location.reload(true);
  };

  const handlePostId = (id) => {
    localStorage.setItem('postid', id);
    navigate(`/post/${postId}`);
    window.location.reload(true);
  };
  return (
    <>
      <div className="flex flex-col m-2">
        <div className="flex flex-wrap justify-center m-8">
          {posts.posts?.map((post) => (
            <div className="flex flex-col items-center p-2" key={post.post_id}>
              <img className="rounded object-cover h-24" src={post.image} alt="img" />
              {' '}
              <h4 className="font-bold text-lg">{post.title}</h4>
              {' '}
              <p className="w-60 truncate text-center">{post.text}</p>
              <div className="flex flex-row space-x-1">
                {
          user && (
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold p-1 rounded" type="button" onClick={() => handleDelete(post.post_id)}>Delete Post</button>
          )
          }
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 rounded" type="button" onClick={() => handlePostId(post.post_id)}>See Full Post</button>
              </div>
            </div>
          ))}
        </div>
        {
        user && (
          <button
            className="text-center bg-teal-500 hover:bg-teal-700 text-white font-bold p-2 mx-20 rounded items-center"
            type="button"
            onClick={() => navigate('/createpost')}
          >
            Add Post
          </button>
        )
      }
      </div>
    </>
  );
};

export default Posts;
