import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  createUsers,
  logInUsers,
  logOutUsers,
  getCurrentUser,
} from 'services/authOperations';

const authInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: null,
  isCurrentUser: false,
};

const onPending = state => {
  state.isLoggedIn = false;
  state.error = null;
};

const onRejected = (state, { payload }) => {
  state.isLoggedIn = false;
  state.error = payload;
};

const arrOfActs = [createUsers, logInUsers, logOutUsers];

const addStatusToActs = status => arrOfActs.map(el => el[status]);

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {
    builder
      .addCase(createUsers.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.user = payload.user;
        state.token = payload.token;
        state.error = null;
      })
      .addCase(logInUsers.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.user = payload.user;
        state.token = payload.token;
        state.error = null;
      })
      .addCase(logOutUsers.fulfilled, state => {
        state.isLoggedIn = false;
        state.user = { name: null, email: null };
        state.token = null;
        state.error = null;
      })
      .addCase(getCurrentUser.pending, state => {
        state.isLoggedIn = false;
        state.error = null;
        state.isCurrentUser = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.user = payload;
        state.error = null;
        state.isCurrentUser = false;
      })
      .addCase(getCurrentUser.rejected, (state, { payload }) => {
        state.isLoggedIn = false;
        state.error = payload;
        state.isCurrentUser = false;
      })
      .addMatcher(isAnyOf(...addStatusToActs('pending')), onPending)
      .addMatcher(isAnyOf(...addStatusToActs('rejected')), onRejected);
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const authPersistReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectCurrentUser = state => state.auth.isCurrentUser;
export const selectError = state => state.auth.error;
