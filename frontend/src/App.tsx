//import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Start from './pages/Start'
import Login from './pages/Login'
import Chat from './pages/Chat'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Start/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Chat' element={<Chat/>}/>

  
    </Routes>
  )
}

export default App
