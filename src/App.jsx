import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './react-router/Navbar';
import Home from './react-router/Home';
import About from './react-router/About';
import UserProfile from './react-router/userProfile';

function App() {


  return (
 <BrowserRouter>
 <Navbar/>
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path = "/about" element={<About/>}/>
  <Route path="/users/:id" element={<UserProfile />} />
 </Routes>
 </BrowserRouter>
  )
}

export default App
