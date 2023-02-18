import React from 'react';
import logo from '../assets/media/logo.png'
import { FaSearchengin } from 'react-icons/fa'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    
    <div>

        <header className='p-4 flex justify-between'>
            <a href="/" className='logo'>
                <img src={logo} alt='' width='150' height='auto' />
            </a>
             
            <div className='flex gap-2 border items-center border-gray-300 rounded-full py-2 px-6 shadow-md shadow-gray-300'>
              <div className='border-r border-gray-300'>Anywhere</div>
              <div className='border-r border-gray-300'>Any Week</div>
              <div className=''>Add guests</div>
              <button className='p-2 bg-red-500 rounded-full'>
                  <FaSearchengin height='15px' width='15px' />
              </button>
            </div>

            <Link to='/login' className='flex gap-2 border items-center border-gray-300 rounded-full py-2 px-6 shadow-md shadow-gray-300'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <div className='user bg-gray-300 p-1 rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                </svg>
              </div>
                
            </Link>

            
        </header>
    </div>
  )
}

export default Header