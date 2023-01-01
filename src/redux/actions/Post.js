import { toast } from 'react-toastify';
import {
  fetchPosts, createNewPost, deletePost, fetchPostDetails,
} from '../../api/Api';

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
          created_at: post.created_at,
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

export const getPostDetails = (id) => async (dispatch) => {
  fetchPostDetails(id)
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
  createNewPost(post)
    .then((post) => {
      dispatch({
        type: actionTypes.POST_CREATE_SUCCESS,
        payload: post,
      });
      toast.success('Posted Successfully.');
      location('/');
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.POST_CREATE_FAILURE,
        payload: error,
      });
      toast.success('Post Failed! Try Again.');
    });
};

export const destroyPost = (postId, location) => (dispatch) => {
  deletePost(postId)
    .then(() => {
      dispatch({
        type: actionTypes.POST_DELETE_SUCCESS,
        payload: postId,
      });
      location('/myposts');
      toast.success('Post Deleted Successfully.');
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.POST_DELETE_FAILURE,
        payload: error,
      });
      toast.success('Post Deletaion Failed.');
    });
};
