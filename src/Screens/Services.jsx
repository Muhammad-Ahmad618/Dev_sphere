import React from "react";
import Navbar from "../LandingPageComponents/Navbar";
import Cover6 from "../Assets/Cover6.png";
import Footer from "../LandingPageComponents/Footer"
import ServicesOffered from "../Services_comp/Services_Offered";
import CoverService from "../Services_comp/CoverService";

export default function Services() {
  return (
    <div className="bg-gray-900 min-h-screen pb-3">
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
        />

        <div className="py-28 text-center lg:text-start">
          <h1 className="text-[2rem] font-bold sm:text-[3rem]">
            Our <span className="text-blue-500">Services</span>
          </h1>
          <p className="text-xs text-white leading-5 sm:text-base">
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
