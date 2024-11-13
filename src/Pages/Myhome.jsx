import React from 'react'
import "./home.css"
import Navbar from '../Component/Navbar/Navbar'
import Slider from '../Component/Slider/Slider'

import Projects from './Projects'
import Education from './Education'
import Skills from './Skills'
import About from './About'
import Contact from './Contact'
// const Carts =(this.props)

const Myhome = () => {
  return (
    <>
       <div className='home'>
        <div className='homeleft'>
        <Navbar/>
        </div>
        <div className='homeright'>
            <Slider/>
            <Projects/>
            <About/>
            <Contact/>
            <Skills/>
            <Education/>
        </div>
     </div>
      
    </>
  )
}

export default Myhome
