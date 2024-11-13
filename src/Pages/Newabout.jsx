import React from 'react'
import About from './About'
import Navbar from '../Component/Navbar/Navbar'

const Newabout = () => {
  return (
    <>
      <div className='home'>
        <div className='homeleft'>
            <Navbar/>
        </div>
        <div className='homeright'>
            <About/>
        </div>
      </div>
    </>
  )
}

export default Newabout
