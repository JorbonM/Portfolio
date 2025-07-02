import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopBar from './components/navbar/Nav'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='overflow-y-hidden no-scrollbar '>
      <TopBar/>
      <Parallax pages={3}>
        <ParallaxLayer offset={0} speed={2.5} className='h-19/20'>
          <div className="w-full">

            {/* <div className="grid grid-cols-5 grid-rows-5 gap-4">
                <div className="col-span-5"></div>
                <div className="col-span-5 row-start-2">
                  <h1 className="text-center text-9xl font-extrabold">Jordan Math</h1>
                </div>
                <div className="col-start-3 row-start-3">
                  <p>Scroll down for more information about me!</p>
                </div>
            </div> */}

            <div className="grid grid-cols-5 grid-rows-5 gap-4">
                <div className="col-span-5"></div>
                <div className="col-span-5 row-start-2">
                </div>
                <div className="col-span-5 row-start-3">
                <h1 className="text-center text-9xl font-extrabold">Jordan Math</h1>
                </div>
                <div className="col-span-5 row-start-4">
                <p className='text-center'>Scroll down for more information about me!</p>
                </div>
                <div className="col-span-5 row-start-5">

                </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={2.5}>
          <div className="w-full">
            <div class="flex items-center justify-center h-screen">
              <h1 class="text-center text-xl">Jordan Math</h1>
            </div>
          </div>
        </ParallaxLayer>
                <ParallaxLayer offset={2} speed={2.5}>
          <div className="w-full">
            <div class="flex items-center justify-center h-screen">
              <h1 class="text-center text-xl">Jordan Math</h1>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default App
