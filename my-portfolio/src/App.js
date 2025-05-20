// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
// import About from './components/About';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import Hero from './components/Hero';
// import Navbar from './components/Navbar';
// import Skills from './components/Skills';
// import Work from './components/Work';

// function App() {
//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen"> {/* Use Flexbox layout */}
//         <Navbar />  {/* Navbar remains fixed on all routes */}

//         {/* Add padding-top to the main content to prevent overlap with the fixed navbar */}
//         <div className="pt-[100px] flex-grow"> {/* Add padding top here based on navbar height */}
//           {/* Routes that render components based on URL */}
//           <Routes>
//             <Route path="/" element={<Hero />} />  {/* Home route */}
//             <Route path="/about" element={<About />} />
//             <Route path="/skills" element={<Skills />} />
//             <Route path="/work" element={<Work />} />
//             <Route path="/contact" element={<Contact />} />
//             {/* Add more routes if needed */}
//           </Routes>
//         </div>

//         <Footer />  {/* Footer stays at the bottom */}
//       </div>
//     </Router>
//   );
// }

// export default App;






import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Skills/>
      <About/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
