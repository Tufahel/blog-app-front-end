import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThreeDots } from 'react-loader-spinner';
import { NavLink, useNavigate } from 'react-router-dom';
import { signUp } from '../../redux/actions/User';

const Signup = () => {
  const { errorSignup = null, loadingSignup = false } = useSelector((state) => state.SignupReducer);
  const [userRegister, setRegister] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(signUp(userRegister, navigate));
  };

  const handleOnChange = (event) => {
    setRegister((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <>
      <div className="m-10">
        <h1 className="font-bold text-lg text-center">Sign Up</h1>
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 space-y-2"
          onSubmit={handleLogin}
        >
          { errorSignup && (
          <div className="">
            <p className="">Username/Email already exist</p>
          </div>
          )}
          <input
            onChange={handleOnChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="name"
            placeholder="Name"
            required
            value={userRegister.name}
          />
          <input
            onChange={handleOnChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            placeholder="Email"
            required
            value={userRegister.email}
          />
          <input
            onChange={handleOnChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
            placeholder="Password"
            required
            minLength="6"
            value={userRegister.password}
          />
          <input
            onChange={handleOnChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
            required
            minLength="6"
            value={userRegister.confirm_password}
          />
          { userRegister.password !== userRegister.confirm_password
          && <div>password not matched</div>}
          { loadingSignup && (
          <div className="">
            <div className="">
              <ThreeDots
                height="180"
                width="180"
                radius="3"
                color="#98be20"
                ariaLabel=""
                wrapperStyle
                wrapperClass
              />
            </div>
          </div>
          )}
          <small className="">{}</small>
          <div className="flex justify-between items-center my-4">
            <p>
              Already a member?
              <NavLink className="px-2 inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="/login">
                Login
              </NavLink>
            </p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
