import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='mt-4 grow flex column items-center justify-around'>
      <div className=''>
        <h1 className='text-4xl mb-4 text-center'>Login</h1>
        <form action='POST' className='max-w-md mx-auto'>
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <button className='primary'>Login</button>
          <div className='register-link text-gray-500 py-2 text-center'>
            Don't have a account <Link to='/register' className='text-blue-500'>Register</Link> here...
          </div>
        </form>
      </div>
      
    </div>
  )
}

export default Login