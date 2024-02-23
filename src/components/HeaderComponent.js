import React from 'react';
import { LOGO_URL } from '../utils/constant';

export default function HeaderComponent() {
  return (
    <div className="header">
    <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
    </div>
    <div className="nav-item">
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
        </ul>
    </div>
</div>    
  )
}
