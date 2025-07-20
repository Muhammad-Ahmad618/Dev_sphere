import React , {useState} from "react";
import Navbar from "../Components/Navbar";
import CoverService from "../Components/CoverService";
import CoverImage from "../Assets/Cover12.png";
import WebImage1 from "../Assets/Web/Rectangle 46.png";
import WebImage2 from "../Assets/Web/Rectangle 47.png";
import WebImage3 from "../Assets/Web/Rectangle 48.png";
import WebImage4 from "../Assets/Web/Rectangle 49.png";
import AppImage1 from "../Assets/App/Rectangle 72.png";
import AppImage2 from "../Assets/App/Rectangle 73.png";
import AppImage3 from "../Assets/App/Rectangle 74.png";
import AppImage4 from "../Assets/App/Rectangle 75.png";
import UxImage1 from "../Assets/UIUX/Rectangle 81.png";
import UxImage2 from "../Assets/UIUX/Rectangle 82.png";
import UxImage3 from "../Assets/UIUX/Rectangle 83.png";
import UxImage4 from "../Assets/UIUX/Rectangle 84.png";
import DevOpsImage1 from "../Assets/DevOps/Rectangle 90.png";
import DevOpsImage2 from "../Assets/DevOps/Rectangle 91.png";
import DevOpsImage3 from "../Assets/DevOps/Rectangle 92.png";
import DevOpsImage4 from "../Assets/DevOps/Rectangle 93.png";
import Footer from "../Components/Footer";
import { useNavigate } from 'react-router-dom';

export default function Portfolio() {

  const [tab, setTab] = useState(1)
   
  const toggleTab = (id)=>{

     setTab(id)

  }           

  
  const navigate = useNavigate()

  const handleClick = (path) =>{
   navigate(path)
  }
  
  return (
    <div className="bg-gray-900 min-h-screen pb-2">
      <Navbar />
      <div className="mx-7 sm:mx-14 xl:mx-24">
        <CoverService
          heading1="Portfolio"
          heading2="Our Work Performs as it sees"
          body="We create beautiful, interesting, and responsive web
           and mobile applications"
          image={CoverImage}
          ButtonLabel1="Contact Us"
          path1 = '/ContactUs'
          display="hide"
        />

        <div className="py-20 text-white">
          <ul className="flex text-[0.7rem] justify-center border border-white rounded-full m-auto max-w-[19.2rem] sm:m-0  sm:max-w-[34rem] md:max-w-[41.7rem] sm:text-sm md:text-base">
          <li
              className={`py-3 px-2 cursor-pointer rounded-s-full sm:py-3 sm:px-7 md:py-5 md:px-10 ${tab === 1 ? "bg-blue-600" : "hover:bg-blue-500"}`}
              onClick={() => toggleTab(1)}
            >
              Web Dev
            </li>
            <li className={`py-3 px-2 cursor-pointer sm:py-3 sm:px-7  md:py-5 md:px-10 ${tab === 2 ? "bg-blue-600" : "hover:bg-blue-500"}`} 
            
            onClick={ ()=> toggleTab(2) }>
              UI/UX Design{" "}
            </li>

            <li className={`py-3 px-2 cursor-pointer sm:py-3 sm:px-7  md:py-5 md:px-10 ${tab === 3 ? "bg-blue-600" : "hover:bg-blue-500"} `} 
            onClick={ ()=> toggleTab(3) }>App Dev</li>
            <li className={`py-3 px-2 cursor-pointer rounded-e-full flex-1 sm:py-3 sm:px-7 md:py-5 md:px-10 ${tab === 4 ? "bg-blue-600" : "hover:bg-blue-500"}`}
            
            onClick={ ()=> toggleTab(4) }>
              DevOps Solutions
            </li>
          </ul>
        </div>

        <div className=" pb-20">
            
            <div className="space-y-10">
            <h3 className="text-[1.8rem] font-bold text-white">We <span className="text-blue-500">Construct</span> Ideas</h3>
            
            <button className="bg-blue-500 text-xs text-white py-2 px-10 rounded-full sm:text-base hover:bg-blue-700" onClick={() =>{handleClick('/ContactUs')}}>Lets Talk About Your Project</button>
            </div>
        </div>

        <div className={tab === 1 ? "flex gap-x-10 justify-evenly":"hidden"}>
          <div className="space-y-20 mb-20 sm:mb-0">
            <img src={WebImage1} alt="Web1" className='max-w-[36rem] w-full' />
            <img src={WebImage2} alt="Web2" className='max-w-[36rem] w-full' />
          </div>
          <div className="space-y-20">
            <img src={WebImage3} alt="Web3" className='max-w-[36rem] w-full' />
            <img src={WebImage4} alt="Web4" className='max-w-[36rem] w-full'/>
          </div>
        </div>

        <div className={tab === 2 ? "flex gap-x-10 justify-evenly":"hidden"}>
          <div className="space-y-20 ">
            <img src={AppImage1} alt="App1" className='max-w-[36rem] w-full' />
            <img src={AppImage2} alt="App2" className='max-w-[36rem] w-full' />
          </div>

          <div className="space-y-20">
            <img src={AppImage3} alt="App3" className='max-w-[36rem] w-full'/>
            <img src={AppImage4} alt="App4" className='max-w-[36rem] w-full'/>
          </div>
        </div>

        <div className={tab === 3 ? "flex gap-x-10 justify-evenly":"hidden"}>
          <div className="space-y-20">
            <img src={UxImage1} alt="Ux1" className='max-w-[36rem] w-full'/>
            <img src={UxImage2} alt="Ux2" className='max-w-[36rem] w-full'/>
          </div>

          <div className="space-y-20">
            <img src={UxImage3} alt="Ux3" className='max-w-[36rem] w-full'/>
            <img src={UxImage4} alt="Ux4" className='max-w-[36rem] w-full'/>
          </div>
        </div>

        <div className={tab === 4 ? "flex gap-x-10 justify-evenly":"hidden"}>
          <div className="space-y-20">
            <img src={DevOpsImage1} alt="DevOps1" className='max-w-[36rem] w-full'/>
            <img src={DevOpsImage2} alt="DevOps2" className='max-w-[36rem] w-full'/>
          </div>

          <div className="space-y-20">
            <img src={DevOpsImage3} alt="DevOps3" className='max-w-[36rem] w-full'/>
            <img src={DevOpsImage4} alt="DevOps4" className='max-w-[36rem] w-full'/>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
