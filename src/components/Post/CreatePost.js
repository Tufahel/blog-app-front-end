import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../../redux/actions/Post';

const CreatePost = () => {
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
    dispatch(createPost(post, navigate('/posts'), e));
  };
  return (
    <>
      <div className="">
        <section className="">
          <p className="">Add Bike </p>
          <form
            onSubmit={handleSubmit}
            className=""
          >
            <input
              className=""
              placeholder="Title"
              type="text"
              name="title"
              minLength="1"
              maxLength="100"
              onChange={handleChange}
              value={post.title}
              required
            />
            <br />
            <textarea
              className=""
              placeholder="Text"
              type="text"
              name="text"
              value={post.text}
              minLength="1"
              maxLength="100"
              onChange={handleChange}
              rows={5}
              cols={21}
              required
            />
            <br />
            <button
              className=""
              type="submit"
            >
              Post Now
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default CreatePost;
