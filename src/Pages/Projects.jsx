import React from 'react'
import Carts from '../Reusaple/Carts/Carts';
import men1 from '../Assets/Screenshot 2024-07-31 212852.png'
import img2 from '../Assets/img2.png'

function Projects() {


  return (
    <> 
        
        {/* <Navbar/> */}
        
        <div className='cart-pro'>
          <div className='cart-img'>
           <Carts 
              image={img2} 
              link ="https://annamalai-ecom.vercel.app"
           />
          </div> 
          <div className='cart-img'>
           <Carts
              image={men1}
              link ="https://bank-beige-theta.vercel.app/"
           />
          </div>
          <div className='cart-img'>
           <Carts
              image={men1}
              link =""
          />
          </div>
          <div className='cart-img'>
           <Carts
              image={men1}
              link =""
           /> 
          </div>
         </div>
    </>
  )
}

export default Projects
