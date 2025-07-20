import React from 'react'
import Logo from "../Assets/DevSphere.png";

export default function Footer() {
  return (
    <>
       <div className="flex mt-16 gap-5 min-h-[20rem] flex-wrap lg:flex-nowrap">
        <div className="border border-blue-500 rounded-t-md p-5 space-y-5 max-w-full m-5 sm:p-10 lg:max-w-[30rem] lg:m-0">
          <img src={Logo} alt="DevSphere" className='max-w-[12rem] sm:max-w-[16rem] w-full' />
          <p className="text-white text-xs sm:text-sm">
            DevSphere excels in software development and data analytics,
            driving digital transformation with innovative solutions across
            diverse industries worldwide.
            <br />
            Have a game-changing app idea but don't know where to begin? We're
            the app alchemists at DevSphere. We turn your vision into
            cutting-edge mobile apps that will take the world by storm. Let's
            brainstorm and build something amazing together!
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-300 w-full rounded-t-md flex flex-col justify-around">
          <div className="flex p-10 sm:justify-evenly gap-7 flex-wrap justify-start">
            <div className="text-white space-y-5">
              <h2 className="text-base font-semibold sm:text-xl">Get In Touch</h2>

              <ul className="space-y-2 text-xs sm:text-sm">
                <li>P.O. Box 11350 Alexandria, VA, 22312</li>
                <li>info@DevSphere.com</li>
                <li>support@DevSphere.com</li>
                <li>+1 347-350-0868</li>
              </ul>
            </div>

            <div className="text-white space-y-5">
              <h2 className="text-base font-semibold sm:text-xl">Quick Links</h2>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>Home</li>
                <li>About Us</li>
                <li>Our Services</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div className="text-white space-y-5 block">
              <h2 className="text-xl font-semibold">Popular Links</h2>
              <ul className="space-y-2 text-sm">
                <li>Term and Conditions</li>
                <li>Privact Policy</li>
              </ul>
            </div>
          </div>
          <div className="text-center">
          <a href='/' className="text-white text-xs sm:text-sm cursor-pointer hover:underline" >&copy;2025 <span>DevSphere</span>. All Rights Reserved</a>
          </div>
        </div>
       
      </div>
    </>
  )
}
