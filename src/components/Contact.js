import React from 'react'
import Transition from './Transition'
import { motion } from 'framer-motion'

const Contact = () => {

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
      const button = {
        initial:{
          opacity :0,
          y:60
        },
        animate:{
          opacity :1,
          y:0,
          transition :{
              duration:1
          }
        }
      }

  return (
    <div name="hello" className=' px-10 w-full h-screen  p-4 text-white'>
        <Transition/>
        <div className=' flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div>
            <motion.div variants={title} initial='initial' animate='animate'>
                <p className=' text-4xl font-bold inline border-b-4 text-white'>Say hello,</p></motion.div>
                <p className=' py-6'>submit to get in touch with me</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action='https://getform.io/f/b71f52ef-1cb6-4bf1-aac4-44b33a1722c1' method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type='text' name='name' placeholder='Enter your name' className=' p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <input type='text' name='email' placeholder='Enter your email' className=' p-2 my-5 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <textarea placeholder='Enter your message' name='message' rows={10} className=' p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' ></textarea>
                    <motion.button  variants={button} initial='initial' animate='animate' className=' text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</motion.button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact