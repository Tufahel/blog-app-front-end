import { actionTypes } from '../actions/User';

const UsersReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_USER:
      return { value: action.payload };
    default:
      return state;
  }
};

export default UsersReducer;
