// store.js
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import loginReduser from './reducers/loginReduser';
import postsReducer from './reducers/postsReducer';
import todosReduser from './reducers/todosReduser';

const rootReducer = combineReducers({
  isLogin:loginReduser,
  posts:postsReducer,
  todos: todosReduser
})

const store = configureStore({
  reducer: rootReducer
});

export default store;