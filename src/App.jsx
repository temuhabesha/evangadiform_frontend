import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import axios from './axiosConfig'

const App = () => {

  const Navigate = useNavigate
  async function checkuser(){
     try {
      await axios.get('/user/check')
     } catch (error) {
      console.log(error.response);
      Navigate('/login')
     }
  }

  useEffect(()=>{
    checkuser();
  },[])


  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
  )
}

export default App
