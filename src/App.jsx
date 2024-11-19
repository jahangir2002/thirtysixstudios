import "./index.css";
import Canvas from "./canvas";
import data from "./data";
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect, useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function App() {
  const [showCanvas, setShowCanvas] = useState(false);
  const headingRef = useRef(null);
  const growingspan = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      setShowCanvas((prevShowCanvas) => {
        if (!prevShowCanvas) {
          gsap.set(growingspan.current, {
            top: e.clientY,
            left: e.clientX,
          });

          gsap.to("body", {
            color: "#000", 
            backgroundColor: "#fd2c2a",
            duration: 1.2,
            ease: "power2.inOut",
          });

          gsap.to(footerRef.current, {
            backgroundColor: "#fd2c2a",
            duration: 1.2,
            ease: "power2.inOut"
          });

          gsap.to(growingspan.current, {
            scale: 1000,
            duration: 2,
            ease: "power2.inOut",
            onComplete: () => {
              gsap.set(growingspan.current, {
                scale: 0,
                clearProps: "all",
              });
            },
          });
        } else {
          gsap.to("body", {
            color: "#fff",
            backgroundColor: "#000",
            duration: 1.2,
            ease: "power2.inOut",
          });

          gsap.to(footerRef.current, {
            backgroundColor: "#000",
            duration: 1.2,
            ease: "power2.inOut"
          });
        }

        return !prevShowCanvas;
      });
    };

    const headingElement = headingRef.current;
    headingElement.addEventListener("click", handleClick);

    // Clean up event listener on unmount
    return () => headingElement.removeEventListener("click", handleClick);
  }, []);

  return (<>
  <span ref={growingspan} className="growing fixed top-[-20px] left-[-20px] w-5 h-5 pointer-events-none rounded-full"></span>
    <div className="relative w-full h-screen">
      {data[0].map((canvasdets, canvasIndex) => (
        <div key={canvasIndex} className={`${showCanvas ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
          <Canvas details={canvasdets} />
        </div>
      ))}
      <div className="w-full h-screen relative z-[1] ">
        <nav className=" w-full flex justify-between items-center px-10 py-6 z-50">
          <div className="logo">
            <h2 className=" text-2xl font-bold">Thirtysixstudio</h2>
          </div>
          <div className="links">
            {["Home", "About", "Work", "Contact"].map((link, index) => (
              <a
                key={index}
                href={`#${link.toLowerCase()}`}
                className=" mx-4 hover:text-gray-400 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </nav>
        <div className="textcontainer px-[17%] mt-20 w-full">
          <div className="text w-[60%]">
            <h3 className="text-3xl leading-[1.3] " >At Thirtysixstudio, we build immersive digital experiences for brands with a purpose.</h3>
            <p className="text-sm mt-10 font-normal">We're a boutique production studio focused on design, motion, and creative technology, constantly reimagining what digital craft can do for present-time ads and campaigns.</p>
            <p className="text-md mt-10">Scroll</p>
          </div>
        </div>

        <div className="w-full text-center mt-40">
          <h1 ref={headingRef} className="text-[12rem] font-normal leading-[none] cursor-pointer    transition-all">Thirtysixstudio</h1>
        </div>
      </div>
    </div>

    <div className="w-full relative  mt-[40vh]">
    {data[1].map((canvasdets, canvasIndex) => (
        <div key={canvasIndex} className={`${showCanvas ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
          <Canvas details={canvasdets} />
        </div>
      ))}
        <div className="relative z-[1] px-10 py-20">
          <h1 className="text-4xl tracking-tighter">about the brand</h1>
          <p className="text-xl leading-[1.3] w-[80%] mt-10 font-light">
            we are a team of designers, developers, and strategists who are
            passionate about creating digital experiences that are both beautiful
            and functional, we are a team of designers, developers, and
            strategists who are passionate about creating digital experiences that
            are both beautiful and functional.
          </p>
        </div>
    </div>

    <div className="w-full relative  ">
    {data[2].map((canvasdets, canvasIndex) => (
        <div key={canvasIndex} className={`${showCanvas ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
          <Canvas details={canvasdets} />
        </div>
      ))}
      <div className="relative z-[1] px-10 py-20">
        <h1 className="text-4xl tracking-tighter">our work</h1>
        <div className="grid grid-cols-2 gap-10 mt-16">
          <div className="project-card">
            <h3 className="text-2xl mb-4">Project One</h3>
            <p className="text-lg font-light">Interactive web experience for luxury brand</p>
          </div>
          <div className="project-card">
            <h3 className="text-2xl mb-4">Project Two</h3>
            <p className="text-lg font-light">Digital campaign for tech startup</p>
          </div>
          <div className="project-card">
            <h3 className="text-2xl mb-4">Project Three</h3>
            <p className="text-lg font-light">Brand identity and website redesign</p>
          </div>
          <div className="project-card">
            <h3 className="text-2xl mb-4">Project Four</h3>
            <p className="text-lg font-light">Immersive 3D product showcase</p>
          </div>
        </div>
      </div>
    </div>

    <div className="w-full relative  ">
    {data[3].map((canvasdets, canvasIndex) => (
        <div key={canvasIndex} className={`${showCanvas ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
          <Canvas details={canvasdets} />
        </div>
      ))}
      <div className="relative z-[1] px-10 py-20">
        <h1 className="text-4xl tracking-tighter">contact us</h1>
        <div className="mt-16 flex justify-between">
          <div className="w-1/2">
            <p className="text-2xl font-light mb-8">Let's create something amazing together</p>
            <div className="contact-info">
              <p className="text-xl mb-4">hello@thirtysixstudio.com</p>
              <p className="text-xl mb-4">+1 (555) 123-4567</p>
              <p className="text-xl">123 Creative Street, Design District</p>
            </div>
          </div>
          <div className="w-1/2">
            <form className="flex flex-col gap-6">
              <input type="text" placeholder="Name" className="bg-transparent border-b border-white p-2" />
              <input type="email" placeholder="Email" className="bg-transparent border-b border-white p-2" />
              <textarea placeholder="Message" className="bg-transparent border-b border-white p-2" rows="4"></textarea>
              <button className="bg-white text-black px-8 py-3 mt-4 w-fit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div ref={footerRef} className="w-full bg-black py-12 px-16">
      <div className="flex justify-between items-start max-w-7xl mx-auto">
        <div className="max-w-xs">
          <h4 className="text-3xl font-medium mb-4">Thirty Six Studio</h4>
          <p className="font-light text-gray-300">Creating innovative digital experiences and transforming brands since 2020</p>
        </div>
        
        <div className="flex gap-24">
          <div>
            <h5 className="text-lg font-medium mb-4">Navigation</h5>
            <ul className="font-light text-gray-300">
              <li className="mb-3 hover: transition-colors"><a href="#home">Home</a></li>
              <li className="mb-3 hover: transition-colors"><a href="#work">Work</a></li>
              <li className="mb-3 hover: transition-colors"><a href="#about">About</a></li>
              <li className="mb-3 hover: transition-colors"><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-lg font-medium mb-4">Social</h5>
            <ul className="font-light text-gray-300">
              <li className="mb-3 hover: transition-colors"><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li className="mb-3 hover: transition-colors"><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li className="mb-3 hover: transition-colors"><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li className="mb-3 hover: transition-colors"><a href="#" target="_blank" rel="noopener noreferrer">Behance</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-20 pt-8 border-t border-gray-800 max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <p className="font-light text-sm text-gray-400">© {new Date().getFullYear()} Thirty Six Studio. All rights reserved.</p>
          <div className="flex gap-8 text-sm font-light text-gray-400">
            <a href="#" className="hover: transition-colors">Privacy Policy</a>
            <a href="#" className="hover: transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>

   





  </>
  );
}

export default App