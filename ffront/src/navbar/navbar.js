import React, { useState } from 'react'
import './css/navbar.css'
import { NavLink } from 'react-router-dom'
import Login from '../registration/login';
function Headersection() {
  const id=localStorage.getItem("id")||null;
function handlesignout(){
  localStorage.removeItem("id");
  localStorage.removeItem("type");
}
  return (
    <header className="hh">
    <a href="#" className="Brand">Name</a>
    {/* <i class='bx bx-menu' id="menuicon"></i> */}
    <nav className="navbar">
        <ul>
            <li><NavLink to={`/profile/${localStorage.getItem("id")}`}>Myprofile</NavLink></li>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/groups">Groups</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            {id!=null?<li><NavLink to="/login" onClick={handlesignout}>Sign out</NavLink></li>:<li><NavLink to="/login">login</NavLink></li>}
        </ul>
    </nav>
    </header>  
  )
}

export default Headersection
