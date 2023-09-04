import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/login/login';
import Posts from './components/posts/posts';
import Todos from './components/todo/todos';
import { useSelector } from 'react-redux';

const App = () => {

  const isLogin = useSelector((state: { isLogin:boolean }) => state.isLogin)

  return (
    <Routes>
      <Route path='/' element={<Navigate to='/login' />} />
      <Route path='/login' element={isLogin ? (<Navigate to='/posts' />) : (<Login />)} />
      <Route path='/posts' element={isLogin ? <Posts /> : <Navigate to='/login' />} />
      <Route path='/todos' element={isLogin ? <Todos /> : <Navigate to='/login' />} />
    </Routes>
  )
};


export default App
