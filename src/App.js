import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//import { useNavigate } from 'react-router-dom';
import Home from './Pages/Home.js'
import Login from './Components/Login.js'
import Register from './Components/Register.js'
const App = () => {
  //const navigate = useNavigate();
  //navigate('/register');
  return (
    
    <><BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
    {/* <Register /> */}
    </>

    
    
  )
}

export default App