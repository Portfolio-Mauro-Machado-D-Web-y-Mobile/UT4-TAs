// src/components/usernameWithContext/index.jsx
import React, { useContext } from 'react';
import { UsernameContext } from '../../contexts/UsernameContext';

const UsernameWithContext = () => {
  const { username } = useContext(UsernameContext);

  return <p className='usernameWithContext-paragraph'>{username}</p>;
};

export default UsernameWithContext;
