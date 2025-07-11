import SplitText from "../../blocks/TextAnimations/SplitText/SplitText"
import Background from "./background"
import { TypeAnimation } from 'react-type-animation';
import "./index.css"
function FrontPage()
{
    return <div className="w-full">
      <Background className='absolute'/>
    <div className="grid grid-cols-5 grid-rows-4 gap-4 z-500 relative">
        <div className="col-span-5 row-start-2">
          <div className="text-center">
              <SplitText
                  text="Jordan Math"
                  className="text-8xl font-extrabold text-[#f0eded]"
                  delay={100}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  />
            </div>
        </div>
        <div className="col-span-5 row-start-3">
          <div className="text-center">
        <TypeAnimation className="text-center font-bold text-[#f0eded] text-4xl"
                        sequence={[
                          // Same substring at the start will only be typed out once, initially
                          'Software Developer',
                          1000,
                          "Graduate",
                          1000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ display: 'inline-block' }}
                        repeat={Infinity}
                      />
        </div>
        </div>
        <div className="col-span-5 row-start-5 font-semibold text-[#f0eded]">
                  <h2 className='text-center text-2xl'>Scroll down for more information about me!</h2>
        </div>
    </div> 

  </div>
}

export default FrontPage