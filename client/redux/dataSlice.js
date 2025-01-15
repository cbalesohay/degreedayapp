import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  highTemp: 0,
  lowTemp: 0,
  humidity: 0,
  rain: 0,
  date: 'N/A',
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    fetchRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchSuccess(state, action) {
      state.loading = false;
      Object.assign(state, action.payload); // Merge fetched data into the state
    },
    fetchFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchRequest, fetchSuccess, fetchFailure } = dataSlice.actions;
export default dataSlice.reducer;