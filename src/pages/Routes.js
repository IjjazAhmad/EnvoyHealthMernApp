import React from 'react'
import Frontend from './Frontend'
import Authentication from './Authentication'
import { Route,Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
export default function Index() {
  return (
    <>
    <main>
      <Routes>
        <Route path='/*' element={<Frontend/>} />
        <Route path='auth/*' element={<Authentication/>} />
        <Route path='dashboard/*' element={<Dashboard/>} />

      </Routes>
    </main>
    
    </>
  )
}
