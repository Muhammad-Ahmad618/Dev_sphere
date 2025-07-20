import React from "react";
import Navbar from "../Components/Navbar";
import verifiedIcon from "../Assets/verified.png";
import contactIcon from "../Assets/contact.png";
import Button from "../Components/Button";
import Footer from "../Components/Footer"
import { useNavigate } from 'react-router-dom';

export default function About() {

  const navigate = useNavigate()

  const handleClick = (path) =>{
   navigate(path)
  }

  return (
    <div className="bg-gray-900 min-h-screen ">
      <Navbar />

      <div className="text-white mx-7 sm:mx-14 xl:mx-24">
        <div className="pt-28 pb-5">
          <h1 className="font-bold text-[1.8rem] sm:text-[2.2rem] lg:text-[2.5em] 2xl:text-[2.8rem]">
            About <span className="text-blue-500">Us</span>
          </h1>
          <h3 className="text-[1rem] sm:text-[1.2rem] lg:text-[1.6rem]">
            The Best DevSphere Technology with Five Years of Experience
          </h3>
          <p className="text-xs sm:text-sm leading-10 pt-5 md:pt-12">
            At DevSphere, we are the architects of technological innovation,
            crafting solutions that propel businesses into the digital age with
            seamless precision. Specializing in a diverse array of technical
            services, including software and app development, corporate-level IT
            support, Linux server management, graphics designing, web
            development, and e-commerce solutions, we are the cornerstone of
            your digital success. Our team comprises industry trailblazers, each
            equipped with a wealth of experience garnered from the forefront of
            tech giants such as Google, Yahoo, and beyond. With over a decade of
            hands-on expertise and a myriad of achievements under our belt, we
            stand poised to address your most intricate technological
            challenges. Whether you're a burgeoning startup or an established
            enterprise, we tailor our services to suit your unique needs,
            delivering cutting-edge solutions that redefine industry standards.
            With a steadfast commitment to excellence, innovation, and client
            satisfaction, we transcend conventional boundaries to transform your
            digital vision into reality. Partner with us today and embark on a
            journey of unparalleled technological prowess. Together, we'll
            navigate the digital landscape, empowering your business to thrive
            in an ever-evolving world.
          </p>
        </div>
        <div className="py-10 flex flex-wrap gap-5 lg:gap-x-14">
          <div className="flex items-center gap-4">
            <img src={verifiedIcon} alt="verified" className="w-[1.3rem] sm:w-[1.8rem] lg:w-[2.5rem]" />
            <h4 className="text-sm sm:text-base font-medium lg:text-lg">
              Best in Industry
            </h4>
          </div>
          <div className="flex items-center gap-4">
            <img src={verifiedIcon} alt="verified" className="w-[1.3rem] sm:w-[1.8rem] lg:w-[2.5rem]" />
            <h4 className="text-sm sm:text-base font-medium lg:text-lg">24/7 Support</h4>
          </div>
          <div className="flex items-center gap-4">
            <img src={verifiedIcon} alt="verified" className="w-[1.3rem] sm:w-[1.8rem] lg:w-[2.5rem]" />
            <h4 className="text-sm sm:text-base font-medium lg:text-lg">
              Professional Staff
            </h4>
          </div>
          <div className="flex items-center gap-4">
            <img src={verifiedIcon} alt="verified" className="w-[1.3rem] sm:w-[1.8rem] lg:w-[2.5rem]" />
            <h4 className="text-sm sm:text-base font-medium lg:text-lg">Fair Prices</h4>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <img src={contactIcon} alt="contact" className="w-[1.3rem] sm:w-[1.8rem] lg:w-[2.5rem]" />
          <div>
            <p className="text-xs sm:text-sm xl:text-base">Call to ask any questions</p>
            <h4 className="text-blue-500 text-sm sm:text-base font-medium lg:text-lg">+1347-350-0868</h4>
          </div>
        </div>

        <div className="my-16">
          <h1 className="font-bold text-[1.6rem] sm:text-[2rem] lg:text-[2.5em]">
            Rescue Your{" "}
            <span className="text-blue-500">Company's Growth</span>
          </h1>
          <p className="text-xs sm:text-sm leading-5 py-5 ">
            Let us know about your business plans on an introductory call, and
            we’ll lead the matching process.
          </p>
          <Button label="Hire a Pro" onClick={() => {handleClick("/ContactUs")}} />
        </div>
      </div>
    <Footer/>
    </div>
  );
}
