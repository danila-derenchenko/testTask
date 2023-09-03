import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/login/login';
import Posts from './components/posts/posts';
import Todos from './components/todo/todos';

const App = () => {

  return (
      <Routes>
        <Route path='/'>
          <Navigate to='/login' />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/posts'>
          <Posts />
        </Route>
        <Route path='/todos'>
          <Todos />
        </Route>
      </Routes>
  )
};


export default App
