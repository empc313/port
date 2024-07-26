import React from 'react';


export default function Home()  {

    return (
        <section className='flex gap-x-56 justify-start flex-column'>

          <div className='flex justify-center size-1/2'>
          <img className='rounded-full h-72 w-78' src={require('../assets/TEST.jpeg')}/>
          </div>

        <div className='text-[#778A35]  text-xl'>
          <h1>Welcome to my website!</h1>
        </div>


        </section>
      
      );
     
}