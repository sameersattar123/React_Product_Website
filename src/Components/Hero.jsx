import React from 'react'
import hero from "../images/illustration-intro (1).svg"

const Hero = () => {
  return (
    <>
    <div className="container flex flex-col-reverse items-center mx-auto md:flex-row">
        <div className="flex flex-col space-y-12 mb-32 md:w-1/2">
                <h1 className='font-bold text-center text-4xl md:text-5xl md:text-left max-w-md'> Bring everyone together to build better products</h1>
                <p className='font-center  text-darkGrayishBlue md:text-left max-w-sm text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem similique, adipisci alias labore, dolores iusto illum aliquam aperiam vitae totam deserunt cupiditate soluta beatae rerum aliquid eveniet. Minima, modi odio!</p>
                <div className="flex justify-center md:justify-start">
                <button className='pt-2 bg-brightRed hover:brightRed text-white px-6 p-2 mt-4 rounded-full  '>
            Get Started
        </button>
                </div>
        </div>
        <div className="md:w-1/2">
            <img src={hero} alt="" />
        </div>
    </div>
    </>
  )
}

export default Hero
