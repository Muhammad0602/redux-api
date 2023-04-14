/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://randomuser.me/api/?results=5';
const initialState = {
  users: [],
  isLoading: true,
  error: undefined,
};

export const getUsers = createAsyncThunk('users/getUsers', async () => {
  try {
    const response = await axios.get(URL);
    const { data } = response;
    return data.results;
  } catch (err) {
    return err.message;
  }
});

const users = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false; 
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default users.reducer;
