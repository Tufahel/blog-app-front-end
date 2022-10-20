import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import { signIn } from '../../redux/actions/User';

const Login = () => {
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

  const handleOnChange = (event) => {
    setSignin((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <>
      <div className="main-login">
        <h1 className="">Login</h1>
        <form
          className="form-container"
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
          <input onChange={handleOnChange} className="" type="email" name="email" id="email" placeholder="Email" required />
          <input onChange={handleOnChange} className="" type="password" name="password" id="password" placeholder="Password" required />
          <small className="">{}</small>
          <span className="">
            Not a member?
            <NavLink className="" to="/signup">Signup</NavLink>
          </span>
          <input className="" type="submit" value="Login" />
        </form>
      </div>
    </>
  );
};

export default Login;
