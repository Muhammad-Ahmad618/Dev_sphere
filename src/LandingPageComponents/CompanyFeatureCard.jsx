import React from 'react'
import CustomBtn from './Button'

export default function CompanyFeatureCard(props) {
  return (
    <>

        <div className='p-5 border border-blue-600 rounded-[20px] max-w-[40rem] text-white space-y-4 my-5 sm:my-10 sm:p-10'>
            <img src={props.Icon} alt="Dedicated Hiring" className='m-auto w-[4rem] md:m-0 md:w-[6rem] ' />
            <h1 className='text-xl font-semibold text-blue-500'>{props.heading}</h1>
            <p className='text-xs leading-5 sm:text-sm'>{props.body}</p>
            <div className='flex justify-center md:block'>
            <CustomBtn label={props.label} varient={props.varient}/>
            </div>
        </div>
        <div>

        </div>
      
    </>
  )
}

