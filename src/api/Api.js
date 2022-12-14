import axios from 'axios';

const URL = 'https://limitless-gorge-05434.herokuapp.com';
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
  return res.data;
};

export const postSigninData = async (user) => {
  const res = await axios.post(`${URL}/users/sign_in`, {
    user: {
      email: user.email,
      password: user.password,
    },
  });
  return res;
};

const authToken = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return token;
  }
  return {};
};

export const createNewPost = async (data) => {
  const newPost = {
    user_id: userId,
    title: data.title,
    text: data.text,
    image: data.image,
  };

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

export const fetchPostDetails = async (postId) => {
  const res = await fetch(`${URL}/api/users/${userId}/posts/${postId}`)
    .then((response) => response.json());
  return res;
};

export const deletePost = async (postId) => {
  const res = await axios.delete(`${URL}/api/users/${userId}/posts/${postId}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken()}`,
    },
  });
  return res.data;
};

export const createNewComment = async (data, postId) => {
  const newComment = {
    text: data.text,
  };

  const response = await axios.post(`${URL}/api/users/${userId}/posts/${postId}/comments`, newComment, {
    headers: {
      Authorization: `Bearer ${authToken()}`,
    },
  });

  return response.data;
};

export const fetchComments = async (postId) => {
  const res = await fetch(`${URL}/api/users/${userId}/posts/${postId}/comments`)
    .then((response) => response.json());
  return res;
};

export const deleteComment = async (postId, id) => {
  const res = await axios.delete(`${URL}/api/users/${userId}/posts/${postId}/comments/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken()}`,
    },
  });
  return res.data;
};

export const createNewLike = async (postId) => {
  const response = await axios.post(`${URL}/api/users/${userId}/posts/${postId}/likes`, {
    headers: {
      Authorization: `Bearer ${authToken()}`,
    },
  });

  return response.data;
};

export const fetchLikes = async (postId) => {
  const res = await fetch(`${URL}/api/users/${userId}/posts/${postId}/likes`)
    .then((response) => response.json());
  return res;
};
