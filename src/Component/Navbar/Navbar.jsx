import React from 'react';
import "./Navbar.css";
import { FaHome } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { IoFingerPrintSharp } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { FaBlogger } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { IoSchoolSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Navbar = () => {
  const [open,setopen]=useState(false)
  const Navigate=useNavigate()
  function goto(params) {
    Navigate("/")
  }
  console.log(open);
  
  function abo(params) {
    Navigate("/About")
  }
  function proj(params){
    Navigate("/Project")
  }
  function edu(params) {
    Navigate("/Education")
  }
  function cont(params) {
    Navigate("/Contact")
  }
  function skil(params) {
    Navigate ("/Skills")
  }
  function opendiv(params) {
    setopen(!open)
  }
  return (
    <>
    <div className='main'>
      <div className='list'>
        <h2>Annamalai</h2>
        <h3>Front End Developer</h3>
        <GiHamburgerMenu className='burgericon' onClick={opendiv} />
        {/* <h4><LuMapPin className='list-icon' /> Rajapalayam</h4> */}
      </div>
      <div className={open?"navbar1":"navbar"}>
        <div className='nav-menu'>
          <button className='btn' onClick={goto} >
            <div className='btn-cont'>
            <FaHome className='list-icon' /> 
            <h4>Home</h4>
            </div>
          </button>
          <button className='btn' onClick={abo} >
            <div className='btn-cont'>
            <IoFingerPrintSharp className='list-icon' /> 
            <h4>About</h4>
            </div>
          </button>
          <button className='btn' onClick={proj} >
            <div  className='btn-cont'>
            <GrProjects className='list-icon' /> 
            <h4> Projects</h4>
            </div>
          </button> 
          <button className='btn' onClick={skil}>
             <div className='btn-cont'>
             <IoSchoolSharp  className='list-icon'/> 
             <h4> Skills </h4>
             </div>
          </button>
          <button className='btn'onClick={edu} >
             <div className='btn-cont'>
             <IoSchoolSharp  className='list-icon'/> 
             <h4> Education </h4>
             </div>
          </button>
          <button className='btn'onClick={cont} >
            <div className='btn-cont'>
            <IoMdContact className='list-icon' /> 
            <h4>Hire Me</h4>
            </div>
          </button>  
         </div> 
       </div>
     </div>
    </>
  )
}

export default Navbar
