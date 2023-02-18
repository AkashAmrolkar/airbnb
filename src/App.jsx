import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './component/Header'
import Layout from './component/Layout'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>      
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        </Route>        
      </Routes>      
    </div>
  )
}

export default App
