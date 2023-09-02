// store.js
import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducers';

const store = configureStore({
  reducer: {
    isLogin: reducer
  },
});

export default store;