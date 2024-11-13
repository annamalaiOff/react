import React from 'react'
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaRegAddressBook } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { VscTerminalLinux } from "react-icons/vsc";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdWavingHand } from "react-icons/md";
function Contact() {
  return (
    <>
    <div className='cont-proj'>
      <div class="spcontact2">
        <h1>Contact Information</h1>
      <div class="mycons123456">
      <h2>Annamalai G</h2>
      <div className='my-phone'>
      <IoPhonePortraitOutline className='nop' />
      <h3>8072730993</h3>
      </div>
        <div className='my-phone'> 
        <MdOutlineMailOutline className='nop' />
        <h3>annamalai19022002@gmail.com</h3>
        </div>
       <div className='my-phone'> 
       <FaRegAddressBook className='nop'  />
       <h3>136/1 Mariyamman Kcvil Street,T Dhaevathanam,Virudhunagar</h3>
       </div>
        <div className='my-phone'>
        <RiAccountPinCircleFill className='nop' />
        <h3>626145</h3>
        </div>
      </div>
       <div class="followus">
        <h2>Follow Us</h2>
        <div class="links12345">
        <a href="https://www.linkedin.com/feed/">

          <div class="myconicons">
          <FaLinkedin />
          <p>Linked in</p>
          </div>
          </a>

          <a href="https://github.com/annamalaiOff">
          <div class="myconicons">
          <FaGithubSquare />
          
          <p>Github</p>
          </div>
          </a>
          <div class="myconicons">
          <FaInstagram />
          <a href=""></a>
            <p>Instagram</p
            ></div> 
          <div class="myconicons">
          <VscTerminalLinux />
          <a href=""></a>
          <p>Naukri</p>
          </div>
          <div class="myconicons">
          <FaFacebook />
          <a href=""></a>
            <p>Facebook</p>
            </div>
          <div class="myconicons">
          <FaWhatsapp />
          <a href=""></a>
            <p>Watsapp</p>
            </div>
        </div>
        </div>
        </div>
      <div className='type-main'>
        <div className='main-hi'>
        <MdWavingHand className='main-hi-i' />
        <h1>Just say hello</h1>
        </div>
        <div className='type-right'>
          <div className='type-inp'>
            <div className='type-text'>
                <input className='inp-cont' type="text"placeholder='Name' />
                <input className='inp-cont' type="text"placeholder='Email' />
            </div>
           <div className='type-text'>
                <input className='inp-cont' type="text"placeholder='Phone' />
                <input className='inp-conts' type="text"placeholder='Message' />
           </div>
                <button className='type-t-i'>Submit</button>
           </div>     
        </div>
      </div>
       </div>
    </>
  )
}
export default Contact
