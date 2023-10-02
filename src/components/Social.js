import React from 'react'
import {FaGithub,FaLinkedin} from 'react-icons/fa'

const Social = () => {
  return (
    <div className="fixed bottom-0 left-0 p-4">
      <ul className="flex space-x-4">
        <li className='flex flex-col gap-5'>
          <a href="https://github.com/Syedabbas643" target="_blank" rel="noopener noreferrer"><FaGithub size={30} color='white'/>
          </a>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} color='skyblue'/>
          </a>
        </li>
        {/* Add more social media icons and links here */}
      </ul>
    </div>
  )
}

export default Social