import React from 'react';


export default function Home(){
    return (
        <body className='flex gap-x-56 justify-start flex-column'>

          <div className='flex justify-center size-1/2'>
          <img className='rounded-full h-72 w-78' src={require('../assets/TEST.jpeg')}/>
          </div>

        <div className='text-[#7e9342]'>
          <h1>Welcome to my website!</h1>
        </div>


        </body>
      
      );
     
}