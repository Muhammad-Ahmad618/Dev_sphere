import React from 'react'
import CustomBtn from "../LandingPageComponents/Button";

export default function CoverService({heading1, heading2, body, image,  ButtonLabel1, ButtonLabel2, display}) {
  return (
    <>
    <div className="flex justify-center text-center flex-wrap min-h-[20rem] items-center mt-28 min-[880px]:justify-between min-[880px]:text-start">
          <div className="space-y-6 max-w-[25rem]">
            <h1
              Business
              className="text-[2rem] text-white font-bold sm:text-[3rem]"
            >
              {heading1}
            </h1>
            <h3 className="text-[1.3rem] text-white sm:text-[1.8rem]">
              {heading2}
            </h3>
            <p className="text-white text-xs leading-5 sm:text-base">
              {body}
            </p>
          </div>
          <div className="py-10 min-[885px]:py-0">
            <img
              src={image}
              alt="Cover"
              className="w-[16rem] sm:w-[20rem] md:w-[23rem] lg:w-[26rem] xl:w-[30rem]"
            />
          </div>
        </div>
        <div className="flex space-x-5 justify-center min-[880px]:justify-normal ">
          <CustomBtn label={ButtonLabel1} />
          <CustomBtn label={ButtonLabel2} varient="transparent" varient2={display} />
        </div>
    </>
  )
}
