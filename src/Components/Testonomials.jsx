import React from 'react'
import image1 from "../images/avatar-richard.png"
import Textonomial from './Textonomial'

const Testonomials = () => {
  return (
      <div className="">
      <h1 className='font-bold mx-auto m-10 text-center text-3xl'>What's different about Manager?</h1>
            <div className='flex flex-col items-center md:flex-row md:justify-center gap-4 md:gap-4'>
                <Textonomial name={"Wahab"} image={image1}/>
                <Textonomial name={"Murtaza"} image={image1}/>
                <Textonomial name={"Sameer"} image={image1}/>
        </div>
      
    </div>
  )
}

export default Testonomials
