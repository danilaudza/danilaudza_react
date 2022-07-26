import React from 'react'
import imagi from '../assets/img/banner.webp'


const Hero = () => {
  return (
    <section id='home' className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'>
        <div className='relative container mx-auto h-full z-10'>
          <div className="flex items-center h-full pt-8">
            <div className="flex-1 flex flex-col items-center lg:items-start">
              <p className='text-lg text-accent text-md mb-[22px]'>Hey I'm Dani Laudza</p>
              <h1 className='text-black text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold tracking-tighter'>I do Design, Website <br/> and Videograpy</h1>
              <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>scroll down and have a look</p>
              <a href="/links" className="px-5 py-2.5 relative rounded group font-medium text-white inline-block">
                <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                <span className="relative">My Links</span>
              </a>
            </div>
            <div className="hidden lg:flex flex-1 justify-end items-end h-full">
              <img src={imagi} alt="" />
            </div>
          </div>
        </div>
        <div className='absolute lg:hidden top-[100px] right-[240px] opacity-30 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl'></div>
        <div className='absolute hidden lg:block top-20 left-40 opacity-50 w-72 h-72 bg-purple-300 rounded-full filter blur-3xl'></div>
        <div className='absolute hidden lg:block top-[300px] right-[240px] opacity-30 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl'></div>
    </section>
  )
}

export default Hero