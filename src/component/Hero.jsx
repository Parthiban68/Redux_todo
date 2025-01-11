import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Post from '../pages/Post'
import Put from '../pages/Put'
import Home from '../pages/Home'
const Hero = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/post' element={<Post/>}/>
        <Route path='/put' element={<Put/>}/>
      </Routes>
    </div>
  )
}

export default Hero