import React from 'react'

export default function ServiceFeature3({Image}) {
  return (
    <>
      <div className='flex flex-wrap justify-center md:flex-nowrap items-center my-24 space-y-10 md:justify-between'>
        <div className='text-center md:text-start w-[30rem]'>
           <h3 className='text-white text-[1rem] sm:text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.8rem]'>Our Services</h3>
           <h1 className='text-white font-bold text-[1.8rem] sm:text-[2.2rem] lg:text-[2.5em] 2xl:text-[3rem]'><span className='text-blue-500'> DevOps </span>Technology<br/>
           For your <span className='text-blue-500'>Successful</span><br/>Business</h1>
        </div>
        <div>
            <img src={Image} alt="Cover" className='max-w-[15rem] sm:max-w-[18rem] lg:max-w-[22rem] xl:max-w-[26rem] 2xl:max-w-[28rem] w-full' />
        </div>
    </div>
     </>
  )
}
