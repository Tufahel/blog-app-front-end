import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getPosts } from '../../redux/actions/Post';
import LikeCommentCount from '../LikeCommentCount/LikeCommentCount';
import User from '../User';
import LatestPost from './LatestPost';

const Posts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const posts = useSelector((state) => state.PostReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
    setIsLoading(false);
  }, []);

  const setPostId = (id) => {
    localStorage.setItem('postid', id);
  };
  return (
    <>
      <div className="flex flex-col m-2">
        <LatestPost />
        <div className="flex flex-wrap m-4">
          {isLoading ? (
            <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
              <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-slate-700 h-10 w-10" />
                <div className="flex-1 space-y-6 py-1">
                  <div className="h-2 bg-slate-700 rounded" />
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-2 bg-slate-700 rounded col-span-2" />
                      <div className="h-2 bg-slate-700 rounded col-span-1" />
                    </div>
                    <div className="h-2 bg-slate-700 rounded" />
                  </div>
                </div>
              </div>
            </div>
          ) : posts.posts?.map((post) => (
            <div className="flex flex-col items-left p-2 space-y-4 border m-2" key={post.post_id}>
              <img className="rounded border object-cover lg:h-24 lg:w-36 md:h-24 md:w-36" src={post.image} alt="img" />
              <div className="flex flex-col space-y-1">
                {' '}
                <h4 className="font-medium text-lg">
                  {post.title}
                </h4>
                {' '}
                <div className="flex">
                  <p className="w-60 truncate">{post.text}</p>
                  <NavLink to="/postdetails"><button className="text-green-500" type="button" onClick={() => setPostId(post.post_id)}>more</button></NavLink>
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
