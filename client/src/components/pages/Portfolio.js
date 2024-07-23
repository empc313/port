import React from 'react';

export default function Portfolio(){
    
    return ( 
    <body className='text-[#7e9342]'> 
      <h1 className='flex justify-center text-xl'>Portfolio</h1>
      <section className=' grid grid-cols-3 gap-6'>

      <div className=" min-[500px] rounded overflow-hidden shadow-md bg-white shadow-2xl hover:shadow-[#c0dfd3] transition-all border border-whitebg">
      <a src="URL" href="https://github.com/empc313/weather-page">Weather App</a>
      </div>   

      <div className=' min-[500px] rounded overflow-hidden shadow-md bg-white shadow-2xl hover:shadow-[#c0dfd3] transition-all border border-whitebg'>
        <a src='URL' href=''> Website 2</a>
        </div>    

      <div className=" min-[500px] rounded overflow-hidden shadow-md bg-white shadow-2xl hover:shadow-[#c0dfd3] transition-all border border-whitebg">
        <a  src="URL" href ="https://github.com/reverofsuturb/CloudMinnow">Ecommerce Website</a>
        </div>

        <div className=' min-[500px] rounded overflow-hidden shadow-md bg-white shadow-2xl hover:shadow-[#c0dfd3] transition-all border border-whitebg'>
        <a src='URL' href=''> Website 3</a>
        </div>  

        <div className=' min-[500px] rounded overflow-hidden shadow-md bg-white shadow-2xl hover:shadow-[#c0dfd3] transition-all border border-whitebg'>
        <a src='URL' href=''> Website 4</a>
        </div>  

        <div className=' min-[500px] rounded overflow-hidden shadow-md bg-white shadow-2xl hover:shadow-[#c0dfd3] transition-all border border-whitebg'>
        <a src='URL' href=''> Website 5</a>
        </div> 

      </section>
    </body>
      ); 
}