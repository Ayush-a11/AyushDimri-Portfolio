import React, { forwardRef, useEffect, useState } from 'react'
import reactLogo from '../assets/MyPhoto.png'


function Image({},ref) {
	
	
  return (

	<div  data-aos="fade-out" ref={ref} className= {` sticky z-1 top-28   flex flex-col-reverse items-center justify-between md:flex md:flex-row md:text-5xl text-4xl w-full h-auto text-white border-r-8 border-primary bg-light dark:bg-accent mt-16
														`}>
		
		<div className= " w-2/3 flex justify-center">
			
		<h1 className= "text-center text-lg sm:4xl md:text-6xl dark:text-secondary text-accent font-mono font-bold " >Hi I am <span className= "text-primary">Ayush Dimri</span>,<br></br> Web <span className= "text-primary">Developer</span> 
		!</h1>
		</div>
		<div className=' '>
		<img className="h-full md:hover:scale-110 hover:scale-100  transition duration-300 mb-10 md:mb-0 bg-accent" src ={reactLogo}/>

		
		</div>
	</div>
  )
}

export default forwardRef(Image)