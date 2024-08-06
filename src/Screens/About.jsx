import React from "react";
import Navbar from "../LandingPageComponents/Navbar";
import verifiedIcon from "../Assets/verified.png";
import contactIcon from "../Assets/contact.png";
import Button from "../LandingPageComponents/Button";
import Footer from "../LandingPageComponents/Footer"

export default function About() {
  return (
    <div className="bg-gray-900 min-h-screen pb-3">
      <Navbar />

      <div className="text-white mx-7 sm:mx-14 xl:mx-24">
        <div className="pt-28 pb-5">
          <h1 className="text-[2rem] font-bold sm:text-[3rem]">
            About <span className="text-blue-500">Us</span>
          </h1>
          <h3 className="text-[1.3rem] sm:text-[1.8rem]">
            The Best DevSphere Technology with Five Years of Experience
          </h3>
          <p className="text-xs leading-5 pt-8 md:pt-16 sm:text-base">
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
            <img src={verifiedIcon} alt="verified" className="w-[1.3rem] sm:w-[2.5rem]" />
            <h4 className="text-sm font-medium sm:text-lg">
              Best in Industry
            </h4>
          </div>
          <div className="flex items-center gap-4">
            <img src={verifiedIcon} alt="verified" className="w-[1.3rem] sm:w-[2.5rem]" />
            <h4 className="text-sm font-medium sm:text-lg">24/7 Support</h4>
          </div>
          <div className="flex items-center gap-4">
            <img src={verifiedIcon} alt="verified" className="w-[1.3rem] sm:w-[2.5rem]" />
            <h4 className="text-sm font-medium sm:text-lg">
              Professional Staff
            </h4>
          </div>
          <div className="flex items-center gap-4">
            <img src={verifiedIcon} alt="verified" className="w-[1.3rem] sm:w-[2.5rem]" />
            <h4 className="text-sm font-medium sm:text-lg">Fair Prices</h4>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <img src={contactIcon} alt="contact" className="w-[1.3rem] sm:w-[2.5rem]" />
          <div>
            <p className="text-sm sm:text-base">Call to ask any questions</p>
            <h4 className="text-blue-500 font-medium text-xs sm:text-base">+1347-350-0868</h4>
          </div>
        </div>

        <div className="my-12">
          <h1 className="text-[2rem] font-bold sm:text-[3rem]">
            Rescue Your{" "}
            <span className="text-blue-500">Company's Growth</span>
          </h1>
          <p className="text-xs leading-5 sm:text-base pb-10">
            Let us know about your business plans on an introductory call, and
            we’ll lead the matching process.
          </p>
          <Button label="Hire a Pro" />
        </div>
      </div>
    <Footer/>
    </div>
  );
}
