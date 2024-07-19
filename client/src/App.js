import React from 'react';
import "../src/App.css";
import Navbar from './components/navbar'
import Portfolio from './components/pages/Portfolio'
import Home from './components/pages/Home'
import Footer from './components/footer';



export default function App() {
return(
   <div className='app'>
    <Navbar/>
     <Home/>
     <Portfolio/>
    <Footer/>
   </div>
    )
}



