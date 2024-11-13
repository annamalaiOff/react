import React from 'react'
import  photo from '../Assets/work3.jpg'
function About() {
  return (
    <>
<div className='personal' >
  <div className='personal-name'>
    <div>
    <h1 className='per-na'>Annamalai</h1>
    <h4 className='infrom'>Front End Developer</h4>
  </div>
  
      <img className='photo-about' src={photo} alt="" />
    
  </div>
  <div className='personal-name'>
      <p className='infrom'>Explain react development and 3 month of experience in Code purple academy. Excited to help your
company.Web Developement Sector. Looking for an opportunity to succeed in a challenging environment and
to own a position that enables me to develope & utilize my skills for the advancement of the organisation and
self.
      </p>
         <h4 className='per-na'>Name :Annamalai</h4> 
         <h4 className='per-na'>Email :annamalai19022002@gmail.com</h4>
         <h4 className='per-na'>Phone :8072730993</h4>
         <h4 className='per-na'>Date of birth :19/02/2003</h4>
         <h4 className='per-na'>Address :Rajapalayam</h4>
         <div className='resume-main'>
         <button>RESUME</button>
         <button>CONTACT</button>
         </div>
 </div> 
 </div>
    </>
  )
}



export default About;

