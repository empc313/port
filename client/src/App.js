import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "../src/App.css";


import Navbar from './components/navbar'
import Home from './components/pages/Home'

import Portfolio from './components/pages/Portfolio'
import About from './components/pages/About'
import Contact from './components/pages/Contact'

import Footer from './components/footer';



export default function App() {


return(
    <body className='bg-[#F6EFE7] max-[426px]:px-4 max-[787px]:px-4 px-44 min-h-screen pb-10'>
   <Router>
    <Navbar/>
    <main>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About/>}/>
        </Routes>
    </main>
   </Router>
   <section>

   </section>
  <footer>
    <Footer/>
  </footer>
    </body>
    )
}



