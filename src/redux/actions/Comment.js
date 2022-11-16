import { toast } from 'react-toastify';
import {
  fetchComments, createNewComment, deleteComment,
} from '../../api/Api';

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
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.COMMENTS_GET_FAILURE,
        payload: error,
      });
    });
};

export const createComment = (comment, postId, location) => (dispatch) => {
  createNewComment(comment, postId)
    .then((post) => {
      dispatch({
        type: actionTypes.COMMENT_CREATE_SUCCESS,
        payload: post,
      });
      toast.success('Commented Successfully.');
      location('/post');
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.COMMENT_CREATE_FAILURE,
        payload: error,
      });
      toast.success('Comment Failed! Try again.');
    });
};

export const destroyComment = (postId, id, location) => (dispatch) => {
  deleteComment(postId, id)
    .then(() => {
      dispatch({
        type: actionTypes.COMMENT_DELETE_SUCCESS,
        payload: id,
      });
      location('/myposts');
      toast.success('Comment Deleted Successfully.');
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.COMMENT_DELETE_FAILURE,
        payload: error,
      });
      toast.success('Comment Deletation Failed.');
    });
};
