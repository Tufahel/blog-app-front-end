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

const rootReducer = combineReducers({
  SignupReducer,
  SigninReducer,
  SignoutReducer,
  UsersReducer,
});
const store = createStore(rootReducer,
  compose(applyMiddleware(thunk, logger)));

export default store;
