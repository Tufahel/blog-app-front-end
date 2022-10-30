import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import { signIn, signOut } from '../../redux/actions/User';

const Login = () => {
  const user = localStorage.getItem('user');
  const { errorSignin = null, loadingSignin = false } = useSelector((state) => state.SigninReducer);
  const [userSignin, setSignin] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(signIn(userSignin, navigate));
    console.log('component: ', userSignin);
  };

  function handleSignout() {
    dispatch(signOut(navigate('/')));
  }

  const handleOnChange = (event) => {
    setSignin((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <>
      {
      user && (
        <>
          <h3> You are logged in</h3>
          <button
            type="button"
            onClick={() => handleSignout()}
            className=""
          >
            Logout
          </button>
        </>
      )
    }
      {
    (user === null) && (
    <>
      <div className="m-10">
        <h1 className="font-bold text-lg text-center">Login</h1>
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 space-y-2"
          onSubmit={handleLogin}
        >
          { loadingSignin && (
          <div className="">
            <div className="">
              <ThreeDots
                height="180"
                width="180"
                radius="3"
                color="#98be20"
                ariaLabel="three-dots-loading"
                wrapperStyle
                wrapperClass
              />
            </div>
          </div>
          )}

          { errorSignin && (
          <p className="text-red-500 font-italic">Invalid email/password</p>
          )}
          <input onChange={handleOnChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name="email" id="email" placeholder="Email" required />
          <input onChange={handleOnChange} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" name="password" id="password" placeholder="Password" required />
          <small className="">{}</small>
          <div className="flex justify-between items-center">
            <span>
              Not a member?
              <NavLink className="px-2 inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="/signup">Signup</NavLink>
            </span>
            <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Login" />
          </div>
        </form>
      </div>
    </>
    )
          }
    </>
  );
};

export default Login;
