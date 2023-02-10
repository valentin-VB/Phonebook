import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterUpdate(state, action) {
      return (state = action.payload);
    },
  },
});

export const filterUpdate = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
