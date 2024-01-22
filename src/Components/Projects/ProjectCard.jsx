import { faMobileRetro } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

function ProjectCard() {
	const [more,setMore] = useState(false);
	const projects=[
		{
			Image:'/img',
			Name: 'BlogPosting',
			Url: 'http://blog',
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
	<div className="w-full bg-accent mt-10">
		<h1 className= " text-primary font-mono font-bold text-5xl" >Projects</h1>
	<div className="w-full grid grid-cols-2 items-center justify-center">
		{projects.map(items=>(
			<div key={items.Name} className="w-2/4 card rounded-lg bg-slate-400 overflow-hidden shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-transform duration-300">
				<img className="card-image rounded-lg w-64 h-48 object-cover" src={items.Image}/>
				<h1>{items.Name}</h1>
			</div>
		))
		}
	</div>
	<button className='w-1/12 h-14 text-center bg-black text-primary border-primary font-sans font-bold hover:bg-primary hover:text-black border-2	
		hover:border-2 hover:border-black p-4 rounded-2xl' onClick={()=>setMore((prev)=>!prev)}>
		<FontAwesomeIcon className='text-xl' icon={faMobileRetro}/>&nbsp;{more?'More':'Less'}</button>	
	</div>
  )
}

export default ProjectCard