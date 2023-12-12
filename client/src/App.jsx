import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

import Home from './pages/Home'
import Header from './component/Header'
import Login from './pages/Login'
import Register from './pages/Register'
import Logout from './pages/Logout';

import 'react-toastify/dist/ReactToastify.css';
import './App.css'

axios.defaults.baseURL = 'http://localhost:5000/'
function App() {

  return (
    <div className="App px-20">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>      
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/logout' element={<Logout />} />
      </Routes> 
      <ToastContainer autoClose={2500} />    
       
    </div>
  )
}

export default App
