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
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Tufahel&apos;s Blog</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <NavLink className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" to="/">Posts</NavLink>
          {
      user && (
        <>
          <NavLink className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white  mr-4" to="/myposts">My Posts</NavLink>
        </>
      )
    }
          <NavLink className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" to="/contacts">Contacts</NavLink>
          {
      user && (
        <>
          <NavLink className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4" to="/">
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
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            Logout
          </button>
        </>
      )
    }
        {
      user == null && (
        <>
          <NavLink className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0" to="/login">Login</NavLink>
        </>
      )
    }
      </div>
    </nav>
  );
};

export default Navigation;
