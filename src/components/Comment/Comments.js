import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { destroyComment, getComments } from '../../redux/actions/Comment';
import { getLikes } from '../../redux/actions/Like';

const Comments = () => {
  const user = localStorage.getItem('user');
  const userId = parseInt(localStorage.getItem('userid'), 10);
  const postId = parseInt(localStorage.getItem('postid'), 10);
  console.log(postId);
  const comments = useSelector((state) => state.CommentReducer);
  console.log(comments.comments);
  const filtered = comments.comments.filter((comment) => comment.post_id === postId);
  console.log(filtered);
  const dispatch = useDispatch();
  const likes = useSelector((state) => state.LikeReducer);
  console.log('like compc: ', likes.likes);
  const filterLike = likes.likes.filter((lk) => lk.post_id === postId && lk.user_id === userId);
  console.log('filter Like', filterLike);
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
      <h3>
        Likes: &nbsp;
        {filterLike.length}
      </h3>
      <h3>
        Comments: &nbsp;
        {filtered.length}
      </h3>
      {filtered?.map((comment) => (
        <p key={comment.post_id}>
          Your comment text is &nbsp;
          {comment.text}
          .
          Your author id is &nbsp;
          {comment.user_id}
          Your post id is &nbsp;
          {comment.post_id}
          .
          {' '}
          {
          user && (
          <button className="" type="button" onClick={() => handleDelete(comment.comment_id)}>DELETE</button>
          )
          }
        </p>
      ))}
    </>
  );
};

export default Comments;
