import React from 'react'
import Skills from './Skills'
import Navbar from '../Component/Navbar/Navbar'
function Newskills() {
  return (
    <>
      <div className='home'>
        <div className='homeleft'>
            <Navbar/>
        </div>
        <div className='homeright'>
            <Skills/>
        </div>
      </div>
    </>
  )
}

export default Newskills
