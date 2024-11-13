import React from 'react'
import Transition from './Transition'
import { motion } from 'framer-motion'

const About = () => {

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
    <div name ="about" className='w-full h-screen'>
      <Transition/>
        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <motion.div variants={title} initial='initial' animate='animate' className=' pl-9'>
                <p className=' text-4xl font-bold inline border-b-4 border-gray-500 text-white'>About</p>
            </motion.div>
            <motion.div variants={button} initial='initial' animate='animate'>
            <p className='md:text-xl text-gray-400 p-9'>
              As a recent graduate with a degree in Mechanical Engineering, I bring a unique perspective to the world of IT and system support. While my academic background focused on mechanics and problem-solving, I have developed a strong interest in technology and technical support. My journey into the field of system support and IT services has been both exciting and rewarding. I thrive on the challenges of troubleshooting and resolving technical issues, viewing each as an opportunity to grow and enhance my skills. With a solid foundation in engineering principles and a growing passion for technology, I am eager to contribute to maintaining seamless IT operations and delivering reliable technical solutions. My transition from engineering concepts to IT systems is driven by a relentless desire to learn, adapt, and make a meaningful impact in the tech industry.
            </p>
            </motion.div>
        </div>
    </div>
  )
}

export default About