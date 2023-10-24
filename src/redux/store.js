import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { postDetailsReducer } from './postDetailReducer';
import { postsReducer } from './postsReducer';

const postDetailsConfig = {
  key: 'postDetails',
  storage,
  whitelist: ['posts'],
//   blacklist: ['filter'],
};

export const store = configureStore({
  reducer: {
    postDetails: persistReducer(postDetailsConfig, postDetailsReducer),
    postsData: postsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);