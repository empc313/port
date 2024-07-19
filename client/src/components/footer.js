import React from 'react';
import {FaGithub, FaLinkedin,} from "react-icons/fa"


export default function Footer(){
return(
  
     <div className="container : items-center">
    <p className="mx-auto w-full align-center">
      <a href="" target="blank">
        <FaLinkedin/>
      </a>
      <a href="https://github.com/empc313" target="blank">
        <FaGithub/>
        </a>
    </p>
   
  </div>
    
)
}