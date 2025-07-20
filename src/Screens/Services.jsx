import React from "react";
import Navbar from "../Components/Navbar";
import Cover6 from "../Assets/Cover6.png";
import Footer from "../Components/Footer"
import ServicesOffered from "../Components/Services_Offered";
import CoverService from "../Components/CoverService";

export default function Services() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <div className="text-white mx-7 sm:mx-14 xl:mx-24">
         <CoverService 
         heading1="Services" 
         heading2="What We Do ?"
         body="With our top-notch IT services, you may create your own success
              stories.See below for a list of our primary areas of expertise."
        image={Cover6}
        ButtonLabel1="Free Quote"
        ButtonLabel2="Contact Us"
          path1 = "/ContactUs"
          path2 = "/ContactUs"
        />

        <div className="py-16 sm:py-28 text-center lg:text-start">
          <h1 className="text-[1.8rem] sm:text-[2.2rem] lg:text-[2.5em] 2xl:text-[2.8rem] font-bold pb-5">
            Our <span className="text-blue-500">Services</span>
          </h1>
          <p className="text-xs text-white leading-5 sm:text-sm">
            All of your software development needs are met under one roof at
            DevSphere thanks to our top-notch technical expertise and
            proactive attitude. With the appropriate mix of designers,<br/>
            developers, QA engineers, and marketers, we can provide the best for
            you.
          </p>
        </div>
        <ServicesOffered/>
      </div>
      <Footer/>
    </div>
  );
}
