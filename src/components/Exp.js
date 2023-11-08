import React from 'react'
import html from "../assets/front-end/html.svg"
import css from "../assets/front-end/css.svg"
import react from "../assets/front-end/react.svg"
import tailwind from "../assets/front-end/tailwindcss.svg"
import js from "../assets/front-end/javascript.svg"
import { motion } from 'framer-motion'

import express from "../assets/back-end/express.png"
import mongodb from "../assets/back-end/mongodb.svg"
import nodejs from "../assets/back-end/nodejs.svg"

import python from "../assets/python.svg"
import studio from "../assets/android.svg"
import github from "../assets/github.svg"
import Transition from './Transition'

const Exp = () => {

    const title = {
        initial:{
          opacity :0,
          x:-80
        },
        animate:{
          opacity :1,
          x:0,
          transition :{
              duration:1
          }
        }
      }

    const frontend = [
        {
            id :1,
            src : html,
            title :"HTML",
            style :"shadow-orange-500"
        },
        {
            id :2,
            src : css,
            title :"CSS",
            style :"shadow-blue-500"
        },
        {
            id :3,
            src : js,
            title :"JS",
            style :"shadow-yellow-500"
        },
        {
            id :4,
            src : tailwind,
            title :"TAILWIND",
            style :"shadow-orange-500"
        },
        {
            id :5,
            src : react,
            title :"REACT",
            style :"shadow-blue-600"
        }
    ]
    const backend = [
        {
            id :1,
            src : nodejs,
            title :"NODEJS",
            style :"shadow-green-500"
        },
        {
            id :2,
            src : express,
            title :"EXPRESS",
            style :"shadow-slate-400"
        },
        {
            id :3,
            src : mongodb,
            title :"MONGODB",
            style :"shadow-green-800"
        },
        
    ]
    const others = [
        {
            id :1,
            src : python,
            title :"PYTHON",
            style :"shadow-yellow-500"
        },
        {
            id :2,
            src : studio,
            title :"ANDROID STUDIO",
            style :"shadow-blue-500"
        },
        {
            id :3,
            src : github,
            title :"GITHUB",
            style :"shadow-slate-400"
        },
        
    ]

  return (
    <div name="exp" className='w-full min-h-max'>
        <Transition/>
        <div className=' mx-auto flex flex-col w-full h-screen md:justify-center text-white py-28'>
            <div>
                <motion.div variants={title} initial='initial' animate='animate'>
                <p  className=' text-4xl font-bold border-b-4 border-gray-500 p-2 ml-5 inline'>Experience</p>
                </motion.div>
                <p className='py-4 ml-5'>These are the technologies I've worked with</p>
            </div>
                <p className=' text-2xl font-bold px-5 pb-5 '>Front-end</p>
                <div className=' w-full grid grid-cols-5 gap-4 text-center px-9'>
                    {frontend.map(({id, src, title , style }) =>(
                        <div key={id} className={`shadow-md hover:scale-110 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt='' className=' w-9 md:w-14 mx-auto' />
                            <p className=' text-xs mt-4'>{title}</p>
                        </div>
                    ))}
                </div>
                <p className=' text-2xl font-bold p-5 pt-8 '>Back-end</p>
                <div className=' w-full grid grid-cols-3 md:grid-cols-5 gap-4 text-center px-9'>
                    {backend.map(({id, src, title , style }) =>(
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt='' className=' w-9 md:w-14 mx-auto' />
                            <p className=' text-xs mt-4'>{title}</p>
                        </div>
                    ))}
                </div>
                <p className=' text-2xl font-bold p-5 pt-8 '>Others</p>
                <div className=' w-full grid grid-cols-3 md:grid-cols-5 gap-4 text-center px-9'>
                    {others.map(({id, src, title , style }) =>(
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt='' className=' w-9 md:w-14 mx-auto' />
                            <p className=' text-xs mt-4'>{title}</p>
                        </div>
                    ))}
                </div>
            
        </div>
    </div>
  )
}

export default Exp