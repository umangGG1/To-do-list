import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './taskSlice'; // Adjust the import path if needed

// Load the state from local storage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('tasks');
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (e) {
    return [];
  }
};

// Save the state to local storage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('tasks', serializedState);
  } catch (e) {
    // Ignore write errors
  }
};

// Create the Redux store
const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  preloadedState: {
    tasks: loadState(),
  },
});

// Subscribe to store changes and save state to local storage
store.subscribe(() => {
  saveState(store.getState().tasks);
});

export default store;
