import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { destroyComment, getComments } from '../../redux/actions/Comment';
import User from '../User';
import LikeCommentCount from '../LikeCommentCount/LikeCommentCount';

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

  const handleDelete = (id) => {
    dispatch(destroyComment(id));
    window.location.reload(true);
  };
  return (
    <>
      <div className="border space-y-2">
        {' '}
        <div className="border"><LikeCommentCount id={postId} /></div>
        {filtered?.map((comment) => (
          <div className="m-2" key={comment.post_id}>
            <p>
              <User id={comment.user_id} />
              {' : '}
              {comment.text}
              {' '}
              {
          (userId === id && user) && (
          <button className="text-red-500 hover:text-red-700 font-bold" type="button" onClick={() => handleDelete(comment.comment_id)}>Delete</button>
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
