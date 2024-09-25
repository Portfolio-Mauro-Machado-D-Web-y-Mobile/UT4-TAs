import React from 'react';
//import './card.css'; // Assuming you have some CSS for styling
import './style.css'

const SingleParamEditModal = ({ param, onSave }) => {
    const [value, setValue] = React.useState(param);

    React.useEffect(() => {
        setValue(param);
    }, [param]);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSave = () => {
        onSave(value);
    };

    return (
        <div className="singleParamEditModal">
            <input 
                type="text" 
                value={value} 
                onChange={handleChange} 
            />
            <button onClick={handleSave}>Save</button>
        </div>
    );
};

export default SingleParamEditModal;


