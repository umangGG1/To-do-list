import React from 'react'
import { useSelector } from 'react-redux';
import { selectTasks } from '../redux/taskSelector';
import TaskItem from './TaskItem';

const TaskList = () => {
    const tasks = useSelector(selectTasks);

  return (
    <div>
        {tasks.map((task,index)=>(
            <TaskItem key={index} task={task} index={index}/>
        ))}
    </div>
  )
}

export default TaskList