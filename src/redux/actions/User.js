import { fetchUserData, postSignupData, postSigninData } from '../../api/Api';

export const actionTypes = {
  GET_USER: 'GET_USER',
  SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
  SIGNUP_REQUEST: 'SIGNUP_REQUEST',
  SIGNUP_FAILURE: 'SIGNUP_FAILURE',
  SIGNIN_SUCCESS: 'SIGNIN_SUCCESS',
  SIGNIN_REQUEST: 'SIGNIN_REQUEST',
  SIGNIN_FAILURE: 'SIGNIN_FAILURE',
  SIGNOUT_SUCCESS: 'SIGNOUT_SUCCESS',
  SIGNOUT_FAILURE: 'SIGNOUT_FAILURE',
};

export const getUsers = () => async (dispatch) => {
  const users = await fetchUserData();
  dispatch({
    type: actionTypes.GET_USER,
    payload: users.map((user) => ({
      name: user.name,
      id: user.id,
    })),
  });
};

export const signUp = (userData, location) => async (dispatch) => {
  dispatch({
    type: actionTypes.SIGNUP_REQUEST,
  });
  postSignupData(userData)
    .then((user) => {
      dispatch({
        type: actionTypes.SIGNUP_SUCCESS,
        payload: user,
      });
      //   toast.success('Signup successful');
      location('/login');
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.SIGNUP_FAILURE,
        payload: error,
      });
    //   toast.error('Signup failed, please try again');
    });
};

export const signIn = (userData, location) => async (dispatch) => {
  dispatch({
    type: actionTypes.SIGNIN_REQUEST,
  });
  postSigninData(userData)
    .then((res) => {
      dispatch({
        type: actionTypes.SIGNIN_SUCCESS,
        payload: res.data,
      });
      // toast.success('Signin successful');
      console.log('action user: ', res.data);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data));
      localStorage.setItem('userid', JSON.stringify(res.data.user.id));
      location('/');
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.SIGNIN_FAILURE,
        payload: error,
      });
      // toast.error('Signin failed, please try again');
    });
};

export const signOut = (location) => (dispatch) => {
  if (localStorage.getItem('token')) {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('userid');
    localStorage.removeItem('bikes');
    localStorage.removeItem('bikeid');
    localStorage.removeItem('recentbikeid');
    dispatch({
      type: actionTypes.SIGNOUT_SUCCESS,
    });
    // toast.success('Signout successful');
    location('/');
  } else {
    dispatch({
      type: actionTypes.SIGNOUT_FAILURE,
    });
    // toast.error('Signout failed, please try again');
  }
};
