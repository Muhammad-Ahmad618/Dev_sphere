import React from 'react'
import Navbar from '../LandingPageComponents/Navbar'
import CoverService from '../Services_comp/CoverService'
import CoverImage from '../Assets/Cover11.png'
import CustomButton from '../LandingPageComponents/Button'
import Footer from '../LandingPageComponents/Footer'

export default function ContactUs() {
  return (
    <div className='bg-gray-900 min-h-screen'>
        <Navbar/>
        <div className='mx-7 sm:mx-14 xl:mx-24'>
        <CoverService
        heading1="Contact Us"
        heading2="Our work performs as it sees"
        body="We create beautiful, interesting, and responsive web
        and mobile applications"
       image={CoverImage}
       ButtonLabel1="Contact Us"
       display="hide"
       />

       <form action="" className='flex flex-col items-center py-24'>
           <div className='space-x-1 flex flex-nowrap sm:space-x-4'>
           <input type="text" name="FirstName" placeholder='First Name' className='bg-transparent border text-sm border-white rounded-md p-2 w-[10rem] sm:w-[19.5rem] custom-width:w-[25rem]'/>
           <input type="text" name="LastName" placeholder='Last Name' className='bg-transparent border text-sm border-white rounded-md p-2 w-[10rem] sm:w-[19.5rem] custom-width:w-[25rem]'/>
           </div>
           <br />
           <input type="email" name="email" placeholder='Email Address' className='bg-transparent border text-sm border-white rounded-md p-2 w-[20rem] sm:w-[40rem] min-[885px]:w-[51rem]' />
           <textarea name="Message" className='bg-transparent border border-white rounded-md text-sm text-gray-400 p-4 my-6 h-48 w-[20rem] sm:w-[40rem] min-[885px]:w-[51rem]'>Message</textarea>
           <CustomButton label="Send Message"/>
       </form>

       <div className='text-white space-y-6 sm:py-10'>
        <h1 className='text-[2rem] font-bold sm:text-[3rem]'>Rescue Your <span className='text-blue-500'>Company's Growth</span></h1>
        <p className='text-xs leading-5 sm:text-base'>Let us know about your business plans on an introductory call, and we’ll lead the matching process.</p>
        <CustomButton label="Hire a Pro"/>
       </div>
        </div>
        <Footer/>
    </div>
  )
}
