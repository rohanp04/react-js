import { useState } from 'react'


function App() {
  const [color, setColor] = useState("black");

  return (
    <div
    className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
      <div className="p-12">
      <h2 className="text-6xl text-center font-semibold justify-center text-white">This is a Background Changer Project</h2>
      </div>
      <div className="fixed flex flex-wrap justify-center  bottom-12 inset-x-0 px-12">
        <div className="flex flex-wrap gap-3 shadow-lg px-3 py-5 rounded-3xl text-white"
         style={{backgroundColor: color}}>
          <button
          onClick={() => setColor("red")}
          className="rounded-full  px-4 py-1 shadow-lg outline-0"
          style={{backgroundColor: "red"}}
          >Red</button>

          <button
          onClick={() => setColor("Yellow")}
          className="rounded-full  px-4 py-1 shadow-lg"
          style={{backgroundColor: "Yellow"}}
          >Yellow</button>

          <button
          onClick={() => setColor("Cyan")}
          className="rounded-full  px-4 py-1 shadow-lg"
          style={{backgroundColor: "Cyan"}}
          >Cyan</button>

          <button
          onClick={() => setColor("Grey")}
          className="rounded-full  px-4 py-1 shadow-lg"
          style={{backgroundColor: "Grey"}}
          >Grey</button>

          <button
          onClick={() => setColor("Green")}
          className="rounded-full  px-4 py-1 shadow-lg"
          style={{backgroundColor: "Green"}}
          >Green</button>

          <button
          onClick={() => setColor("Pink")}
          className="rounded-full  px-4 py-1 shadow-lg"
          style={{backgroundColor: "Pink"}}
          >Baby Pink</button>

        </div>
      </div>

    </div>
  )
}

export default App
