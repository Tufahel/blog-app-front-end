import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../../redux/actions/Comment';
import User from '../User';
import LikeCommentCount from '../LikeCommentCount/LikeCommentCount';
import DeleteComment from './DeleteComment';

const Comments = (props) => {
  const {
    id,
  } = props;
  const user = localStorage.getItem('user');
  const userId = parseInt(localStorage.getItem('userid'), 10);
  const postId = parseInt(localStorage.getItem('postid'), 10);
  const comments = useSelector((state) => state.CommentReducer);
  const filtered = comments.comments.filter((comment) => comment.post_id === postId);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getComments());
  }, []);
  return (
    <>
      <div className="border space-y-2">
        {' '}
        <div className="flex justify-center border"><LikeCommentCount id={postId} /></div>
        {filtered?.map((comment) => (
          <div className="m-2" key={comment.post_id}>
            <p>
              <div className="inline text-black font-medium"><User id={comment.user_id} /></div>
              {' : '}
              {comment.text}
              {' '}
              {
          (userId === id && user) && (
          <DeleteComment id={comment.comment_id} />
          )
          }
            </p>
          </div>
        ))}
      </div>

    </>
  );
};
Comments.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Comments;
