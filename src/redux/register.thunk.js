const { createAsyncThunk } = require('@reduxjs/toolkit');
const { UserApi } = require('services/contactApi');

export const registerThunk = createAsyncThunk(
  'users/signup',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await UserApi.register(formData);
      localStorage.setItem('token', response.token);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'users/login',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await UserApi.login(formData);
      localStorage.setItem('token', response.token);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'users/logout',
  async (_, { rejectWithValue }) => {
    try {
      const response = await UserApi.Logout();
      localStorage.removeItem('token');
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const currentThunk = createAsyncThunk(
  'users/current',
  async (_, { rejectWithValue }) => {
    try {
      const response = await UserApi.Current();
      const token = localStorage.getItem('token', response.token);
      return { token, user: response };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
