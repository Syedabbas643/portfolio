import React from 'react'
import hero from "../assets/hero.jpg"

const Home = () => {
  return (
    <div name="home" className=' h-screen w-full bg-gradient-to-b from-black via-black to-purple-950'>
        <div className=' max-w-screen-lg mx-auto flex flex-col items-center justify-center gap-14 h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center'>
                <h2 className=' text-4xl font-bold text-white'>Aspiring Full Stack Developer <span className='text-red-500'>|</span><span className='whitespace-nowrap'> Python Enthusiast</span><span className='text-red-500'> | </span><span className='whitespace-nowrap'>Backend Wizard</span></h2>
                <p className=' text-gray-400 py-4 max-w-md'>I am a passionate and dedicated Full Stack Developer with a strong inclination towards backend development. My journey into the world of coding began with a fascination for Python and javascript. I'm excited to bring my skills to the world of Full Stack development.</p>
            </div>
            <div>
                <img src={hero} alt='my profile' className=' md:rounded-s-full rounded-full h-52 w-52 md:w-10/12 md:h-full' />
            </div>
        </div>
    </div>
  )
}

export default Home