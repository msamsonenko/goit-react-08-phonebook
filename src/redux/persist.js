import { persistReducer } from 'redux-persist';
import { myReducer } from './reducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'authApi',
  storage,
  whitelist: ['token'],
};

export const persistedReducer = persistReducer(persistConfig, myReducer);
