import React from 'react';
import {FaGithub, FaLinkedin,} from "react-icons/fa"


export default function Footer(){
return(

    <section> 
     <div className="absolute inset-x-0 bottom-0">
    <div className='flex justify-center text-xl'>
        <div className='flex justify-between'>
      <a className='text-[#778A35] hover:text-[#315425]' href="https://www.linkedin.com/in/emma-cunningham-951b12152/?trk=opento_sprofile_details" target="blank">
        <FaLinkedin/>
      </a>
      
      <a className='text-[#778A35] hover:text-[#315425]' href="https://github.com/empc313" target="blank">
        <FaGithub/>
        </a>
        </div>
    </div>
    <div>
    <span className="flex justify-center text-xs font-thin">made by emma cunningham♡</span>
    </div>
   
  </div>



    </section>
    
)
}