import { useState } from 'react'
import Navbar from './page/Navbar/Navbar'
import Home from './page/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
    </>
  )
}

export default App
