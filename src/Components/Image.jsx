import React from 'react'
import reactLogo from '../assets/MyPhoto.png'

function Image() {
  return (

	<div className= " flex items-center justify-between w-full h-96 text-white border-2 border-primary ">
	
		<h1 className= " text-2xl text-primary font-mono font-bold" >hi I am Ayush Dimri,<br></br> Looking For Front 
		End Developer Jobs</h1>
		<div className='h-96'>
		<img className="h-96  filter  p-5" src ={reactLogo}/>
		</div>
	</div>
  )
}

export default Image