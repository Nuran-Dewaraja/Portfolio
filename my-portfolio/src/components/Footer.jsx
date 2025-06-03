import React from 'react'

const Footer = () => {
  return (
    <div className='max-w-[1200px] sm:h-[150px] p-12 flex justify-between items-center mx-auto'>
      <span className='primary-color'>D.M.G Nuran</span>
      <div className='text-gray-600 text-right'>
        <p>|| nurandewaraja@gmail.com</p>
        <p>#webDev #softwareDev</p>
        <a 
          href='https://www.linkedin.com/in/nuran-dewaraja-1106aa325/' 
          target='_blank' 
          rel='noopener noreferrer' 
          className='text-blue-500 hover:underline'
        >
          Connect on LinkedIn
        </a>
      </div>
    </div>
  )
}

export default Footer
