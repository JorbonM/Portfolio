import { useState } from 'react'
import './App.css'
import TopBar from './components/navbar/Nav'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import FrontPage from './components/FrontPage'
import IntroPage from './components/IntroPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='overflow-y-hidden no-scrollbar '>
      <TopBar/>
      <Parallax pages={3}>
        <ParallaxLayer offset={0} speed={1}>
          <FrontPage/>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1}>
          <IntroPage/>
        </ParallaxLayer>
                <ParallaxLayer offset={2} speed={1}>
          <div className="w-full">
            <div className="flex items-center justify-center">
              <h1 className="text-center text-xl">Jordan Math</h1>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default App
