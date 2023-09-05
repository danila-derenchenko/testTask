// store.js
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import loginReduser from './reducers/loginReduser';
import postsReducer from './reducers/postsReducer';

const rootReducer = combineReducers({
  isLogin:loginReduser,
  posts:postsReducer
})

const store = configureStore({
  reducer: rootReducer
});

export default store;