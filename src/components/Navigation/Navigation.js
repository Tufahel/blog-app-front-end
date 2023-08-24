import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { signOut } from '../../redux/actions/User';

const Navigation = () => {
  const user = localStorage.getItem('user');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleSignout() {
    dispatch(signOut(navigate('/')));
  }
  return (
    <nav className="flex items-center justify-between flex-wrap p-4 border lg:sticky top-0 bg-white">
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <span className="font-semibold text-xl tracking-tight">Tufahel&apos;s Blog</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <NavLink className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-green-500 mr-4" to="/">Posts</NavLink>
          {
      user && (
        <>
          <NavLink className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-green-500  mr-4" to="/myposts">My Posts</NavLink>
        </>
      )
    }
          <NavLink className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-green-500 mr-4" to="/about">About</NavLink>
          {
      user && (
        <>
          <NavLink className="block mt-4 lg:inline-block lg:mt-0 text-green-500 mr-4" to="/">
            {JSON.parse(user)}
            {' '}
            is active now
          </NavLink>
        </>
      )
    }
        </div>
        {
      user && (
        <>
          <button
            type="button"
            onClick={() => handleSignout()}
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-red-500 border-red-500 hover:border-red-500 hover:text-white hover:bg-red-700 mt-4 lg:mt-0 mr-2"
          >
            Logout
          </button>
          <button
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-green-500 border-green-500 hover:border-green-700 hover:text-white hover:bg-green-700 mt-4 lg:mt-0"
            type="button"
            onClick={() => navigate('/createpost')}
          >
            Add Post
          </button>
        </>
      )
    }
        <p className="block mt-4 lg:inline-block lg:mt-0 text-red-500 mr-4">Just a bit! Backend server is a bit slow for running on render free service.</p>
        {
      user == null && (
        <>
          <NavLink className="inline-block text-sm px-4 py-2 leading-none border rounded text-green-500 border-green-500 hover:border-green-700 hover:text-white hover:bg-green-700 mt-4 lg:mt-0" to="/login">Login</NavLink>
        </>
      )
    }
      </div>
    </nav>
  );
};

export default Navigation;
