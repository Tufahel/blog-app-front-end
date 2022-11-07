import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../../redux/actions/Post';

const CreatePost = () => {
  const user = localStorage.getItem('user');
  const [post, setPost] = useState({
    title: '',
    text: '',
  });

  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(post, navigate('/'), e));
  };
  return (
    <>
      <div className="flex flex-col ">
        <section className="m-10">
          <p className="font-bold text-lg text-center">Create Post</p>
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Title"
                type="text"
                name="title"
                minLength="1"
                maxLength="100"
                onChange={handleChange}
                value={post.title}
                required
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Image url"
                type="url"
                name="image"
                accept="image/*"
                onChange={handleChange}
                value={post.image}
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Text"
                type="text"
                name="text"
                value={post.text}
                minLength="1"
                maxLength="500"
                onChange={handleChange}
                rows={5}
                cols={21}
                required
              />
            </div>
            <button
              className="text-center bg-green-500 hover:bg-green-700 text-white font-bold p-2 rounded"
              type="submit"
            >
              Post Now
            </button>
          </form>

        </section>
        {
        user && (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 rounded mx-20"
            type="button"
            onClick={() => navigate('/')}
          >
            See Posts
          </button>
        )
      }
      </div>
    </>
  );
};

export default CreatePost;
