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
      <h2 className="ml-4 text-3xl font-bold mb-2 text-center lg:text-left">Latest Post</h2>
      {latestPost?.map((post) => (
        <div
          className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 mx-6"
          key={maxId}
          style={{
            backgroundImage: `url(${post.image})`,
            height: '400px',
          }}
        >
          <div className="bg-white absolute inset-0 overflow-hidden bg-fixed opacity-50" />
          <div className="absolute inset-0 flex flex-col h-full items-center justify-center">
            <h4 className="mb-2 text-5xl font-bold">
              {post.title}
            </h4>
            <div className="flex mb-2 text-xl">
              <p className="lg:w-96 w-56 truncate ">{post.text}</p>
              <NavLink to="/postdetails"><button className="text-green-500" type="button" onClick={() => setPostId(post.post_id)}>more</button></NavLink>
            </div>
            <LikeCommentCount id={post.post_id} />
            <div className="mt-2">
              Author:
              {' '}
              <div className="inline text-red-600"><User id={post.user_id} /></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestPost;
