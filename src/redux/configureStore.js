import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {
  UsersReducer, SignupReducer,
  SigninReducer,
  SignoutReducer,
} from './reducers/User';

import PostReducer from './reducers/Post';
import CommentReducer from './reducers/Comment';
import LikeReducer from './reducers/Like';

const rootReducer = combineReducers({
  CommentReducer,
  SignupReducer,
  SigninReducer,
  SignoutReducer,
  UsersReducer,
  PostReducer,
  LikeReducer,
});
const store = createStore(rootReducer,
  compose(applyMiddleware(thunk, logger)));

export default store;
