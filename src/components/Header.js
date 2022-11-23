import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function Header() {
    const[showHeader , setShowHeader] = useState(false) 
    const path = window.location.pathname
    return (
        <div className="header">
            {showHeader ? (
                <AiOutlineClose 
                onClick={() => {setShowHeader(!showHeader)}} className='menu-icon position-fixed top-0 end-0' />
            ) : (
                <AiOutlineMenu className='menu-icon position-fixed top-0 end-0' 
                onClick={() => {setShowHeader(!showHeader)}}/>
            )}
            <ul className={`${showHeader ? 'show-header' : 'hide-header'} n-box1`}>
                <li className={`${path==='/' && 'active'}`}><Link to='/'>Home</Link></li>
                <li className={`${path==='/about' && 'active'}`}><Link to='/about'>About</Link></li>
                <li className={`${path==='/portfolio' && 'active'}`}><Link to='/portfolio'>Portfolio</Link></li>
                <li className={`${path==='/resume' && 'active'}`}><Link to='/resume'>Resume</Link></li>
                <li className={`${path==='/contact' && 'active'}`}><Link to='/contact'>Contact</Link></li>
            </ul>

        </div>
    )
}

export default Header