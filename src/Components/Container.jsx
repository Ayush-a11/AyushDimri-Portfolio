import React from 'react'
import ProjectCard from './Projects/ProjectCard'
import Image from './Image'
import Header from './Header'
import Footer from './Footer'
import Details from './Details/Details'
import { useRef } from 'react'
function Container() {
	const projectRef= useRef();
	const homeRef= useRef();
	const detailsRef= useRef();

  return (
	<div>	
		<Header projectRef={projectRef}
				homeRef={homeRef}
				detailsRef={detailsRef}
		/>
		<Image ref={homeRef} />
		<Details ref={detailsRef}/>
		<ProjectCard ref={projectRef}/>
		<Footer/>
	</div>
  )
}

export default Container