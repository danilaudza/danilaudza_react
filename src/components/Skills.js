import React from 'react'

import { skills } from '../data'

const Skills = () => {
  return (
    <section className='bg-primary py-12'>
        <div className="container mx-auto">
            <div className="flex flex-col items-center text-center">
            <h2 className='section-title before:content-Skills relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block'>
                Tools I Can Use
            </h2>
            <p className='subtitle'>
            These are some of the tools I use frequently and I'm currently exploring
            </p>
            <div className='grid grid-cols-6 gap-y-4 md:grid-flow-row'>
                {skills.map((skill, index)=>{
                    return(
                        <div className='flex items-center justify-center transform hover:scale-125 transition-all hover:duration-150 duration-700' key={index}>
                            <img src={skill.image} alt="" />
                        </div>
                    )
                })}
            </div>
            </div>

        </div>
    </section>
  )
}

export default Skills