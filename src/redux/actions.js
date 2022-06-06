import { createAction } from '@reduxjs/toolkit';

// export const fetchContactSuccess = createAction('contacts/fetchSuccess');
// export const fetchRequest = createAction('contact/fetchRequest');
// export const fetchContactError = createAction('contacts/fetchError');

export const addContactSuccess = createAction('contacts/addSuccess');
export const addRequest = createAction('contact/addRequest');
export const addContactError = createAction('contacts/addError');

export const removeContactSuccess = createAction('contact/removeSuccess');
export const removeContactRequest = createAction('contact/removeRequest');
export const removeContactError = createAction('contact/removeError');

export const filter = createAction('contacts/filter');
export const isLoggedIn = createAction('users/login');
export const token = createAction('users/token');
export const user = createAction('users/data');
export const isRefreshing = createAction('users/refresh');
