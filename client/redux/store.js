import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './dataSlice'; // Assuming you refactored your reducer into a slice

const store = configureStore({
  reducer: dataReducer, // Add the reducer here
});

export default store;