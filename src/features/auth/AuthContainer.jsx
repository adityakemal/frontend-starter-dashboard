import React from 'react'
import { useSelector } from 'react-redux'

import Login from './components/Login'
import Register from './components/Register'



export default function AuthContainer() {
    const { isRegister } = useSelector(state => state.auth)

    return (
        <div className='container auth h-100'>
            <Login />
        </div>
    )
}
