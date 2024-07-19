import React from 'react';

import Navbar from './components/navbar'
import Portfolio from './components/pages/Portfolio'
import Home from './components/pages/Home'
import Footer from './components/footer';



export default function App() {
return(
   <div>
    <Navbar/>
     <Home/>
     <Portfolio/>
    <Footer/>
   </div>
    )
}



