import React from 'react';
import './style.css'
import { UsernameContext } from '../../contexts/UsernameContext';

const InputUsernameContext = () => {

    const {setUsername} = React.useContext(UsernameContext);

    const handleInputChange = (e) => {
        setUsername(e.target.value);
      };

    return (
        <div className="inputUsernameContext">
            <input className='inputUsernameContext-input' onChange={handleInputChange}></input>
        </div>
    );
};

export default InputUsernameContext;
