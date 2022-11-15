import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getLikes } from '../../redux/actions/Like';
import { getComments } from '../../redux/actions/Comment';

const LikeCommentCount = (props) => {
  const {
    id,
  } = props;
  const comments = useSelector((state) => state.CommentReducer);
  const filtered = comments.comments.filter((comment) => comment.post_id === id);
  const dispatch = useDispatch();
  const likes = useSelector((state) => state.LikeReducer);
  const filterLike = likes.likes.filter((lk) => lk.post_id === id);
  useEffect(() => {
    dispatch(getLikes());
  }, []);
  useEffect(() => {
    dispatch(getComments());
  }, []);
  return (
    <div className="flex">
      <h3>
        Likes: &nbsp;
        {filterLike.length}
      </h3>
      <h3 className="ml-2">
        Comments: &nbsp;
        {filtered.length}
      </h3>
    </div>
  );
};
LikeCommentCount.propTypes = {
  id: PropTypes.number.isRequired,
};

export default LikeCommentCount;
