import React from 'react'
// import proimge from "../../Assets/img2.png"


const Carts = (props) => {
  console.log(props);
  return (
    <> 
    <div className='carts'>
        <div className='cartings'>
            < img src={props.image} alt="" className='Img2' />
            <div className='cart-link'>
            <a href={props.link}>web page</a>
            </div>
        </div> 
    </div>
    {/* <div className='carts'>
        <div className='cartings'>
            < img src={props.image} alt="" className='Img2' />
            <div className='cart-link'>
            <a href="https://bank-beige-theta.vercel.app/">web page</a>
            </div>
            
        </div> 
    </div>
    <div className='carts'>
        <div className='cartings'>
            < img src={props.image} alt="" className='Img2' />
            <div className='cart-link'>
            <a href="https://annamalai-ecom.vercel.app/">web page</a>
            </div>
            
        </div> 
    </div> */}
    {/* <div className='carts'>
        <div className='cartings'>
            < img src={props.image} alt="" className='Img2' />
            <div className='cart-link'>
            <a href="https://annamalai-ecom.vercel.app/">web page</a>
            </div>
        </div> 
    </div> */}
    {/* <div className='nav'>
      <div className='navbar'>
      <div className='homeleft'>
        <Navbar/>
        </div>
      </div>
    </div> */}
    </>
  )
}

export default Carts
