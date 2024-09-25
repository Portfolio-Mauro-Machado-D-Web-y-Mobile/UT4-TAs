import React from 'react';
//import './card.css'; // Assuming you have some CSS for styling
import './style.css'
import SingleParamEditModal from '../singleParamEditModal';

import { useState } from 'react';


const TaskList = ({ list, setList }) => {
    const [editIndex, setEditIndex] = useState(null); // Store the index of the task being edited

    const handleDelete = (indexToDelete) => {
        const newList = list.filter((_, index) => index !== indexToDelete);
        setList(newList);
    };

    const handleEdit = (indexToEdit) => {
        setEditIndex(indexToEdit); // Set the index of the item being edited
    };

    const handleSave = (newParam) => {
        const newList = [...list];
        newList[editIndex] = newParam;
        setList(newList);
        setEditIndex(null); // Close the modal after saving
    };

    return (
        <div className="taskList">
            <ul> Lista:
                {editIndex !== null && (
                    <SingleParamEditModal 
                        param={list[editIndex]} 
                        onSave={handleSave} 
                    />
                )}
                {list.map((item, index) => (
                    <li key={index}>
                        {item} 
                        <button onClick={() => handleEdit(index)}>Edit</button>
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
            
        </div>
    );
};

export default TaskList;
