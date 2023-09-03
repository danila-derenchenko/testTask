import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/login/login';
import Posts from './components/posts/posts';
import Todos from './components/todo/todos';

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigate to='/login' />} />
      <Route path='/login' element={<Login />} />
      <Route path='/posts' element={<Posts />} />
      <Route path='/todos' element={<Todos />} />
    </Routes>
  )
};


export default App
