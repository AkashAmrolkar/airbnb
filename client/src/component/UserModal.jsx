import React from 'react'
import {Link} from 'react-router-dom'
import { useAuth } from '../store/Auth'
const UserModal = () => {
  const {isLoggedIn} = useAuth();
  return (
    <div className=' shadow-md border border-gray-300 rounded-2xl flex flex-col w-fit absolute right-20 z-20 top-20 bg-white'>
        <div className='border-b border-gray-300'>
          <Link to='/' className=' flex justify-between gap-3 p-3'>
            <p className=' text-base font-medium text-black capitalize'>Winter Releases features</p>
            <p className='bg-red-500 uppercase text-white font-light px-2'>new</p>          
          </Link>
        </div>
        {
          !isLoggedIn &&
          <div className='p-3 border-b border-gray-300 flex flex-col gap-3'>
            <Link to='/register' className=' text-base font-medium text-black capitalize'>Signup</Link>
            <Link to="/login" className=' text-base font-medium text-gray-500 capitalize'>Login</Link>
          </div>
        }
        <div className={`${isLoggedIn ?'border-b border-gray-300': ''}' p-3 flex flex-col gap-3'`}>
          <Link to="/" className=' text-base font-medium text-gray-500 capitalize'>Airbnb your home</Link>
          <Link to="/" className=' text-base font-medium text-gray-500 capitalize'>help center</Link>
        </div>
        {
          isLoggedIn &&
          <div className='p-3 flex flex-col gap-3'>
            <Link to='/logout' className=' bg-red-500 rounded-3xl px-5 py-2 w-fit text-base font-medium text-white capitalize'>Logout</Link>
          </div>
        }
    </div>
  )
}

export default UserModal