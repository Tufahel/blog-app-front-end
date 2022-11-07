import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createLike } from '../../redux/actions/Like';
import { destroyPost, getPostDetails } from '../../redux/actions/Post';
import Comments from '../Comment/Comments';

const PostDetails = () => {
  const postId = localStorage.getItem('postid');
  const user = localStorage.getItem('user');
  const { post } = useSelector((state) => state.PostReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getPostDetails(postId));
  }, []);

  const handleDelete = (id) => {
    dispatch(destroyPost(id));
    navigate('/');
  };

  const handleLike = () => {
    dispatch(createLike());
    window.location.reload(true);
  };

  return (
    <>
      <div key={post.id} className="flex flex-col justify-center items-center m-2">
        <img className="rounded w-60" src={post.image} alt="img" />
        <h4 className="font-bold text-lg">{post.title}</h4>
        <p>{post.text}</p>
        <div className="flex space-x-2 m-2">
          {
          user && (
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold p-1 rounded" type="button" onClick={() => handleDelete(post.id)}>Delete</button>
          )
        }
          {
          user && (
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 rounded" type="button" onClick={() => handleLike()}>Like</button>
          )
        }
        </div>
      </div>
      <div className="flex flex-col justify-center space-y-2">
        <Comments />
        {
        user && (
          <button
            className="text-center bg-teal-500 hover:bg-teal-700 text-white font-bold p-2 mx-20 rounded items-center"
            type="button"
            onClick={() => navigate(`/post/${postId}/createcomment`)}
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
