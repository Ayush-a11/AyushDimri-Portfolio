import { faDownload, faUsersViewfinder } from '@fortawesome/free-solid-svg-icons';
// import { Document, Page } from '@react-pdf-viewer/react-pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{forwardRef, useState} from 'react'
import resumePDF from '../../assets/Ayush_Resume.pdf'
// import { Document, Page } from 'react-pdf'
function Details({},ref) {
	const [section, setSection] =useState('Skill');
  return (
	<div ref={ref} className="rounded-xl text-primary font-mono text-2xl bg-light border-t-4 border-black dark:border-0 dark:bg-accent mt-8 transition-all duration-300 ">
		<div className='flex items-start justify-around pb-10 text-center'>
			<div onClick={()=>setSection('Skill')}className={`${section==='Skill'?'bg-primary text-accent border-4 -mt-1 border-accent':'bg-white bg-opacity-10'}  w-1/3 rounded-xl`}>
			<button  onClick={()=>setSection('Skill')}>Skill's </button>
			</div>
			<div onClick={()=>setSection('Exp')} className={`${section==='Exp'?'bg-primary text-accent border-4 -mt-1 border-accent':'bg-white bg-opacity-10'} w-1/3 rounded-xl`}>
			<button  onClick={()=>setSection('Exp')}>Experince </button>
			</div>
			<div onClick={()=>setSection('Edu')} className={`${section==='Edu'?'bg-primary text-accent border-4 -mt-1 border-accent':'bg-white bg-opacity-10'} w-1/3 rounded-xl`}>
			<button onClick={()=>setSection('Edu')}>Education </button>
			</div>
		</div>
		{/* skills */}
		{section === 'Skill' ?
		<div >
			<button className='m-2 rounded-xl bg-white text-black dark:bg-black dark:text-slate-500 p-2 font-mono font-bold'>C++</button>
			<button className='m-2 rounded-xl bg-white text-black dark:bg-black dark:text-slate-500 p-2 font-mono font-bold'>&nbsp;C&nbsp;</button>
			<button className='m-2 rounded-xl bg-white text-black dark:bg-black dark:text-slate-500 p-2 font-mono font-bold'>js</button>
			<button className='m-2 rounded-xl bg-white text-black dark:bg-black dark:text-slate-500 p-2 font-mono font-bold'>React-js</button>
			<button className='m-2 rounded-xl bg-white text-black dark:bg-black dark:text-slate-500 p-2 font-mono font-bold'>Tailwind</button>
			<button className='m-2 rounded-xl bg-white text-black dark:bg-black dark:text-slate-500 p-2 font-mono font-bold'>SQL</button>
			<button className='m-2 rounded-xl bg-white text-black dark:bg-black dark:text-slate-500 p-2 font-mono font-bold'>Redux</button>
			<button className='m-2 rounded-xl bg-white text-black dark:bg-black dark:text-slate-500 p-2 font-mono font-bold'>AppWrite</button>
			<button className='m-2 rounded-xl bg-white text-black dark:bg-black dark:text-slate-500 p-2 font-mono font-bold'>Firebase</button>
			<br></br>
			<button className="m-6 " >
			<FontAwesomeIcon icon={faDownload}/>Resume</button>
			<button className="" >
			<FontAwesomeIcon icon={faUsersViewfinder}/>Preview-Resume</button>

			<div>
				{/* <Document file={resumePDF} >
					<Page pageNumber={1}/>
				</Document> */}
			</div>	
		</div>
		:section=== 'Exp'?
		<div >
			<ul>
				<li>2022-Current - Price WaterHouse Copper's (Associate-2)</li>
				<li>Oracle Developer</li>
				<li>Tech Stack- PLSQL, VBCS, OIC, OPA,Node, ODA</li>
			</ul>
		</div>
		:
		<div >
			<ul className='flex flex-col items-center'>
				<li>2018-2022 B.Tech(Cse)- Graphic Era Deheradun Uttarakhand</li>
				<li>2017- XII(PCM)- Sri Guru Ram Rai Public School</li>
				<li>2015- X(PCM)-Sri Guru Ram Rai Public School</li>
			</ul>
		</div>
		}
		
	</div>
  )
}

export default forwardRef(Details)