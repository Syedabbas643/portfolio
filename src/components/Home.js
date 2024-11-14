import React from 'react'
import hero from "../assets/avatar.png"
import { motion } from 'framer-motion'
import Transition from './Transition'

const Home = () => {

  const head = {
    initial:{
      opacity :0,
      y:50
    },
    animate:{
      opacity :1,
      y:0,
      transition :{
          duration:0.8
      }
    }
  }
  const img = {
    initial:{
      opacity :0,
    },
    animate:{
      opacity :1,
      transition :{
          delay:0.4
      }
    }
  }

  return (
    <div name="home" className=' h-screen w-full'>
      <Transition/>
        <div className=' max-w-screen-lg md:py-72 py-36 h-full px-4 md:mx-40'>
        <div className='flex flex-col justify-center'>
          <motion.h2 variants={head} initial="initial" animate="animate" className='text-4xl font-bold text-white'>Aspiring System Support Specialist <span className='text-red-500'>|</span><span className='whitespace-nowrap'> IT Service Enthusiast</span><span className='text-red-500'> | </span><span className='whitespace-nowrap'> Tech Wizard</span></motion.h2>
          <p className='text-gray-400 py-4 max-w-md'>I am a motivated fresher eager to start my career in system support and IT services. With a strong passion for technology, I am enthusiastic about learning and contributing to maintaining seamless IT operations and delivering effective technical solutions.</p>
        </div>
        </div>
        <motion.div variants={img} initial='initial' animate='animate' className='max-w-none fixed bottom-0 right-1 h-98 md:h-max'>
                <img src={hero} alt='my profile' height={1300} width={1100}></img>
                {/* <img src={hero} alt='my profile' className=' md:rounded-s-full rounded-full h-52 w-52 md:w-10/12 md:h-full' /> */}
            </motion.div>
    </div>
  )
}

export default Home