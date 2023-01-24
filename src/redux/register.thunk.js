const { createAsyncThunk } = require('@reduxjs/toolkit');
const { UserApi } = require('services/contactApi');

export const registerThunk = createAsyncThunk(
  'user/register',
  async (formData, { rejectWithValue }) => {
    try {
      const data = await UserApi.register(formData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
