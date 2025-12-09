import { useState } from 'react'
import '../assets/styles/global.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Olá react</h1>
    </div>
  )
}

export default Home
