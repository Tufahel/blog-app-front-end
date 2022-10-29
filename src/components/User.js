import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../redux/actions/User';

export default function User() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.UsersReducer);
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <>
      {users.value?.map((user) => (
        <p key={user.id} className="text-3xl font-bold underline">
          Welcome: &nbsp;
          {user.name}
          ,
          {' '}
          Your User id is &nbsp;
          {user.id}
          .
        </p>
      ))}

    </>
  );
}
