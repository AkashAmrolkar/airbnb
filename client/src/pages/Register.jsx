import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const Register = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    name:'',
    email: '',
    password: ''
  })
  const changeHandler = (e) =>{
    const { name, value } = e.target;
    setData({...data, [name]: value })
  }

  const registerUser = async(e)=>{
    e.preventDefault();
    try{
     const response = await axios.post('/users/register',data)
     if (response.status === 201) {
      toast.success('User registered successfully', { position: toast.POSITION.TOP_RIGHT });

      navigate('/login')
    } else {
      toast.error('Check your credientials');
      // Handle registration failure, show an error message, etc.
    }
      
    }catch(e){
      toast.error('Registration failed');
    }
  }

  return (
    <div className='mt-4 grow flex column items-center justify-around h-[600px]'>
      <div className=''>
        <h1 className='text-4xl mb-4 text-center'>Register</h1>
        <form action='POST' className='max-w-md mx-auto' onSubmit={registerUser}>
        <input type='text' placeholder='Name' name='name' value={data.name} onChange={changeHandler} autoComplete='false' />
        <input type='email' placeholder='Email' name='email' value={data.email} onChange={changeHandler} autoComplete='false' />
        <input type='password' placeholder='Password' name='password' value={data.password} onChange={changeHandler} autoComplete='false' />
           <button className='primary' type='submit'>Register</button>
          <div className='register-link text-gray-500 py-2 text-center'>
            Have a account? <Link to='/login' className='text-blue-500'>Login</Link> here...
          </div>
        </form>
      </div>
      
    </div>
  )
}

export default Register