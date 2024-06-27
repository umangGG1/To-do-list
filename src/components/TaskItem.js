import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask } from "../redux/taskSlice"
import './style.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const TaskItem = ({ task, index }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task);

  const handleDelete = () => {
    dispatch(deleteTask(index));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (newTask.trim()) {
      dispatch(editTask({ index, newTask }));
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setNewTask(task);
  };

  return (
    <div>
      {isEditing ? (
        <div className='task-list-edit'>
          <div>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className='task-input'
          />
          </div>
          <div>
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      ) : (
        <div className='task-list-show'>
          <span>{task}</span>
          <div>
          <button onClick={handleEdit} id='edit-button'><EditIcon/></button>
          <button onClick={handleDelete}><DeleteIcon/></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
