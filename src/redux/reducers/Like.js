import { actionTypes } from '../actions/Like';

const initialState = {
  likes: [],
  loading: false,
  error: null,
};

const LikeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LIKES_GET_SUCCESS:
      return {
        ...state,
        likes: action.payload,
        loading: false,
        error: null,
      };
    case actionTypes.LIKES_GET_FAILURE:
      return {
        ...state,
        likes: [],
        loading: false,
        error: null,
      };
    case actionTypes.LIKE_CREATE_SUCCESS:
      return {
        ...state,
        likes: [...state.likes, action.payload],
        loading: false,
        error: null,
      };
    case actionTypes.LIKE_CREATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default LikeReducer;
