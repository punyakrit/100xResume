import React from 'react'
import { Button } from './ui/button'

function Hero() {
  return (
    <div className=' text-white  py-16 relative overflow-clip'  style={{ background: 'linear-gradient(to bottom, #000, #200D42 34%, #4F21A1 65%, #A46EDB 82%)' }}>
      <div>
        <div className='md:text-7xl text-3xl text-center px-4 md:px-20 py-12 md:py-20 font-bold '>Elevate Your Resume with Our <span className='bg-gradient-to-r from-red-600 via-blue-500 to-indigo-400 inline-block text-transparent bg-clip-text'>AI-Powered Assistant</span> </div>
        <div className='md:text-2xl text-xl text-center px-4 md:px-20'>Our AI-driven resume Analyzer helps you craft a professional and compelling resume that stands out to potential employers.</div>
        <div className='flex justify-center my-4 md:my-10'>
            <Button className='bg-white text-black hover:bg-white'>Get Started</Button>
        </div>
      </div>
      <div className='absolute h-[375px] w-[750px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border-[#B48CDE]'></div>
    </div>
  )
}

export default Hero
