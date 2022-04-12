import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import toast from 'react-hot-toast';
import {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  veluesFilter,
} from "./phonebook-actions";

const contacts = createReducer([],
  {
    [fetchContactSuccess]: (_, { payload }) => payload,
    [addContactSuccess]: (state, { payload }) => { 
      //    if (state.find(contact => contact.nick === payload.nick)) {
      //   const notify = `${payload.nick} is already on list`;
      //   toast.error(notify);
      //   return state;
      // }
      state = [...state, payload];
      toast.success(`Contact ${payload.nick} added!`);
      return state;
    },
    [deleteContactSuccess]: (state, {payload}) => state.filter(({ id }) => id !== payload),
})

const filter = createReducer("", {
  [veluesFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
});
export default combineReducers({
  contacts,
  filter,
  loading,
});