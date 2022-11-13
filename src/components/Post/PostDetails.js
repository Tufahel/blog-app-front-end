import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createLike } from '../../redux/actions/Like';
import { destroyPost, getPostDetails } from '../../redux/actions/Post';
import Comments from '../Comment/Comments';
import User from '../User';

const PostDetails = () => {
  const postId = localStorage.getItem('postid');
  const userId = parseInt(localStorage.getItem('userid'), 10);
  const user = localStorage.getItem('user');
  const { post } = useSelector((state) => state.PostReducer);
  // console.log('posttt: ', post);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getPostDetails(postId));
  }, []);

  const handleDelete = () => {
    dispatch(destroyPost(postId));
    navigate('/');
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
          <User id={post.author_id} />
        </div>
        <h4 className="font-bold text-lg text-green-700">{post.title}</h4>
        <p>{post.text}</p>
        <div className="flex space-x-2 m-2">
          {
          user && (
            <form
              onSubmit={handleLike}
            >
              {' '}
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 rounded" type="submit" onClick={() => handleLike()}>Like</button>
            </form>
          )
        }
          {
          (userId === post.author_id) && (
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold p-1 rounded" type="button" onClick={() => handleDelete()}>Delete</button>
          )
        }
        </div>
      </div>
      <div className="flex flex-col justify-center space-y-2">
        <Comments id={post.author_id} />
        {
        user && (
          <button
            className="text-center bg-teal-500 hover:bg-teal-700 text-white font-bold p-2 mx-20 rounded items-center"
            type="button"
            onClick={() => navigate('/post/createcomment')}
          >
            Add Comment
          </button>
        )
      }
      </div>
    </>
  );
};

export default PostDetails;
