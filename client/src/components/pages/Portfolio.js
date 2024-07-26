import React from 'react';


export default function Portfolio(){
    
    return ( 
    <section className='text-[#315425]'> 
    <div className='flex justify-center my-10'>
      <h1 className='rounded-br border-[#D1E2C4] border-b-4 drop-shadow-md flex justify-center text-2xl w-48 my-4'>Portfolio</h1>
    </div>

      <div className=' grid grid-cols-3 gap-6 h-36 text-center'>
      <div className=' min-[500px] rounded overflow-hidden shadow-md bg-white shadow-2xl hover:shadow-[#D1E2C4] transition-all border border-whitebg'>
        <a src='URL' href=''>MERN Stack</a>
        </div>  

      <div className="min-[500px] rounded overflow-hidden shadow-md bg-white shadow-2xl hover:shadow-[#D1E2C4] transition-all border border-whitebg">
      <a src="URL" href="https://empc313.github.io/weather-page/">Weather Application</a>
      </div>   

      <div className=" min-[500px] rounded overflow-hidden shadow-md bg-white shadow-2xl hover:shadow-[#D1E2C4] transition-all border border-whitebg">
        <a  src="URL" href ="https://enigmatic-falls-71377.herokuapp.com/">Ecommerce Website</a>
        </div>

        <div className=' min-[500px] rounded overflow-hidden shadow-md bg-white shadow-2xl hover:shadow-[#D1E2C4] transition-all border border-whitebg'>
        <a src='URL' href='https://empc313.github.io/password-gen/'>Password Generator</a>
        </div>  

        <div className=' min-[500px] rounded overflow-hidden shadow-md bg-white shadow-2xl hover:shadow-[#D1E2C4] transition-all border border-whitebg'>
        <a src='URL' href=''> Website 4</a>
        </div>  

        <div className=' min-[500px] rounded overflow-hidden shadow-md bg-white shadow-2xl hover:shadow-[#D1E2C4] transition-all border border-whitebg'>
        <a src='URL' href=''> Website 5</a>
        </div> 
      </div>



    </section>
      ); 
}