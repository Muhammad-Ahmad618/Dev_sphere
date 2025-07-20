import React from "react";
import {Link} from 'react-router-dom'
import { TiArrowRight } from "react-icons/ti";

export default function Services_Offered() {
  const Assets = [
    {
      heading: "Web Development",
      body: "At SumizanWebs, we've got you covered for all your software needs in one place. With top-notch technical skills and a can-do attitude, we're here to make your vision a reality. Our team includes experts in design, development, testing, and promotion, ensuring you get the best service possible.",
      image: require("../Assets/Cover7.png"),
    },
    {
      heading: "App Development",
      body: "We supercharge your company with versatile iOS and Android apps. From creating simple to intricate mobile applications, we've got you covered from start to finish: designing, building, launching, and promoting your app. Our team collaborates closely with you to bring your ideas to life, ensuring your project is a success.",
      image: require("../Assets/Cover8.png"),
    },
    {
      heading: "UX / UI Design",
      body: "We supercharge your company with versatile iOS and Android apps. From creating simple to intricate mobile applications, we've got you covered from start to finish: designing, building, launching, and promoting your app. Our team collaborates closely with you to bring your ideas to life, ensuring your project is a success.",
      image: require("../Assets/Cover9.png"),
    },
    {
      heading: "DevOps Solutions",
      body: "We specialize in providing cutting-edge DevOps solutions tailored to optimize your website's performance and reliability. Our team offers expertise in leveraging leading cloud platforms such as AWS, GCP, and Azure, along with advanced tools like Kubernetes and Terraform, to streamline your development pipelines and automate infrastructure management. With a focus on efficiency and scalability, we empower your business to deliver high-quality software faster and more reliably than ever before.",
      image: require("../Assets/Cover10.png"),
    },
  ];

  return(
    <>  
    {Assets.map((assets, Index) => (
  <div key={Index} className='flex flex-wrap justify-center md:flex-nowrap items-center my-10 space-y-10 md:justify-between'>
    <div className="max-w-[45rem] w-full space-y-5 text-center md:text-start">
      <h1 className="font-bold text-[1.3rem] sm:text-[1.6rem] xl:text-[2rem]">{assets.heading}</h1>
      <p className="text-xs leading-5 sm:text-sm">{assets.body}</p>
      <Link to='/' className="text-blue-500 flex items-center text-sm justify-center md:justify-normal hover:underline"><TiArrowRight />More</Link>
    </div>
    <div className="text-center">
        <img src={assets.image} alt="WebIllustration" className='max-w-[14rem] sm:max-w-[18rem] lg:max-w-[22rem] xl:max-w-[26rem] 2xl:max-w-[28rem] w-full' />
    </div>
  </div>
  ))}
  </>
);
}
