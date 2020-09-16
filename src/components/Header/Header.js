import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
    return (
        <div class="Header">
            <img src={logo}/>
           <nav class="Nav">
               <a href="shop">shop</a>
               <a href="order view">order view</a>
               <a href="Manage Inventor Hero">Manage Inventor Hero</a>
           </nav>
        </div>
    );
};

export default Header;