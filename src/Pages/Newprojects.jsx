import React from 'react'
import Projects from './Projects'
import Navbar from '../Component/Navbar/Navbar'

function Newprojects() {
  return (
    <>
       <div className='home'>
        <div className='homeleft'>
            <Navbar/>
        </div>
        <div className='homeright'>
            <Projects/>
        </div>
      </div>
    </>
  )
}

export default Newprojects
