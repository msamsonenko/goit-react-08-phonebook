import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { token, isLoggedIn, user, isRefreshing } from 'redux/actions';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().persistedReducer.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Users', 'Contacts'],
  endpoints: builder => ({
    addUser: builder.mutation({
      query: newUser => ({
        url: '/users/signup',
        method: 'POST',
        body: newUser,
      }),
      invalidatesTags: ['Users'],
      async onQueryStarted(logIn, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(token(data.token));
          dispatch(isLoggedIn(true));
          dispatch(user(data.user));
          return data;
        } catch (error) {
          dispatch(console.log('error logging in'));
        }
      },
    }),
    logInUser: builder.mutation({
      query: logIn => ({
        url: '/users/login',
        method: 'POST',
        body: logIn,
      }),

      invalidatesTags: ['Users'],
      async onQueryStarted(logIn, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(token(data.token));
          dispatch(isLoggedIn(true));
          dispatch(user(data.user));
          return data;
        } catch (error) {
          dispatch(console.log('error logging in'));
        }
      },
    }),
    refetchUser: builder.query({
      query: () => `users/current`,
      providesTags: ['Users'],
      async onQueryStarted(logIn, { dispatch, getState, queryFulfilled }) {
        const token = getState().persistedReducer.token;
        if (token === null) {
          return;
        }
        try {
          dispatch(isRefreshing(true));
          const { data } = await queryFulfilled;
          dispatch(isLoggedIn(true));
          dispatch(user(data));
          dispatch(isRefreshing(false));

          return data;
        } catch (error) {
          dispatch(isRefreshing(false));
          dispatch(console.log('a problem occured'));
        }
      },
    }),

    logOutUser: builder.mutation({
      query: token => ({
        url: 'users/logout',
        method: 'POST',
        body: token,
      }),
      providesTags: ['Users'],
      async onQueryStarted(logOut, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(token(null));
          dispatch(isLoggedIn(false));
          dispatch(user({ name: null, email: null }));
          return data;
        } catch (error) {
          dispatch(console.log('error logging in'));
        }
      },
    }),
    editContact: builder.mutation({
      query: ({ name, number, id }) => ({
        url: `/contacts/${id}`,
        method: 'PATCH',
        body: { name, number },
      }),
      invalidatesTags: ['Contacts'],
      async onQueryStarted(logIn, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          return data;
        } catch (error) {
          console.log(error);
          dispatch(console.log('error logging in'));
        }
      },
    }),
    getAllContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: newContact => ({
        url: '/contacts',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useAddUserMutation,
  useLogInUserMutation,
  useLogOutUserMutation,
  useGetAllContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useRefetchUserQuery,
  useEditContactMutation,
} = authApi;
