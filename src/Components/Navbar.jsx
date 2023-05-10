import React from 'react'
import logo from "../images/logo.svg"

const Navbar = () => {
  return (
    <>
     <div className="container mx-auto p-6">
        <div className="flex justify-between items-center">
            <div className="pt-2">
                <img src={logo} alt="" />
            </div>
            <div className="hidden md:flex space-x-6">
                <a href="" className='hover:text-darkGrayishBlue font-bold text-1xl'>Pricing</a>
                <a href="" className='hover:text-darkGrayishBlue font-bold text-1xl'>Product</a>
                <a href="" className='hover:text-darkGrayishBlue font-bold text-1xl'>About Us</a>
                <a href="" className='hover:text-darkGrayishBlue font-bold text-1xl'>Careers</a>
                <a href="" className='hover:text-darkGrayishBlue font-bold text-1xl'>Community</a>
            </div>

        <button className='hidden  md:block pt-2 bg-brightRed hover:brightRed text-white px-6 p-2 rounded-full  '>
            Get Started
        </button>
        </div>
        </div> 
    </>
  )
}

export default Navbar
