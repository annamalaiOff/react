import React from "react";
import logo from "../../Assets/img.jpg";
import { FaRegMap } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import port from "../../Assets/port2.jpg";
import { FaSchool } from "react-icons/fa";
import { LuSchool } from "react-icons/lu";
import skill from "../../Assets/portfolio1.jpg";
import { IoMdSchool } from "react-icons/io";
import hire from "../../Assets/contact.png";
import { useNavigate } from "react-router-dom";

// import pro from '../../Assets/img.2'
function Slider() {
  const navigate=useNavigate();
  const viewAbout=(e)=>{navigate('/About')}
  const viewPortfolio=(e)=>{navigate('/Project')}
  const viewEducation=(e)=>{navigate('/Education')} 
  const viewContact=(e)=>{navigate('/Contact')} 
  const viewSkills=(e)=>{navigate('/Skills')} 
 
  return (
    <>
      <div className="informisson">
        <div className="imgs">
          <img src={logo} alt="" />
          <h4 className="img-h4"onClick={viewAbout}>About</h4>
        </div>

        <div className="my-data">
          <div className="portfole" onClick={viewPortfolio}>
            <div className="port-conts">
              <h4>buzz burst</h4>
            </div>
            <img src={port} alt="" className="port-img" />
            <h4>Projects</h4>
          </div>
          <div className="Educ">
            {/* <div className='port-cont'> */}
            <h4 className="port-conts">buzz burst</h4>
            {/* </div> */}
            <div className="Educ-i" onClick={viewEducation}>
              <LuSchool className="Educ-io" />
              <FaSchool className="Educ-io" />
              <IoMdSchool className="Educ-io" />
            </div>
            <h5>Education</h5>
          </div>
          <div className="Hire" onClick={viewContact}>
            <div className="port-conts">
              <h4>buzz burst</h4>
            </div>
            <img src={hire} alt="" />
            <h4>Hire Me</h4>
          </div>
          <div className="SKILLS" onClick={viewSkills}>
            <div className="port-conts">
              <h4>buzz burst</h4>
            </div>
            <img src={skill} alt=""/>
            <h5>Skills</h5>
          </div>
        </div>
        <div></div>
      </div>
      <div className="mypro"></div>
    </>
  );
}

export default Slider;
