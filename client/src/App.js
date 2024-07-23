import React, {useState, useEffect} from 'react';
import "../src/App.css";


import Navbar from './components/navbar'
import Home from './components/pages/Home'

import Portfolio from './components/pages/Portfolio'
import About from './components/pages/About'
import Contact from './components/pages/Contact'

import Footer from './components/footer';



export default function App() {


return(
   <div className='bg-[#F6EFE7] max-[426px]:px-4 max-[787px]:px-4 text-white px-44 min-h-screen pb-10'>
    <div>
    <Navbar />
    <Footer/>
    </div>
</div>
    )
}



