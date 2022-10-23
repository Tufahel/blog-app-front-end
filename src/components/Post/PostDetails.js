import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getPostDetails } from '../../redux/actions/Post';

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
  return (
    <>
      <p key={post.postId}>
        Title: &nbsp;
        {post.title}
        ,
        {' '}
        Your post text is &nbsp;
        {post.text}
        .
      </p>
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
