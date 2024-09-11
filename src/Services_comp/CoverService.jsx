import React from 'react'
import CustomBtn from "../LandingPageComponents/Button";

export default function CoverService({heading1, heading2, body, image,  ButtonLabel1, ButtonLabel2, display}) {
  return (
    <>
    <div className='flex flex-wrap justify-center md:flex-nowrap items-center mt-28 space-y-10 md:justify-between'>
          <div className="space-y-6 max-w-[25rem] text-center md:text-start">
            <h1
              Business
              className=" text-blue-500 font-bold text-[1.8rem] sm:text-[2.2rem] lg:text-[2.5em] 2xl:text-[2.8rem]"
            >
              {heading1}
            </h1>
            <h3 className=" text-white text-[1rem] sm:text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.8rem]">
              {heading2}
            </h3>
            <p className="text-white text-xs sm:text-sm">
              {body}
            </p>
          </div>
          <div className="py-10 min-[885px]:py-0">
            <img
              src={image}
              alt="Cover"
              className='max-w-[15rem] sm:max-w-[18rem] lg:max-w-[22rem] xl:max-w-[26rem] 2xl:max-w-[28rem] w-full'
            />
          </div>
        </div>
        <div className='flex space-x-5 py-5 justify-center md:justify-normal'>
          <CustomBtn label={ButtonLabel1} />
          <CustomBtn label={ButtonLabel2} varient="transparent" varient2={display} />
        </div>
    </>
  )
}
