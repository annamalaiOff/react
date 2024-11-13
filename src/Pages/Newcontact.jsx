import React from 'react'
import Contact from './Contact'
import Navbar from '../Component/Navbar/Navbar'

function Newcontact() {
  return (
    <>
        <div className='home'>
        <div className='homeleft'>
            <Navbar/>
        </div>
        <div className='homeright'>
            <Contact/>
        </div>
      </div> 
    </>
  )
}

export default Newcontact
