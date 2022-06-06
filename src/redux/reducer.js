import { createReducer } from '@reduxjs/toolkit';
import { filter, isLoggedIn, token, user, isRefreshing } from './actions';

export const myReducer = createReducer(
  {
    user: { name: null, email: null },
    isLoggedIn: false,
    token: null,
    filter: '',
    isRefreshing: false,
  },

  {
    [filter]: (state, action) => {
      return {
        ...state,
        filter: action.payload,
      };
    },
    [user]: (state, action) => {
      return {
        ...state,
        user: action.payload,
      };
    },
    [token]: (state, action) => {
      return { ...state, token: action.payload };
    },
    [isLoggedIn]: (state, action) => {
      return { ...state, isLoggedIn: action.payload };
    },
    [isRefreshing]: (state, action) => {
      return { ...state, isRefreshing: action.payload };
    },
  }
);
