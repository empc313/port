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
   <div className='app'>
    <Navbar />
    <Footer/>
</div>
    )
}



