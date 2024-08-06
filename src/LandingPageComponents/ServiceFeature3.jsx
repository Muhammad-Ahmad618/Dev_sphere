import React from 'react'

export default function ServiceFeature3({Image}) {
  return (
    <>
      <div className='flex justify-center text-center flex-wrap items-center mt-28 space-y-10 min-[930px]:justify-between min-[930px]:text-start'>
        <div className='w-[30rem]'>
           <h3 className='text-[1.3rem] text-white sm:text-[1.8rem]'>Our Services</h3>
           <h1 className='text-[2rem] text-white font-bold sm:text-[3rem]'><span className='text-blue-500'> DevOps </span>Technology<br/>
           For your <span className='text-blue-500'>Successful</span><br/>Business</h1>
        </div>
        <div>
            <img src={Image} alt="Cover" className='w-[20rem] md:w-[23rem] lg:w-[26rem] xl:w-[30rem]' />
        </div>
    </div>
     </>
  )
}
