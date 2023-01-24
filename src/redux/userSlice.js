import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'userAuth',
  initialState,
});

export const authReducer = userSlice.reducer;
