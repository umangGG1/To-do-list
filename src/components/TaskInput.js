import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';
import "./style.css"

const TaskInput = () => {
  
    const [task, setTask] = useState('');
    const dispatch = useDispatch();
  
    const handleAddTask = () =>{
        if(task.trim()){
            dispatch(addTask(task));
            setTask('');
        }
    };

    const handleKeyPress = (e) =>{
        if(e.key === 'Enter'){
            handleAddTask();
        }
    };

    return(
        <div className='enter-task'>
            <input
            type='text'
            value={task}
            onChange={(e)=>setTask(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder='What would you like to do?'
            className='enter-task-input'
            />
            <button onClick={handleAddTask} className='enter-task-button'>Add</button>
        </div>
    )
}

export default TaskInput