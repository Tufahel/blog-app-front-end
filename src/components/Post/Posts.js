import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../redux/actions/Post';

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.PostReducer);
  console.log(posts);
  useEffect(() => {
    dispatch(getPosts());
  }, []);
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
        </p>
      ))}
    </>
  );
};

export default Posts;
