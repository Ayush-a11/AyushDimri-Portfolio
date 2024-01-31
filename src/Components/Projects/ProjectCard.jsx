import { faMobileRetro } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { forwardRef, useState } from 'react'
import blogPosting from '../../assets/BlogPosting.png'
import todoimg from '../../assets/TodoApp.png'
import ecommerce from '../../assets/Ecommerce.png'
function ProjectCard({},ref) {
	const [more,setMore] = useState(true);
	const projects=[
		{
			Image:blogPosting,
			Name: 'BlogPosting',
			Url: '/h',
			more: true
		},
		{
			Image:ecommerce,
			Name: 'E-Commerce',
			Url: 'http://blog',
			more: true
		},
		{
			Image:todoimg,
			Name: 'Todo',
			Url: 'http://blog',
			more: !more
		},
		{
			Image:'/img',
			Name: 'Let\'\s chat',
			Url: 'http://blog',
			more: !more
		}
		
		
	];
  return (
	<div ref={ref} className=" border-8 w-full flex flex-col justify-center items-center bg-light  border-t-4 border-blue-500 dark:border-0  dark:bg-accent mt-10">
		<h1 className= " text-primary font-mono font-bold text-5xl" >Projects</h1>
	<div className="flex">
	<div className="mt-5 mb-5 grid grid-cols-1 md:grid-cols-2 w-full  h-auto ">
		{projects.map(items=>(
			items.more &&
			<div key={items.Name} className="mt-10 w-11/12 h-96 card rounded-lg  bg-white bg-opacity-5 overflow-hidden shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-transform duration-300">
				<div className="relative group">
				<img
					className="card-image rounded-lg object-cover"
					src={items.Image}
					alt={items.Name}
					style={{width:"600px", height:"500px"}}
				/>
				<div className="absolute inset-0 bg-primary opacity-0 flex justify-center items-center text-6xl text-accent transition-opacity group-hover:opacity-80">
					{items.Name}
				</div>
   			 </div>
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

