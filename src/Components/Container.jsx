import React, { useEffect, useState } from 'react'
import ProjectCard from './Projects/ProjectCard'
import Image from './Image'
import Header from './Header'
import Footer from './Footer'
import Details from './Details/Details'
import { useRef } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Container() {
	const projectRef= useRef();
	const homeRef= useRef();
	const detailsRef= useRef();

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
	<div className='flex flex-col md:w-9/12 w-full justify-center items-center m-auto scale-80	'>	
		<Header projectRef={projectRef}
				homeRef={homeRef}
				detailsRef={detailsRef}
		/>
		{/* <div className='' data-aos="fade-out"> */}
		<Image ref={homeRef} />
		{/* </div> */}
		<div className='z-10 relative dark:bg-black bg-white w-full h-auto '>
		<div data-aos="fade-up" > 
		<Details ref={detailsRef}/>
		</div>
		<div data-aos="fade-up"> 
		<ProjectCard ref={projectRef}/>
		</div>
		<div data-aos="fade-up">
		<Footer/>
		</div>
		</div>
	</div>
  )
}

export default Container