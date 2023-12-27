import React from 'react';
import Navbar from './components/navbar';
import './App.css'
import Groups from './Pages/Groups/groups'
import Home from './Pages/Home/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
    <Route path='/' exact/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/Groups' element={<Groups/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;