import "./index.css";
import Canvas from "./canvas";
import data from "./data";
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);
  return (<>
    <div className="relative w-full h-screen">
      {/* {data[0].map((canvasdets, canvasIndex) => (
        <Canvas key={canvasIndex} details={canvasdets} />
      ))} */}
      <div className="w-full h-screen text-white">
        <nav className=" w-full flex justify-between items-center px-10 py-6 z-50">
          <div className="logo">
            <h2 className="text-white text-2xl font-bold">Thirtysixstudio</h2>
          </div>
          <div className="links">
            {["Home", "About", "Work", "Contact"].map((link, index) => (
              <a
                key={index}
                href={`#${link.toLowerCase()}`}
                className="text-white mx-4 hover:text-gray-400 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </nav>
        <div className="textcontainer px-[25%] w-full">
          <div className="text w-[40%]">
            <h3 className="text-3xl leading-[1.3] " >At Thirtysixstudio, we build immersive digital experiences for brands with a purpose.</h3>
            <p className="text-sm mt-10 font-normal">We’re a boutique production studio focused on design, motion, and creative technology, constantly reimagining what digital craft can do for present-time ads and campaigns.</p>
            <p className="text-md mt-10">Scroll</p>
          </div>
        </div>

        <div className="w-full absolute text-center mt-40">
          <h1 className="text-white text-[12rem] font-normal leading-[none] ">Thirtysixstudio</h1>
        </div>

      </div>
      
    </div>



  </>
  );
}

export default App