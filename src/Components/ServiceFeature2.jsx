import React from 'react'
import CustomBtn from './Button'
import { useNavigate } from 'react-router-dom';

export default function ServiceFeature2({Image, button1, button2, path1, path2}) {

  const navigate = useNavigate()

  const handleClick = (path) =>{
   navigate(path)
  }


  return (
    <>
   
   <div className='flex flex-wrap justify-center md:flex-nowrap items-center mt-28 space-y-10 md:justify-between'>
        <div className='text-center md:text-start max-w-[25rem] lg:max-w-[30rem]'>
           <h1 className='text-white font-bold text-[1.8rem] sm:text-[2.2rem] lg:text-[2.5em] 2xl:text-[3rem]'><span className='text-blue-500'>Digitalize</span>Your<br/>
           Business</h1>
           <p className='text-white text-sm pt-3 md:pt-0 leading-5 xl:text-base'>With agility, devotion, and high-quality IT services, we support
           businesses by offering custom and specialized business solutions.
           are top-notch.</p>
        </div>
        <div>
            <img src={Image} alt="Cover" className='max-w-[15rem] sm:max-w-[18rem] lg:max-w-[22rem] xl:max-w-[26rem] 2xl:max-w-[28rem] w-full' />
        </div>
    </div>
    <div className='flex space-x-5 py-10 justify-center md:justify-normal'>
     <CustomBtn label={button1} onClick={() => {handleClick(path1)}}/>
     <CustomBtn label={button2} varient="transparent" onClick={() => {handleClick(path2)}}/>
     </div>
     
    </>
  )
}
