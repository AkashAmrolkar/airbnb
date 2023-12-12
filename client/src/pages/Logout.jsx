import React, { useEffect } from 'react'
import { toast } from 'react-toastify'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../store/Auth';

const Logout = () => {
    const {removeToken} = useAuth();
    useEffect(()=>{
        removeToken();
        
    }, [Logout])
    toast.success('Successfully Loggedout..!', { position: toast.POSITION.TOP_RIGHT })
  return (
    <Navigate to='/' />
    
  )
}

export default Logout