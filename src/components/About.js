import React from 'react'

const About = () => {
  return (
    <div name ="about" className=' w-full h-screen bg-gradient-to-b from-purple-950 via-black to-black'>
        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className=' pl-9'>
                <p className=' text-4xl font-bold inline border-b-4 border-gray-500 text-white'>About</p>
            </div>
            <p className=' md:text-xl text-gray-400 p-9'>
            As a recent graduate with a degree in Mechanical Engineering, I bring a unique perspective to the world of technology. While my formal education may have centered around the principles of mechanics, I've discovered a true passion for coding and problem-solving. My journey into the realm of web development and Python programming has been both thrilling and enlightening. I thrive on the challenges that coding presents, embracing each bug as an opportunity to learn and grow. With a strong foundation in engineering principles and an insatiable curiosity for all things tech, I am on a mission to become a proficient Full Stack Web Developer and a dedicated Pythoneer. My transition from gears and equations to code and algorithms is fueled by a relentless drive to create, innovate, and contribute to the ever-evolving digital landscape
            </p>
        </div>
    </div>
  )
}

export default About