
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div>
            <div className="bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center">
                
                <h1 className="text-3xl font-bold primary-color ml-4">Nu_ra</h1>
                <ul className="hidden md:flex">
                    <li className="p-5"><a href="#hero">Home</a></li>
                    <li className="p-5"><a href="#about">About</a></li>
                    <li className="p-5"><a href="#work">Work</a></li>
                    <li className="p-5"><a href="#contact">Contact</a></li>
                </ul>

                
                <div onClick={handleNav} className="block md:hidden mr-6 cursor-pointer">
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>

                
                <div className={ nav ? 'fixed h-full left-0 top-0 w-[`20`%] bg-[#202121] ease-in-out duration-500'
                            : 'fixed left-[-100%]'}>
                                <h1 className="text-3xl font-bold primary-color ml-4">Nu_ra</h1>
                                <ul className="p-8 text-2xl">
                                <li className="p-2"><a href="#hero" onClick={() => setNav(false)}>Home</a></li>
                                <li className="p-2"><a href="#about" onClick={() => setNav(false)}>About</a></li>
                                <li className="p-2"><a href="#work" onClick={() => setNav(false)}>Work</a></li>
                                <li className="p-2"><a href="#contact" onClick={() => setNav(false)}>Contact</a></li>
                                    
                                </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // Navbar.jsx
// import React, { useState } from 'react';  // Add this import
// import { Link } from 'react-router-dom';
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

// const Navbar = () => {
//   const [nav, setNav] = useState(false);

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   return (
//     <div className="fixed top-0 left-0 w-full z-50 transition-transform duration-300">
//       <div className="bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center">
//         <h1 className="text-3xl font-bold primary-color ml-4">Nu_ra</h1>

//         <ul className="hidden md:flex">
//           <li className="p-5"><Link to="/">Home</Link></li>
//           <li className="p-5"><Link to="/about">About</Link></li>
//           <li className="p-5"><Link to="/skills">Skills</Link></li>
//           <li className="p-5"><Link to="/work">Work</Link></li>
//           <li className="p-5"><Link to="/contact">Contact</Link></li>
//         </ul>

//         <div onClick={handleNav} className="block md:hidden mr-6 cursor-pointer">
//           {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
//         </div>

//         <div className={nav ? 'fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500'
//                             : 'fixed left-[-100%]'}>
//           <h1 className="text-3xl font-bold primary-color ml-4 mt-6">Nu_ra</h1>
//           <ul className="p-8 text-2xl">
//             <li className="p-2"><Link to="/" onClick={() => setNav(false)}>Home</Link></li>
//             <li className="p-2"><Link to="/about" onClick={() => setNav(false)}>About</Link></li>
//             <li className="p-2"><Link to="/skills" onClick={() => setNav(false)}>Skills</Link></li>
//             <li className="p-2"><Link to="/work" onClick={() => setNav(false)}>Work</Link></li>
//             <li className="p-2"><Link to="/contact" onClick={() => setNav(false)}>Contact</Link></li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from 'react';
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

// const Navbar = () => {
//     const [nav, setNav] = useState(false);
//     const [prevScrollY, setPrevScrollY] = useState(0);
//     const [visible, setVisible] = useState(true);
    
//     // Handle scroll event with throttling for better performance
//     const handleScroll = () => {
//         const currentScrollY = window.scrollY;
        
//         if (currentScrollY < 20) {
//             // Always show navbar at the top of the page
//             setVisible(true);
//         } else if (currentScrollY > prevScrollY) {
//             // Scrolling down - hide navbar
//             setVisible(false);
//         } else {
//             // Scrolling up - show navbar
//             setVisible(true);
//         }
        
//         setPrevScrollY(currentScrollY);
//     };

//     useEffect(() => {
//         // Add scroll event listener with throttling
//         let timeoutId;
//         const throttledScroll = () => {
//             if (timeoutId) return;
            
//             timeoutId = setTimeout(() => {
//                 handleScroll();
//                 timeoutId = null;
//             }, 100);
//         };
        
//         window.addEventListener('scroll', throttledScroll);
        
//         return () => {
//             window.removeEventListener('scroll', throttledScroll);
//             clearTimeout(timeoutId);
//         };
//     }, [prevScrollY]);

//     const handleNav = () => {
//         setNav(!nav);
//     };

//     return (
//         <div className={`fixed w-full top-0 z-50 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
//             <div className="bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center">
//                 <h1 className="text-3xl font-bold primary-color ml-4">Nu_ra</h1>
                
//                 <ul className="hidden md:flex">
//                     <li className="p-5"><a href="#hero">Home</a></li>
//                     <li className="p-5"><a href="#about">About</a></li>
//                     <li className="p-5"><a href="#work">Work</a></li>
//                     <li className="p-5"><a href="#contact">Contact</a></li>
//                 </ul>
                
//                 <div onClick={handleNav} className="block md:hidden mr-6 cursor-pointer">
//                     {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
//                 </div>
                
//                 <div className={nav ? 'fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500'
//                             : 'fixed left-[-100%]'}>
//                     <h1 className="text-3xl font-bold primary-color ml-4 mt-6">Nu_ra</h1>
//                     <ul className="p-8 text-2xl">
//                         <li className="p-2"><a href="#hero" onClick={() => setNav(false)}>Home</a></li>
//                         <li className="p-2"><a href="#about" onClick={() => setNav(false)}>About</a></li>
//                         <li className="p-2"><a href="#work" onClick={() => setNav(false)}>Work</a></li>
//                         <li className="p-2"><a href="#contact" onClick={() => setNav(false)}>Contact</a></li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;







