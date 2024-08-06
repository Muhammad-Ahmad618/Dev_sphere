import React from 'react'
import CardContent from './CardContent'

export default function ServiceCards() {
  return (
    <div className='flex flex-wrap justify-center my-10 gap-y-14 md:justify-evenly'>
      
      {CardContent.map((Content, Index) => (
        <div key={Index} className='border bg-blue-500 border-none rounded-[20px] max-w-[30rem] space-y-4 p-4 sm:p-8 mx-5 max-h-[22rem] hover:bg-blue-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:cursor-pointer md:max-w-[19rem] sm:m-0 '>
          <img src={Content.icon} alt="icon" />
          <h1 className='text-white text-lg font-bold'>{Content.heading}</h1>
          <p className='text-white text-xs leading-5 sm:text-base'>{Content.body}</p>
        </div>
      ))}
    </div>
  )
}
