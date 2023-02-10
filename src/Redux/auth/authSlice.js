import { createSlice } from '@reduxjs/toolkit';
const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null },
  reducers: {
    setCredentials: (state, action) => {
      const { user, token } = action.payload;

      state.user = user;
      state.token = token;
    },
    logOut: (state, _) => {
      state.user = null;
      state.token = null;
    },
    refreshUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setCredentials, logOut, refreshUser } = authSlice.actions;
export default authSlice.reducer;
