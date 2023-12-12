import React, { useState } from 'react';
import logo from '../assets/media/logo.png'
import { FaSearch, FaBars, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import UserModal from './UserModal';
import SubHeader from './SubHeader';
import web from '../assets/web.svg'



const Header = () => {

  const [modal, setModal] = useState(false)

  const openModal = () =>{
    setModal(!modal)
  }
  return (

    <div>
      <header className='py-4 flex justify-between items-center'>
        <Link to='/'><img src={logo} alt='air-bnb-logo' width='102' height='32' /></Link>

        <div className='flex justify-between items-center p-3 border border-gray-300 rounded-3xl shadow-md'>
          <p className=' font-medium text-base capitalize border-r border-gray-300 px-2 text-center'>Anywhere</p>
          <p className=' font-medium text-base capitalize border-r border-gray-300 px-2 text-center'>Any week</p>
          <div className='px-2 text-center flex justify-center items-center gap-2'>
            <p className=' text-base font-normal text-gray-400 capitalize'>Add guests</p>
            <FaSearch className=' bg-red-500 text-white rounded-full h-8 w-8 p-2' />
          </div>
        </div>

        <div className='flex justify-end items-center gap-3' onClick={openModal}>
          <Link to='https://chat.openai.com/c/f1cf7d03-eb06-4ac8-9437-26639784b9e1' className='font-medium text-base capitalize px-2 text-center'>Airbnb your home</Link>
          <Link to='/'><img src={web} alt='web' width='20' height='20' /></Link>
          <div className='flex gap-2 border border-gray-300 shadow-md rounded-3xl p-3 cursor-pointer'>
            <FaBars className='text-gray-500 font-normal h-8 w-8 p-2' />
            <FaUser className='bg-gray-500 text-white rounded-full h-8 w-8 p-2'/>
          </div>
        </div>

      </header>
      <SubHeader />
        { 
          modal && <UserModal />
        }
    </div>
  )
}

export default Header