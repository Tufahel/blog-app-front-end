import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getPosts } from '../../redux/actions/Post';
import LikeCommentCount from '../LikeCommentCount/LikeCommentCount';

const MyPosts = () => {
  const userId = parseInt(localStorage.getItem('userid'), 10);
  const posts = useSelector((state) => state.PostReducer);
  const myPosts = posts.posts.filter((post) => post.user_id === userId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const setPostId = (id) => {
    localStorage.setItem('postid', id);
    // navigate(`/post/${postId}`);
  };
  return (
    <>
      <div className="flex flex-col m-2">
        <div className="flex flex-wrap justify-center m-8">
          {myPosts?.map((post) => (
            <div className="flex flex-col items-center p-2 border m-2" key={post.post_id}>
              <img className="rounded object-cover h-24" src={post.image} alt="img" />
              {' '}
              <h4 className="font-bold text-lg text-green-700">
                {post.title}
              </h4>
              {' '}
              <div className="flex">
                <p className="w-60 truncate">{post.text}</p>
                <NavLink to="/post"><button className="text-green-500" type="button" onClick={() => setPostId(post.post_id)}>more</button></NavLink>
              </div>
              <LikeCommentCount id={post.post_id} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyPosts;
