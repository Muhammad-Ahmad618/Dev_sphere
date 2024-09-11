import React, {useState, useEffect} from 'react'
import Logo from '../Assets/DevSphere.png'
import { IoIosMenu } from "react-icons/io";
import { VscSearch } from "react-icons/vsc";
import {Link, useLocation} from 'react-router-dom'

export default function Navbar() {
    
  const [menu , setMenu] = useState(false)
  const Location = useLocation();

  const toggleMenu = ()=>{
    
    setMenu(!menu)
   
  }

  useEffect(() => {
    if (menu) {
      // Disable scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Enable scroll
      document.body.style.overflow = 'auto';
    }
  }, [menu]);


  return (
    <div>
      <nav className='flex items-center flex-wrap justify-between px-5 sm:px-10 bg-blue-500 shadow-sm shadow-gray-700 '>
        
        <img src={Logo} alt="Sumizan Web" className='p-5 w-[10rem] lg:w-[12rem]'/>

        <ul className=' text-white font-medium  gap-x-6 xl:gap-x-10 hidden  min-[830px]:flex text-xs lg:text-sm xl:text-base'>
            <li><Link to='/' className={`px-5 py-2 rounded-full ${Location.pathname === '/' ? 'text-blue-600 bg-white' :  'hover:text-blue-600 hover:bg-white' }`}>Home</Link></li>
            <li><Link to='/About'className={`px-5 py-2 rounded-full ${Location.pathname === '/About' ? 'text-blue-600 bg-white' :  'hover:text-blue-600  hover:bg-white' }`}>About</Link></li>
            <li><Link to='/Services' className={`px-5 py-2 rounded-full ${Location.pathname === '/Services' ? 'text-blue-600 bg-white' :  'hover:text-blue-600  hover:bg-white' }`}>Service</Link></li>
            <li><Link to='/Portfolio' className={`px-5 py-2 rounded-full ${Location.pathname === '/Portfolio' ? 'text-blue-600 bg-white' :  'hover:text-blue-600  hover:bg-white' }`}>Portfolio</Link></li>
            <li><Link to='/ContactUs' className={`px-5 py-2 rounded-full ${Location.pathname === '/ContactUs' ? 'text-blue-600 bg-white' :  'hover:text-blue-600  hover:bg-white' }`}>Contact</Link></li>
        </ul>

        <div className='flex space-x-6 items-center'>
          <VscSearch className='text-white text-[1.2rem] xl:text-[1.5rem] cursor-pointer invisible min-[830px]:visible '/>
          <IoIosMenu className='text-white text-[1.4rem] sm:text-[1.6rem] cursor-pointer visible min-[830px]:invisible' onClick={toggleMenu}/> 
        </div>

        <div className={`h-screen w-[50%] bg-white fixed top-[4.8rem] right-0 text-blue-600 z-10 transform transition-transform duration-200 md:top-[6rem] min-[1170px]:hidden ${menu ? 'translate-x-0' : 'translate-x-full'}`}>
           
        <ul className='py-10 px-5 space-y-4 text-sm font-medium sm:text-base'>
            <li><Link to='/' className={` px-8 py-2 rounded-full ${Location.pathname === '/' ? 'text-white bg-blue-600' :  'hover:text-blue-600' } `}>Home</Link></li>
            <hr />
            <li><Link to='/About' className={`px-8 py-2 rounded-full ${Location.pathname === '/About' ? 'text-white bg-blue-600' :  'hover:text-blue-600' }`}>About</Link></li>
            <hr />
            <li><Link to='/Services'className={`px-8 py-2 rounded-full ${Location.pathname === '/Services' ? 'text-white bg-blue-600' :  'hover:text-blue-600' }`}>Service</Link></li>
            <hr />
            <li><Link to='/Portfolio' className={`px-8 py-2 rounded-full ${Location.pathname === '/Portfolio' ? 'text-white bg-blue-600' :  'hover:text-blue-600' }`}>Portfolio</Link></li>
            <hr />
            <li ><Link to='/ContactUs' className={`px-8 py-2 rounded-full ${Location.pathname === '/ContactUs' ? 'text-white bg-blue-600' :  'hover:text-blue-600' }`}>Contact</Link></li>
            
        </ul>

        </div>

      </nav>
    </div>
  )
}
