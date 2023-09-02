import './App.css'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Login from './components/login/login';
import Posts from './components/posts/post';
import Todo from './components/todo/todo';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/login' element={<Login />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/todo' element={<Todo />} />
      </Routes>
    </BrowserRouter>
  )
};


export default App
