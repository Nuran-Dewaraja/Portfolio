import React from 'react'
import AboutImg from '../assets/aboutimage.jpg'

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>

        <div className='md:grid md:grid-cols-2 sm:py-16'>

            <div className='mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-6 md:py-0'>
                <div className='my-auto mx-6'>
                    <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                    Hi, I’m Nuran Dewaraja, a passionate software engineer dedicated to creating innovative and effective solutions. I enjoy tackling challenges, learning new skills, and delivering high-quality results. My goal is to combine creativity, knowledge, and hard work to make a positive impact in every project I take on.
                    </p>
                </div>
            </div>

            <img className='mx-auto rounded-3xl py-8 md:py-0' src={AboutImg} width={300} height={300} />
            
        </div>

    </div>
  )
}

export default About