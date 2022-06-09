import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  '/contacts/add',
  async (contact, rejectWithValue) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  '/contacts/delete',
  async (contactId, rejectWithValue) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// export const removeContact = contactId => dispatch => {
//   dispatch(removeContactRequest());

//   axios
//     .delete(`/contacts/${contactId}`)
//     .then(() => dispatch(removeContactSuccess(contactId)))
//     .catch(error => dispatch(removeContactError(error)));
// };

// export const fetchContacts = () => dispatch => {
//   console.log('fetch initiated');
//   dispatch(fetchRequest());

//   axios
//     .get('/contacts')
//     .then(({ data }) => dispatch(fetchContactSuccess(data)))
//     .catch(error => dispatch(fetchContactError(error)));
// };

// export const addContact = contact => dispatch => {
//   dispatch(addRequest());
//   axios
//     .post('/contacts', contact)
//     .then(({ data }) => dispatch(addContactSuccess(data)))
//     .catch(error => dispatch(addContactError(error)));
// };

// export const editContact = contact => dispatch => {
//   dispatch(addRequest());
//   axios
//     .post('/contacts', contact)
//     .then(({ data }) => dispatch(addContactSuccess(data)))
//     .catch(error => dispatch(addContactError(error)));
// };
