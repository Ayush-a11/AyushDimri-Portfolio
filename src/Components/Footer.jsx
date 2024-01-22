import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTerminal,faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faLinkedin,faGithub,  } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
	<>
	<div className="w-full flex-col justify-between items-end h-64 mt-10 bg-accent border-2 border-red">
		<div className="w-full h-2/3 flex justify-around items-center space-x-10 border-2 border-red">
		<div className=" space-x-4 border-2 border-red">
		<button className=' bg-black text-primary border-primary font-sans font-bold hover:bg-primary hover:text-black border-2
		hover:border-2 hover:border-black p-4 rounded-2xl'><FontAwesomeIcon className='text-4xl' icon={faInstagram}/></button>
		<button className=' bg-black text-primary border-primary font-sans font-bold hover:bg-primary hover:text-black border-2
		hover:border-2 hover:border-black p-4 rounded-2xl'><FontAwesomeIcon className='text-4xl' icon={faLinkedin}/></button>
		<button className=' bg-black text-primary border-primary font-sans font-bold hover:bg-primary hover:text-black border-2
		hover:border-2 hover:border-black p-4 rounded-2xl'><FontAwesomeIcon className='text-4xl' icon={faGithub}/></button>
		<button className=' bg-black text-primary border-primary font-sans font-bold hover:bg-primary hover:text-black border-2	
		hover:border-2 hover:border-black p-4 rounded-2xl'><FontAwesomeIcon className='text-4xl' icon={faTerminal}/></button>
		</div>
		<div className='cursor-pointer text-2xl text-gray-500 ml-2 border-2 border-red border-2 border-red' style={{align:"end"}}>
			<h1 className='cursor-pointer text-2xl text-gray-500 ml-2'>Contact Details</h1>
			<ul>
				<li><FontAwesomeIcon icon={faMailBulk}/>Email :	aayush.dimri1@gmail.com</li>
				<li><FontAwesomeIcon icon={faPhone}/>Phone : +917417446111</li>
			</ul>
		</div>
		</div>
		<div className="border-2 border-red">
		<span className=" w-full h-1/3 cursor-pointer text-2xl text-gray-500 ml-2">© 2024 Ayush Dimri. All rights reserved.</span>
		</div>
	</div>
	</>
  )
}

export default Footer