import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  delContact,
  getContacts,
  postContact,
} from 'services/contactsOperations';

const contactInitialState = {
  contacts: [],
  isLoading: false,
  error: null,
  isContactAdd: false,
};

const onPending = state => {
  state.isLoading = true;
  state.error = null;
  state.isContactAdd = false;
};

const onRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
  state.isContactAdd = false;
};

const arrayOfActs = [getContacts, postContact, delContact];

const addStatusToActs = status => arrayOfActs.map(el => el[status]);

export const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState: contactInitialState,
  extraReducers: builder => {
    builder
      .addCase(getContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = payload;
        state.error = null;
      })
      .addCase(postContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = [...state.contacts, payload];
        state.error = null;
        state.isContactAdd = true;
      })
      .addCase(delContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(
          contact => contact.id !== payload.id
        );
        state.error = null;
      })
      .addMatcher(isAnyOf(...addStatusToActs('pending')), onPending)
      .addMatcher(isAnyOf(...addStatusToActs('rejected')), onRejected);
  },
});

export const getPhoneBookValue = state => state.phoneBook.contacts;
export const getIsLoading = state => state.phoneBook.isLoading;
export const getError = state => state.phoneBook.error;
export const selectIsContactAdd = state => state.phoneBook.isContactAdd;
