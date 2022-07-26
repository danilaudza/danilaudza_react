import React from 'react'

import Shunapic from '../assets/img/st.png'

const Shuna = () => {
  return (
    <section id='about' className='section bg-primary'>
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-24 items-center">
                <img className='object-cover h-full w-[566px] lg:mx-0 rounded-2xl shadow-xl shadow-blue-200/50' src={Shunapic} alt="" />
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                    <div className='flex flex-col'>
                        <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 relative '>Shuna</h2>
                        <p className='mb-4 text-accent'>v1.2.0</p>
                        <hr className='mg-8 opacity-5'/>
                        <p className='mb-8'>Shuna, a discord bot that I created using javascript and a free server. its main purpose as a music bot that can be used on discord. Just ask her for a date</p>
                    </div>
                    <a href='https://shuna.danilaudza.com/' className='px-5 py-2.5 relative rounded group font-medium text-white inline-block'>     
                        <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                        <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                        <span className="relative">Visit Her!</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Shuna