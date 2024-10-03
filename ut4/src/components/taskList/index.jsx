import React from 'react';
import './style.css'
import SingleParamEditModal from '../singleParamEditModal';

import { useState } from 'react';


const TaskList = ({ list, setList }) => {
    const [editIndex, setEditIndex] = useState(null); 

    const handleDelete = (indexToDelete) => {
        const newList = list.filter((_, index) => index !== indexToDelete);
        setList(newList);
    };

    const handleEdit = (indexToEdit) => {
        setEditIndex(indexToEdit); 
    };

    const handleSave = (newParam) => {
        const newList = [...list];
        newList[editIndex] = newParam;
        setList(newList);
        setEditIndex(null); 
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
