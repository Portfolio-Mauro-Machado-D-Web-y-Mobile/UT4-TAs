// src/components/usernameWithContext/index.jsx
import React, { useContext } from 'react';
import { UsernameContext } from '../../contexts/UsernameContext';

const UsernameWithContext = () => {
  const { username } = useContext(UsernameContext);

  return (<div className= 'usernameWithContext'><p className='usernameWithContext-paragraph'>{username}</p></div>);
};

export default UsernameWithContext;
