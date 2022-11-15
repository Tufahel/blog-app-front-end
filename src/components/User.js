import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../redux/actions/User';

const User = (props) => {
  const {
    id,
  } = props;
  const dispatch = useDispatch();
  const users = useSelector((state) => state.UsersReducer);
  const filtered = users.value?.filter((user) => user.id === id);
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <>
      {filtered?.map((usr) => (
        <div className="inline" key={id}>
          {usr.name.toUpperCase()}
        </div>
      ))}
    </>
  );
};

User.propTypes = {
  id: PropTypes.number.isRequired,
};

export default User;
