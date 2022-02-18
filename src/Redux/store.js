import { configureStore } from '@reduxjs/toolkit';
import phonebookReducer from './phonebook/phonebook-reducer';

//import {
 // persistStore,
  //persistReducer,
  //FLUSH,
  //REHYDRATE,
  //PAUSE,
  //PERSIST,
  //PURGE,
  //REGISTER,
//} from 'redux-persist';

//import storage from 'redux-persist/lib/storage';



//const phonebookPersistConfig = {
//  key: 'contacts',
 // storage,
 // blacklist: ['filter'],
//};

const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
 
});


export default  store ;