//import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

export const fetchContactRequest = createAction(
  "phonebook/fetchContactRequest"
);
export const fetchContactSuccess = createAction(
  "phonebook/fetchContactSuccess"
);
export const fetchContactError = createAction(
  "phonebook/fetchContactError"
);

export const addContactRequest = createAction("phonebook/addContactRequest");
export const addContactSuccess = createAction("phonebook/addContactSuccess");
export const addContactError = createAction("phonebook/addContactError");

export const onDeletedContactRequest = createAction("phonebook/deleteContactRequest");
export const onDeletedContactSuccess = createAction("phonebook/deleteContactSuccess");
export const onDeletedContactError = createAction( "phonebook/deleteContactError");

export const veluesFilter = createAction('phonebook/veluesFilter');
