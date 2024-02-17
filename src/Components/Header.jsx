import { faBarcode, faBars, faClose, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState,useEffect } from 'react';
import ProjectCard from './Projects/ProjectCard';
import DevGif from '../assets/DevGif.gif'

function Header({projectRef,homeRef,detailsRef}) {
  const [navHide, setNav] =useState(false)
  const [theme, setTheme] = useState('dark');

  window.scrollTo({
    
    behavior: "smooth",
  });
  const projectHandler=()=>{
    projectRef.current?.scrollIntoView({behavior:'smooth'})
  }
  const homeHandler=()=>{
    window.scrollTo(0,0)

    // homeRef.current?.scrollIntoView({behavior:'smooth'})
  }
  const detailsHandler=()=>{
    detailsRef.current?.scrollIntoView({behavior:'smooth'})
  }

  useEffect(() => {

      if(theme=='light') {
        document.documentElement.classList.remove("dark")
        document.querySelector("body").style.backgroundColor="#FFFF";

      }else{
        document.documentElement.classList.add("dark")
        document.querySelector("body").style.backgroundColor="#000";
        
        // .querySelector(":root").style.backgroundColor="#FFFF"
      }
  },[theme]);  

  const themeHandler = ()=>{
      setTheme(theme==='dark'?'light':'dark');
  } 

  return (
    <div className="sticky top-0 z-20 flex w-full  items-start rounded-xl text-primary font-mono text-2xl bg-light border-b-2 border-secondary  dark:bg-accent  "
   >
    <nav className="w-full flex flex-col items-center justify-center
    md:flex md:flex-row md:justify-between  space-y-4
	 p-2 pl-3 ">
      <div className="flex items-center">
        <h1 className="text-black dark:text-white text-3xl font-bold">AD</h1>
        <span className="cursor-pointer text-gray-500 ml-2">Web Developer</span>
      </div>
      <div>
        <button className={`hidden md:block hover:scale-125 transition-transform duration-300 text-4xl ${theme==='dark' ?'text-primary':'text-secondary'}`}  onClick={themeHandler}>
      <FontAwesomeIcon  icon={faMoon}/></button>
      </div>
      <div className={`${!navHide?'hidden':''} md:flex transition duration-300`}>
        <ul className={`flex flex-col md:flex-row  space-x-4 pb-2  `}>
          <li className="ml-4 md:ml-0 cursor-pointer hover:text-secondary transition duration-300" onClick={homeHandler} >Home</li>
		      <li className=" cursor-pointer hover:text-secondary transition duration-300" onClick={detailsHandler}>Details</li>
          <li className="cursor-pointer hover:text-secondary transition duration-300" onClick={detailsHandler}>Resume</li>
          <li className="cursor-pointer hover:text-secondary transition duration-300" onClick={projectHandler}>Projects</li>
        </ul>
      </div>    
    </nav>
    <button className={`block md:hidden mt-4 mr-4 ${theme==='dark' ?'text-primary':'text-secondary'}`} onClick={themeHandler}>
      <FontAwesomeIcon icon={faMoon}/></button>
    <button className="block md:hidden mt-4 mr-4" onClick={()=>setNav((prev)=>!prev)}>
      {!navHide?<FontAwesomeIcon icon={faBars}/>:
      <FontAwesomeIcon icon={faClose}/>}</button>

      
    </div>
  );
}

export default Header;
