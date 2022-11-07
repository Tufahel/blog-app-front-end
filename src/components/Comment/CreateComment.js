import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createComment } from '../../redux/actions/Comment';

const CreateComment = () => {
  const postId = localStorage.getItem('postid');
  const user = localStorage.getItem('user');
  const [comment, setComment] = useState({
    text: '',
  });

  const handleChange = (e) => {
    setComment({
      ...comment,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createComment(comment, navigate(`/post/${postId}`), e));
    window.location.reload(true);
  };
  return (
    <>
      <div className="flex flex-col m-2">
        <section className="m-10">
          <p className="font-bold text-lg text-center">Add Comment</p>
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Text"
              type="text"
              name="text"
              value={comment.text}
              minLength="1"
              maxLength="500"
              onChange={handleChange}
              rows={5}
              cols={21}
              required
            />
            <br />
            <button
              className="text-center bg-teal-500 hover:bg-teal-700 text-white font-bold p-2 rounded"
              type="submit"
            >
              Comment Now
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

export default CreateComment;
