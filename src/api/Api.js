import axios from 'axios';

const URL = 'http://localhost:3000';
const userId = localStorage.getItem('userid');

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

const authToken = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return token;
  }
  return {};
};

export const createNewPost = async (data, id) => {
  const newPost = {
    user_id: id,
    title: data.title,
    text: data.text,
  };

  console.log('newpost: ', newPost);

  const response = await axios.post(`${URL}/api/users/${userId}/posts`, newPost, {
    headers: {
      Authorization: `Bearer ${authToken()}`,
    },
  });

  return response.data;
};

export const fetchPosts = async () => {
  const res = await fetch(`${URL}/api/users/${userId}/posts`)
    .then((response) => response.json());
  return res;
};

export const deletePost = async (id) => {
  const res = await axios.delete(`${URL}/api/users/${userId}/posts/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken()}`,
    },
  });
  return res.data;
};
