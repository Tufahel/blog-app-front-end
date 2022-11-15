import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { destroyComment } from '../../redux/actions/Comment';

const DeleteComment = (props) => {
  const postId = parseInt(localStorage.getItem('postid'), 10);
  const {
    id,
  } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDelete = (id) => {
    dispatch(destroyComment(postId, id, navigate));
    console.log('working');
    // window.location.reload();
  };
  return (

    <NavLink><button className="inline-block text-sm px-4 py-2 leading-none border rounded text-red-500 border-red-500 hover:border-red-500 hover:text-white hover:bg-red-700 mt-4 lg:mt-0 mx-2" type="button" onClick={() => handleDelete(id)}>Delete</button></NavLink>

  );
};
DeleteComment.propTypes = {
  id: PropTypes.number.isRequired,
};

export default DeleteComment;
