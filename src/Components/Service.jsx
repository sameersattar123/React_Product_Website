import React from 'react'

const Service = ({title , num , description}) => {
  return (
    <div className=" flex flex-row md:flex-row">
    <div className=''>
   <button className="rounded-full m-2 py-2 px-4 bg-brightRed hover:brightRed text-white">{num}</button>
    </div>
  <div className=" md:flex-col md:space-y-6">
  <h1 className="font-bold text-2xl mt-2">{title}</h1>
  <p className='text-darkGrayishBlue'>{description}</p>
  </div>
  </div>
  )
}

export default Service
