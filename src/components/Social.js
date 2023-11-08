import React from 'react'
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import {BsFillPersonLinesFill} from "react-icons/bs"
import naukri from "../assets/naukri.png"
import resume from "../assets/GaMeR.pdf"

const Social = () => {
  return (
    <div className="fixed bottom-0 left-0 pl-1">
      <ul className="flex flex-col pb-1 px-2 gap-5">
        <li>
          <a download={true} href={resume} target="_blank" rel="noopener noreferrer"><BsFillPersonLinesFill size={32} color='white'/>
          </a>
        </li>
        <li>
          <a href="https://github.com/Syedabbas643" target="_blank" rel="noopener noreferrer"><FaGithub size={32} color='white'/>
          </a>
        </li>
        <li>
        <a href="https://in.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={32} color='skyblue'/>
          </a>
        </li>
        <li>
        <a href="https://www.naukri.com/" target="_blank" rel="noopener noreferrer"><img className=' w-8' src={naukri} alt='naukri'/>
          </a>
        </li>
      </ul>
      <div className="bg-gray-300 ml-5 h-12 w-1"></div>
    </div>
  )
}

export default Social