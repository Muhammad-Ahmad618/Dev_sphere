import React from "react";
import Navbar from "../Components/Navbar";
import ServiceFeature from "../Components/ServiceFeature";
import CoverImage from "../Assets/image1.png";
import CoverImage2 from "../Assets/Cover2.png";
import ServiceFeature2 from "../Components/ServiceFeature2";
import ServiceFeature3 from "../Components/ServiceFeature3";
import ServiceCards from "../Components/ServiceCards";
import ExpertiseSection from "../Components/ExpertiseSection";
import CoverImage3 from "../Assets/cover3.png";
import CoverImage4 from "../Assets/Cover4.png";
import CoverImage5 from "../Assets/Cover5.png";
import Icon1 from "../Assets/icon5.png";
import Icon2 from "../Assets/icon6.png";
import CompanyLogo from "../Assets/companyLogo.png";
import CoreTechTab from "../Components/CoreTechTab";
import CompanyFeatureCard from "../Components/CompanyFeatureCard";
import Footer from "../Components/Footer";

export default function LandingPage() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Navbar />
      <div className="mx-7 sm:mx-14 xl:mx-24">
        <ServiceFeature
          Image={CoverImage}
          button1="Portfolio"
          button2="Contact Us"
          path1 = "/Portfolio"
          path2 = "/ContactUs"
        />
        <div>
          <ServiceFeature2
            Image={CoverImage2}
            button1="Who are We ?"
            button2="Portfolio"
            path1 = "/About"
          path2 = "/Portfolio"
          />
        </div>
        <div>
          <ServiceFeature3 Image={CoverImage5} />
        </div>
        <ServiceCards />
        <div className="text-white text-center md:text-start py-10">
          <h1 className="font-bold text-[2rem] sm:text-[2.2rem] lg:text-[2.5em] 2xl:text-[3rem]">Expertise</h1>
          <p className="text-xs sm:text-sm leading-5 xl:text-base">
            We use IT expertise to develop cutting-edge software solutions.
          </p>
        </div>
        <ExpertiseSection
          subHeading="Design & Development"
          headingP1="Custom"
          headingP2="App"
          headingP3="Solutions"
          body="We provide high-fidelity web software solutions that are tailored to your
          particular business processes. Using the most up-to-date SDLC tools and
          cross-platform technology, we develop, modernize, optimize, and grow your
          company website."
          list1="UI/UX Design & Prototyping"
          list2="eCommerce Solutions"
          list3="Native & Hybrid Apps"
          list4="MVP, PWA & CMS"
          list5="On-Demand Apps"
          list6="APIs Development"
          list7="Quality Assurance"
          list8="Deployment"
          Image={CoverImage3}
        />

        <ExpertiseSection
          subHeading="Web Design & Development"
          headingP1="Custom"
          headingP2="Website"
          headingP3="Solutions"
          body="We provide high-fidelity web software solutions that are tailored to your
particular business processes. Using the most up-to-date SDLC tools and
cross-platform technology, we develop, modernize, optimize, and grow your
company website."
          list1="UI/UX Design & Prototyping"
          list2="eCommerce Solutions (Top Rated)"
          list3="Business Portfolios and Websites"
          list4="Custom Web Apps"
          list5="On-Demand Website"
          list6="Security Analysis and Monitoring"
          list7="Continuous Support"
          Image={CoverImage4}
        />

        <div className="flex text-white py-10 flex-wrap md:flex-nowrap justify-center items-center md:justify-between">
          <div className="w-[30rem] sm:ml-0 text-center md:text-start">
            <h1 className="text-white font-bold text-[1.8rem] sm:text-[2.2rem] lg:text-[2.5em] 2xl:text-[3rem]">
              Our <span className="text-blue-500">Core</span>
              <br />
              Technologies
            </h1>
            <p className="text-xs sm:text-sm pt-3 leading-5 xl:text-base">
              DevSphere uses a variety of contemporary technologies for
              <br />
              efficient, scalable, and long-lasting customized software
              <br />
              development
            </p>
          </div>
          <div className="hidden md:block">
            <img src={CompanyLogo} alt="Sumizan Web" className="max-w-[100%] w-full" />
          </div>
        </div>

        <div>
          <CoreTechTab />
        </div>

        <div className="pt-20 text-center md:text-start">
          <h1 className="text-white font-bold text-[1.8rem] sm:text-[2.2rem] lg:text-[2.5em] 2xl:text-[3rem]">
            The{" "}
            <span className="text-blue-500">
              Ideal <br /> Engaement Mode
            </span>
            <br />
            Should Be <span className="text-blue-500">Choosen</span>
          </h1>
          <p className="text-white text-xs sm:text-sm leading-5 xl:text-base">
            Based on the project needs and your company specifications
          </p>
          <div className="flex flex-wrap sm:flex-nowrap justify-around sm:gap-3">
            <CompanyFeatureCard
              Icon={Icon1}
              heading="Dedicated Hiring"
              body="By choosing, employing, and managing highly qualified software developers and IT specialists on a long-term basis, you may create your own team. In order to achieve agile software development, this approach is meant to assist you in locating and enlisting specialized personnel who possess the necessary skills and cultural fit."
              label="Contact Expert"
              path = "/ContactUs"
            />

            <CompanyFeatureCard
              Icon={Icon2}
              heading="Fixed Cost"
              body="The greatest software development professionals are available to you through our project-based approach, which is often offered at a fixed fee. With the aid of this approach, a customer and our IT experts working on a particular project should be able to communicate effectively and quickly."
              label="Get a Quote"
              varient="transparent"
              path = "/ContactUs"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
