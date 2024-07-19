import React from 'react';
import { Link } from 'react-router-dom';

export default function NavTabs() {
   return (
    
        <ul className="nav-bar-items">
             <li className="nav-item">
              <Link className='nav-link' to='/'>
                Home
                </Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to='/about'>
                About Me
                </Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to='/portfolio'>
                Portfolio
                </Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to='/contact'>
                Contact
                </Link>
            </li>
          </ul>
   )
}
