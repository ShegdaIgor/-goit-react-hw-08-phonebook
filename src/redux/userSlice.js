import { createSlice } from '@reduxjs/toolkit';
import { registerThunk } from './register.thunk';

const initialState = {
  token: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'userAuth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(registerThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        registerThunk.fulfilled,
        (state, { payload: { user, token } }) => {
          state.isLoading = false;
          state.userData = user;
          state.token = token;
        }
      )
      .addCase(registerThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});

export const authReducer = userSlice.reducer;
