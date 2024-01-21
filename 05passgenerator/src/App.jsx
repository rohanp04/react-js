import { useCallback, useState } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setpassword] = useState("")

  const passGenerator = useCallback( () =)

  return (
    <>
      <h1 className="text-4xl text-center text-white">Password Generator</h1>
    </>
  )
}

export default App
