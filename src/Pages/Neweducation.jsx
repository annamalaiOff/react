import React from 'react'
import Education from './Education'
import Navbar from '../Component/Navbar/Navbar'

function Neweducation() {
  return (
    <>
         <div className='home'>
        <div className='homeleft'>
            <Navbar/>
        </div>
        <div className='homeright'>
            <Education/>
        </div>
      </div>
    </>
  )
}

export default Neweducation
