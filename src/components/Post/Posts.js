import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { getPosts, destroyPost } from '../../redux/actions/Post';
import LikeCommentCount from '../LikeCommentCount/LikeCommentCount';

const Posts = () => {
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

  const setPostId = (id) => {
    localStorage.setItem('postid', id);
    // navigate(`/post/${postId}`);
  };
  return (
    <>
      <div className="flex flex-col m-2">
        <div className="flex flex-wrap justify-center m-8">
          {posts.posts?.map((post) => (
            <div className="flex flex-col items-center p-2" key={post.post_id}>
              <img className="rounded object-cover h-24" src={post.image} alt="img" />
              {' '}
              <h4 className="font-bold text-lg text-green-700">
                {post.title}
              </h4>
              {' '}
              <div className="flex">
                <p className="w-60 truncate text-center">{post.text}</p>
                <NavLink to="/post"><button className="text-blue-500" type="button" onClick={() => setPostId(post.post_id)}>See more</button></NavLink>
              </div>
              <LikeCommentCount id={post.post_id} />
              <div className="flex flex-row space-x-1">
                {
          user && (
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold p-1 rounded" type="button" onClick={() => handleDelete(post.post_id)}>Delete Post</button>
          )
          }
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
