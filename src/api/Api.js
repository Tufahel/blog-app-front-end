import axios from 'axios';

const URL = 'http://localhost:3000';

export const fetchUserData = async () => {
  const res = await fetch(`${URL}/api/users`)
    .then((response) => response.json());
  return res;
};

export const postSignupData = async (user) => {
  const res = await axios.post(`${URL}/users`, {
    user: {
      name: user.name,
      email: user.email,
      password: user.password,
      confirm_password: user.confirm_password,
    },
  });
  console.log(res.data);
  return res.data;
};

export const postSigninData = async (user) => {
  console.log('api: ', user);
  const res = await axios.post(`${URL}/users/sign_in`, {
    user: {
      email: user.email,
      password: user.password,
    },
  });
  console.log(res);
  return res;
};

export const authToken = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return token;
  }
  return {};
};
