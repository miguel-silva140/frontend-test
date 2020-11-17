import React from 'react'
import logo from '../../logo.svg';
import './Header.css'

function Header(){
    return(
        <nav className="Header-nav">
            <div className="Header-navLeft">
                <img src={logo} alt="logo" width="100px" height="100px" />
                <h1>TodoSite</h1>
            </div>
            <div className="Header-navRight">
                <a href=".">Index</a>
                <a href=".">About</a>
                <a href=".">Contact</a>
            </div>
        </nav>
    )
}

export default Header