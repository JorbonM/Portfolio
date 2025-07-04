import SplitText from "../../blocks/TextAnimations/SplitText/SplitText"

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


    <div className="grid grid-cols-5 grid-rows-4 gap-4">
        <div className="col-span-5"></div>
        <div className="col-span-5 row-start-2">
          <div className="text-center">
              <SplitText
                  text="Jordan Math"
                  className="text-8xl font-extrabold "
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
        <p className='text-center'>Scroll down for more information about me!</p>

        {/* <h1 className="text-center text-8xl font-extrabold">Jordan Math</h1> */}
        </div>
    </div> 

  </div>
}

export default FrontPage