import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const createUsers = createAsyncThunk(
  'auth/createUsers',
  async (newUser, thunkApi) => {
    try {
      const response = await axios.post('/users/signup', newUser);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      Notiflix.Notify.failure(`We're sorry, something went wrong`);
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const logInUsers = createAsyncThunk(
  'auth/logInUsers',
  async (logInUser, thunkApi) => {
    try {
      const response = await axios.post('/users/login', logInUser);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      Notiflix.Notify.failure(`You entered an incorrect login or password`);
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const logOutUsers = createAsyncThunk(
  'auth/logOutUsers',
  async (_, thunkApi) => {
    try {
      await axios.post('/users/logout');
      clearAuthHeader();
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkApi.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const response = await axios.get('/users/current');
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
