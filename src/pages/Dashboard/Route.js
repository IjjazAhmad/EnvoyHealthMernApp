import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'

import AddCourse from './AddCourse'
import Doctors from './Doctors/Doctors'
import Appointments from './Appointments/Appointments'
import AddDr from './AddStd/AddDr'

export default function AdminRoutesIndex() {
  return (
    <>
    <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/Appointments' element={<Appointments/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/addcourse' element={<AddCourse/>}/>
        <Route path='/Adddr' element={<AddDr/>}/>
    </Routes>
    </>
  )
}
