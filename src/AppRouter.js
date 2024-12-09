import React from 'react'
import Home from './pages/Home';
import Movies from './pages/Movies';
import Series from './pages/Series';
import Contact from './pages/Contact';
import { Routes, Route } from 'react-router-dom';

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/series' element={<Series/>}/>
        <Route path='/contactUs' element={<Contact/>}/>
    </Routes>
  )
}
