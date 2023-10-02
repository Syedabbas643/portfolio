import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import Social from './Social'
import { Link } from 'react-scroll'

const Navvv = () => {
    const [nav,setnav] = useState(false)
    const items = [
        {
            id :1,
            title : "Home",
            name : "home"
        },
        {
            id :2,
            title : "About",
            name :"about"
        },
        {
            id :3,
            title : "Projects",
            name :"projects"
        },
        {
            id :4,
            title : "Expereince",
            name :"exp"
        },
        {
            id :5,
            title : "Say hello",
            name :"hello"
        }
    ]

  return (
    <div>
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
        <div className='font-mystyle text-4xl pl-4'>Syed</div>


        <ul className='hidden md:flex'>
            {items.map(({id,title,name})=>(
                <li key={id} className='flex px-4 cursor-pointer capitalize hover:scale-105 duration-200 text-gray-400' ><Link to={name} smooth duration={500}>{title}</Link></li>
            ))}
            
        </ul>

        <div onClick={() => setnav(!nav)} className=' cursor-pointer pr-4 text-gray-500 z-10 md:hidden'>
            {nav ? <FaTimes size={25}/> : <FaBars size={25}/>}
        </div>
        {nav && (<ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black via-black to-purple-900'>
            {items.map(({id,title,name})=>(
                <li key={id} className='px-4 py-6 cursor-pointer capitalize hover:scale-105 duration-200 text-gray-400' ><Link  onClick={() => setnav(!nav)} to={name} smooth duration={500}>{title}</Link></li>
            ))}
        </ul>)}
    </div>
        {!nav && <Social/>}
    </div>
    
  )
}

export default Navvv