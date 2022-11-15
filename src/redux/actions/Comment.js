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
      localStorage.setItem('comments', JSON.stringify(comments));
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
      location('/post');
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.COMMENT_CREATE_FAILURE,
        payload: error,
      });
    });
};

export const destroyComment = (postId, id, location) => (dispatch) => {
  deleteComment(postId, id)
    .then(() => {
      dispatch({
        type: actionTypes.COMMENT_DELETE_SUCCESS,
        payload: id,
      });
      window.location.reload();
      location('/post');
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.COMMENT_DELETE_FAILURE,
        payload: error,
      });
    });
};
