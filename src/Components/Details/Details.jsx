import { faDownload, faEye, faFileExport, faGear, faLaptopCode, faUsersViewfinder, faWind } from '@fortawesome/free-solid-svg-icons';
// import { Document, Page } from '@react-pdf-viewer/react-pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{forwardRef, useState,useEffect} from 'react'
import { Document, Page } from 'react-pdf';
import ResumePreview from './ResumePreview';
import { faBootstrap, faCss3, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { Document, Page } from 'react-pdf'
function Details({},ref) {
	const [section, setSection] =useState('Skill');
	const [resumePreview, setResumePreview] = useState(false)

	const downloadPdf =()=>{

		const pdfUrl='../../assets/Ayush Dimri Resume-2024.pdf'

		const anchor= document.createElement('a');
		anchor.href=pdfUrl;
		anchor.download='Ayush Dimri Resume-2024.pdf';
		document.body.appendChild(anchor);
		anchor.click();
		document.body.removeChild(anchor);
	}

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
	<div ref={ref} className=" z-2 relative top-10 rounded-xl text-primary font-mono text-2xl bg-light  dark:bg-accent mt-8 transition-all duration-300 "
	style={{marginTop:"0"}}>
		<h1 className= " text-primary font-mono font-bold md:text-4xl sm:text-3xl text-2xl text-center mb-10" >Details</h1>
		<div className='flex items-start justify-around pb-10 text-center'>
			<div data-aos="fade-up" onClick={()=>setSection('Skill')}className={`${section==='Skill'?'bg-primary text-accent	  border-accent':'bg-slate-100 dark:bg-white dark:bg-opacity-10 '} md:text-lg sm:text-lg text-base shadow-xl ml-1 w-1/3 rounded-xl`}>
			<button  onClick={()=>setSection('Skill')}>Skill's </button>
			</div>
			<div data-aos="fade-up" onClick={()=>setSection('Exp')} className={`${section==='Exp'?'bg-primary text-accent   border-accent':'bg-slate-100 dark:bg-white dark:bg-opacity-10 '}md:text-lg sm:text-lg text-base shadow-xl ml-1 w-1/3 rounded-xl`}>
			<button  onClick={()=>setSection('Exp')}>Experince </button>
			</div>
			<div data-aos="fade-up" onClick={()=>setSection('Edu')} className={`${section==='Edu'?'bg-primary text-accent   border-accent':'bg-slate-100 dark:bg-white dark:bg-opacity-10 '} md:text-lg sm:text-lg text-base shadow-xl ml-1 w-1/3 rounded-xl`}>
			<button onClick={()=>setSection('Edu')}>Education </button>
			</div>
		</div>
		{/* skills */}
		<div className="flex justify-center p-4" >
		{section === 'Skill' ?
		<div className=" flex flex-col w-full justify-center items-left bg-slate-100 dark:bg-black  bg-opacity-55 shadow-xl  rounded-xl p-10 text-sm md:text-2xl ">
			
			<div className='flex  flex-wrap '>
			<h2 className="mt-4 text-left" data-aos="fade-up" >Front-End:</h2>
			<button className='mt-2 text-xs md:text-xl m-2 rounded-xl bg-white text-black dark:bg-black dark:text-slate-500 p-2 font-mono font-bold' data-aos="fade-left"><FontAwesomeIcon className="text-blue-500 font-bold" icon={faReact}/>React</button>
			<button className='mt-2 text-xs md:text-xl m-2 rounded-xl bg-white text-black dark:bg-black dark:text-slate-500 p-2 font-mono font-bold' data-aos="fade-left"><FontAwesomeIcon className="text-orange-500 font-bold" icon={faHtml5}/>HTML</button>
			<button className='mt-2 text-xs md:text-xl m-2 rounded-xl bg-white text-black dark:bg-black dark:text-slate-500 p-2 font-mono font-bold' data-aos="fade-left"><FontAwesomeIcon className="text-blue-500 font-bold" icon={faCss3}/>CSS</button>
			<button className='mt-2 text-xs md:text-xl m-2 rounded-xl bg-white text-black dark:bg-black dark:text-slate-500 p-2 font-mono font-bold' data-aos="fade-left"><FontAwesomeIcon className="text-yellow-500 font-bold" icon={faJs}/>jS</button>
			<button className='mt-2 text-xs md:text-xl m-2 rounded-xl bg-white text-black dark:bg-black dark:text-slate-500 p-2 font-mono font-bold' data-aos="fade-left"><FontAwesomeIcon className="text-blue-600 font-bold" icon={faWind}/>TailWind</button>
			<button className='mt-2 text-xs md:text-xl m-2 rounded-xl bg-white text-black dark:bg-black dark:text-slate-500 p-2 font-mono font-bold' data-aos="fade-left"><FontAwesomeIcon className="text-purple-800 font-bold" icon={faBootstrap}/>BS</button>
			</div>

			<div className='flex flex-wrap' >
			<h2 className="mt-4 text-left" data-aos="fade-up" >Back-End:</h2>

			<button className='mt-2 text-xs md:text-xl m-2 rounded-xl bg-white text-black dark:bg-black dark:text-slate-500 p-2 font-mono font-bold' data-aos="fade-left" >AppWrite</button>
			<button className='mt-2 text-xs md:text-xl m-2 rounded-xl bg-white text-black dark:bg-black dark:text-slate-500 p-2 font-mono font-bold' data-aos="fade-left" >Firebase</button>
			<button className='mt-2 text-xs md:text-xl m-2 rounded-xl bg-white text-black dark:bg-black dark:text-slate-500 p-2 font-mono font-bold' data-aos="fade-left" >SQL</button>
			<button className='mt-2 text-xs md:text-xl m-2 rounded-xl bg-white text-black dark:bg-black dark:text-slate-500 p-2 font-mono font-bold' data-aos="fade-left" >PLSQL</button>

			</div>
			
			<div className='flex flex-wrap'>
			<h2 className="mt-4" data-aos="fade-up">Programming:</h2>

			<button className='mt-2 text-xs md:text-xl m-2 rounded-xl bg-white text-black dark:bg-black dark:text-slate-500 p-2 font-mono font-bold' data-aos="fade-left">C++</button>
			<button className='mt-2 text-xs md:text-xl m-2 rounded-xl bg-white text-black dark:bg-black dark:text-slate-500 p-2 font-mono font-bold' data-aos="fade-left">&nbsp;C&nbsp;</button>
		
		</div>
		<div className='flex justify-center' >
			<button data-aos="fade-left" className="m-6 hover:scale-105 " onClick={downloadPdf} > 
			<FontAwesomeIcon icon={faDownload}/>Resume</button>
			<button data-aos="fade-right" className="hover:scale-105" onClick={()=>setResumePreview((prev)=>!prev)}> 
			<FontAwesomeIcon icon={faEye}/>Preview-Resume</button>

				
		</div>
		<div>
			{resumePreview &&	<ResumePreview/>}
		</div>
		</div>
		:section=== 'Exp'?
		<div >
				<div className=" flex flex-col text-left  md:text-2xl  sm:text-xl  text-sm bg-slate-100 dark:bg-black  bg-opacity-55 shadow-xl  rounded-xl p-10">
			<ul>
				<li data-aos="fade-up" className='text-gray-500 font-bold'>[2022 - Current] - Price WaterHouse Copper's (Associate2)</li>
				<li data-aos="fade-up">Oracle Developer <FontAwesomeIcon icon={faLaptopCode}/></li>
				<li data-aos="fade-up">Tech Stack <FontAwesomeIcon icon={faGear}/><span className="text-secondary" data-aos="fade-left">  PLSQL  VBCS  OIC  OPA  Node  ODA </span></li>
			</ul>
			</div>
		</div>
		:
		<div >
			<div className=" flex flex-col text-lef tmd:text-2xl  sm:text-xl  text-xs bg-slate-100 dark:bg-black  bg-opacity-55 shadow-xl  rounded-xl p-10">
			<ul className='flex flex-col items-start' data-aos="fade-up">
				<li className='text-gray-500 font-bold'> 2018-2022 B.Tech(Cse)-<span className="text-secondary"> Graphic Era Deheradun Uttarakhand</span> </li>
				<li className='text-gray-500 font-bold'>2017- XII(PCM)- <span className="text-secondary">Sri Guru Ram Rai Public School</span></li>
				<li className='text-gray-500 font-bold'>2015- X(PCM)- <span className="text-secondary">Sri Guru Ram Rai Public School</span></li>
			</ul>
			</div>
		</div>
		}
		
	</div>
	</div>
  )
}

export default forwardRef(Details)