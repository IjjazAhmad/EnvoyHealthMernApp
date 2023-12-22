import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import ForgetPass from './ForgetPass'

export default function index() {
  return (
    <>
    <Routes>
        <Route  path='/login' element={<Login/>} />
        <Route  path='/Register' element={<Register/>} />
        <Route  path='/forgetpassword' element={<ForgetPass/>} />
    </Routes>
    </>
  )
}
