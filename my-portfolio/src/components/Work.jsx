import React from 'react'
import WeightTrackerApp from '../assets/weighttrackerapp.png'
import MobileAppNaita from '../assets/mobileappnaita.png'
import LMS from '../assets/lms.png'
import Chatbot from '../assets/chatbot.png'
import FinanceTracker from '../assets/financetracker.png'
import EducationManagementSystem from '../assets/educationmanagementsystem.png'
import SalesDashboard from '../assets/sales-dashboard.png'
import { motion } from 'framer-motion'


const Work = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-5' id='work'>
        <div className='pb-8'>
            <p className='text-4xl mb-3 font-bold primary-color'>Work</p>
            <p className='text-gray-400'>Check out some of my recent work</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden 
                            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                            mx-auto content-div h-[200px] bg-cover relative'>
                <img src={WeightTrackerApp} layout="fill" objectFit="cover" alt="" />
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                <span className='text-2xl font-bold text-white tracking-wider'>Weight Tracker</span>
                <div className='pt-8 text-center'>
                    <a href="https://github.com/Nuran-Dewaraja/Weight-Tracker.git">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                    </a>
                </div>
                </div>
            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden 
                            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                            mx-auto content-div h-[200px] bg-cover relative'>
                <img src={MobileAppNaita} layout="fill" objectFit="cover" alt="" />
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                <span className='text-2xl font-bold text-white tracking-wider'>Attendance Marking App</span>
                <div className='pt-8 text-center'>
                    <a href="https://github.com/Nuran-Dewaraja/Attendance-Marking-App.git">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                    </a>
                </div>
                </div>
            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden 
                            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                            mx-auto content-div h-[200px] bg-cover relative'>
                <img src={LMS} layout="fill" objectFit="cover" alt="" />
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                <span className='text-2xl font-bold text-white tracking-wider'>Learning Management System</span>
                <div className='pt-8 text-center'>
                    <a href="https://github.com/Nuran-Dewaraja/Learning-Management-System.git">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                    </a>
                </div>
                </div>
            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden 
                            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                            mx-auto content-div h-[200px] bg-cover relative'>
                <img src={Chatbot} layout="fill" objectFit="cover" alt="" />
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                <span className='text-2xl font-bold text-white tracking-wider'>🚀Chatbot</span>
                <div className='pt-8 text-center'>
                    <a href="https://github.com/Nuran-Dewaraja/Chatbot.git">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                    </a>
                </div>
                </div>
            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden 
                            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                            mx-auto content-div h-[200px] bg-cover relative'>
                <img src={FinanceTracker} layout="fill" objectFit="cover" alt="" />
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                <span className='text-2xl font-bold text-white tracking-wider'>Finance tracker</span>
                <div className='pt-8 text-center'>
                    <a href="https://github.com/Nuran-Dewaraja/Finance-Tracker.git">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                    </a>
                </div>
                </div>
            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden 
                            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                            mx-auto content-div h-[200px] bg-cover relative'>
                <img src={EducationManagementSystem} layout="fill" objectFit="cover" alt="" />
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                <span className='text-2xl font-bold text-white tracking-wider'>Education Management System</span>
                <div className='pt-8 text-center'>
                    <a href="https://github.com/Nuran-Dewaraja/Education-management-system-.git">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                    </a>
                </div>
                </div>
            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden 
                            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                            mx-auto content-div h-[200px] bg-cover relative'>
                <img src={SalesDashboard} layout="fill" objectFit="cover" alt="" />
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                <span className='text-2xl font-bold text-white tracking-wider'>Sales Dashboard</span>
                <div className='pt-8 text-center'>
                    <a href="https://github.com/Nuran-Dewaraja/Sales-Dashboard-front-end-.git">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                    </a>
                </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Work