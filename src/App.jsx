import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router'
import Login from './pages/Login'
import Home from './pages/home/Home'
import '@fontsource/josefin-sans'

function App() {

  return (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
    </Routes>
  )
}

export default App
