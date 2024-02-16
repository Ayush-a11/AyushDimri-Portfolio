import React, { forwardRef, useState } from 'react'
import reactLogo from '../assets/MyPhoto.png'

function Image({},ref) {

	
  return (

	<div  ref={ref} className= {` sticky z-1 top-1  flex flex-col-reverse items-center justify-between md:flex md:flex-row md:text-5xl text-4xl w-full h-auto text-white border-r-8 border-primary bg-light dark:bg-accent mt-10
														`}>
		
		<div className= " w-2/3 flex justify-center">
		<h1 className= "text-center text-lg sm:4xl md:text-6xl dark:text-secondary text-accent font-mono font-bold " >Hi I am <span className= "text-primary">Ayush Dimri</span>,<br></br> Web <span className= "text-primary">Developer</span> 
		!</h1>
		</div>
		<div className=' '>
		<img className="h-full hover:scale-110 transition duration-300 mb-10 md:mb-0 bg-accent" src ={reactLogo}/>

		
		</div>
	</div>
  )
}

export default forwardRef(Image)