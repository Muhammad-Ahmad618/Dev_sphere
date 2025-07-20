import React from 'react'
import Navbar from '../Components/Navbar'
import CoverService from '../Components/CoverService'
import CoverImage from '../Assets/Cover11.png'
import CustomButton from '../Components/Button'
import Footer from '../Components/Footer'

export default function ContactUs() {
  return (
    <div className='bg-gray-900 min-h-screen'>
        <Navbar/>
        <div className='mx-7 sm:mx-14 xl:mx-24'>
        <CoverService
        heading1="Contact Us"
        heading2="Our work performs as it sees"
        body="We create beautiful, interesting, and responsive web
        and mobile applications, If you have any questions or want to request a quotation please reach out to us, We'll be happy to assist you"
       image={CoverImage}
       ButtonLabel1="Contact Us"
       display="hide"
       />

       <form action="" className='flex flex-col items-center py-24'>
           <div className='space-x-1 flex flex-nowrap sm:space-x-4'>
           <input type="text" name="FirstName" placeholder='First Name' className='bg-transparent text-white border text-sm border-white rounded-md p-2 w-[10rem] sm:w-[19.5rem] custom-width:w-[25rem]'/>
           <input type="text" name="LastName" placeholder='Last Name' className='bg-transparent text-white border text-sm border-white rounded-md p-2 w-[10rem] sm:w-[19.5rem] custom-width:w-[25rem]'/>
           </div>
           <br />
           <input type="email" name="email" placeholder='Email Address' className='bg-transparent text-white border text-sm border-white rounded-md p-2 w-[20rem] sm:w-[40rem] min-[885px]:w-[51rem]' />
           <textarea name="Message" className='bg-transparent border border-white text-white rounded-md text-sm p-4 my-6 h-48 w-[20rem] sm:w-[40rem] min-[885px]:w-[51rem]' placeholder='Message'></textarea>
           <CustomButton label="Send Message"/>
       </form>
        </div>
        <Footer/>
    </div>
  )
}
