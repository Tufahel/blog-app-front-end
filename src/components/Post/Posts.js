import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getPosts } from '../../redux/actions/Post';
import LikeCommentCount from '../LikeCommentCount/LikeCommentCount';
import User from '../User';
import LatestPost from './LatestPost';

const Posts = () => {
  const posts = useSelector((state) => state.PostReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const setPostId = (id) => {
    localStorage.setItem('postid', id);
  };
  return (
    <>
      <div className="flex flex-col m-2">
        <LatestPost />
        <div className="flex flex-wrap m-4">
          {posts.posts?.map((post) => (
            <div className="flex flex-col items-left p-2 space-y-4 border m-2" key={post.post_id}>
              <img className="rounded border object-cover h-24 w-36" src={post.image} alt="img" />
              <div className="flex flex-col space-y-1">
                {' '}
                <h4 className="font-medium text-lg">
                  {post.title}
                </h4>
                {' '}
                <div className="flex">
                  <p className="w-60 truncate">{post.text}</p>
                  <NavLink to="/post"><button className="text-green-500" type="button" onClick={() => setPostId(post.post_id)}>more</button></NavLink>
                </div>
                <LikeCommentCount id={post.post_id} />
                <div>
                  Author:
                  {' '}
                  <div className="inline text-red-500"><User id={post.user_id} /></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Posts;
