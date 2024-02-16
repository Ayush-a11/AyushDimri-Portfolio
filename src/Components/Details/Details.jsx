import { faDownload, faUsersViewfinder } from '@fortawesome/free-solid-svg-icons';
// import { Document, Page } from '@react-pdf-viewer/react-pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{forwardRef, useState} from 'react'
import { Document, Page } from 'react-pdf';
import ResumePreview from './ResumePreview';
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


  return (
	<div ref={ref} className=" z-2 relative top-10 rounded-xl text-primary font-mono text-2xl bg-light border-t-4 border-black dark:border-0 dark:bg-accent mt-8 transition-all duration-300 "
	style={{marginTop:"0"}}>
		<h1 className= " text-primary font-mono font-bold text-5xl text-center mb-10" >Details</h1>
		<div className='flex items-start justify-around pb-10 text-center'>
			<div onClick={()=>setSection('Skill')}className={`${section==='Skill'?'bg-primary text-accent	 -mt-1 border-accent':'bg-slate-100 dark:bg-white dark:bg-opacity-10 '} text-lg shadow-xl ml-1 w-1/3 rounded-xl`}>
			<button  onClick={()=>setSection('Skill')}>Skill's </button>
			</div>
			<div onClick={()=>setSection('Exp')} className={`${section==='Exp'?'bg-primary text-accent  -mt-1 border-accent':'bg-slate-100 dark:bg-white dark:bg-opacity-10 '}text-lg shadow-xl ml-1 w-1/3 rounded-xl`}>
			<button  onClick={()=>setSection('Exp')}>Experince </button>
			</div>
			<div onClick={()=>setSection('Edu')} className={`${section==='Edu'?'bg-primary text-accent  -mt-1 border-accent':'bg-slate-100 dark:bg-white dark:bg-opacity-10 '} text-lg shadow-xl ml-1 w-1/3 rounded-xl`}>
			<button onClick={()=>setSection('Edu')}>Education </button>
			</div>
		</div>
		{/* skills */}
		<div className="flex justify-center p-4">
		{section === 'Skill' ?
		<div className=" flex flex-col text-left bg-slate-100 dark:bg-black  bg-opacity-55 shadow-xl  rounded-xl p-10 text-sm md:text-2xl ">
			
			<div className='flex justify-center'>
			<h2 className="mt-4 text-left">Front-End:</h2>
			<button className='mt-2 text-xs md:text-xl m-2 rounded-xl bg-white text-black dark:bg-black dark:text-slate-500 p-2 font-mono font-bold'>React-js</button>
			<button className='mt-2 text-xs md:text-xl m-2 rounded-xl bg-white text-black dark:bg-black dark:text-slate-500 p-2 font-mono font-bold'>HTML</button>
			<button className='mt-2 text-xs md:text-xl m-2 rounded-xl bg-white text-black dark:bg-black dark:text-slate-500 p-2 font-mono font-bold'>CSS</button>
			<button className='mt-2 text-xs md:text-xl m-2 rounded-xl bg-white text-black dark:bg-black dark:text-slate-500 p-2 font-mono font-bold'>javaScript</button>
			<button className='mt-2 text-xs md:text-xl m-2 rounded-xl bg-white text-black dark:bg-black dark:text-slate-500 p-2 font-mono font-bold'>TailWind Css</button>
			<button className='mt-2 text-xs md:text-xl m-2 rounded-xl bg-white text-black dark:bg-black dark:text-slate-500 p-2 font-mono font-bold'>BootStrap</button>
			</div>

			<div className='flex'>
			<h2 className="mt-4 text-left">Back-End:</h2>

			<button className='mt-2 text-xs md:text-xl m-2 rounded-xl bg-white text-black dark:bg-black dark:text-slate-500 p-2 font-mono font-bold'>AppWrite</button>
			<button className='mt-2 text-xs md:text-xl m-2 rounded-xl bg-white text-black dark:bg-black dark:text-slate-500 p-2 font-mono font-bold'>Firebase</button>
			<button className='mt-2 text-xs md:text-xl m-2 rounded-xl bg-white text-black dark:bg-black dark:text-slate-500 p-2 font-mono font-bold'>SQL</button>
			<button className='mt-2 text-xs md:text-xl m-2 rounded-xl bg-white text-black dark:bg-black dark:text-slate-500 p-2 font-mono font-bold'>PLSQL</button>

			</div>
			
			<div className='flex'>
			<h2 className="mt-4">Programing:</h2>

			<button className='mt-2 text-xs md:text-xl m-2 rounded-xl bg-white text-black dark:bg-black dark:text-slate-500 p-2 font-mono font-bold'>C++</button>
			<button className='mt-2 text-xs md:text-xl m-2 rounded-xl bg-white text-black dark:bg-black dark:text-slate-500 p-2 font-mono font-bold'>&nbsp;C&nbsp;</button>
		
		</div>
		<div className='flex justify-center'>
			<button className="m-6 " onClick={downloadPdf} > 
			<FontAwesomeIcon icon={faDownload}/>Resume</button>
			<button className="" onClick={()=>setResumePreview((prev)=>!prev)}> 
			<FontAwesomeIcon icon={faUsersViewfinder}/>Preview-Resume</button>

				
		</div>
		<div>
			{resumePreview &&	<ResumePreview/>}
		</div>
		</div>
		:section=== 'Exp'?
		<div >
				<div className=" flex flex-col text-left text-lg md:text-2xl bg-slate-100 dark:bg-black  bg-opacity-55 shadow-xl  rounded-xl p-10">
			<ul>
				<li>2022-Current - Price WaterHouse Copper's (Associate-2)</li>
				<li>Oracle Developer</li>
				<li>Tech Stack- PLSQL, VBCS, OIC, OPA,Node, ODA</li>
			</ul>
			</div>
		</div>
		:
		<div >
			<div className=" flex flex-col text-left text-lg md:text-2xl bg-slate-100 dark:bg-black  bg-opacity-55 shadow-xl  rounded-xl p-10">
			<ul className='flex flex-col items-start'>
				<li>2018-2022 B.Tech(Cse)- Graphic Era Deheradun Uttarakhand</li>
				<li>2017- XII(PCM)- Sri Guru Ram Rai Public School</li>
				<li>2015- X(PCM)-Sri Guru Ram Rai Public School</li>
			</ul>
			</div>
		</div>
		}
		
	</div>
	</div>
  )
}

export default forwardRef(Details)