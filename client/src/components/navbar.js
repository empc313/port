import React from 'react';
import {Link } from 'react-router-dom';


export default function Navbar() {
   return (
    <>
    <div className="container mx-auto flex justify-between items-center pt-8 mb-12 max-[426px]:mb-6 max-[426px]:block">
        <div className="title max-[426px]:flex max-[426px]:justify-between max-[426px]:items-center">     
            <a href="/">
            <h1 className={`text-3xl max-[426px]:text-base italic text-[#778A35] hover:text-[#31352E] signature`}>Emma Cunningham</h1>
            </a>     
          <div className="text-3xl hidden max-[426px]:block"></div>
        </div>
        
        <nav className={`flex gap-10 max-[426px]:flex-col max-[426px]:mt-10`}>
            <Link to="/portfolio" className='text-[#778A35] hover:text-[#31352E] pb-1 hover:border-b-2 text-lg transition-all'>
              Portfolio
            </Link>
            <Link  to="/about" className='text-[#778A35] hover:text-[#31352E] pb-1 hover:border-b-2 text-lg transition-all'>
              About
            </Link>
            <Link to="/contact" className='text-[#778A35] hover:text-[#31352E]  pb-1 hover:border-b-2 text-lg transition-all'>
              Contact Me
            </Link>
        </nav>  
        
    </div>
    </>
   )
}
