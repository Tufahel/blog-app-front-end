import { actionTypes } from '../actions/Post';

const initialState = {
  posts: [],
  post: [],
  loading: false,
  error: null,
};

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POSTS_GET_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: null,
      };
    case actionTypes.POSTS_GET_FAILURE:
      return {
        ...state,
        posts: [],
        loading: false,
        error: null,
      };
    case actionTypes.POST_CREATE_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, action.payload],
        loading: false,
        error: null,
      };
    case actionTypes.POST_CREATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionTypes.POST_DELETE_SUCCESS:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
        loading: false,
        error: null,
      };
    case actionTypes.POST_DELETE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default PostReducer;
