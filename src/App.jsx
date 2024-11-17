import "./index.css";
import Canvas from "./canvas";
import data from "./data";

function App() {
  return (<>
    <div className="relative w-full h-screen">

    {data[0].map((canvasdets, canvasIndex) => (
      <Canvas key={canvasIndex} details={canvasdets} />
    ))}
  </div>
  </>
  );
}

export default App