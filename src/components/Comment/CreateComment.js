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
      <div className="">
        <section className="">
          <p className="">Add Comment</p>
          <form
            onSubmit={handleSubmit}
            className=""
          >
            <textarea
              className=""
              placeholder="Text"
              type="text"
              name="text"
              value={comment.text}
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
              Comment Now
            </button>
          </form>

        </section>
        {
        user && (
          <button
            className=""
            type="button"
            onClick={() => navigate('/posts')}
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
