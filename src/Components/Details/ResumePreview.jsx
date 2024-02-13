import React, { useState } from 'react'
import { Document, Page } from 'react-pdf';
import Resume from '../../assets/Ayush Dimri Resume-2024.pdf'


function ResumePreview() {
	// AyushDimri-Portfolio\src\assets\Ayush Dimri Resume-2024.pdf

  const file='../../assets/Ayush Dimri Resume-2024.pdf'

  return (
	<div className="transition-transform duration-500">

	  <iframe
	  title="PDF Preview"
		src={Resume}
	  width="100%"
	  height="1060px"
	/>
  </div>
  )
}

export default ResumePreview