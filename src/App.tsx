import './App.css'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Login from './components/login/login';
import Posts from './components/posts/posts';
import Todos from './components/todo/todos';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/login' element={<Login />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/todos' element={<Todos />} />
      </Routes>
    </BrowserRouter>
  )
};


export default App
