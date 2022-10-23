import { actionTypes } from '../actions/Comment';

const initialState = {
  comments: [],
  loading: false,
  error: null,
};

const CommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.COMMENTS_GET_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        loading: false,
        error: null,
      };
    case actionTypes.COMMENTS_GET_FAILURE:
      return {
        ...state,
        comments: [],
        loading: false,
        error: null,
      };
    case actionTypes.COMMENT_CREATE_SUCCESS:
      return {
        ...state,
        comments: [...state.comments, action.payload],
        loading: false,
        error: null,
      };
    case actionTypes.COMMENT_CREATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionTypes.COMMENT_DELETE_SUCCESS:
      return {
        ...state,
        comments: state.comments.filter((comment) => comment.id !== action.payload),
        loading: false,
        error: null,
      };
    case actionTypes.COMMENT_DELETE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default CommentReducer;
