import React from 'react';


export default function Home(){
    return (
        <body className='flex gap-x-56 justify-start flex-column'>

          <div className='size-1/2'>
          <img className='rounded-full' src={require('../assets/testPhoto.jpeg')}/>
          </div>

        <div className='text-[#7e9342]'>
          <h1>Welcome!</h1>
        </div>


        </body>
      
      );
     
}