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
	<div className='inline-flex flex-col w-full '>	
		<Header projectRef={projectRef}
				homeRef={homeRef}
				detailsRef={detailsRef}
		/>
		{/* <div className='' data-aos="fade-out"> */}
		<Image ref={homeRef} />
		{/* </div> */}
		<div className='z-10 relative bg-black w-full h-auto '>
		<div data-aos="fade-in" > 
		<Details ref={detailsRef}/>
		</div>
		<div data-aos="fade-in"> 
		<ProjectCard ref={projectRef}/>
		</div>
		<div data-aos="fade-in">
		<Footer/>
		</div>
		</div>
	</div>
  )
}

export default Container