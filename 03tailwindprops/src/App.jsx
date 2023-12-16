import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Cards from './components/Cards'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [color, setColor] = useState("#ffff")

  return (
    <div className="w-full h-screen duration-200" 
    style={{backgroundcolor: color}}>
      <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">test</div>
    </div>
  )
}

export default App
