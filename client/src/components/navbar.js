import React, {useState} from 'react';
import {Link } from 'react-router-dom';


export default function Navbar() {
   return (
    <>
    <div className="container mx-auto flex justify-between items-center pt-8 mb-12 max-[426px]:mb-6 max-[426px]:block">
        <div className="title max-[426px]:flex max-[426px]:justify-between max-[426px]:items-center">     
            <a href="/">
            <h1 className={`text-3xl max-[426px]:text-base italic text-[#7e9342] hover:text-blue signature`}>Emma Cunningham</h1>
            </a>     
          <div className="text-3xl hidden max-[426px]:block"></div>
        </div>
        
        <nav className={`flex gap-10 max-[426px]:flex-col max-[426px]:mt-10`}>
            <Link  to="/about" className='text-[#7e9342] hover:text-black pb-1 hover:border-b text-lg transition-all'>
              About
            </Link>
            <Link to="/skills" className='text-[#7e9342] hover:text-black pb-1 hover:border-b text-lg transition-all'>
              Skills
            </Link>
            <Link to="/project" className='text-[#7e9342] hover:text-black pb-1 hover:border-b text-lg transition-all'>
              Portfolio
            </Link>
            <Link href="/contact" className='text-[#7e9342] hover:text-green-500 pb-1 hover:border-b text-lg transition-all'>
              Contact Me
            </Link>
        </nav>  
        
    </div>
    </>
   )
}
