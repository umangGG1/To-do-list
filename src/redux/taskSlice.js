import { createSlice } from '@reduxjs/toolkit';

// Function to load state from local storage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('tasks');
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (e) {
    return [];
  }
};

// Function to save state to local storage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('tasks', serializedState);
  } catch (e) {
    // Ignore write errors
  }
};

// Create a slice for tasks
const tasksSlice = createSlice({
  name: 'tasks',
  initialState: loadState(),
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
      saveState(state);
    },
    deleteTask: (state, action) => {
      state.splice(action.payload, 1);
      saveState(state);
    },
    editTask: (state, action) => {
      const { index, newTask } = action.payload;
      state[index] = newTask;
      saveState(state);
    },
  },
});

// Export the actions
export const { addTask, deleteTask, editTask } = tasksSlice.actions;

// Export the reducer
export default tasksSlice.reducer;
