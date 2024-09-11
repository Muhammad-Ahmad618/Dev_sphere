import React from 'react'
import CustomBtn from './Button'

export default function ServiceFeature({Image, button1, button2}) {
  return (
    <>
   
    <div className='flex flex-wrap justify-center md:flex-nowrap items-center mt-28 space-y-10 md:justify-between'>
        <div className=' text-center md:text-start max-w-[25rem] lg:max-w-[30rem]'>
           <h3 className=' text-white text-[1rem] sm:text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.8rem]'>We Design and Improve</h3>
           <h1 className=' text-white font-bold  text-[1.8rem] sm:text-[2.2rem] lg:text-[2.5em] 2xl:text-[3rem]'>Smart <span className='text-blue-500'>Web Solution </span>
           and <span className='text-blue-500'>Build</span> Them</h1>
           <p className='text-white text-xs sm:text-sm  pt-3 md:pt-0 leading-5 xl:text-base'>Our site design, development, and marketing services
           are top-notch.</p>
        </div>
        <div>
            <img src={Image} alt="Cover" className='max-w-[15rem] sm:max-w-[18rem] lg:max-w-[22rem] xl:max-w-[26rem] 2xl:max-w-[28rem] w-full' />
        </div>
    </div>
    <div className='flex space-x-5 py-10 justify-center md:justify-normal'>
     <CustomBtn label={button1}/>
     <CustomBtn label={button2} varient="transparent"/>
     </div>
     
    </>
  )
}
