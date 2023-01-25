const { createAsyncThunk } = require('@reduxjs/toolkit');
const { UserApi } = require('services/contactApi');

export const registerThunk = createAsyncThunk(
  'user/register',
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
  'user/login',
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
