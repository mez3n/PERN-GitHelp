import "./navbar.css"
import  "../Pages/Groups/groups"
import React,{useState} from "react";
import {Link} from 'react-router-dom'
const Navbar = () => {

    const [click,setClick]=useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu=()=>setClick(false);
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                 <Link to="/" className="navbar-logo">
                    GitHelp
                 </Link>
                 <div className="menu-icon" onClick={handleClick}>
                  <i className={click ? 'fas fa-times':'fas fa-bars'}/>
                 </div>
                 <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                   <li className="nav-item">
                     <Link to='/home' className="nav-links" onClick={closeMobileMenu}>
                        Home
                     </Link>
                   </li>
                   <li className="nav-item">
                     <Link to='/Groups' className="nav-links" onClick={closeMobileMenu}>
                        Groups
                     </Link>
                   </li>
                   <li className="nav-item">
                     <Link to='/Profile' className="nav-links" onClick={closeMobileMenu}>
                        Profile
                     </Link>
                   </li>
                   <li className="nav-item">
                     <Link to='/aboutUs' className="nav-links" onClick={closeMobileMenu}>
                        About Us
                     </Link>
                   </li>
                 </ul>
            </div>
        </nav>
        </>
    );
}

export default Navbar;