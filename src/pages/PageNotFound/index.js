import React from 'react'
import imagus from '../../assets/img/LogoComplex.svg'

const PageNotFound = () => {
  return (
    <section className='bg-white flex flex-col w-screen h-screen place-content-center items-center'>
        <a href="/" className='transform hover:scale-105 duration-300'>
            <img src={imagus} alt="" className='w-56'/>
        </a>
        <p className='font-semibold pt-5'>
            Nothing found here, Just click me to go back
        </p>
    </section>
  )
}

export default PageNotFound