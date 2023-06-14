import React from 'react'
import Final from './pages/Final'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Design from './components/Design';
import Image from './components/Image';
import Image2 from './components/Image2';
import Image3 from './components/Image3';
import Cart from './components/Cart';




const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Navbar/>}/>
      <Route path="/Image" element ={<Image/>}/>
      <Route path="/Image2" element ={<Image2/>}/>
      <Route path = "/Image3" element = {<Image3/>}/>
      <Route path = "/Cart" element = {<Cart/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App