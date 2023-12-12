import { useState } from "react";
import { createContext, useContext } from "react";

export const authContext = createContext()

export const AuthProvider = ({children}) =>{
    const [token, setToken] =useState(localStorage.getItem('token'));
    console.log('Token: ',token);
    let isLoggedIn = !!token;

    const storeToken = (serverToken) =>{
        return localStorage.setItem('token', serverToken)
    }
    const removeToken = () =>{
        setToken('')
        localStorage.removeItem('token')
    }
    return(
        <authContext.Provider value={{isLoggedIn, storeToken, removeToken}}>
            {children}
        </authContext.Provider>
    )
}

export const useAuth = () =>{
    return useContext(authContext)
}