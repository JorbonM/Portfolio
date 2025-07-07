import SplitText from "../../blocks/TextAnimations/SplitText/SplitText"
import Background from "./background"
import { TypeAnimation } from 'react-type-animation';
import "./index.css"
function FrontPage()
{
    return <div className="w-full">
    {/* <div className="grid grid-cols-6 grid-rows-7 gap-4">
        <div className="col-span-2 col-start-2 row-start-2 justify-center">
            <h1 className="text-center text-8xl font-extrabold">Jordan Math</h1>
            <h2 className="text-center text-4xl">Welcome to my website!</h2>  
        </div>
        <div className="col-span-2 col-start-2 row-start-3">
        </div>
        <div className="col-span-1 row-span-1 col-start-4 row-start-2">
          <img src={personalpfp} />
        </div>
        <div className="col-span-2 col-start-3 row-start-5">
          <p className='text-center'>Scroll down for more information about me!</p>
        </div>
        <div className="col-span-2 col-start-3 row-start-6">
          5
        </div>
    </div> */}
    <div>
      <Background />
      </div>
    <div className="grid grid-cols-5 grid-rows-4 gap-4 z-500">
        <div className="col-span-5 row-start-2">
          <div className="text-center relative">
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
        <div className="col-span-5 row-start-3 relative">
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

        {/* <h1 className="text-center text-8xl font-extrabold">Jordan Math</h1> */}
        </div>
        <div className="col-span-5 row-start-5 relative font-semibold text-[#f0eded]">
                  <h2 className='text-center'>Scroll down for more information about me!</h2>
        </div>
    </div> 

  </div>
}

export default FrontPage