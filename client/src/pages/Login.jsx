
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useAuth } from '../store/Auth'
const Login = () => {
  const navigate = useNavigate()
  const {storeToken} = useAuth();
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })

  const changeHandler = (e)=>{
    const{name, value} = e.target
    setLoginData({...loginData, [name]: value})
  }
  const submitHandler = async(e)=>{
    e.preventDefault();
    try {
        const response = await axios.post('/users/login', loginData)
        if(response){
          const {token} = response.data;
          console.log('Response.data: ', token);
          storeToken(token)
          toast.success('Successfully LogedIn..!', { position: toast.POSITION.TOP_RIGHT })
          navigate('/');
        } else{
          toast.error('Invalid Crediential', {POSITION: toast.POSITION.TOP_RIGHT})
        }
    } catch (error) {
      toast.error('login error', {POSITION: toast.POSITION.TOP_RIGHT})
    }
  }

  return (
    <div className=''>
      <div className='flex column items-center justify-around h-[600px]'>
        <div>
          <h1 className='text-4xl mb-4 text-center'>Login</h1>
          <form action='POST' className='max-w-md mx-auto' onSubmit={submitHandler}>
            <input type='email' placeholder='Email' name="email" value={loginData.email} onChange={changeHandler} autoComplete='false' />
            <input type='password' placeholder='Password' name="password" value={loginData.password} onChange={changeHandler} autoComplete='false' />
            <button className='primary' type='submit'>Login</button>
            <div className='register-link text-gray-500 py-2 text-center'>
              Don't have a account <Link to='/register' className='text-blue-500'>Register</Link> here...
            </div>
          </form>
        </div>
      </div>      
    </div>
  )
}

export default Login