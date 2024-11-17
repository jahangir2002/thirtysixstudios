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
      {data[0].map((canvasdets, canvasIndex) => (
        <Canvas key={canvasIndex} details={canvasdets} />
      ))}
    </div>
    {/* <div className="relative w-full h-screen">
      {data[1].map((canvasdets, canvasIndex) => (
        <Canvas key={canvasIndex} details={canvasdets} />
      ))}
    </div>
    <div className="relative w-full h-screen">
      {data[2].map((canvasdets, canvasIndex) => (
        <Canvas key={canvasIndex} details={canvasdets} />
      ))}
    </div>
    <div className="relative w-full h-screen">
      {data[3].map((canvasdets, canvasIndex) => (
        <Canvas key={canvasIndex} details={canvasdets} />
      ))}
    </div> */}
  </>
  );
}

export default App