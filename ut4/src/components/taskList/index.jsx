import React from 'react';
//import './card.css'; // Assuming you have some CSS for styling
import './style.css'

const TaskList = ({list}) => {
    return (
        <div className="taskList">
            <ul> Lista:
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;


