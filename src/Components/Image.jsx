import React from 'react'
import reactLogo from '../assets/MyPhoto.png'

function Image() {
  return (

	<div className= " flex items-center justify-between w-full h-auto text-white border-r-8 border-primary bg-accent mt-40">
	
		<h1 className= "  text-primary font-mono font-bold text-6xl" >Hi I am Ayush Dimri,<br></br> Looking For Front 
		End Developer Jobs</h1>
		<div className=' '>
		<img className="h-full hover:scale-110 transition duration-300  bg-accent" src ={reactLogo}/>

		
		</div>
	</div>
  )
}

export default Image