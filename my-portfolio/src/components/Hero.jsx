import React from 'react';
import profileimage from '../assets/profileimage.png';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] mx-auto py-8 bg-black' id="hero">

            <div className='col-span-1 my-auto mx-auto w-[100px] h-auto lg:w-[200px]'>
                <img src={profileimage} alt="Profile image of Nuran Dewaraja" />
            </div>

            <div className='col-span-2 px-5 my-auto'>

                <h1 className='text-white text-4xl sm:text-5xl lg:text-5xl font-extrabold'>
                    <span className='primary-color'>
                        I'm a 
                    </span> <br />
                    <TypeAnimation 
                        sequence={[
                            "Full Stack Developer",
                            1000,
                            "Java Developer",
                            1000,
                            "Android Developer",
                            1000,
                        ]}
                        wrapper='span'
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>

                <p className='text-white sm:text-lg my-6 lg:text-xl'>
                    My name is Nuran Dewaraja and I have
                </p>

                <div className='mt-8'>
                    <a 
                        href="https://drive.google.com/uc?export=download&id=17rclLcGZQxyjq2NzgcElzUihT5w2AHlH" 
                        className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white transition duration-300 hover:scale-105'>
                        Download CV
                    </a>
                    <a 
                        href="#contact" 
                        className='px-6 py-3 w-full rounded-xl border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none transition duration-300 hover:scale-105'>
                        Contact
                    </a>
                </div>

            </div>

        </div>
    );
};

export default Hero;
