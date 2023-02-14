import React from 'react'

const Login = () => {
  return (
    <div className='mt-4'>
      <h1 className='text-4xl mb-4 text-center'>Login</h1>
      <form action='POST' className='max-w-md mx-auto'>
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />
        <button className='primary'>Login</button>
      </form>
    </div>
  )
}

export default Login