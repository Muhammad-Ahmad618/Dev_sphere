import React from 'react'
import CustomBtn from './Button'

export default function ExpertiseSection(props) {
  return (
    <div className='flex flex-wrap-reverse justify-center md:flex-nowrap items-center space-y-10 md:justify-between'>

     <div className='text-white py-10 max-w-[100%]  md:max-w-[50%] w-full text-center flex flex-col flex-wrap md:text-start'>
        <h3 className='text-white text-[1rem] sm:text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.8rem]'>{props.subHeading}</h3>
        <h1 className='text-white font-bold  text-[1.8rem] sm:text-[2.2rem] lg:text-[2.5em] 2xl:text-[3rem]'>{props.headingP1} <span className='text-blue-500'>{props.headingP2}</span><br/>{props.headingP3}</h1>
        <p className='py-2 text-xs sm:text-sm leading-5 xl:text-base'>{props.body}</p>
        <ul className='list-none py-8 pl-5 space-y-4 font-semibold md:list-disc text-xs sm:text-sm xl:text-base'>
            {props.list1 && <li>{props.list1}</li>}
            {props.list2 && <li>{props.list2}</li>}
            {props.list3 && <li>{props.list3}</li>}
            {props.list4 && <li>{props.list4}</li>}
            {props.list5 && <li>{props.list5}</li>}
            {props.list6 && <li>{props.list6}</li>}
            {props.list7 && <li>{props.list7}</li>}
            {props.list8 && <li>{props.list8}</li>}
        </ul>
    <div className='ml-5 flex justify-center md:justify-normal'>     
    <CustomBtn label="More Detail"/>
    </div>
    </div>
      
      <div>
        <img src={props.Image} alt="CoverImage" className='max-w-[18rem] lg:max-w-[22rem] xl:max-w-[26rem] 2xl:max-w-[28rem] w-full' />
      </div>

    </div>
  )
}
