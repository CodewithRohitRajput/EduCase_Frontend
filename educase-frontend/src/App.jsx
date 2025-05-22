import { useState } from 'react'
import './App.css'
import {Routes , Route} from 'react-router-dom'
import Welcome from './components/Welcome'
import Login from './components/Login'
import Signup from './components/Signup'
import Profile from './components/Profile'
function App() {

  return (
   <Routes>
    <Route path='/' element={<Welcome/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/signup' element={<Signup/>} />
    <Route path='/profile' element={<Profile/>} />
   </Routes>
  )
}

export default App
