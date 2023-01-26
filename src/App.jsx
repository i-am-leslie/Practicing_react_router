import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/home/Home';
import Register from './components/register/Register';
import Login from './components/login/Login';
const App = () => {
  return (
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Register' element={<Register/>} />




        </Routes>
    </BrowserRouter>
  )
}

export default App