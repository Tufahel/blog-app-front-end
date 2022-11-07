import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { destroyComment, getComments } from '../../redux/actions/Comment';
import { getLikes } from '../../redux/actions/Like';
import User from '../User';

const Comments = (props) => {
  const {
    id,
  } = props;
  // console.log('post id: ', id);
  const user = localStorage.getItem('user');
  const userId = parseInt(localStorage.getItem('userid'), 10);
  const postId = parseInt(localStorage.getItem('postid'), 10);
  const comments = useSelector((state) => state.CommentReducer);
  const filtered = comments.comments.filter((comment) => comment.post_id === postId);
  const dispatch = useDispatch();
  const likes = useSelector((state) => state.LikeReducer);
  const filterLike = likes.likes.filter((lk) => lk.post_id === postId);
  useEffect(() => {
    dispatch(getLikes());
  }, []);
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
        <div className="flex justify-center space-x-2 border">
          <h3>
            Likes: &nbsp;
            {filterLike.length}
          </h3>
          <h3>
            Comments: &nbsp;
            {filtered.length}
          </h3>
        </div>
        {filtered?.map((comment) => (
          <div className="flex justify-center space-x-2 items-center" key={comment.post_id}>
            <p>
              <User id={comment.user_id} />
              {' : '}
              {comment.text}
            </p>
            {
          (userId === id && user) && (
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold p-1 rounded" type="button" onClick={() => handleDelete(comment.comment_id)}>Delete</button>
          )
          }
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
