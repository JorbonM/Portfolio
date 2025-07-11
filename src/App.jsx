import './App.css'
import TopBar from './components/navbar/Nav'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import FrontPage from './components/FrontPage'
import IntroPage from './components/IntroPage'

function App() {

  return (
    <div className='overflow-y-hidden no-scrollbar '>
      <TopBar/>
      <Parallax pages={3}>
        <ParallaxLayer id='page1'speed={0.5}>
          <FrontPage/>
        </ParallaxLayer>
        <ParallaxLayer id='page2' offset={1} speed={0.5}>
          <IntroPage/>
        </ParallaxLayer>
        <ParallaxLayer id='page3' offset={2} speed={0.5}>
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
