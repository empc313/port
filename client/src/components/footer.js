import React from 'react';
import {FaGithub, FaLinkedin,} from "react-icons/fa"


export default function Footer(){
return(
     <div className="absolute inset-x-0 bottom-0">
    <p className='flex justify-center text-xl'>
        <div className='flex justify-between'>
      <a className='text-[#7e9342]' href="https://www.linkedin.com/in/emma-cunningham-951b12152/?trk=opento_sprofile_details" target="blank">
        <FaLinkedin/>
      </a>
      
      <a className='text-[#7e9342]' href="https://github.com/empc313" target="blank">
        <FaGithub/>
        </a>
        </div>
    </p>
   
  </div>
    
)
}