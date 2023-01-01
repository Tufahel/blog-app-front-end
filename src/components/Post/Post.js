import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createLike } from '../../redux/actions/Like';
import { destroyPost, getPostDetails } from '../../redux/actions/Post';
import User from '../User';

const Post = () => {
  const postId = localStorage.getItem('postid');
  const userId = parseInt(localStorage.getItem('userid'), 10);
  const user = localStorage.getItem('user');
  const { post } = useSelector((state) => state.PostReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getPostDetails(postId));
  }, []);

  const handleDelete = () => {
    dispatch(destroyPost(postId, navigate));
  };

  const handleLike = (e) => {
    e.preventDefault();
    dispatch(createLike(postId));
  };

  return (
    <>
      <div key={post.id} className="flex flex-col justify-center items-center m-2">
        <img className="rounded w-60" src={post.image} alt="img" />
        <div>
          Posted by:
          {' '}
          <div className="inline text-red-500 font-medium"><User id={post.author_id} /></div>
        </div>
        <h4 className="font-bold text-lg">{post.title}</h4>
        <p>{post.text}</p>
        <div className="flex space-x-2 m-2">
          {
          user && (
            <form
              onSubmit={handleLike}
            >
              {' '}
              <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-blue-500 border-blue-500 hover:border-blue-500 hover:text-white hover:bg-blue-700 mt-4 lg:mt-0 mr-2" type="submit" onClick={() => handleLike()}>Like</button>
            </form>
          )
        }
          {
          (userId === post.author_id) && (
            <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-red-500 border-red-500 hover:border-red-500 hover:text-white hover:bg-red-700 mt-4 lg:mt-0 mr-2" type="button" onClick={() => handleDelete()}>Delete</button>
          )
        }
          {
        user && (
          <button
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-green-500 border-green-500 hover:border-green-700 hover:text-white hover:bg-green-700 mt-4 lg:mt-0"
            type="button"
            onClick={() => navigate('/post/createcomment')}
          >
            Add Comment
          </button>
        )
      }
        </div>
      </div>
    </>
  );
};

export default Post;
