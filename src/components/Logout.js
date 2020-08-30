import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userLogout } from '../actions';

const Logout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userLogout());
  }, [dispatch])

  return(
    <div>Logout</div>
  );
}

export default Logout;