import { faMobileRetro } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { forwardRef, useState } from 'react'
import blogPosting from '../../assets/BlogPosting.png'
function ProjectCard({},ref) {
	const [more,setMore] = useState(false);
	const projects=[
		{
			Image:blogPosting,
			Name: 'BlogPosting',
			Url: '/h',
			more: true
		},
		{
			Image:'/img',
			Name: 'Todo',
			Url: 'http://blog',
			more: true
		}
	];
  return (
	<div ref={ref} className=" w-full flex flex-col justify-center items-center bg-light  border-t-4 border-black dark:border-0  dark:bg-accent mt-10">
		<h1 className= " text-primary font-mono font-bold text-5xl" >Projects</h1>
	<div className="flex">
	<div className="mt-5 mb-5  grid grid-cols-1 md:grid-cols-2 md:space-x-12 space-x-0">
		{projects.map(items=>(
			<div key={items.Name} className="mt-10 w-full h-auto card rounded-lg bg-white bg-opacity-5 overflow-hidden shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-transform duration-300">
				<img className="card-image rounded-lg w-full h-96 object-cover" src={items.Image}/>
				<h1 className="text-primary font-mono font-bold text-center text-2xl pt-10">{items.Name}</h1>
			</div>
		))
		}
	</div>
	</div>
	<button className='w-1/12 h-10 text-center dark:bg-black dark:text-primary mb-4 text-primary border-primary font-sans font-bold hover:bg-primary hover:text-black border-2	
		hover:border-2 mt-10 hover:border-black rounded-2xl' onClick={()=>setMore((prev)=>!prev)}>
		{more?'More':'Less'}</button>	
	</div>
  )
}

export default forwardRef(ProjectCard)

