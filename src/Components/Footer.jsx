import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTerminal,faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faLinkedin,faGithub,  } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
	<>
	<div className="w-full flex  flex-col justify-around items-center h-64 mt-10  bg-light border-t-4 border-black dark:border-0 dark:bg-accent ">
		<div className="w-full h-2/3 flex flex-col  justify-around items-center md:flex md:flex-row space-y-4 space-x-10 ">
		<div className=" space-x-4 ">
		<button className=' dark:bg-black dark:text-primary text-primary border-primary font-sans font-bold hover:bg-primary hover:text-black border-2
		hover:border-2 hover:border-black p-2 px-4 rounded-2xl'><FontAwesomeIcon className='text-xl' icon={faInstagram}/></button>
		<button className=' dark:bg-black dark:text-primary text-primary border-primary font-sans font-bold hover:bg-primary hover:text-black border-2
		hover:border-2 hover:border-black p-2 px-4 rounded-2xl'><FontAwesomeIcon className='text-xl' icon={faLinkedin}/></button>
		<button className=' dark:bg-black dark:text-primary text-primary border-primary font-sans font-bold hover:bg-primary hover:text-black border-2
		hover:border-2 hover:border-black p-2 px-4 rounded-2xl'><FontAwesomeIcon className='text-xl' icon={faGithub}/></button>
		<button className=' dark:bg-black dark:text-primary text-primary border-primary font-sans font-bold hover:bg-primary hover:text-black border-2	
		hover:border-2 hover:border-black p-2 px-4 rounded-2xl'><FontAwesomeIcon className='text-xl' icon={faTerminal}/></button>
		</div>
		<div className='cursor-pointer text-2xl text-gray-500 ml-2 ' style={{align:"end"}}>
			<h1 className='cursor-pointer text-2xl text-gray-500 ml-2 font-bold'>Contact Details</h1>
			<ul className='cursor-pointer flex  flex-col mt-2 items-start'>
				<li><FontAwesomeIcon icon={faMailBulk}/><b>Email</b> :	aayush.dimri1@gmail.com</li>
				<li><FontAwesomeIcon icon={faPhone}/><b>Phone</b> : +917417446111</li>
			</ul>
		</div>
		</div>
		<div className="">
		<span className=" w-full h-1/3 cursor-pointer text-2xl text-gray-500 ml-2">© 2024 Ayush Dimri. All rights reserved.</span>
		</div>
	</div>
	</>
  )
}

export default Footer