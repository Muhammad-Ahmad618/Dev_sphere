import React from 'react'
import CustomBtn from './Button'

export default function ServiceFeature2({Image, button1, button2}) {
  return (
    <>
   
   <div className='flex justify-center text-center flex-wrap items-center mt-28 space-y-10 min-[848px]:justify-between min-[848px]:text-start'>
        <div className=' max-w-[25rem] lg:max-w-[30rem]'>
           <h1 className='text-[2rem] text-white font-bold sm:text-[3rem]'><span className='text-blue-500'>Digitalize</span>Your<br/>
           Business</h1>
           <p className='text-white text-xs leading-5 sm:text-base'>With agility, devotion, and high-quality IT services, we support
           businesses by offering custom and specialized business solutions.
           are top-notch.</p>
        </div>
        <div>
            <img src={Image} alt="Cover" className='w-[16rem] sm:w-[20rem] md:w-[23rem] lg:w-[26rem] xl:w-[30rem]' />
        </div>
    </div>
    <div className='flex space-x-5 py-10 justify-center min-[848px]:justify-normal'>
     <CustomBtn label={button1}/>
     <CustomBtn label={button2} varient="transparent"/>
     </div>
     
    </>
  )
}
