import { useRef, useState , useEffect} from 'react'
import './App.css'
import TopBar from './components/navbar/Nav'
import { Parallax, ParallaxLayer} from '@react-spring/parallax'
import FrontPage from './components/FrontPage'
import IntroPage from './components/IntroPage'
import ContactPage from './components/ContactPage'
import ProjectPageExt from './components/ProjectPage/Ext/ProjectPageExt'

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
          <ProjectPageExt/>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={1}>
            <ContactPage/>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default App
