import {
  fetchComments, createNewComment, deleteComment,
} from '../../api/Api';
import { signIn } from './User';

export const actionTypes = {
  COMMENT_CREATE_SUCCESS: 'COMMENT_CREATE_SUCCESS',
  COMMENT_CREATE_FAILURE: 'COMMENT_CREATE_FAILURE',
  COMMENT_DELETE_SUCCESS: 'COMMENT_DELETE_SUCCESS',
  COMMENT_DELETE_FAILURE: 'COMMENT_DELETE_FAILURE',
  COMMENTS_GET_SUCCESS: 'COMMENTS_GET_SUCCESS',
  COMMENTS_GET_FAILURE: 'COMMENTS_GET_FAILURE',
};

export const getComments = () => async (dispatch) => {
  fetchComments()
    .then((comments) => {
      dispatch({
        type: actionTypes.COMMENTS_GET_SUCCESS,
        payload: comments.map((comment) => ({
          user_id: comment.author_id,
          text: comment.text,
          post_id: comment.post_id,
          comment_id: comment.id,
        })),
      });
      localStorage.setItem('comments', JSON.stringify(comments));
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.COMMENTS_GET_FAILURE,
        payload: error,
      });
    });
};

export const createComment = (comment, location) => (dispatch) => {
  const user = signIn();
  const userId = localStorage.getItem('userid', user);
  createNewComment(comment, userId)
    .then((post) => {
      dispatch({
        type: actionTypes.COMMENT_CREATE_SUCCESS,
        payload: post,
      });
      location('/posts');
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.COMMENT_CREATE_FAILURE,
        payload: error,
      });
    });
};

export const destroyComment = (id) => (dispatch) => {
  deleteComment(id)
    .then(() => {
      dispatch({
        type: actionTypes.COMMENT_DELETE_SUCCESS,
        payload: id,
      });
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.COMMENT_DELETE_FAILURE,
        payload: error,
      });
    });
};
