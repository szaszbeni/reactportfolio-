import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav id='fejes'>
          <ul>
            <li id='r'>R</li>
            <li><a href="home"><b>Home</b></a></li>
            <li><a href="about">About</a></li>
            <li><a href="services">Services</a></li>
            <li><a href="blog">Blog</a></li>
            <li><a href="contact">Contact</a></li>
          </ul>
      </nav>
    </>
  )
}

export default App
