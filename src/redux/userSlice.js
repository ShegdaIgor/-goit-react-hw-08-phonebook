import { createSlice } from '@reduxjs/toolkit';
import {
  currentThunk,
  loginThunk,
  logoutThunk,
  registerThunk,
} from './register.thunk';

const initialState = {
  userData: null,
  token: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'userAuth',
  initialState,
  extraReducers: builder =>
    builder
      /////////////////REGISTER///////////////
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
      })
      ///////////////////////LOGIN///////////////////////////////////////
      .addCase(loginThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, { payload: { user, token } }) => {
        state.isLoading = false;
        state.userData = user;
        state.token = token;
      })
      .addCase(loginThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      ///////////////////////LOGOUT///////////////////////////////////////
      .addCase(logoutThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutThunk.fulfilled, state => {
        state.isLoading = false;
        state.userData = null;
        state.token = null;
      })
      .addCase(logoutThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      /////////////////////////CURRENT///////////////////////////////////////
      .addCase(currentThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        currentThunk.fulfilled,
        (state, { payload: { user, token } }) => {
          state.isLoading = false;
          state.userData = user;
          state.token = token;
        }
      )
      .addCase(currentThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});

export const authReducer = userSlice.reducer;
