import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { destroyPost, getPostDetails } from '../../redux/actions/Post';
import Comments from '../Comment/Comments';

const PostDetails = () => {
  const postId = localStorage.getItem('postid');
  console.log(postId);
  const user = localStorage.getItem('user');
  const { post } = useSelector((state) => state.PostReducer);
  console.log('postdetails: ', post);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getPostDetails(postId));
  }, []);

  const handleDelete = (id) => {
    dispatch(destroyPost(id));
    navigate('/posts');
    window.location.reload(true);
  };
  return (
    <>
      <p key={post.id}>
        Title: &nbsp;
        {post.title}
        ,
        {' '}
        Your post text is &nbsp;
        {post.text}
        .
        {' '}
        Your post id &nbsp;
        {post.id}
        .
        {' '}
        {
          user && (
          <button className="" type="button" onClick={() => handleDelete(post.id)}>DELETE</button>
          )
        }
      </p>
      <Comments />
      {
        user && (
          <button
            className=""
            type="button"
            onClick={() => navigate('/createcomment')}
          >
            Add Comment
          </button>
        )
      }
    </>
  );
};

export default PostDetails;
