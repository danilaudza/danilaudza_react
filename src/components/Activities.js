import React from 'react';

import fot1 from '../assets/img/photos/fot1.webp'
import fot2 from '../assets/img/photos/fot2.webp'
import fot3 from '../assets/img/photos/fot3.webp'
import video1 from '../assets/videos/video.webm'
import video2 from '../assets/videos/droneweb.webm'

const Activities = () => {

  return (
    <section id='activities' className='section bg-primary'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 asd="Hello World" className='section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block'>
            What I Can Do?
          </h2>
          <p className='subtitle'>
          Some activities that I can do and I explore
          </p>
        </div>
        <div>
          <p className='mb-5'>Being a Photographer</p>
          <div className='grid grid-cols-3 gap-4 mb-10'>
            <img src={fot1} alt="" className='shadow-xl transform hover:scale-105 transition-all hover:duration-300 duration-700'/>
            <img src={fot2} alt="" className='shadow-xl transform hover:scale-105 transition-all hover:duration-300 duration-700'/>
            <img src={fot3} alt="" className='shadow-xl transform hover:scale-105 transition-all hover:duration-300 duration-700'/>
          </div>
        </div>
        <div className='grid lg:grid-cols-2 lg:gap-4'>
          <div className='pt-5'>
            <p className='mb-5'>Being a Videographer</p>
            <div className='flex flex-col items-center'>
              <video src={video1} className='w-max lg:w-full shadow-lg' controls="controls"/>
            </div>
          </div>
          <div className='pt-5'>
            <p className='mb-5'>Being an FPV Pilot</p>
            <div className='flex flex-col items-center'>
              <video src={video2} className='w-max lg:w-full shadow-lg' controls="controls"/>
            </div>
          </div>
        </div>
        <div className='pt-5'>
            <p className='mb-5'>Latest Youtube Uploads</p>
            <div className='aspect-w-16 aspect-h-9'>
            <iframe className='shadow-lg' src="https://www.youtube-nocookie.com/embed?listType=playlist&list=UUaf0KAS17VsnxhZ9m3trSEg&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        
      </div>
    </section>
  );
};

export default Activities;
