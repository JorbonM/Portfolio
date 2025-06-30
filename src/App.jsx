import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopBar from './components/navbar/Nav'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopBar/>
      <Parallax pages={3}>
        <ParallaxLayer offset={0} speed={2.5}>
          <div className="w-full h-full">
            <div class="flex items-center justify-center h-screen">
              <h1 class="text-center text-xl">Jordan Math</h1>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={2.5}>
          <div className="w-full h-full">
            <div class="flex items-center justify-center h-screen">
              <h1 class="text-center text-xl">Jordan Math</h1>
            </div>
          </div>
        </ParallaxLayer>
                <ParallaxLayer offset={2} speed={2.5}>
          <div className="w-full h-full">
            <div class="flex items-center justify-center h-screen">
              <h1 class="text-center text-xl">Jordan Math</h1>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </>
  )
}

export default App
