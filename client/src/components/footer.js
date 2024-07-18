import React from 'react';
import {FaGithub, FaLinkedin,} from "react-icons/fa"


export default function Footer(){
return(
  <footer className='content has-text-centered'>
    <div>
    <footer> 
          <div className="content has-text-centered">
    <p>
      <a href="" target="blank">
        <FaLinkedin/>
      </a>
      <a href="https://github.com/empc313" target="blank">
        <FaGithub/>
        </a>

    </p>
   
  </div>
    </footer>
    </div>
 
  </footer>
)
}