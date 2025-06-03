import React from 'react'
import java from '../assets/java.png'
import python from '../assets/python.png'
import react from '../assets/react.png'
import kotlin from '../assets/Kotlin.png'
import sql from '../assets/sql.png'
import angular from '../assets/angular.png'
import csharp from '../assets/c-sharp.png'

const Skills = () => {
  return (
    <div className=' bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-3 
                      place-items-center md:flex md:justify-between md:items-center'>

        <h2 className='text-white text-2xl md:text-4xl font-bold m-4'>
          My<br/> Tech <br/> Stack
        </h2>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
          <img src={java} alt="" />
          <p className='mt-2'>Java</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
          <img src={python} alt="" width={100} height={100} />
          <p className='mt-8'>Python</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
          <img src={csharp} alt="" width={100} height={100} />
          <p className='mt-0'>C#</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
          <img src={kotlin} alt="" width={100} height={100} />
          <p className='mt-2'>kotlin</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
          <img src={react} alt="" width={100} height={100} />
          <p className='mt-2'>React</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
          <img src={angular} alt="" width={100} height={100} />
          <p className='mt-2'>Angular</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
          <img src={sql} alt="" width={100} height={100} />
          <p className='mt-2'>SQL</p>
        </div>


    </div>
  )
}

export default Skills