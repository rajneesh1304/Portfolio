import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {Menu} from "lucide-react";

const Header = () => {
  const[menu, setMenu] =useState(false);
  return (
    <div className="w-full bg-white text-gray-800 md:px-16 px-10 py-5 flex items-center justify-between shadow-md ">
      <Link
        to="/"
        smooth={true}
        duration={500}
        className="ml-1 text-4xl font-extrabold text-indigo-600 md:ml-5 cursor-pointer hover:scale-120 transition"
      >
        RAJNEESH
      </Link>

      <button className='md:hidden flex' onClick={()=>setMenu(!menu)}>
        <Menu  className="size-7"/>
      </button>

      <ul className={`${menu ? 'flex flex-col items-center justify-center absolute top-16 left-0 w-full bg-white py-6 space-y-4 z-50' : 'hidden'} md:flex md:flex-row md:static md:gap-10 text-md font-medium`}>
      <li className="hover:scale-120 mr-13 md:mr-5">
          <Link to="home" smooth={true} duration={500} onClick={()=>{setMenu(false)}} className="transition transform duration-100 hover:text-indigo-500 cursor-pointer">Home</Link>
        </li>
        <li className="hover:scale-120 mr-13 md:mr-5">
          <Link to="about" smooth={true} duration={500} onClick={()=>{setMenu(false)}} className="transition transform duration-100 hover:text-indigo-500 cursor-pointer">About</Link>
        </li>
        <li className="hover:scale-120 mr-13 md:mr-5">
          <Link to="skills" smooth={true} duration={500} onClick={()=>{setMenu(false)}} className="transition transform duration-100 hover:text-indigo-500 cursor-pointer">Skills</Link>
        </li>
        <li className="hover:scale-120 mr-13 md:mr-5">
          <Link to="projects" smooth={true} duration={500} onClick={()=>{setMenu(false)}} className="transition transform duration-100 hover:text-indigo-500 cursor-pointer">Projects</Link>
        </li>
        <li className="hover:scale-120 mr-13 md:mr-5">
          <Link to="resume" smooth={true} duration={500} onClick={()=>{setMenu(false)}} className="transition transform duration-100 hover:text-indigo-500 cursor-pointer">Resume</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
