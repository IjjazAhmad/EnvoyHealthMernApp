import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Doctors from './Doctors/Doctors'
import Appointments from './Appointments/Appointments'
import AddDr from '.AddDr'

export default function AdminRoutesIndex() {
  return (
    <>
    <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/appointments' element={<Appointments/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/adddr' element={<AddDr/>}/>
    </Routes>
    </>
  )
}
