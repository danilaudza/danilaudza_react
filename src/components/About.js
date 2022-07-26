import React from 'react'
import { Link } from 'react-scroll'

import Image from '../assets/img/about.webp'

const About = () => {
  return (
    <section id='about' className='section bg-primary'>
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-24 items-center">
                <img className='object-cover h-full w-[566px] lg:mx-0 rounded-2xl shadow-xl shadow-blue-200/50' src={Image} alt="" />
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                    <div className='flex flex-col'>
                        <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>Dani Laudza</h2>
                        <p className='mb-4 text-accent'>Videographer, Developer</p>
                        <hr className='mg-8 opacity-5'/>
                        <p className='mb-8'>An ordinary man with a passion for design, videography, and programming. formally educated in the field of computer science UGM and waiting for graduation :D</p>
                    </div>
                    <Link to='contact' activeClass='active' spy={true} smooth={true} duration={500} offset={-70} className='px-5 py-2.5 relative rounded group font-medium text-white inline-block'>     
                        <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                        <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                        <span className="relative">Contact Me</span>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About