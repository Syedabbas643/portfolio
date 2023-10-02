import React from 'react'

const Contact = () => {
  return (
    <div name="hello" className=' w-full h-screen bg-gradient-to-b from-purple-950 via-black to-black p-4 text-white'>
        <div className=' flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div>
                <p className=' text-4xl font-bold inline border-b-4 text-white'>Say hello,</p>
                <p className=' py-6'>submit to get in touch with me</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action='https://getform.io/f/b71f52ef-1cb6-4bf1-aac4-44b33a1722c1' method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type='text' name='name' placeholder='Enter your name' className=' p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <input type='text' name='email' placeholder='Enter your email' className=' p-2 my-5 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <textarea placeholder='Enter your message' name='message' rows={10} className=' p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' ></textarea>
                    <button className=' text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact