import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTerminal,faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faLinkedin,faGithub,  } from '@fortawesome/free-brands-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Footer() {
	useEffect(() => {
		AOS.init({
				duration:700,
				anchorPlacement:'center-bottom',
				easing: 'ease',
				mirror:true,
				once:true
			})
	},[])
  return (
	<>
	<div className="z-10 relative w-full flex  flex-col justify-around items-center h-64 mt-10  bg-light  dark:bg-accent ">
		<div className="w-full h-2/3 flex flex-col  justify-center items-center md:flex md:flex-row md:justify-around space-y-4 space-x-0 sm:space-x-10 md:space-x-8  ">
		<div className=" space-x-4  text-sm pt-10 sm:text-xl md:text-lg">
		<button className=' dark:bg-black dark:text-primary text-primary border-primary font-sans font-bold hover:bg-primary hover:text-black border-2
		hover:border-2 hover:border-black p-2 px-4 rounded-2xl' data-aos="fade-up"><FontAwesomeIcon className='' icon={faInstagram} /></button>
		<button className=' dark:bg-black dark:text-primary text-primary border-primary font-sans font-bold hover:bg-primary hover:text-black border-2
		hover:border-2 hover:border-black p-2 px-4 rounded-2xl' data-aos="fade-up"><FontAwesomeIcon className='' icon={faLinkedin} /></button>
		<button className=' dark:bg-black dark:text-primary text-primary border-primary font-sans font-bold hover:bg-primary hover:text-black border-2
		hover:border-2 hover:border-black p-2 px-4 rounded-2xl' data-aos="fade-up"><FontAwesomeIcon className='' icon={faGithub} /></button>
		<button className=' dark:bg-black dark:text-primary text-primary border-primary font-sans font-bold hover:bg-primary hover:text-black border-2	
		hover:border-2 hover:border-black p-2 px-4 rounded-2xl'  data-aos="fade-up"><FontAwesomeIcon className='' icon={faTerminal}/></button>
		</div>
		<div data-aos="fade-up" className='cursor-pointer text-lg sm:text-2xl md:text-xl dark:text-gray-500 	 dark:bg-black bg-light text-gray-500 p-2 md:p-10 rounded-lg shadow-2xl' style={{align:"end"}}>
			<h1 className='cursor-pointer   ml-2 font-bold'>Contact Details</h1>
			<ul className='cursor-pointer flex  flex-col mt-2 items-start'>
				<li><FontAwesomeIcon icon={faMailBulk}/><b>Email :<span className='text-secondary'>	aayush.dimri1@gmail.com</span></b></li>
				<li><FontAwesomeIcon icon={faPhone}/><b>Phone : <span className='text-secondary'>+917417446111</span></b></li>
			</ul>
		</div>
		</div>
		<div className="">
		<span className=" w-full h-1/3 cursor-pointer text-lg sm:text-2xl md:text-xl text-gray-500 ml-2">© 2024 <span className='text-secondary font-bold'>Ayush Dimri.</span> All rights reserved.</span>
		</div>
	</div>
	</>
  )
}

export default Footer