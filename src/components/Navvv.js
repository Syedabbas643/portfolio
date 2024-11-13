import React from 'react'
import {
    HiHome,
    HiUser,
    HiViewColumns,
    HiRectangleGroup,
    HiChatBubbleBottomCenterText,} from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import {BsFillPersonLinesFill} from "react-icons/bs"
import naukri from "../assets/naukri.png"
import { useLocation } from 'react-router-dom';
import resume from "../assets/GaMeR.pdf"

const Navvv = () => {

  const location = useLocation();

  const getClassName = (text) => {
    const { pathname } = location;
    
    if (pathname === text) {
      return 'red';
    } else {
      return 'white';
    }
  };

    const navData = [
        { name: 'home', path: '/portfolio/', icon: <HiHome color={getClassName('/portfolio/')} /> },
        { name: 'about', path: '/portfolio/about', icon: <HiUser color={getClassName('/portfolio/about')}/> },
        //{ name: 'projects', path: '/portfolio/pro', icon: <HiRectangleGroup color={getClassName('/portfolio/pro')}/> },
        { name: 'exp', path: '/portfolio/exp', icon: <HiViewColumns color={getClassName('/portfolio/exp')}/> },
        {
          name: 'contact',
          path: '/portfolio/hello',
          icon: <HiChatBubbleBottomCenterText color={getClassName('/portfolio/hello')}/>,
        },
      ];


  return (
    <div>
    <div className='flex flex-row justify-center gap-6 md:gap-20 items-center w-full h-20 px-4 bg-black bg-opacity-0 fixed'>
        <ul className=' flex flex-row bg-white bg-opacity-25 justify-center gap-6 md:gap-12 px-6 rounded-full'>
        <li className=' pt-2'><div>
          <a download={true} href={resume} target="_blank" rel="noopener noreferrer"><BsFillPersonLinesFill size={25} color='white'/>
          </a></div>
        </li>
        <li className=' pt-2'>
          <a href="https://github.com/Syedabbas643" target="_blank" rel="noopener noreferrer"><FaGithub size={25} color='white'/>
          </a>
        </li><li>
        <div className='font-mystyle rounded-full bg-black text-white  text-4xl px-6'>Syed</div></li>
        <li className=' pt-2'>
        <a href="" target="_blank" rel="noopener noreferrer"><FaLinkedin size={25} color='skyblue'/>
          </a>
        </li>
        <li className=' pt-2'>
        <a href="" target="_blank" rel="noopener noreferrer"><img className=' w-6' src={naukri} alt='naukri'/>
          </a>
        </li></ul>
    </div>
        <div className='flex justify-between text-xl fixed bottom-0 bg-white bg-opacity-10 py-4 px-5 md:flex-col md:justify-center md:gap-10 md:items-center md:rounded-full w-full z-50 md:w-16 md:right-2 md:max-w-md md:bottom-80 md:bg-opacity-30' >
            {navData.map((name)=>(
                <Link to={name.path} key={name.name}>{name.icon}</Link>
            ))}
        </div>
    </div>
    
  )
}

export default Navvv