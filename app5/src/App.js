import React from 'react'
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { Routes,Route } from 'react-router';
import Login from './Components/Login/Login';
import Booking from './Components/Booking/Booking';
import Dates from './Components/Dates/Dates';
import Dispensaries from './Components/Dispensaries/Dispensaries';
import Rigister from './Components/Rigister/Rigister';


export default function App() {
  return (
    <div>
      
      <div >
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="dates" element={<Dates />}></Route>
          <Route path="rigister" element={<Rigister />}></Route>
          <Route path="dispensaries" element={<Dispensaries />}></Route>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}
