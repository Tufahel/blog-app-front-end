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
            <div className="flex flex-col items-center p-2 border m-2 justify-between transition-shadow duration-300 ease-in-out hover:shadow-xl hover:shadow-black/60" key={post.post_id}>
              <div>
                <img className="h-96 w-full max-w-sm shadow-none" src={post.image} alt="img" />
              </div>
              <div className="mt-2 flex flex-col items-center">
                <h4 className="font-bold text-lg text-green-700">
                  {post.title}
                </h4>
                {' '}
                <div className="flex text-center">
                  <p className="w-60 truncate">{post.text}</p>
                  <NavLink to="/postdetails"><button className="text-green-500" type="button" onClick={() => setPostId(post.post_id)}>more</button></NavLink>
                </div>
                <LikeCommentCount id={post.post_id} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyPosts;
