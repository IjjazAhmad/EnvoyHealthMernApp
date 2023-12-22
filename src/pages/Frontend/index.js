import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Home from './Home'
import Contact from './Contact'
import Bolgs from './Bolgs'
import BookDr from './BookDr'
import FAQ from '../../components/FAQ'
export default function index() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Bolgs />} />
        <Route path=':doctorid' element={<BookDr />} />
      </Routes>
      <FAQ />
      <Footer />
    </>
  )
}
