import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const PostDetails = () => {
  const user = localStorage.getItem('user');
  const { post } = useSelector((state) => state.PostReducer);
  console.log('postdetails: ', post);
  const navigate = useNavigate();
  return (
    <>
      <p key={post.post_id}>
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
