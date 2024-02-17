import { faMobileRetro } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { forwardRef, useEffect, useState } from 'react'
import blogPosting from '../../assets/BlogPosting.png'
import letsChat from '../../assets/letsChat.png'
import todoimg from '../../assets/TodoApp.png'
import ecommerce from '../../assets/Ecommerce.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

function ProjectCard({},ref) {
	const [more,setMore] = useState(true);
	console.log(letsChat);
	console.log(blogPosting);

	const projects=[
		{
			Image: blogPosting,
			Name: 'BlogPosting',
			Url: 'https://blog-posting-react-app.vercel.app/',
			more: true
		},
		{
			Image: letsChat,
			Name: 'Let\'\s chat',
			Url: 'https://lets-chat-app-beige.vercel.app/',
			more: true
		},
		{
			Image:todoimg,
			Name: 'Todo',
			Url: 'https://todo-app-tau-six-84.vercel.app',
			more: !more
		}
		
		
	];
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
	<div ref={ref} className="z-2 relative  w-full flex flex-col justify-center items-center bg-light  rounded-lg  dark:bg-accent mt-20">
		<h1 className= " text-primary font-mono font-bold md:text-4xl sm:text-3xl text-2xl" data-aos="fade-up">Projects</h1>
		{/* <img src= {letsChat} className="w-full h-96" ></img>	 */}
	<div className="flex">
	<div className="mt-5 mb-5 grid grid-cols-1 md:grid-cols-2 w-full place-items-center h-auto ">
		{projects.map(items=>(
			items.more &&
			<div onClick={()=>window.open(items.Url)} 
			key={items.Name} className="cursor-pointer mt-10 w-11/12  card rounded-lg  bg-white bg-opacity-5 overflow-hidden shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-transform duration-300">
				<div className="relative group" >
				<img  data-aos="fade-up"
					className="card-image rounded-lg object-cover sm:w-128 sm:h-80 w-100 h-60"
					src={items.Image}
					alt={items.Name}
					// style={{minWidth:"300px", minHeight:"350px", maxHeight:"500px", maxWidth:"550px"}}
				/>
				<div className="absolute inset-0 opacity-0 group-hover:opacity-95 bg-primary flex flex-col items-center justify-center  font-bold font-mono  text-accent transition-opacity ">
					<div className="h-1/2 flex flex-col items-center justify-center text-xl sm:text-5xl md:8xl">
					<h1>{items.Name}</h1>
					<h1 className="text-sm text-center">{items.Url}</h1>
					</div>
					<div className="w-full h-1/2 dark:bg-accent bg-white">

					</div>
				</div>
   			 </div>
			</div>
		))
		}
	</div>
	</div>
	<button data-aos="fade-up" className='w-2/12 md:w-1/12 h-10 text-center dark:bg-black dark:text-primary mb-4 text-primary border-primary font-sans font-bold hover:bg-primary hover:text-black border-2	
		hover:border-2 mt-10 hover:border-black rounded-2xl' onClick={()=>setMore((prev)=>!prev)}>
		{more?'More':'Less'}</button>	
	</div>
  )
}

export default forwardRef(ProjectCard)

