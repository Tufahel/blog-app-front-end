import React from 'react';
import { useSelector } from 'react-redux';
import Comments from '../Comment/Comments';
import Post from './Post';

const PostDetails = () => {
  const { post } = useSelector((state) => state.PostReducer);
  return (
    <>
      <Post />
      <div className="flex flex-col justify-center space-y-2">
        <Comments id={post.author_id} />
      </div>
    </>
  );
};

export default PostDetails;
