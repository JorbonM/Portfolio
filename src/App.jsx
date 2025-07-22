import { useRef, useState , useEffect} from 'react'
import './App.css'
import TopBar from './components/navbar/Nav'
import { Parallax, ParallaxLayer} from '@react-spring/parallax'
import FrontPage from './components/FrontPage'
import IntroPage from './components/IntroPage'

function App() {
  const [count, setCount] = useState(0)
  const parallaxRef =useRef();
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    const container = parallaxRef.current?.container?.current
    if (!container) return

    const handleScroll = () => {
      const scrollTop = container.scrollTop
      const containerHeight = container.clientHeight
      const page = Math.round(scrollTop / containerHeight)
      setCurrentPage(page)
    }
    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  })

  return (
    <div className='overflow-y-hidden no-scrollbar '>
      <TopBar currentPage={currentPage} parallaxRef={parallaxRef}/>
      <Parallax pages={4} ref={parallaxRef}>
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
        <ParallaxLayer offset={3} speed={1}>
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
