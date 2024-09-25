import React from 'react';
//import './card.css'; // Assuming you have some CSS for styling
import './style.css'

const TaskList = ({list, setList}) => {
    const handleDelete = (indexToDelete) => {
        const newList = list.filter((_, index) => index !== indexToDelete);
        setList(newList);
    };

    return (
        <div className="taskList">
            <ul> Lista:
                {list.map((item, index) => (
                    <li key={index}>
                        {item} 
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;


