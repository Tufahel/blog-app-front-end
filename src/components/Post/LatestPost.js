import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LikeCommentCount from '../LikeCommentCount/LikeCommentCount';
import User from '../User';

const LatestPost = () => {
  const posts = useSelector((state) => state.PostReducer);
  const ids = posts.posts.map((post) => post.post_id);
  const maxId = Math.max(...ids);
  const latestPost = posts.posts.filter((post) => post.post_id === maxId);
  const setPostId = (id) => {
    localStorage.setItem('postid', id);
    // navigate(`/post/${postId}`);
  };
  return (
    <div>
      <h2 className="ml-6 text-3xl font-bold">Latest Post</h2>
      {latestPost?.map((post) => (
        <div className="flex flex-col ml-6 mt-2 pb-4 space-x-12 border-b-2 mr-2" key={maxId}>
          <img className="rounded object-cover h-56 mb-2" src={post.image} alt="img" />
          <div className="flex flex-col justify-center items-center border-b-3 mb-2">
            <h4 className="font-medium text-lg text-4xl text-center mb-2">
              {post.title}
            </h4>
            <div className="flex mb-2">
              <p className="lg:w-96 w-80 truncate">{post.text}</p>
              <NavLink to="/postdetails"><button className="text-green-500" type="button" onClick={() => setPostId(post.post_id)}>more</button></NavLink>
            </div>
            <LikeCommentCount id={post.post_id} />
            <div className="mt-2">
              Author:
              {' '}
              <div className="inline text-red-500"><User id={post.user_id} /></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestPost;
