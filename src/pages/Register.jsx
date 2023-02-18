import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className='mt-4 grow flex column items-center justify-around'>
      <div className=''>
        <h1 className='text-4xl mb-4 text-center'>Register</h1>
        <form action='POST' className='max-w-md mx-auto'>
        <input type='text' placeholder='Name' value={name} onChange={e=>setName(e.target.value)} />
        <input type='email' placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)} />
        <input type='password' placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)} />
           <button className='primary'>Register</button>
          <div className='register-link text-gray-500 py-2 text-center'>
            Have a account? <Link to='/login' className='text-blue-500'>Login</Link> here...
          </div>
        </form>
      </div>
      
    </div>
  )
}

export default Register