import { useCallback, useState, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setpassword] = useState("")

  // userefhook
  const passref = useRef(null)

  const passGenerator = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*[]{}?/<>~";
    for (let i = 1; i <= length; i++) {
      let ch = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(ch)
    }

    setpassword(pass)
  }, [length, numberAllowed, charAllowed, setpassword])

  const copytoClipboard = useCallback(() =>{
    passref.current?.select();
    
    window.navigator.clipboard.writeText(password)
  }, [password] )

  useEffect(() => {
    passGenerator()
  }, [length, charAllowed, numberAllowed, passGenerator])
  return (

      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-5 text-amber-600 bg-gray-800">
      <h1 className="text-white text-center text-2xl my-3">Password Generator</h1>
        <div className="flex  shadow rounded-lg overflow-hidden mb-4">
          <input type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder='password'
          readOnly
          ref={passref}
          />
          <button
          className="bg-blue-800 outline-none text-white px-3 py-0.5 shrink-0"
          onClick={copytoClipboard}
          >Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range"
             min={6}
             max={60}
             value={length}
             className="cursor-pointer"
             onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
             defaultChecked = {numberAllowed} 
             id = "numberInput"
             onChange={() => {  
              setnumberAllowed((prev) => !prev);
             }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
             defaultChecked = {charAllowed} 
             id = "characterInput"
             onChange={() => {  
              setcharAllowed((prev) => !prev);
             }}
            />
            <label htmlFor="characterInput">Character</label>
          </div>
        </div>
      </div>
    


  )
}

export default App
