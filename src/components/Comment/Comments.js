import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../../redux/actions/Comment';

const Comments = () => {
  const postId = parseInt(localStorage.getItem('postid'), 10);
  console.log(postId);
  const comments = useSelector((state) => state.CommentReducer);
  console.log(comments.comments);
  const filtered = comments.comments.filter((comment) => comment.post_id === postId);
  console.log(filtered);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComments());
  }, []);
  return (
    <>
      <h3>Comments: </h3>
      {filtered?.map((comment) => (
        <p key={comment.post_id}>
          Your comment text is &nbsp;
          {comment.text}
          .
          Your author id is &nbsp;
          {comment.user_id}
          Your post id is &nbsp;
          {comment.post_id}
        </p>
      ))}
    </>
  );
};

export default Comments;
