import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getContacts = createAsyncThunk(
  'phoneBook/getContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const postContact = createAsyncThunk(
  'phoneBook/postContact',
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', newContact);
      Notiflix.Notify.success(`Contact added successfully`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const delContact = createAsyncThunk(
  'phoneBook/delContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      Notiflix.Notify.warning(`Contact delete successfully`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
