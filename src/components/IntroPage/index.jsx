import { useState } from 'react';
import pfpimage from '../../assets/IntroPage/pfp_website.png'
import { InView } from "react-intersection-observer";
import "./index.scss"
import python_logo from '../../assets/IntroPage/python_logo.svg'
import c_logo from '../../assets/IntroPage/c_logo.png'
import c_sharp_logo from '../../assets/IntroPage/C_Sharp_Logo.svg'
import html_logo from '../../assets/IntroPage/html_logo.svg'
import js_logo from '../../assets/IntroPage/js_logo.svg'
import css_logo from '../../assets/IntroPage/Tailwind_CSS_Logo.svg'

function RenderAnim({animState})
{
    if(!animState)
        return <></>  
    return <div className='intro-anim'>
            <Grid/> 
        </div>
}   

function Grid()
{
    const [animState, setAnimState] = useState(false);  
    return <>
            <div className="grid grid-cols-6 grid-rows-8 gap-4 relative">
                <div className="col-span-3 col-start-3 row-start-2">
                    <h1 className="text-center font-bold text-[#f0eded] text-6xl">About Me</h1>
                </div>
                <div className="row-span-3 col-start-2 row-start-2">
                    <img src={pfpimage} className='rounded-full drop-shadow-md'/>
                </div>
                <div className="col-span-3 row-span-2 col-start-3 row-start-3">
                    <p className='text-[#f0eded] text-center'>Hi 👋. I’m Jordan, a 23 year old uni student studying software development and maths.
                        I specialise in Python, Java, C, HTML + JS and CSS projects. 
                        I got into software development through my enjoyment of using technology to optimize people’s lives, and ever since then it has become a big part of my life. 
                        In my spare time I enjoy teaching STEM to kids through engaging projects, holding events for the USYD Cyber Security Society and creating video games.
                    </p>
                </div>
                <div className="col-span-3 col-start-3 row-start-5">
                    <h1 className="text-center font-bold text-[#f0eded] text-5xl">Skills</h1>
                </div>
                <div className="col-start-3 text-center row-start-6">
                    <img className="skill-logo" src={python_logo}/>
                </div>
                <div className="col-start-4 text-center row-start-6 skill-logo" >
                    <img src={c_logo}/>
                </div>
                <div className="col-start-5 text-center row-start-6">
                    <img className="skill-logo" src={c_sharp_logo}/>
                </div>
                <div className="col-start-3 text-center row-start-7">
                    <img className="skill-logo" src={html_logo}/>
                </div>
                <div className="col-start-4 text-center row-start-7">
                    <img className="skill-logo" src={css_logo}/>
                </div>
                <div className="col-start-5 text-center row-start-7">
                    <img className="skill-logo" src={js_logo}/>
                </div>
            </div>
    </>
}

const IntroPage = () =>
{
    const [animState, setAnimState] = useState(false); 

    return <>
    
    <div className="w-full">

        <InView onChange={(inView, entry) => {if (inView){console.log(inView);setAnimState(true)}}}>
            <div className='bg-[#587ba3] mx-16 my-8 absolute inset-0 opacity-50 backdrop-blur-sm rounded-lg'/>
            <RenderAnim animState={animState}/>
        </InView>
    </div>
    </> 
}

export default IntroPage
