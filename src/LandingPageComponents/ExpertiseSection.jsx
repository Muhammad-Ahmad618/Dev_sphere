import React from 'react'
import CustomBtn from './Button'

export default function ExpertiseSection(props) {
  return (
    <div className='flex justify-center items-center flex-wrap-reverse py-10 min-[930px]:justify-between'>

     <div className='text-white py-10 max-w-[30rem] text-center flex flex-col items-center min-[930px]:text-start min-[930px]:block'>
        <h3 className='text-lg sm:text-2xl'>{props.subHeading}</h3>
        <h1 className='text-[2rem] font-bold sm:text-[3rem]'>{props.headingP1} <span className='text-blue-500'>{props.headingP2}</span><br/>{props.headingP3}</h1>
        <p className='py-2 text-xs leading-5 sm:text-base'>{props.body}</p>
        <ul className='list-none py-8 pl-5 space-y-4 font-semibold min-[930px]:list-disc text-xs sm:text-base'>
            {props.list1 && <li>{props.list1}</li>}
            {props.list2 && <li>{props.list2}</li>}
            {props.list3 && <li>{props.list3}</li>}
            {props.list4 && <li>{props.list4}</li>}
            {props.list5 && <li>{props.list5}</li>}
            {props.list6 && <li>{props.list6}</li>}
            {props.list7 && <li>{props.list7}</li>}
            {props.list8 && <li>{props.list8}</li>}
        </ul>
    <CustomBtn label="More Detail"/>
    </div>
      
      <div>
        <img src={props.Image} alt="CoverImage" className='w-[16rem] sm:w-[20rem] md:w-[23rem] lg:w-[26rem] xl:w-[30rem]' />
      </div>

    </div>
  )
}
