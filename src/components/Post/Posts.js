import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getPosts, destroyPost } from '../../redux/actions/Post';

const Posts = () => {
  const user = localStorage.getItem('user');
  const posts = useSelector((state) => state.PostReducer);
  console.log(posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const handleDelete = (id) => {
    dispatch(destroyPost(id));
    window.location.reload(true);
  };

  const handlePostId = (id) => {
    localStorage.setItem('postid', id);
    navigate('/postdetails');
  };
  return (
    <>
      {posts.posts?.map((post) => (
        <p key={post.post_id}>
          Title: &nbsp;
          {post.title}
          ,
          {' '}
          Your post text is &nbsp;
          {post.text}
          .
          {
          user && (
          <button className="" type="button" onClick={() => handleDelete(post.post_id)}>DELETE</button>
          )
          }
          <button className="" type="button" onClick={() => handlePostId(post.post_id)}>See Full Post</button>
        </p>
      ))}
      {
        user && (
          <button
            className=""
            type="button"
            onClick={() => navigate('/createpost')}
          >
            Add Post
          </button>
        )
      }
    </>
  );
};

export default Posts;
