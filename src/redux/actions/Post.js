import {
  fetchPosts, createNewPost, deletePost, fetchPostDetails,
} from '../../api/Api';
import { signIn } from './User';

export const actionTypes = {
  POST_CREATE_SUCCESS: 'POST_CREATE_SUCCESS',
  POST_CREATE_FAILURE: 'POST_CREATE_FAILURE',
  POST_DELETE_SUCCESS: 'POST_DELETE_SUCCESS',
  POST_DELETE_FAILURE: 'POST_DELETE_FAILURE',
  POSTS_GET_SUCCESS: 'POSTS_GET_SUCCESS',
  POSTS_GET_FAILURE: 'POSTS_GET_FAILURE',
  POST_GET_SUCCESS: 'POST_GET_SUCCESS',
  POST_GET_FAILURE: 'POST_GET_FAILURE',
};

export const getPosts = () => async (dispatch) => {
  fetchPosts()
    .then((posts) => {
      dispatch({
        type: actionTypes.POSTS_GET_SUCCESS,
        payload: posts.map((post) => ({
          user_id: post.author_id,
          title: post.title,
          text: post.text,
          image: post.image,
          like_counts: post.like_counter,
          comment_counts: post.comment_counter,
          post_id: post.id,
        })),
      });
      localStorage.setItem('posts', JSON.stringify(posts));
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.POSTS_GET_FAILURE,
        payload: error,
      });
    });
};

export const getPostDetails = (postId) => async (dispatch) => {
  fetchPostDetails(postId)
    .then((post) => {
      dispatch({
        type: actionTypes.POST_GET_SUCCESS,
        payload: post,
      });
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.POST_GET_FAILURE,
        payload: error,
      });
    });
};

export const createPost = (post, location) => (dispatch) => {
  const user = signIn();
  const userId = localStorage.getItem('userid', user);
  createNewPost(post, userId)
    .then((post) => {
      dispatch({
        type: actionTypes.POST_CREATE_SUCCESS,
        payload: post,
      });
      location('/');
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.POST_CREATE_FAILURE,
        payload: error,
      });
    });
};

export const destroyPost = (id) => (dispatch) => {
  deletePost(id)
    .then(() => {
      dispatch({
        type: actionTypes.POST_DELETE_SUCCESS,
        payload: id,
      });
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.POST_DELETE_FAILURE,
        payload: error,
      });
    });
};
