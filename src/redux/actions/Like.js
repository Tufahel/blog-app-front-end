import { toast } from 'react-toastify';
import {
  fetchLikes, createNewLike,
} from '../../api/Api';

export const actionTypes = {
  LIKE_CREATE_SUCCESS: 'LIKE_CREATE_SUCCESS',
  LIKE_CREATE_FAILURE: 'LIKE_CREATE_FAILURE',
  LIKES_GET_SUCCESS: 'LIKES_GET_SUCCESS',
  LIKES_GET_FAILURE: 'LIKES_GET_FAILURE',
};

export const getLikes = () => async (dispatch) => {
  fetchLikes()
    .then((likes) => {
      dispatch({
        type: actionTypes.LIKES_GET_SUCCESS,
        payload: likes.map((like) => ({
          user_id: like.author_id,
          post_id: like.post_id,
          like_id: like.id,
        })),
      });
      localStorage.setItem('likes', JSON.stringify(likes));
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.LIKES_GET_FAILURE,
        payload: error,
      });
    });
};

export const createLike = (postId) => (dispatch) => {
  createNewLike(postId)
    .then((like) => {
      dispatch({
        type: actionTypes.LIKE_CREATE_SUCCESS,
        payload: like,
      });
      toast.success('Post Liked.');
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.LIKE_CREATE_FAILURE,
        payload: error,
      });
      toast.success('Post Like Failed! Try Again.');
    });
};
