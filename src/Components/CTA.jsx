import React from 'react'

const CTA = () => {
  return (
    <>
         <div className="h-full bg-brightRed  mt-5 flex flex-col items-center  mx-auto md:flex-row justify-between md:p-12 py-24 px-6 md:space-y-0">
        <h2 className='font-bold text-4xl md:text-left text-center md:text-5xl space-y-12 text-white md:max-w-xl'>Simplify how your team works
         today.</h2>
        <div className="flex justify-center md:justify-end">
        <button className="pt-2 text-brightRed hover:brightRed bg-white px-6 p-2 m-5 rounded-full mx-auto  w-[200px]">Get Started</button>
        </div>
      </div>
    </>
    
  )
}

export default CTA
