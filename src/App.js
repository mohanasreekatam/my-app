import React from 'react'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Design from './components/Design';
import Image from './components/Image';
import Image2 from './components/Image2';
import Image3 from './components/Image3';
import Cart from './components/Cart';
import BasicTable from './components/BasicTable';
import AddUser from './components/AddUser';
import FirstPage from './components/FirstPage';
import SelectItem from './components/SelectItem';
import DisplayPage from './components/DisplayPage';
import Payment from './components/Payment';
import UpdateUser from './components/UpdateUser';
import PizzaTable from './components/PizzaTable';


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<FirstPage/>} />
      <Route path="/Navbar" element = {<Navbar/>}/>
      <Route path="/Image" element ={<Image/>}/>
      <Route path="/Image2" element ={<Image2/>}/>
      <Route path = "/Image3" element = {<Image3/>}/>
      <Route path = "/Cart" element = {<Cart/>}/>
      <Route path = "/BasicTable" element = {<BasicTable/>}/>
      <Route path = "/AddUser" element = {<AddUser/>}/>
      <Route path = "/SelectItem" element = {<SelectItem/>}/>
      <Route path = "/DisplayPage" element = {<DisplayPage/>}/>
      <Route path = "/Payment" element = {<Payment />}/>
      <Route path = "/UpdateUser/:id" element = {<UpdateUser/>}/>
      <Route path = "/PizzaTable" element = {<PizzaTable/>}/>
     
    

    </Routes>
    </BrowserRouter>
  )
}

export default App