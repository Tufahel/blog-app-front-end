import { actionTypes } from '../actions/User';

const user = localStorage.getItem('user');
const initialState = user
  ? {
    isSignedIn: true,
    user,
    errorSignup: null,
    errorSignin: null,
    loadingSignin: false,
    loadingSignup: false,
  }
  : {
    isSignedIn: false,
    user: null,
    errorSignup: null,
    errorSignin: null,
    loadingSignin: false,
    loadingSignup: false,
  };

export const UsersReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_USER:
      return { value: action.payload };
    default:
      return state;
  }
};

export const SignupReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loadingSignup: false,
        errorSignup: null,
      };
    case actionTypes.SIGNUP_REQUEST:
      return {
        ...state,
        loadingSignup: true,
        errorSignup: null,
      };
    case actionTypes.SIGNUP_FAILURE:
      return {
        ...state,
        user: null,
        loadingSignup: false,
        errorSignup: action.payload,
      };
    default:
      return state;
  }
};

export const SigninReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNIN_SUCCESS:
      return {
        ...state,
        isSignedIn: true,
        user: action.payload,
        loadingSignin: false,
        errorSignin: null,
      };
    case actionTypes.SIGNIN_REQUEST:
      return {
        ...state,
        loadingSignin: true,
        errorSignin: null,
      };
    case actionTypes.SIGNIN_FAILURE:
      return {
        ...state,
        isSignedIn: false,
        user: null,
        loadingSignin: false,
        errorSignin: action.payload,
      };
    default:
      return state;
  }
};

export const SignoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNOUT_SUCCESS:
      return {
        ...state,
        isSignedIn: false,
        user: null,
        loadingSignin: false,
        loadingSignup: false,
        errorSignin: null,
        errorSignup: null,
      };
    case actionTypes.SIGNOUT_FAILURE:
      return {
        ...state,
        isSignedIn: true,
        user: action.payload,
        errorSignin: null,
        errorSignup: null,
      };
    default:
      return state;
  }
};
